export class CustomDesignViewModel{
    name:string;
    email:string;
    ph:number;
    id:string;
    fashionCategory:string;
    dressCategory:string;
    gender:string;
    colors:Array<any> = [];
    price:number;
    images:Array<object> = [];
    sizes:Array<string> = [];
    standardSize:string;
   isStandardSize:string;
    selectedItem = {};
    constructor(){
        this.isStandardSize = "true";
        this.name = "";
        this.email = "";
        this.ph = 0;
        this.fashionCategory = "";
        this.dressCategory = "";
        this.gender = "";
        this.price = 0;
        this.standardSize = "";

    }
}