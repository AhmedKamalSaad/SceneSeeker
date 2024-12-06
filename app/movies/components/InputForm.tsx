"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function InputForm() {
  const searchParams = useSearchParams();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: searchParams.get("query")?.toString() || '',
    },
  });

  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();
  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.username) {
      params.set("query", data.username.toString());
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full text-white">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Search for movies</FormLabel>
              <FormControl>
                <Input placeholder="Search....." {...field} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="my-3">Submit</Button>
      </form>
    </Form>
  );
}
