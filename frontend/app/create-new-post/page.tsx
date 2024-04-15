"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NewPost() {
  const formSchema = z.object({
    title: z
      .string()
      .min(5, { message: "Title is too short!" })
      .max(50, { message: "Title too long!" }),
    post: z
      .string()
      .min(1, { message: "The post text is not long enough!" })
      .max(10000000, { message: "It is too long!" }),
    category: z
      .string()
      .min(1, { message: "The category text is not long enough!" })
      .max(12, { message: "It is too long!" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: { title: "", post: "", category: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="max-w-5xl mx-auto px-8 text-gray-400">
      <h2 className="text-orange-600 font-bold tracking-wide mt-8 mb-4">
        Create A New Hackk Post
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormDescription className="text-white">
                  This is the title of your post
                </FormDescription>
                <FormControl>
                  <Input placeholder="e.g My First Hackk post..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormDescription className="text-white">
                  This is the category of your post
                </FormDescription>
                <FormControl>
                  <Input placeholder="e.g Python..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="post"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormDescription className="text-white">
                  This is your post
                </FormDescription>
                <FormControl>
                  <Textarea
                    placeholder="Type your post here."
                    className="min-h-72"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-orange-600 w-1/2 hover:bg-orange-700"
          >
            Publish Post
          </Button>
        </form>
      </Form>
    </div>
  );
}
