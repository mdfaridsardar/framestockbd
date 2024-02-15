"use client";

import { Product } from "@/components/products/product";
import { Card } from "@/components/ui/card";
import { data } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  const popularCategories = data;
  return (
    <div className="">
      <div className="container mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 py-10">
          {data.map((item, i) => {
            return <Product key={i} product={item} />;
          })}
        </div>
        <div className="">
          <h1 className="py-5 text-xl capitalize font-semibold border-b">
            popular categories
          </h1>
          <div className="grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {popularCategories?.map((item, i) => {
              return (
                <Card className="flex bg-accent border-none shadow-none">
                  <div className="relative aspect-square w-28 rounded-md">
                    <Image
                      src={item?.productimages[0]?.img}
                      alt="img"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <h1 className="text-lg font-medium capitalize">
                      {item?.category}
                    </h1>
                    <p className="font-medium text-sm text-muted-foreground">
                      {item?.qty} item avilable
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
