import product1 from "./assets/product1.png";
import product2 from "./assets/product2.png";
import product3 from "./assets/product3.png";

export const orderData = {
  ONGOING_DELIVERED: [
    {
      id: 1,
      imageSrc: product2,
      orderNumber: "1712417482",
      name: "Jumiso All Day Vitamin Brighterer",
      date: "2024/03/17",
      status: "Ongoing",
      quantity: 2,
      price: 23790,
    },
    {
      id: 2,
      imageSrc: product3,
      orderNumber: "1232849384",
      name: "Nicor Facial Mask Stick For Black",
      date: "2024/05/29",
      status: "Delivered",
      quantity: 1,
      price: 12699,
    },
  ],
  CANCELED_RETURNED: [
    {
      id: 1,
      imageSrc: product2,
      orderNumber: "1712417482",
      name: "Jumiso All Day Vitamin Brighterer",
      date: "2024/03/17",
      status: "CANCELLED - PAYMENT UNSUCCESSFUL",
      quantity: 2,
      price: 23790,
    },
  ],
};
