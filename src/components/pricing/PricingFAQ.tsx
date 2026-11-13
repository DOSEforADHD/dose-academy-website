import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "Is DOSE Academy really free?",
      answer: "Yes. Every DOSE Academy tool is free for individual teens and for families, including SPARK Junior, homework chunking, the assignment tracker, study sessions, RSD tracking and the parent oversight dashboard. There is no trial period and no credit card required."
    },
    {
      question: "Will it stay free?",
      answer: "Our Founder and CEO, Steev Hodgson, has committed that DOSE Academy will remain free for individuals and parents for as long as he is CEO of DOSE."
    },
    {
      question: "Is there a family member limit?",
      answer: "The Family Plan includes a parent account and up to 3 teen accounts, and you can add more teens at no cost."
    },
    {
      question: "What does it cost for schools and districts?",
      answer: "We build custom packages for schools and districts, including counselor dashboards, aggregate analytics, professional development and parent engagement tools. Contact our team and we'll put together a package that fits your students."
    },
    {
      question: "Can schools try before committing?",
      answer: "Yes. Contact our education team to talk through a pilot for your school or district."
    },
    {
      question: "What happens when my teen turns 18?",
      answer: "DOSE Academy is for ages 10-17. At 18, your teen can move up to DOSE, our flagship ADHD platform for adults (getdose.app). DOSE is a paid product with transition pricing for Academy graduates: 6 months at 50% off, with all their data automatically migrated. They can also continue at young adult pricing ($7.99/month) or college student rates ($6.99/month with valid ID)."
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about pricing
          </p>
        </div>

        <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};

export default PricingFAQ;
