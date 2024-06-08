import pb from "../../lib/pocketbase";

const pbUrl = process.env.NEXT_PUBLIC_PB_URL

export async function Posts() {
  const posts = await pb.collection('post').getFullList(200 /* batch size */, {
    sort: '-created',
  });
  const images = await pb.collection("images").getFullList(200 /* batch size */, {
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
    {images.map((image)=>{
      return(
        <img key={image.id} src={`${pbUrl}api/files/${image.collectionId}/${image.id}/${image.image}?thumb=200x200`}></img>
      )
    })}
  </> 
  )
}