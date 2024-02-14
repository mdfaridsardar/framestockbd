"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { data } from "@/lib/data";
import { useRouter } from "next/navigation";
import { addHyphen } from "@/lib/utils";
import Link from "next/link";

export const Products = () => {
  const router = useRouter();
  const products = data;

  return (
    <div className="grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 py-20">
      {products?.map((item, i) => {
        return (
          <Link
            href={`/products/${addHyphen(item?.category)}/${addHyphen(
              item?.title
            )}`}>
            <Card
              key={i}
              className="border-none shadow-md w-full max-w-96 sm:max-w-none mx-auto space-y-2 pb-5 group">
              <div className="relative aspect-square bg-accent rounded-md overflow-hidden">
                <Image
                  src={item?.img}
                  alt="product"
                  fill
                  className="rounded-md object-cover group-hover:scale-110 transition-all duration-500"
                />
                <p className="text-right text-primary absolute right-0 bottom-0 p-2 rounded-tl-md bg-accent/80 font-medium transition-all duration-500 group-hover:translate-x-full">
                  {item?.price.toLocaleString()}.00 &#2547;
                </p>
              </div>
              <div className="space-y-2 px-5">
                <div className="font-semibold text-lg grid relative">
                  <h1 className="line-clamp-1 w-full">{item?.title}</h1>
                </div>
                <p className="text-sm font-medium text-muted-foreground line-clamp-2">
                  {item?.subtitle}
                </p>
                <Button
                  size={"sm"}
                  onClick={() => {
                    router.push(
                      `/products/${addHyphen(item?.category)}/${addHyphen(
                        item?.title
                      )}`
                    );
                  }}>
                  View Details
                </Button>
              </div>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
