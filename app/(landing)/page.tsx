"use client";

import { Product } from "@/components/products/product";
import { Card } from "@/components/ui/card";
import { data } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Globe, Headphones, Truck } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const popularCategories = data;
  const discount = [
    {
      className: "bg-red-100",
      discount: "89",
      img: "/products/shoe.jpeg",
    },
    {
      className: "bg-green-100",
      discount: "56",
      img: "/products/shoe2.jpeg",
    },
    {
      className: "bg-yellow-100",
      discount: "29",
      img: "/products/cake.jpeg",
    },
    {
      className: "bg-blue-100",
      discount: "28",
      img: "/products/phone.jpeg",
    },
  ];
  const cards = [
    {
      title: "Online Payment",
      icon: Globe,
      img: "/images/online.png",
    },
    {
      title: "24/7 Online Support",
      icon: Headphones,
      img: "/images/support.jpeg",
    },
    {
      title: "Fast Home Delivery",
      icon: Truck,
      img: "/images/delivery.png",
    },
  ];
  return (
    <div className="">
      <div className="container mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 py-10">
          {data.map((item, i) => {
            return <Product key={i} product={item} />;
          })}
        </div>
        <div className="">
          <h1 className="py-5 text-xl md:text-2xl capitalize font-semibold border-b">
            Get Up To 200&#2547; Off
          </h1>
          <div className="grid grid-cols-none sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 w-full mx-auto">
            {discount?.map((item, i) => {
              return (
                <Card
                  key={i}
                  className={cn(
                    "bg-accent border-none shadow-md group w-full",
                    item?.className
                  )}>
                  <div className="p-5 text-2xl md:text-3xl font-medium capitalize flex justify-between">
                    <h1 className="text-lg">Save</h1>
                    <h1 className="">
                      {item?.discount}
                      &#2547;
                    </h1>
                  </div>
                  <div className="relative aspect-video w-full rounded-md overflow-hidden">
                    <Image
                      src={item?.img}
                      alt="img"
                      fill
                      className="object-cover rounded-b-md group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
        <div className="">
          <h1 className="py-5 text-xl md:text-2xl capitalize font-semibold border-b">
            popular categories
          </h1>
          <div className="grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
            {popularCategories?.map((item, i) => {
              return (
                <Card
                  key={i}
                  className="flex bg-accent border-none shadow-none">
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
        <div className="">
          <h1 className="py-5 text-xl md:text-2xl capitalize font-semibold border-b">
            Services To Help You Shop
          </h1>
          <div className="grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 w-full mx-auto">
            {cards?.map((item, i) => {
              return (
                <Card
                  key={i}
                  className="bg-accent border-none shadow-md group w-full">
                  <div className="p-5 inline-flex items-center">
                    <item.icon className="w-7 h-7 text-primary mr-2" />
                    <h1 className="text-xl font-medium capitalize">
                      {item?.title}
                    </h1>
                  </div>
                  <div className="relative aspect-video w-full rounded-md overflow-hidden">
                    <Image
                      src={item?.img}
                      alt="img"
                      fill
                      className="object-cover rounded-b-md group-hover:scale-110 transition-all duration-300"
                    />
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
