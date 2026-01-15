"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { categorySchema } from "@/lib/models/validation-schema";
import { createCategory } from "@/lib/api-calls";

interface NewCategoryFormProps {
  onSuccess?: () => void;
}

const NewCategoryForm = ({ onSuccess }: NewCategoryFormProps) => {
  const { toast } = useToast();

  type TFormData = z.infer<typeof categorySchema>;

  const form = useForm<TFormData>({ 
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      slug: "",
    },
  });

  const watchName = form.watch("name");

  // Auto-generate slug from name
  useEffect(() => {
    if (watchName && !form.getValues("slug")) {
      const slug = watchName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      form.setValue("slug", slug);
    }
  }, [watchName, form]);

  const onSubmit = async (input: TFormData) => {
    const { data, error, validationErrors } = await createCategory(input);

    if (data) {
      toast({
        variant: "default",
        description: "Category created successfully!",
        title: "Success"
      });
      form.reset({
        name: "",
        slug: "",
      });
      onSuccess?.();
    } else {
      console.error("Failed to Create Category", error);

      toast({
        variant: "destructive",
        title: "Error",
        description: error?.message || "Failed to create category.",
      });
    }

    if (validationErrors?.length) {
      toast({
        variant: "destructive",
        title: "Error",
        description: validationErrors[0].message
      });

      return;
    }
  };

  return (
    <div className="max-w-2xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, (error) => console.error(error))} className="form mt-5">
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Category Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter category name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="category-slug" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end my-3">
              <Button 
                type="submit"
                disabled={form.formState.isSubmitting}
                className="text-sm text-white bg-orange-600 py-2 px-6 border border-1 border-orange rounded-sm hover:bg-orange-700"
              >
                {form.formState.isSubmitting ? "Creating..." : "Create Category"}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewCategoryForm;

