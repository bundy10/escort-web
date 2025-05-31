export interface ListingDetails {
    id: number;
    title: string;
    description: string;
    location: string;
    date: Date;
    price: string; //the database is storing price as a string atm is this correct bundy?
    image: string; // is this correct?
    category: string;
    subCategory: string;

}
