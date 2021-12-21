import React from "react";
import { useRouter } from "next/router";

export default function DocsPage() {
  const router = useRouter();
  const { params = []} = router.query;
  console.log(params);
  if (params.length === 2) {
    return <h1>Viewing docs for{params[0]} and concept {params[1]}</h1>;
  } else if(params.length === 1) {
    return <h1>Viewing docs for{params[0]}</h1>;
  }
  return (
    <div>
      <h1>Docs home page</h1>
    </div>
  );
}
