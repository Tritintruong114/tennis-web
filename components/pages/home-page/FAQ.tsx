"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React from "react";
import { faqs } from "@/data/mock.json";

const FAQ = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container">
        <div className="flex gap-12 sm:flex-row flex-col">
          <div className="text-white">
            <h2 className="font-coolvetica text-section">FaQs</h2>
            <p className="">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team or write us an email at
            </p>
            <Link
              href="mailto:info@elysiantennis.com"
              className="text-highlight-green underline"
            >
              info@elysiantennis.com
            </Link>
          </div>

          <Accordion type="single" collapsible className="w-full text-white">
            {faqs.map((item, index) => {
              return (
                <AccordionItem
                  key={index}
                  value={`item-${item.id}`}
                  className="border-highlight-green"
                >
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer} </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
