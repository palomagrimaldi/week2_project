"use client";

import { useEffect, useState } from "react";

type Country = {
  name: {
    common: string;
  };
  capital?: string[];
  region: string;
  population: number;
};

export default function CountryDataPanel() {
  const [data, setData] = useState<Country | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function loadCountry() {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const response = await fetch(
        "https://restcountries.com/v3.1/name/brazil"
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const json = await response.json();

      setData(json[0]);
    } catch (err) {
      setError("Unable to load country data.");
    } finally {
      setLoading(false);
    }
  }

  async function refreshCountry() {
    setRefreshing(true);
    setError(null);

    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/name/brazil"
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const json = await response.json();

      setData(json[0]);
    } catch (err) {
      setError("Unable to refresh country data.");
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    loadCountry();
  }, []);

  if (loading) {
    return (
      <section aria-label="Loading country data">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-line"></div>
        <div className="skeleton skeleton-line short"></div>
        <div className="skeleton skeleton-card"></div>
      </section>
    );
  }

  if (error) {
    return (
      <section role="alert">
        <h2>Error</h2>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section>
      <h2>{data?.name.common}</h2>

      <p>
        <strong>Capital:</strong> {data?.capital?.[0]}
      </p>

      <p>
        <strong>Region:</strong> {data?.region}
      </p>

      <p>
        <strong>Population:</strong> {data?.population.toLocaleString()}
      </p>

      <button
        onClick={refreshCountry}
        disabled={refreshing}
        aria-busy={refreshing}
      >
        {refreshing ? "Refreshing..." : "Refresh"}
      </button>
    </section>
  );
}