import { User } from './user';

export interface PrescriptionOrder {
  _id?: string;
  orderId?: string;
  prescriptionId?: any;
  checkoutDate: Date;
  user?: string | User;
  name: string;
  phoneNo: string;
  email: string;
  area?: string;
  district?: string;
  shippingAddress: string;
  note?: string;
  createdAt?: Date;
  updatedAt?: Date;
  paymentMethod: string
  deliveryStatus?: number
}

