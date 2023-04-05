import MockAdapter from "axios-mock-adapter";
import { shabuShabuPromotion } from "../shabuShabuPromotion";
import axios from "axios";

describe("promotion shabu", () => {
  var mock_promotion = new MockAdapter(axios);
  it("promotion come 4 pay 3", async () => {
    const expectedResult = 2244
    const quantity = 8;
    mock_promotion
      .onPost("/get-promotionDeatil", {
        quantity: quantity
      })
      .reply(200, {
        status: "success",
        message: "-",
        data: {
          serviceCharge: 10,
          price: 340,
          promotionQty:4
        },
      });
    const result = await shabuShabuPromotion(quantity);
    expect(result).toEqual(expectedResult);
  });
});
