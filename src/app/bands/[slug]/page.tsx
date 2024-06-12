import pb from "@/lib/pocketbase";
import pbUrl from "@/lib/pbUrl";
import ProductCard from "@/components/productCard";
import { Product } from "@/app/layout";

export async function generateStaticParams() {
  const bands = await pb.collection("band").getFullList(200, {
    sort: "-created",
  });

  return bands.map((band) => ({
    slug: band.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const bandInfo = await pb
    .collection("band")
    .getFirstListItem(`name~"${params.slug}"`, {
      expand: "product",
    });
  if (!bandInfo.expand) {
    return <>error</>;
  }

  return (
    <div className="flex-col-center w-full">
      <h1 className="w-full text-center font-bold text-6xl p-10 ">
        {bandInfo.name}
      </h1>
      <div className="flex columns-2 gap-4 p-10">
        {bandInfo.expand.product.map((product: Product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
