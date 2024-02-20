"use client";
import React, { Fragment } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

export const RamadanCalender = () => {
  const data = [
    {
      type: "রহমতের ১০ দিন",
      days: [
        {
          ramadan: "০১",
          date: "১২ মার্চ",
          day: "মঙ্গলবার",
          start: "০৪:৫০",
          end: "০৬:০৯",
        },
        {
          ramadan: "০২",
          date: "১৩ মার্চ",
          day: "বুধবার",
          start: "০৪:৪৯",
          end: "০৬:১০",
        },
        {
          ramadan: "০৩",
          date: "১৪ মার্চ",
          day: "বৃহস্পতিবার",
          start: "০৪:৪৮",
          end: "০৬:১০",
        },
        {
          ramadan: "০৪",
          date: "১৫ মার্চ",
          day: "শুক্রবার",
          start: "০৪:৪৭",
          end: "০৬:১০",
        },
        {
          ramadan: "০৫",
          date: "১৬ মার্চ",
          day: "শনিবার",
          start: "০৪:৪৬",
          end: "০৬:১১",
        },
        {
          ramadan: "০৬",
          date: "১৭ মার্চ",
          day: "রবিবার",
          start: "০৪:৪৫",
          end: "০৬:১১",
        },
        {
          ramadan: "০৭",
          date: "১৮ মার্চ",
          day: "সোমবার",
          start: "০৪:৪৪",
          end: "০৬:১২",
        },
        {
          ramadan: "০৮",
          date: "১৯ মার্চ",
          day: "মঙ্গলবার",
          start: "০৪:৪৩",
          end: "০৬:১২",
        },
        {
          ramadan: "০৯",
          date: "২০ মার্চ",
          day: "বুধবার",
          start: "০৪:৪২",
          end: "০৬:১২",
        },
        {
          ramadan: "১০",
          date: "২১ মার্চ",
          day: "বৃহস্পতিবার",
          start: "০৪:৪১",
          end: "০৬:১৩",
        },
      ],
    },
    {
      type: "মাগফিরাতের ১০ দিন",
      days: [
        {
          ramadan: "১১",
          date: "২২ মার্চ",
          day: "শুক্রবার",
          start: "০৪:৪০",
          end: "০৬:১৩",
        },
        {
          ramadan: "১২",
          date: "২৩ মার্চ",
          day: "শনিবার",
          start: "০৪:৩৯",
          end: "০৬:১৪",
        },
        {
          ramadan: "১৩",
          date: "২৪ মার্চ",
          day: "রবিবার",
          start: "০৪:৩৮",
          end: "০৬:১৪",
        },
        {
          ramadan: "১৪",
          date: "২৫ মার্চ",
          day: "সোমবার",
          start: "০৪:৩৭",
          end: "০৬:১৪",
        },
        {
          ramadan: "১৫",
          date: "২৬ মার্চ",
          day: "মঙ্গলবার",
          start: "০৪:৩৬",
          end: "০৬:১৫",
        },
        {
          ramadan: "১৬",
          date: "২৭ মার্চ",
          day: "বুধবার",
          start: "০৪:৩৫",
          end: "০৬:১৫",
        },
        {
          ramadan: "১৭",
          date: "২৮ মার্চ",
          day: "বৃহস্পতিবার",
          start: "০৪:৩৪",
          end: "০৬:১৬",
        },
        {
          ramadan: "১৮",
          date: "২৯ মার্চ",
          day: "শুক্রবার",
          start: "০৪:৩২",
          end: "০৬:১৬",
        },
        {
          ramadan: "১৯",
          date: "৩০ মার্চ",
          day: "শনিবার",
          start: "০৪:৩১",
          end: "০৬:১৭",
        },
        {
          ramadan: "২০",
          date: "৩১ মার্চ",
          day: "রবিবার",
          start: "০৪:৩০",
          end: "০৬:১৭",
        },
      ],
    },
    {
      type: "নাজাতের ১০ দিন",
      days: [
        {
          ramadan: "২১",
          date: "০১ এপ্রিল",
          day: "সোমবার",
          start: "০৪:২৯",
          end: "০৬:১৮",
        },
        {
          ramadan: "২২",
          date: "০২ এপ্রিল",
          day: "মঙ্গলবার",
          start: "০৪:২৮",
          end: "০৬:১৮",
        },
        {
          ramadan: "২৩",
          date: "০৩ এপ্রিল",
          day: "বুধবার",
          start: "০৪:২৭",
          end: "০৬:১৯",
        },
        {
          ramadan: "২৪",
          date: "০৪ এপ্রিল",
          day: "বৃহস্পতিবার",
          start: "০৪:২৬",
          end: "০৬:১৯",
        },
        {
          ramadan: "২৫",
          date: "০৫ এপ্রিল",
          day: "শুক্রবার",
          start: "০৪:২৫",
          end: "০৬:২০",
        },
        {
          ramadan: "২৬",
          date: "০৬ এপ্রিল",
          day: "শনিবার",
          start: "০৪:২৪",
          end: "০৬:২০",
        },
        {
          ramadan: "২৭",
          date: "০৭ এপ্রিল",
          day: "রবিবার",
          start: "০৪:২৩",
          end: "০৬:২১",
        },
        {
          ramadan: "২৮",
          date: "০৮ এপ্রিল",
          day: "সোমবার",
          start: "০৪:২২",
          end: "০৬:২১",
        },
        {
          ramadan: "২৯",
          date: "০৯ এপ্রিল",
          day: "মঙ্গলবার",
          start: "০৪:২১",
          end: "০৬:২২",
        },
        {
          ramadan: "৩০",
          date: "১০ এপ্রিল",
          day: "বুধবার",
          start: "০৪:২০",
          end: "০৬:২২",
        },
      ],
    },
  ];

  return (
    <div className="">
      <h1 className="text-primary font-semibold text-3xl py-5 text-center">
        রমজান ক্যালেন্ডার ২০২৪, হিজরি ১৪৪৫
      </h1>
      <div className="w-full grid xl:grid-cols-3 gap-5 py-5">
        {data?.map((item, i) => {
          return (
            <Card
              key={i}
              className="overflow-hidden mx-auto w-full max-w-screen-sm">
              <h1 className="text-primary font-semibold text-2xl border-b py-5 text-center">
                {item?.type}
              </h1>
              <Table className="xl:text-xs">
                <TableHeader>
                  <TableRow className="font-medium bg-accent">
                    <TableCell className="min-w-5">রমজান</TableCell>
                    <TableCell className="min-w-10 text-center">
                      তারিখ
                    </TableCell>
                    <TableCell className="min-w-20 text-center">দিন</TableCell>
                    <TableCell className="min-w-8 text-center">সেহরি</TableCell>
                    <TableCell className="min-w-8 text-center">ইফতার</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data[i].days.map((val: any, id: number) => {
                    return (
                      <TableRow key={id}>
                        <TableCell className="xl:p-2 min-w-5 h-full flex items-center justify-center">
                          {val?.ramadan}
                        </TableCell>
                        <TableCell className="xl:p-2 min-w-10 text-center">
                          {val?.date}
                        </TableCell>
                        <TableCell className="xl:p-2 min-w-20 text-center">
                          {val?.day}
                        </TableCell>
                        <TableCell className="xl:p-2 min-w-8 text-center">
                          {val?.start}
                        </TableCell>
                        <TableCell className="xl:p-2 min-w-8 text-center">
                          {val?.end}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
