import pb from "../../lib/pocketbase";

export async function Posts() {
  const posts = await pb.collection('post').getFullList(200 /* batch size */, {
    sort: '-created',
  });
  return (
  <>
    {posts.map((post)=>{
      return (
        <div key={post.id}>
          {post.created}
          {post.field}
          {post.summary}
        </div>
      )
    })}
  </> 
  )
}