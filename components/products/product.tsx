"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { data } from "@/lib/data";
import { useRouter } from "next/navigation";
import { addHyphen } from "@/lib/utils";
import Link from "next/link";
import useUi from "@/lib/hooks/useUi";

export const Product = ({ product }: any) => {
  const router = useRouter();
  const { setProductView } = useUi();

  useEffect(() => {
    setProductView(null);
  }, [product]);

  return (
    <Link
      href={`/shop/${addHyphen(product?.category)}/${addHyphen(
        product?.title
      )}`}
      onClick={() => setProductView(product)}>
      <Card className="border-none shadow-md w-full max-w-96 sm:max-w-none mx-auto space-y-2 pb-5 group">
        <div className="relative aspect-square bg-accent rounded-md overflow-hidden">
          <Image
            src={product?.productimages[0]?.img || "/"}
            alt="product"
            fill
            className="rounded-md object-cover group-hover:scale-110 transition-all duration-500"
          />
          <p className="text-right text-primary absolute right-0 bottom-0 p-2 rounded-tl-md bg-accent/80 font-medium transition-all duration-500 md:group-hover:translate-x-full">
            {product?.price.toLocaleString()}.00 &#2547;
          </p>
        </div>
        <div className="space-y-2 px-5">
          <div className="font-semibold text-lg grid relative">
            <h1 className="line-clamp-1 w-full">{product?.title}</h1>
          </div>
          <p className="text-sm font-medium text-muted-foreground line-clamp-2">
            {product?.subtitle}
          </p>
          <Button
            size={"sm"}
            onClick={() => {
              router.push(
                `/shop/${addHyphen(product?.category)}/${addHyphen(
                  product?.title
                )}`
              );
            }}>
            View Details
          </Button>
        </div>
      </Card>
    </Link>
  );
};
