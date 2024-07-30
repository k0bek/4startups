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
import { signup } from "@/actions/auth/signup";
import { useState, useTransition } from "react";

export function SignUpForm() {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("AuthPages");
  const { toast } = useToast();

  const formSchemaSignUp = z.object({
    fullName: z
      .string()
      .min(1, { message: t("Please enter your full name") })
      .max(50, { message: t("Full name cannot exceed 50 characters") })
      .regex(/^[a-zA-Z\s]*$/, {
        message: t("Full name can only contain letters and spaces"),
      }),

    email: z
      .string()
      .email({ message: t("Please enter a valid email address") })
      .max(100, { message: t("Email cannot exceed 100 characters") }),

    password: z
      .string()
      .min(8, { message: t("Password must be at least 8 characters long") })
      .max(100, { message: t("Password cannot exceed 100 characters") })
      .regex(/[a-z]/, {
        message: t("Password must contain at least one lowercase letter"),
      })
      .regex(/[A-Z]/, {
        message: t("Password must contain at least one uppercase letter"),
      })
      .regex(/[0-9]/, {
        message: t("Password must contain at least one number"),
      })
      .regex(/[@$!%*?&#]/, {
        message: t("Password must contain at least one special character"),
      }),
  });

  const form = useForm<z.infer<typeof formSchemaSignUp>>({
    resolver: zodResolver(formSchemaSignUp),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchemaSignUp>) {
    setError("");
    setSuccess("");
    startTransition(() => {
      signup(values).then((res) => {
        setError(res.error);
        setSuccess(res.success);
        if (res.success) {
          toast({
            title: res.success,
            description: res.subSuccess,
            variant: "success",
          });
        }
        if (res.error) {
          toast({
            title: res.error,
            description: res.subError,
            variant: "destructive",
          });
        }
      });
    });
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
                <Input
                  placeholder="John Doe"
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
                  placeholder={t("Must have at least 8 characters")}
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
