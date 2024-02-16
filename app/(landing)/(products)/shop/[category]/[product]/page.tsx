"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import useUi from "@/lib/hooks/useUi";
import { cn, removeHyphen } from "@/lib/utils";
import { Box, Home, PhoneCall, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BsMessenger } from "react-icons/bs";

const page = ({ params }: { params: { category: string; product: any } }) => {
  const { productView } = useUi();
  const [imgBig, setimgBig] = useState<number>(0);
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

  const services = [
    {
      icon: Truck,
      label: "free delivery",
      subtitle: "Only for 1st order or 10 items buy",
    },
    {
      icon: Box,
      label: "return delivery",
      subtitle: "If product is damages",
    },
  ];

  const path = pathname.split("/");

  return (
    <div className="py-10 container mx-auto max-w-screen-2xl">
      <div className="hidden md:flex items-center gap-1 text-sm pb-5 w-full">
        <Link href={"/"}>
          <Home className="w-4 h-4 text-muted-foreground hover:text-primary" />
        </Link>{" "}
        {path.map((item, i) => {
          return (
            <div
              key={i}
              className={cn(
                "cursor-pointer text-muted-foreground font-medium",
                path.length - 1 !== i && "capitalize"
              )}>
              <span>{item}</span> {path.length - 1 !== i && "/"}
            </div>
          );
        })}
      </div>
      <div className="grid md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="space-y-4">
            <div className="w-full max-w-lg relative aspect-square bg-accent rounded-md">
              <Image
                src={productView?.productimages[imgBig].img || "/"}
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
                    onClick={() => {
                      setimgBig(i);
                    }}
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
          <div className="py-5 border-b flex flex-wrap gap-4 items-center w-full">
            <a
              target="_blank"
              href={`https://m.me/221402801059175?text=${url + pathname}`}>
              <Button>
                <BsMessenger className="mr-2" />
                Send Product
              </Button>
            </a>
            <Link href={"tel:+8801752087454"}>
              <Button>
                <PhoneCall className="mr-2 w-4 h-4" />
                +8801752087454
              </Button>
            </Link>
          </div>
          <div className="py-5 border-b flex flex-wrap gap-4">
            {services?.map((item) => {
              return (
                <Card className="p-4 space-y-1">
                  <div className="flex text-base items-center font-medium capitalize">
                    <item.icon className="w-5 h-5 text-primary mr-2" />
                    {item?.label}
                  </div>
                  <div className="flex text-muted-foreground text-sm">
                    <div className="w-5 mr-2"></div>
                    {item?.subtitle}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
