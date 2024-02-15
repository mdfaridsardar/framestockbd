"use client";

import React from "react";
import { Button } from "./ui/button";
import { BsMessenger } from "react-icons/bs";

export const Messenger = () => {
  return (
    <div className="fixed bottom-8 right-8">
      <a
        target="_blank"
        href={`https://m.me/221402801059175`}
        className="rounded-full bg-accent shadow-md flex items-center justify-center p-2 text-primary">
        <BsMessenger className="w-10 h-10 " />
      </a>
    </div>
  );
};
