import { CityLinks } from "./cityLinks.model";

export class City {
    public matching_full_name: string = '';
    public matching_alternate_names: string [] = [];
    public _links: CityLinks = new CityLinks();
}