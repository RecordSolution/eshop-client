import { FileViewModel } from "../../shared/models/fileViewModel";

export class AddProductModel {
        name: string;
        id: string;
        shortDescription: string;
        colors: Array<string>;
        avaliableQuantity: number;
        images: Array<FileViewModel>;
        dressCategory: string;
        fashionCatehory: string;
        gendar: string;
        sizes: Array<string>;
        price: number;

        constructor() {
                this.name = '';
                this.id = '';
                this.shortDescription = '';
                this.colors = [];
                this.avaliableQuantity = 0;
                this.images = [];
                this.dressCategory = '';
                this.fashionCatehory = '';
                this.gendar = '';
                this.sizes = [];
                this.price = 0;
        }
}