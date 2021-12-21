import React from "react";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      <h1>Review {reviewId} Details for {productId}</h1>
    </div>
  );
}
