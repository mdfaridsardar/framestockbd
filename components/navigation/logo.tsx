"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="relative aspect-square w-14">
        <Image src={"/images/logo.png"} alt="logo" fill sizes="500" priority />
      </div>
    </Link>
  );
};
