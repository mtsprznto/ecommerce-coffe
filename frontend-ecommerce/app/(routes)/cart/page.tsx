"use client";

import { useGetCategoryProduct } from "@/api/getCategoryProduct";

export default function Page() {
  const { result } = useGetCategoryProduct("cafes-de-alto-octanaje");
  console.log(result);
  return <>From page card</>;
}
