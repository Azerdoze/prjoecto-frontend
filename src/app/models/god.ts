import { Pantheon } from "./pantheon";

export class God {
    public god_id : number;
    public god_name : string = "";
    public god_alignment : string = "";
    public god_domains : string = "";
    public god_mysteries : string = "";
    public god_fav_weapon : string = "";
    public pantheon_id : number; // how to invoke pantheon_id from pantheon?
}
