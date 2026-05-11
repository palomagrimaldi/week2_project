import Hero from "@/components/Hero";
import Card from "@/components/Card";
import ThemeToggle from "@/components/ThemeToggle";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Fractional CFO",
    description: "Strategic financial leadership for creative businesses.",
  },
  {
    title: "FP&A and Cost Control",
    description: "Budgeting, forecasting, and expense visibility.",
  },
  {
    title: "Capital and Banking Advisory",
    description: "Support with funding strategy and banking relationships.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section>
        {services.map((service) => (
          <Card
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </section>

      <ThemeToggle />

      <ContactForm />
    </>
  );
}