import {Wood} from "./wood";

export interface Order {
  email: string;
  client_name: string;
  client_surname: string;
  products?: Wood[];
  total_price?: number;
  order_status?: string;
  created_at?: string;
}
