import Hero from "@/components/Hero";
import Card from "@/components/Card";
import ThemeToggle from "@/components/ThemeToggle";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />

      <section>
        <Card
          title="Fractional CFO Services"
          description="Strategic financial leadership for entertainment and creative companies."
        />

        <Card
          title="FP&A and Cost Control"
          description="Budgeting, forecasting, and cost management solutions."
        />

        <Card
          title="Capital and Banking Advisory"
          description="Support with financing strategy and banking relationships."
        />
      </section>

      <ThemeToggle />

      <ContactForm />
    </>
  );
}