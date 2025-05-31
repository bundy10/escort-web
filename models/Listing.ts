import { ListingDetails } from "./ListingDetails";

export interface Listing {
    id: number;
    listed: boolean;
    listingDetails: ListingDetails; //this is my assumption, in the db it comes as null but i can see the foreign key relationship
    userId: number;
}