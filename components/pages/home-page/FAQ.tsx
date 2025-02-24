import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React from "react";
import Section from "@/components/layouts/section";
import Container from "@/components/layouts/container";
import { getHomepage } from "@/sanity/queries/homepage";
type Faq = {
  question: string;
  answer: string;
};
const FAQ = async () => {
  const { faqs } = await getHomepage();

  return (
    <Section className="bg-black">
      <Container>
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
            {faqs.ourFaqs.map((item: Faq, index: number) => {
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-highlight-green"
                >
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer} </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
