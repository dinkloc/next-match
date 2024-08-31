import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="text-3xl">
      <h1>This will be the members page</h1>
      <Link href="/">Go back home</Link>
    </div>
  );
}
