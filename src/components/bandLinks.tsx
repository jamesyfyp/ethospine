import { BandsLinkCombo } from "./bandsLinkCombo";
import pb from "@/lib/pocketbase";


export async function BandLinks () {
    const bandsData = await pb.collection("band").getFullList(200, {
        sort: "-created",
    });
    const bands: any = [];
    bandsData.map((band)=>{
        const bandInfo = {
            value: band.name,
            label: band.name
        }
        bands.push(bandInfo)
    })
    return (
        <BandsLinkCombo bands={bands}/>
    )
}