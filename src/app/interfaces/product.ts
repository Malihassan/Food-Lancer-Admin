export interface Product {
    name: string;
    _id:any;
    categoryId: any;
    status: string;
    reasonOfBlock:string;
    pendingMessage:string;
    sellerId:any;
    description:string;
    image: any ;
    price:number;
    addOns:[{}];
    reviews:[{}];
    avgRate:number;
}
