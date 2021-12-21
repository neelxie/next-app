import React from "react";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <div>
      <h1>Product Details for {productId}</h1>
    </div>
  );
}
