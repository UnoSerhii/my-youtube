"use client";

import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import { useRouter } from "next/navigation";

interface CategoriesSectionProps {
  categoryId?: string;
}

import React, { Suspense } from "react";
import FilterCarousel from "@/components/filter-carousel";

const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <Suspense fallback={<CategoriesSkeleton />}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSkeleton = () => <FilterCarousel isLoading onSelect={() => {}} data={[]} />;

const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
  const router = useRouter();
  const [categories] = trpc.categories.getMany.useSuspenseQuery();

  const data = categories.map((category) => ({ value: category.id, label: category.name }));

  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);

    if (value) {
      url.searchParams.set("categoryId", value);
    } else {
      url.searchParams.delete("categoryId");
    }

    router.push(url.toString());

    // window.history.pushState({}, "", url);
  };

  return <FilterCarousel onSelect={onSelect} value={categoryId} data={data} />;
};

export default CategoriesSection;
