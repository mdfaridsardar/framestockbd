"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { data } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/navigation/logo";
import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

export const TopNav = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [iAmTooFar, setIAmTooFar] = useState(false);
  const [homeSweetHome, setHomeSweetHome] = useState(
    pathname == "/" ? true : false
  );
  const [open, setOpen] = useState<boolean>(false);

  const popularCategories = data;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > window.innerHeight - 100) {
      setIAmTooFar(true);
    } else {
      setIAmTooFar(false);
    }
  });

  useEffect(() => {
    if (pathname == "/") {
      setHomeSweetHome(true);
    } else {
      setHomeSweetHome(false);
    }
  }, [pathname]);

  const Categories = () => {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          onClick={() => {
            setOpen(true);
          }}
          className="p-2 text-base font-medium hover:text-primary data-[active]:text-primary data-[state=open]:text-primary capitalize inline-flex items-center">
          Categories{" "}
          <ChevronDown
            className={cn(
              "relative top-[1px] ml-1 h-4 w-4",
              open && "rotate-180"
            )}
            aria-hidden="true"
          />
        </PopoverTrigger>
        <PopoverContent align="end" className="w-[30rem] p-0">
          <h1 className="p-5 text-xl capitalize font-semibold border-b">
            popular categories
          </h1>
          <div className="grid grid-cols-2 gap-4 p-4">
            {popularCategories?.map((item, i) => {
              return (
                <Link href={`/shop/${item?.category}`} className="group">
                  <Card
                    key={i}
                    className="flex bg-accent border-none shadow-none">
                    <div className="relative aspect-square w-16 rounded-md">
                      <Image
                        src={item?.productimages[0]?.img}
                        alt="img"
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="p-2 space-y-2">
                      <h1 className="text-sm font-medium capitalize group-hover:text-primary">
                        {item?.category}
                      </h1>
                      <p className="font-normal text-sm text-muted-foreground">
                        {item?.qty} item avilable
                      </p>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    );
  };

  const navdata = [
    {
      title: "home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      com: <Categories />,
    },
    {
      title: "About us",
      link: "/about-us",
    },
  ];

  return (
    <div
      className={cn(
        "z-50 h-20 fixed top-0 left-0 w-full hidden lg:block",
        homeSweetHome && "fixed bg-background/0",
        (!homeSweetHome || iAmTooFar) &&
          "bg-background/70 backdrop-blur-md backdrop-saturate-150",
        !homeSweetHome && "sticky",
        homeSweetHome && !iAmTooFar && "text-background"
      )}>
      <div className="flex items-center h-full">
        <div className="container mx-auto w-full max-w-screen-2xl flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex gap-2">
            {navdata?.map((item, i) => {
              return item?.com ? (
                item?.com
              ) : (
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem key={i}>
                      <Link href={item?.link} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "inline-flex w-max items-center justify-center rounded-md p-2 text-base font-medium hover:text-primary data-[active]:text-primary data-[state=open]:text-primary capitalize"
                          )}>
                          {item?.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              );
            })}
          </div>
          <div className="hidden md:">
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
