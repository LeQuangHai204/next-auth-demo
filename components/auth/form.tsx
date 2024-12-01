"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { logInSchema } from "~/schemas";
import LogInAction from "~/actions/login";

import { Form, FormControl, FormLabel, FormField, FormItem, FormMessage } from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

import CardWrapper from "~/components/auth/card";
import FormError from "~/components/state/form-error";
import FormSuccess from "~/components/state/form-success";

export default function LogInForm() {
    const form = useForm<z.infer<typeof logInSchema>>({
        resolver: zodResolver(logInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    return (
        <CardWrapper
            headerLabel="Welcome back!"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit((value: z.infer<typeof logInSchema>) => {
                        LogInAction(value);
                    })}
                    className="space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <FormControl>
                                    <Input {...field} type="email" id="email" placeholder="john.doe@example.com" />
                                </FormControl>
                                <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <FormControl>
                                    <Input {...field} type="password" id="password" placeholder="******" />
                                </FormControl>
                                <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                            </FormItem>
                        )}
                    />

                    <FormError message="Something went wrong" />
                    <FormSuccess message="Email sent successfully" />

                    <Button type="submit" className="w-full">
                        Log in
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}
