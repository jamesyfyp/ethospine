import { Posts } from "@/components/posts";

export const dynamic = 'force-dynamic';

export default async function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-white">hello world</h2>
      <Posts/>
    </main>
  );
}
