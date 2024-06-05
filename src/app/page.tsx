import Image from "next/image";
import pb from "../../lib/pocketbase";



export default async function Home() {
  const posts = await pb.collection('post').getFullList(200 /* batch size */, {
    sort: '-created',
});;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-white">hello world</h2>
      {posts.map((post)=>{
        return (
          <div key={post.id}>
            {post.created}
            {post.field}
            {post.summary}
          </div>
        )
      })}
    </main>
  );
}
