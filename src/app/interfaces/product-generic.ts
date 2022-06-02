export interface ProductGeneric {
  _id?: string;
  name: string;
  slug?: string;
  shortNote?: string;
  image?: string;
  status?: string;
  priority?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
