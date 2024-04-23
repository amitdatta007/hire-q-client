"use client"

import { MapPin, Search } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import * as z from "zod"
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { createSearchParams } from "@/utils/searchParams";

const SearchSchema = z.object({
    title: z.string().optional(),
    location: z.string().optional()
})

type SearchSchemaType = z.infer<typeof SearchSchema>;

const SearchBar = () => {
    const form = useForm<SearchSchemaType>({
        resolver: zodResolver(SearchSchema),
        defaultValues: {
            title: '',
            location: ''
        }
    });

    const router = useRouter()

    const handleSearch: SubmitHandler<SearchSchemaType> = (items) => {
        const searchParams = createSearchParams(items)
        router.push(`/find-jobs?${searchParams}`)
    }

    return (
        <Form {...form}>
            <form className="bg-background w-full p-2 flex flex-col lg:flex-row gap-3 border border-border rounded-lg" onSubmit={form.handleSubmit(handleSearch)}>
                <div className="w-full flex flex-col sm:flex-row">
                    <div className="p-4 flex gap-2 w-full">
                        <Search strokeWidth={1.5} className="text-primary" />
                        <FormField
                            control={form.control}
                            name='title'
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <input
                                            {...field}
                                            placeholder="Job tittle, Keyword..."
                                            className="focus:outline-none bg-transparent w-full"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <Separator orientation="vertical" className="hidden sm:block" />
                    <Separator className="sm:hidden" />
                    <div className="p-4 flex gap-2 w-full">
                        <MapPin strokeWidth={1.5} className="text-primary" />
                        <FormField
                            control={form.control}
                            name='location'
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <input
                                            {...field}
                                            placeholder="Your Location"
                                            className="focus:outline-none bg-transparent w-full"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <Button size='lg' className="min-h-12 h-full" type="submit">Find Job</Button>
            </form>
        </Form>
    );
};

export default SearchBar;