"use client";

import { Button } from "@/components/ui/button";
import useUi from "@/lib/hooks/useUi";
import { removeHyphen } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const page = ({ params }: { params: { category: string; product: any } }) => {
  const { productView } = useUi();
  const pathname = usePathname();
  const [url, setUrl] = useState<null | string>(null);

  useEffect(() => {
    // Check if window is defined (client side)
    if (typeof window !== "undefined") {
      // Create a URL object with the current URL
      const url = new URL(window.location.href);
      setUrl(url?.origin);
    }
  }, []);

  return (
    <div className="py-10 container mx-auto max-w-screen-2xl">
      <div className="grid md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="space-y-4">
            <div className="wfull max-w-lg relative aspect-square bg-accent rounded-md overflow-hidden">
              <Image
                src={productView?.productimages[0].img || "/"}
                alt="product"
                fill
                className="rounded-md object-cover"
                priority
                sizes={"1000"}
              />
            </div>
            <div className="flex flex-wrap gap-4">
              {productView?.productimages?.map((item: any, i: number) => {
                return (
                  <div
                    key={i}
                    className="cursor-pointer w-28 relative aspect-square bg-accent rounded-md overflow-hidden">
                    <Image
                      src={item?.img || "/"}
                      alt={productView?.title}
                      fill
                      className="rounded-md object-cover"
                      priority
                      sizes={"100"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="space-y-2 py-5 border-b">
            <h1 className="text-2xl font-semibold break-all capitalize">
              {removeHyphen(params?.product)}
            </h1>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              dolores dignissimos similique sequi magnam quae, illum quis?
              Incidunt, natus sequi!
            </p>
          </div>
          <div className="space-y-2 py-5 border-b">
            <h1>Price: {productView?.price}.00 &#2547;</h1>
          </div>
          <div className="space-y-2 py-5 border-b">
            <a
              target="_blank"
              href={`https://m.me/221402801059175?text=${url + pathname}`}>
              <Button>Buy Now</Button>
            </a>
          </div>
          <div className="space-y-2 py-5 border-b"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
