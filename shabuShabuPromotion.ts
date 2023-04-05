import axios from "axios";

export async function shabuShabuPromotion(
  quantity: number
) {
  const promotionDeatil = await axios.post("/get-promotionDeatil", {
    quantity: quantity
  });
  const price = promotionDeatil.data.data.price;
  const serviceChargePerOne = ((price * promotionDeatil.data.data.serviceCharge) / 100);
  const promotionQty = promotionDeatil.data.data.promotionQty;
  let totalQuantity = quantity;
  if (quantity % promotionQty == 0) {
    let qty = quantity / promotionQty;
    totalQuantity = quantity - qty;
  }
  return (totalQuantity * price) + (serviceChargePerOne * totalQuantity);
}
