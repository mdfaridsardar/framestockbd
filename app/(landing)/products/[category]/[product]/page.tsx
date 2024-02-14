import { removeHyphen } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const page = ({ params }: { params: { category: string; product: any } }) => {
  const productimages = [{}, {}, {}, {}];
  return (
    <div className="py-10 container mx-auto max-w-screen-2xl">
      <div className="grid md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="space-y-4">
            <div className="wfull max-w-lg relative aspect-square bg-accent rounded-md overflow-hidden">
              <Image
                src={""}
                alt="product"
                fill
                className="rounded-md object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-4">
              {productimages?.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="w-28 relative aspect-square bg-accent rounded-md overflow-hidden">
                    <Image
                      src={""}
                      alt="product"
                      fill
                      className="rounded-md object-cover"
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
        </div>
      </div>
    </div>
  );
};

export default page;
