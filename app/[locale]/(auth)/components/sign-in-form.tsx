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
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { signin } from "@/actions/auth/signin";

export function SignInForm() {
  const [isPending, setIsPending] = useState(false);
  const t = useTranslations("AuthPages");
  const { toast } = useToast();

  const formSchemaSignIn = z.object({
    email: z
      .string()
      .email({ message: t("Please enter a valid email address") }),
    password: z.string().min(1, { message: t("Please enter your password") }),
  });

  const form = useForm<z.infer<typeof formSchemaSignIn>>({
    resolver: zodResolver(formSchemaSignIn),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchemaSignIn>) {
    setIsPending(true);
    const res = await signin(values);
    if (res?.error) {
      toast({
        title: t("You are not signed in"),
        description: t("Please type email and password again"),
        variant: "destructive",
      });
    }
    setIsPending(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
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
                  disabled={isPending}
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
                  {...field}
                  className="w-full"
                  type="password"
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <div className="w-full flex flex-col gap-3 items-center">
          <Button type="submit" className="w-full" disabled={isPending}>
            {t("Sign In")}
          </Button>
          <p>
            {t("Dont have an account?")}{" "}
            <Link href="/sign-up" className="font-bold">
              {t("Sign Up")}
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}
