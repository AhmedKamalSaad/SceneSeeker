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
import { useEffect } from "react";

const FormSchema = z.object({
  search: z.string().min(1, {
    message: "Search text required.",
  }),
});

export function InputForm() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search: searchParams.get("query")?.toString() || "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.search) {
      params.set("query", data.search.toString());
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  }
  useEffect(() => {
    replace("/movies");
    form.reset({ search: "" });
  }, [form, replace]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full text-white"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Search for movies</FormLabel>
              <FormControl>
                <Input
                  placeholder="Search....."
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="my-3 rounded-full bg-red-800 hover:bg-red-900">
          Submit
        </Button>
      </form>
    </Form>
  );
}
