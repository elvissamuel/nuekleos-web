"use client";

import { useQuery } from "@tanstack/react-query";
import { getCategories, createCategory } from "@/lib/api-calls";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import NewCategoryForm from "@/components/NewCategoryForm";
import { QUERY_KEY } from "@/lib/rbac";
import { ICategory } from "@/lib/models/models";

export default function CategoriesPage() {
  const [newCategorySheetOpen, setNewCategorySheetOpen] = useState(false);
  
  const { data: categories, isLoading, error, refetch } = useQuery({
    queryKey: [QUERY_KEY.GET_ALL_CATEGORIES],
    queryFn: async () => {
      const response = await getCategories();
      if (response.data) {
        return response.data;
      }
      throw new Error("Failed to fetch categories");
    },
  });

  if (isLoading) {
    return <div className="p-6">Loading categories...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">Error loading categories</div>;
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-600 mt-2">
            Manage blog post categories
          </p>
        </div>
        <Sheet open={newCategorySheetOpen} onOpenChange={setNewCategorySheetOpen}>
          <SheetTrigger asChild>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Plus className="mr-2 h-4 w-4" />
              New Category
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full">
            <SheetHeader>
              <SheetTitle>Create New Category</SheetTitle>
              <SheetDescription>
                Add a new category for organizing blog posts.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6">
              <NewCategoryForm onSuccess={() => {
                setNewCategorySheetOpen(false);
                refetch();
              }} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        {categories && categories.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {categories.map((category: ICategory) => (
              <div key={category.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500">Slug: {category.slug}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    Created: {new Date(category.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500">
            No categories found. Create your first category above.
          </div>
        )}
      </div>
    </div>
  );
}

