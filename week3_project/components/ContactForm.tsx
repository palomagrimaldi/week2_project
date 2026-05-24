"use client";

import React from "react";

export default function ContactForm() {

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    const form = event.currentTarget;

    const name =
      form.elements.namedItem("name") as HTMLInputElement;

    const email =
      form.elements.namedItem("email") as HTMLInputElement;

    const message =
      form.elements.namedItem("message") as HTMLTextAreaElement;

    const feedback =
      document.getElementById("feedback");

    // EMPTY FIELDS

    if (
      !name.value ||
      !email.value ||
      !message.value
    ) {

      if (feedback) {

        feedback.textContent =
          "Please complete all fields before submitting.";

      }

      return;
    }

    // INVALID EMAIL

    if (
      !email.value.includes("@") ||
      !email.value.includes(".")
    ) {

      if (feedback) {

        feedback.textContent =
          "Please enter a valid email address.";

      }

      return;
    }

    // SUCCESS

    if (feedback) {

      feedback.textContent =
        "Thank you! Your message was successfully validated.";

    }

    form.reset();
  };

  return (

    <form
      onSubmit={handleSubmit}
      noValidate
    >

      <label htmlFor="name">
        Name
      </label>

      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
      />

      <label htmlFor="email">
        Email
      </label>

      <input
        id="email"
        name="email"
        type="text"
        placeholder="Your email"
      />

      <label htmlFor="message">
        Message
      </label>

      <textarea
        id="message"
        name="message"
        placeholder="Write your message here"
      ></textarea>

      <button type="submit">
        Send Message
      </button>

      <p
        id="feedback"
        aria-live="polite"
      ></p>

    </form>
  );
}