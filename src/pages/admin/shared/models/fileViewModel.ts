export class FileViewModel{

    name:string;
    id:string;
    base64File:any;
    file:File;
    type:string;
    originalFileName:string;
    color:string;
    productName:string;

    constructor(){
        this.base64File={};
        this.name='';
        this.type='';
        this.originalFileName='';
        this.color='';
        this.productName=''

    }
}