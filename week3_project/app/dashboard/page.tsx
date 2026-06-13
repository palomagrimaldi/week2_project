import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <main>
      <h1>Protected Dashboard</h1>
      <p>Welcome, {session.user.name}</p>
    </main>
  );
}