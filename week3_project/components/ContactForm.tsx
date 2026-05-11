"use client";

export default function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = document.getElementById("name") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const message = document.getElementById("message") as HTMLTextAreaElement;
    const feedback = document.getElementById("feedback");

    let errors: string[] = [];

    if (name.value.trim() === "") {
      errors.push("Name is required.");
    }

    if (email.value.trim() === "" || !email.validity.valid) {
      errors.push("Valid email is required.");
    }

    if (message.value.trim() === "") {
      errors.push("Message is required.");
    }

    if (!feedback) return;

    if (errors.length > 0) {
      feedback.textContent = errors.join(" ");
      feedback.setAttribute(
        "style",
        "color: red; font-weight: bold; margin-top: 10px;"
      );
    } else {
      feedback.textContent = "Message sent successfully!";
      feedback.setAttribute(
        "style",
        "color: lightgreen; font-weight: bold; margin-top: 10px;"
      );
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" placeholder="Your name" />

      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="Your email" />

      <label htmlFor="message">Message</label>
      <textarea id="message" placeholder="Write your message here"></textarea>

      <button type="submit">Send Message</button>

      <p id="feedback" aria-live="polite"></p>
    </form>
  );
}