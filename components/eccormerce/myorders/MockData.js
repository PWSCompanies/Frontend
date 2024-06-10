import product1 from "./assets/product1.png";

export const orderData = {
  ONGOING_DELIVERED: [
    {
      id: 1,
      imageSrc: product1,
      orderNumber: "1712417482",
      name: "Jumiso All Day Vitamin Brighte..",
      date: "2024/03/17",
      status: "Ongoing",
    },
    {
      id: 2,
      imageSrc: product1,
      orderNumber: "1712417482",
      name: "Jumiso All Day Vitamin Brighte..",
      date: "2024/03/17",
      status: "Delivered",
    },
  ],
  CANCELED_RETURNED: [
    {
      id: 1,
      imageSrc: product1,
      orderNumber: "1712417482",
      name: "Jumiso All Day Vitamin Brighte..",
      date: "2024/03/17",
      status: "CANCELLED - PAYMENT UNSUCCESSFUL",
    },
  ],
};
