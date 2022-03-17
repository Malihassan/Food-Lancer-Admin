export interface Product {
  name: string;
  _id: any;
  categoryId: any;
  status: string;
  reasonOfBlock: string;
  pendingMessage: string;
  sellerId: any;
  description: string;
  image: [{ _id: String, url: String }];
  price: number;
  addOns: [{des:string,name:string,price:number}];
  reviews: [{_id:string,sellerId:any,comments:[{message:string}],rate:number}];
  avgRate: number;
}
