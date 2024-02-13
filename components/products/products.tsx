"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";

export const Products = () => {
  const products = [
    {
      category: "foods",
      title: "Lorem ipsum, dolor sit amet consectetur",
      price: 5000,
      img: "/products/cake.jpeg",
      subtitle:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero est perspiciatis laboriosam iure.",
    },
    {
      category: "gadgets",
      title: "Lorem, ipsum dolor",
      price: 5,
      img: "/products/headphone.jpeg",
      subtitle:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero est perspiciatis laboriosam iure.",
    },
    {
      category: "gadgets",
      title: "Lorem, ipsum dolor",
      price: 5,
      img: "/products/headphone2.jpeg",
      subtitle:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero est perspiciatis laboriosam iure.",
    },
    {
      category: "phone",
      title: "Lorem, ipsum dolor",
      price: 5,
      img: "/products/phone.jpeg",
      subtitle:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero est perspiciatis laboriosam iure.",
    },
    {
      category: "phone",
      title: "Lorem, ipsum dolor",
      price: 5,
      img: "/products/phone2.jpeg",
      subtitle:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero est perspiciatis laboriosam iure.",
    },
    {
      category: "shoes",
      title: "Lorem, ipsum dolor",
      price: 5,
      img: "/products/shoe.jpeg",
      subtitle:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero est perspiciatis laboriosam iure.",
    },
    {
      category: "shoes",
      title: "Lorem, ipsum dolor",
      price: 5,
      img: "/products/shoe2.jpeg",
      subtitle:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero est perspiciatis laboriosam iure.",
    },
    {
      category: "watch",
      title: "Lorem, ipsum dolor",
      price: 5,
      img: "/products/watch.jpeg",
      subtitle:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero est perspiciatis laboriosam iure.",
    },
  ];
  return (
    <div className="grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 py-20">
      {products?.map((item, i) => {
        return (
          <Card
            key={i}
            className="border-none shadow-none hover:shadow-md w-full max-w-80 sm:max-w-none mx-auto space-y-2 pb-5 group">
            <div className="relative aspect-square bg-accent rounded-md overflow-hidden">
              <Heart className="absolute z-10 cursor-pointer p-1.5 rounded-full bg-accent/50 top-2 right-2 w-8 h-8 hover:text-destructive" />
              <Image
                src={item?.img}
                alt="product"
                fill
                className="rounded-md object-cover group-hover:scale-110 transition-all duration-500"
              />
              <p className="text-right absolute right-0 bottom-0 p-2 rounded-tl-md bg-accent/50 backdrop-blur backdrop-saturate-100 font-medium">
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
              <Button size={"sm"}>View Details</Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
