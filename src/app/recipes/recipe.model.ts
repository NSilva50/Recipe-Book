export class Recipe {
    public name: string;
    public description: string;
    public immagePath: string;

    constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.description = description;
        this.immagePath = imagePath;
    }
}