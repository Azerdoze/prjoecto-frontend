export class UserCharacter {
    public character_id: number;
    public character_name: string = "";
    public nation_id: string = "";
    public character_classes: string = "";
    public character_img : null;
    public character_physical_description: string = "";
    public character_mental_description: string = "";
    public belongs_to_user: number;
}
