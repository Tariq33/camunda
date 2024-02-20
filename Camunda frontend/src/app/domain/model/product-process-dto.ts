export class ProductProcessDto {
  productId: number;
  userId: number;
  etat: string;
  quantity: number;

  constructor(productId: number, userId: number, etat: string, quantity: number) {
    this.productId = productId;
    this.userId = userId;
    this.etat = etat;
    this.quantity = quantity;
  }
}
