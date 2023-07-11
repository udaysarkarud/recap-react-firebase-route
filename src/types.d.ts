export type IChildren = {
  children: JSX.Element | JSX.Element[];
};

export type IProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type IResponse = {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
};

export type IPropInfo = {
  info: IProduct;
};
