"use client";

import { Product } from "@/components/products/product";
import { data } from "@/lib/data";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto w-full max-w-screen-2xl">
      <div className="grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 py-10">
        {data.map((item, i) => {
          return <Product key={i} product={item} />;
        })}
      </div>
    </div>
  );
};

export default page;
