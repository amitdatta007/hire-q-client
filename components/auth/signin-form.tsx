"use client"

import * as z from "zod";
import CardWrapper from "./card-wrapper";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState, useTransition } from "react";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { SigninSchema } from "@/schemas";
import { signin } from "@/actions/authActions";
import { useSearchParams } from 'next/navigation'
// import { signInWithEmailPassword } from "@/lib/actions/authActions";

export type SigninInputType = z.infer<typeof SigninSchema>;

const SigninForm = () => {
    const [success, setSuccess] = useState<string | undefined>("")
    const [error, setError] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition()

    const searchParams = useSearchParams()

    const msg = searchParams.get('msg');

    useEffect(() => {
        setSuccess(msg as string)
    }, [msg])

    const form = useForm<SigninInputType>({
        resolver: zodResolver(SigninSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const login: SubmitHandler<SigninInputType> = async (data) => {
        startTransition(() => {
            signin(data)
                .then((data) => {
                    setError(data?.error)
                    setSuccess(data?.success)
                })
        })
    }

    return (
        <CardWrapper
            authTitle="Sign In."
            authSubtitle="Don't Have an Account?"
            backBtnTitle="Register"
            backBtnHref="/register"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(login)}>
                    <div className='space-y-3'>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-muted-foreground'>Email Address</FormLabel>
                                    <FormControl>
                                        <Input {...field}
                                            disabled={isPending}
                                            placeholder='Enter Your Email Address!' type='text'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-muted-foreground'>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field}
                                            disabled={isPending}
                                            placeholder='Enter Your Password!' type='password'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button className='w-full mt-4' size='lg' type='submit' disabled={isPending}>Sign in</Button>
                </form>
            </Form>
        </CardWrapper>
    );
};

export default SigninForm;