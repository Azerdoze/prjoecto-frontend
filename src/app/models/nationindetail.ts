import { Trait } from "./trait";

export class Nation {
    public nation_id: string = "";
    public nation_name: string = "";
    public nation_summary: string = "";
    public nation_description: string = "";
    public nation_hub: string = "";
    public nation_hub_description: string = "";
    public nation_banner: null;
    public region_id: string = "";
    public belongs_to: string = "";
    public traits: Trait [
    ];
}
