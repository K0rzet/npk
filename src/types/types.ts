export interface IImage {
  equipment: number;
  id: number;
  image: string;
  product: number;
  project: number;
}

export interface IProjectResponse {
  count: number;
  next: string;
  previous: string;
  results: IProject[];
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  images: IImage[];
}
export interface IComplexEquipment {
  id: number;
  title: string;
  description: string;
  images: IImage[];
  price: number;
}

export interface IProductResponse {
  count: number;
  next: string;
  previous: string;
  results: IProduct[];
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  images: IImage[];
  price: number;
  isNew: boolean;
}

export interface ICategoryResponse {
  count: number;
  next: string;
  previous: string;
  results: ICategory[];
}

export interface ICategory {
  id: number;
  name: string;
  image: string;
}

export interface IContactForm {
  name: string
  email: string
  phone: string
  message: string
}