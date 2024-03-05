"use client"

import * as z from 'zod';
import CardWrapper from "./card-wrapper";
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from "react";
import { Form, FormItem, FormControl, FormField, FormLabel, FormMessage } from '../ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { RadioGroupItem, RadioGroup } from '../ui/radio-group';
import { Building2, CircleUserRound } from 'lucide-react';
import { RegisterSchema } from '@/schemas';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';
import { register } from '@/actions/authActions';
import { useRouter } from 'next/navigation';



export type RegisterInputType = z.infer<typeof RegisterSchema>

const RegisterForm = () => {
    const [success, setSuccess] = useState<string | undefined>("")
    const [error, setError] = useState<string | undefined>("")
    const [isPending, startTransition] = useTransition();

    const form = useForm<RegisterInputType>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            role: "candidate",
            password: "",
            confirmPassword: "",
        }
    });

    const router = useRouter();

    const RegisterUser: SubmitHandler<RegisterInputType> = async (data) => {
        startTransition(() => {
            register(data)
                .then((data) => {
                    if (data?.success) {
                        form.reset();
                        router.push(`/signin?msg=${data?.success}`)
                    }
                    setError(data?.error)
                    setSuccess(data?.success)
                })
        })
    }



    return (
        <CardWrapper
            authTitle="Create Account."
            authSubtitle="Already Have an Account?"
            backBtnTitle="Sign in"
            backBtnHref="/signin"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(RegisterUser)}>
                    <div className='space-y-3'>
                        <div className='bg-white p-3 rounded-md border border-border flex flex-col'>
                            <span className='text-center text-muted-foreground text-xs font-semibold'>CREATE ACCOUNT AS A</span>
                            <div>
                                <FormField
                                    control={form.control}
                                    name="role"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex flex-col mt-3"
                                                >

                                                    <div className='flex gap-3'>
                                                        <FormItem className='w-full'>
                                                            <FormControl className='hidden'>
                                                                <RadioGroupItem value="candidate" />
                                                            </FormControl>
                                                            <FormLabel
                                                                className={`flex gap-2 justify-center items-center rounded-md w-full h-11 px-6 font-medium  text-muted-foreground ${form.watch().role === "candidate" ? "bg-blue-950 hover:bg-blue-950/90 text-white" : "hover:bg-muted"}`}
                                                            >
                                                                <CircleUserRound className='w-6 h-6' />  Candidate
                                                            </FormLabel>
                                                        </FormItem>

                                                        <FormItem className='w-full'>
                                                            <FormControl className='hidden'>
                                                                <RadioGroupItem value="employer" />
                                                            </FormControl>
                                                            <FormLabel
                                                                className={`flex gap-2 justify-center items-center rounded-md w-full h-11 px-6 font-medium  text-muted-foreground ${form.watch().role === "employer" ? "bg-blue-950 hover:bg-blue-950/90 text-white" : "hover:bg-muted"}`}
                                                            >
                                                                <Building2 className='w-6 h-6' />  Employer
                                                            </FormLabel>
                                                        </FormItem>
                                                    </div>

                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-muted-foreground'>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field}
                                            disabled={isPending}
                                            placeholder='Enter Your Name!' type='text'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                        <FormField
                            control={form.control}
                            name='confirmPassword'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-muted-foreground'>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input {...field}
                                            disabled={isPending}
                                            placeholder='Enter Your Password Again!' type='password'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />

                    <Button className='w-full mt-4' size='lg' type='submit' disabled={isPending}>Register</Button>
                </form>
            </Form>
        </CardWrapper>
    );
};

export default RegisterForm;