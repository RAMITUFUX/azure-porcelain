import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How are your porcelain pieces made?",
    answer:
      "Each piece is hand-thrown or hand-molded by our master artisans using traditional techniques. The clay is carefully prepared, shaped, decorated with underglaze, and fired at temperatures up to 1300°C to achieve the distinctive finish that Azure Porcelain is known for.",
  },
  {
    question: "Are your products dishwasher and microwave safe?",
    answer:
      "Our dinnerware collection is designed for everyday use and is dishwasher safe. However, we recommend hand washing for decorative pieces and items with gold accents. None of our products with metallic decorations should be used in the microwave.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for unused items in their original packaging. Due to the handmade nature of our pieces, slight variations in color and pattern are normal and not considered defects. Custom orders are non-refundable.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide. All international orders are carefully packaged with museum-quality materials to ensure safe delivery. Shipping times and costs vary by destination. Please note that import duties and taxes may apply.",
  },
  {
    question: "Can I request custom pieces?",
    answer:
      "Absolutely! We welcome custom commissions for special occasions, corporate gifts, or unique design requests. Please contact our atelier directly to discuss your vision, timeline, and pricing for bespoke creations.",
  },
  {
    question: "How should I care for my porcelain pieces?",
    answer:
      "For decorative items, dust regularly with a soft cloth. For functional pieces, hand washing in lukewarm water with mild soap is recommended for longevity. Avoid sudden temperature changes and store pieces with felt separators to prevent scratching.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Support
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about our products and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
