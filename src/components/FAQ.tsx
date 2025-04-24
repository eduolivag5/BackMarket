import { Accordion, AccordionItem } from "@heroui/react";
import { faqList } from "../data";

  
export function FAQ() {
    return (
        <Accordion className="w-full">
            {faqList.map((question) => 
                <AccordionItem className="text-sm leading-relaxed" key={question.question} title={question.question}>
                    {question.answer}
                </AccordionItem>
            )}            
        </Accordion>
    )
}
  