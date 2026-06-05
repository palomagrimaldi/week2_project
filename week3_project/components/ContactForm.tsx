"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const body = String(formData.get("body") || "");

    if (!name || !email || !body) {
      setFeedback("Please complete all fields before submitting.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setFeedback("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setFeedback("Sending message...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, body }),
    });

    if (!response.ok) {
      setFeedback("Something went wrong. Please try again.");
      setIsSubmitting(false);
      return;
    }

    setFeedback("Thank you! Your message was saved successfully.");
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="Your email"
      />

      <label htmlFor="body">Message</label>
      <textarea
        id="body"
        name="body"
        placeholder="Write your message here"
      ></textarea>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <p aria-live="polite">{feedback}</p>
    </form>
  );
}