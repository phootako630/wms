
export type Order = {
    id: string;
    date: string;
    customer: Customer;
    items: OrderItem[];
    shippingAddress: string;
    status: 'pending' | 'processing' | 'shipped' | 'delivered';
  };
  
  export type OrderItem = {
    id: string;
    orderId: string;
    productId: string;
    quantity: number;
  };
  
  export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
  };
  
  export type Customer = {
    id: string;
    name: string;
    email: string;
    address: string;
  };
  