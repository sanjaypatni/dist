export class Charge {
    amount: number;
    currency: string = "USD";
    description: string;
    stripeToken: string;
    stripeEmail: string = "";
  }
