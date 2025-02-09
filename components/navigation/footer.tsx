"use client";

import { Logo } from "@/components/navigation/logo";
import { siteName } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { BsFacebook, BsTiktok } from "react-icons/bs";

export const contact = [
  {
    icon: Mail,
    label: "framestockbd@gmail.com",
    link: "mailto:framestockbd@gmail.com",
  },
  {
    icon: Phone,
    label: "+8801645469055",
    link: "tel:+8801645469055",
  },
  {
    icon: BsTiktok,
    label: "framestockbd",
    link: "https://www.tiktok.com/@framestockbd",
  },
  {
    icon: BsFacebook,
    label: "Framestockbd",
    link: "https://www.facebook.com/framestockbd",
  },
];

const Footer = () => {
  return (
    <>
      <div className="container w-full max-w-screen-2xl pt-5">
        <div className="flex flex-col md:flex-row flex-wrap gap-5 lg:gap-10">
          <div className="w-full p-5 space-y-5">
            <div>
              <Logo />
            </div>

            <div className="flex justify-between flex-col md:flex-row gap-10">
              <p className="text-sm text-inherit/80">
                Tired of juggling disjointed apps? Neucylde cures business
                software headaches. This open platform elegantly integrates CRM,
                eCommerce, accounting, inventory, POS, project
                management—simplifying operations on one seamless system. <br />{" "}
                <br />
                Neucylde eliminates the chaos of switching between disconnected
                programs as everything works together beautifully in an
                incredibly easy-to-use integrated platform that says goodbye to
                software frustrations and provides the simplicity and automation
                needed to help your business succeed.
              </p>

              <div className="w-full max-w-sm space-y-5">
                <h1 className="text-primary text-lg capitalize">Contact Us</h1>
                <div className="flex flex-col gap-5">
                  {contact?.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="text-inherit/80 hover:text-inherit cursor-pointer text-sm">
                        <Link
                          href={item?.link}
                          target="_blank"
                          className="hover:text-primary inline-flex">
                          <item.icon className="w-4 h-4 mr-2 mt-1" />
                          <p className="underline underline-offset-4">
                            {item?.label}
                          </p>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container max-w-screen-2xl mx-auto w-full py-5">
          <p className="text-inherit text-sm">
            All rights reserved by{" "}
            <Link href="/" className="text-primary">
              &copy; {siteName("upp")}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
