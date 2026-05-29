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
  const [data, setData] = useState<Country[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function loadCountry() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/name/brazil"
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const json = await response.json();

      setData(json);
    } catch (err) {
      setError("Unable to load country data.");
    } finally {
      setLoading(false);
    }
  }

  async function refreshCountry() {
    setRefreshing(true);

    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/name/brazil"
      );

      const json = await response.json();

      setData(json);
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
      <div role="alert">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  const country = data?.[0];

  return (
    <div>
      <h2>{country?.name.common}</h2>

      <p>
        <strong>Capital:</strong> {country?.capital?.[0]}
      </p>

      <p>
        <strong>Region:</strong> {country?.region}
      </p>

      <p>
        <strong>Population:</strong>{" "}
        {country?.population.toLocaleString()}
      </p>

      <button
        onClick={refreshCountry}
        disabled={refreshing}
        aria-busy={refreshing}
      >
        {refreshing ? "Refreshing..." : "Refresh"}
      </button>
    </div>
  );
}