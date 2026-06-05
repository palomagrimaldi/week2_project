import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function MessagesPage() {
  const messages = await prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main>
      <h1>Messages</h1>

      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.name}</strong>
            <br />
            {message.email}
            <br />
            {message.body}
            <hr />
          </li>
        ))}
      </ul>
    </main>
  );
}