export interface Seller {
    _id: string,
    userName:string,
    email: string,
    rate: number,
    status: string,
    coverageArea: {
      _id: string,
      governorateName: string,
      regionName: string
    }
  }