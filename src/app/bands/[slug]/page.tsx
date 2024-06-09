import pb from "../../../../lib/pocketbase";

const pbUrl = process.env.NEXT_PUBLIC_PB_URL

export async function generateStaticParams() {
    const bands = await pb.collection('band').getFullList(200 /* batch size */, {
      sort: '-created',
    });
   
    return bands.map((band) => ({
      slug: band.slug,
    }))
  }

export default async function Page({ params }: { params: { slug: string } }) {
  const bandInfo = await pb.collection('band').getFirstListItem(`name~"${params.slug}"`, {
    expand: 'product'
  });
  if (!bandInfo.expand) {
    return <>error</>
  }
 
  return (
    <div className="flex-col-center w-full">
      <h1 className="w-full text-center font-bold text-6xl p-10 ">{bandInfo.name}</h1>
      <div className="flex columns-2 gap-4 p-10">
        {bandInfo.expand.product.map((product: any) => {
          return (
            <div className="rows-3 justify-center text-center">
              <img className="w-48" src={`${pbUrl}api/files/${product.collectionId}/${product.id}/${product.images[1]}?thumb=200x200`}/>
              <h2>{product.name}</h2>
              <p>{product.type}</p>
              <p>{product.price}</p>
              <button> buy </button>
            </ div>
          )
        })}
      </div>
      
    </div>
  )
}