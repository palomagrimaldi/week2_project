import CountryDataPanel from "@/components/CountryDataPanel";

export default function CountryPage() {
  return (
    <main>
      <h1>Country Data Panel</h1>

      <p>
        This page demonstrates asynchronous data fetching using a public API.
      </p>

      <CountryDataPanel />
    </main>
  );
}