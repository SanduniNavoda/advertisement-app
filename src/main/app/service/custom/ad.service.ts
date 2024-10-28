import {AdTo} from "../../to/ad.to";

export interface AdService{
    getAllAds(): Promise<Array<AdTo>>;

    getAdsByUser(email: string): Promise<Array<AdTo>>;

    getAdById(adId: number): Promise<AdTo>
    createNewAd(email: string, ad: AdTo): Promise<AdTo>;
    deleteAd(email: string, adId: number): Promise<AdTo>

    //in service layer sho9uld be yagni , and discriptive
    //here to keep descriptive, we are not going to make this more sumarize
}