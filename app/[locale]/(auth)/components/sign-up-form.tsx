"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast, useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { useFormSchemaValidations } from "@/hooks/use-form-schema";

export function SignUpForm() {
  const { formSchemaSignUp } = useFormSchemaValidations();
  const t = useTranslations("AuthPages");
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchemaSignUp>>({
    resolver: zodResolver(formSchemaSignUp),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchemaSignUp>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast({
      title: "Logged successfully",
      description: "You are now logged in.",
      variant: "success",
    });
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("Full name")}</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} className="w-full" />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@example.com"
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("Password")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("Must have at least 8 characters")}
                  {...field}
                  className="w-full"
                  type="password"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <div className="w-full flex flex-col gap-3 items-center">
          <Button type="submit" className="w-full">
            {t("Sign Up")}
          </Button>
          <p>
            {t("Already have an account?")}{" "}
            <Link href="/sign-in" className="font-bold">
              {t("Sign In")}
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}
