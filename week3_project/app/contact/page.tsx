import Hero from "@/components/Hero";
import Card from "@/components/Card";
import ThemeToggle from "@/components/ThemeToggle";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Capital and Banking Advisory",
    description:
      "Support with funding strategy and banking relationships.",
  },

  {
    title: "FP&A and Cost Control",
    description:
      "Financial planning, forecasting, and budgeting solutions.",
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

      
            <ContactForm />

    </>

  );
}