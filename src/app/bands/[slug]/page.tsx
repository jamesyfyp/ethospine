import pb from "../../../../lib/pocketbase";



export async function generateStaticParams() {
    const bands = await pb.collection('band').getFullList(200 /* batch size */, {
        sort: '-created',
      });
   
    return bands.map((band) => ({
      slug: band.slug,
    }))
  }

export default async function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
  }