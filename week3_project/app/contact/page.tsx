export const dynamic = "force-dynamic";
export default function ContactPage() {
  return (
    <main>
      <h1>Contact Grimaldi’s Atelier</h1>

      <form>
        <label>
          Name
          <input name="name" type="text" required />
        </label>

        <label>
          Email
          <input name="email" type="email" required />
        </label>

        <label>
          Message
          <textarea name="body" required></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}