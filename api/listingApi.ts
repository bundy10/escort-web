import { Listing } from "@/models/Listing";
import { listingService } from "@/services/axiosInstance";

export const getListingById = async (listingId: string): Promise<Listing> => { //its gonna be string atm because we are typing it in will change later just testing the db
    const response = await listingService.get(`/${listingId}`);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(`Error fetching listing with ID ${listingId}: ${response.statusText}`);
    }
}