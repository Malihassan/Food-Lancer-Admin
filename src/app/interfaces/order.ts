export interface Order {
  _id: string;
  buyerId: string;
  sellerId: string;
  products: [
    {
      _id: string;
      quantity: number;
    }
  ];
  totalPrice: number;
  status: string;
}
