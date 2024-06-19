import receiverAvatar from "./assets/avatar1.jpg";
import senderAvatar from "./assets/avatar2.jpg";
import receiverAvatar2 from "./assets/avatar3.jpg";
// import senderAvatar2 from "./assets/avatar1.jpg";
import product1 from "./assets/product1.jpg";
// import product2 from "./assets/product2.jpg";

export const inboxData = [
  {
    id: 1,
    avatar: receiverAvatar,
    receiver_name: "Emmanuel Dennis",
    lastMsgDate: "30 May",
    lastMsg: "You: Emmanuel Dennis",
    conversation: [
      {
        id: 1,
        avatar: receiverAvatar,
        sender: "Emmanuel Dennis",
        message: "Hi there! Please i want to buy this product below",
        time: "10:02 AM",
      },
      {
        id: 2,
        avatar: senderAvatar,
        sender: "You",
        message: "Hello Emmanuel! What product are you talking about?",
        time: "10:11 AM",
      },
      {
        id: 3,
        avatar: receiverAvatar,
        sender: "Emmanuel Dennis",
        imageUrl: product1,
        time: "10:15 AM",
      },
    ],
  },
  {
    id: 2,
    avatar: receiverAvatar2,
    receiver_name: "Adebayo Wilson",
    lastMsgDate: "07:35",
    lastMsg: "Good afternoon sir this holabs Aluminum.",
    conversation: [
      {
        id: 1,
        avatar: receiverAvatar2,
        sender: "Adebayo Wilson",
        message: "Good afternoon sir this holabs Aluminum.",
        time: "01:30 PM",
      },
      {
        id: 2,
        avatar: senderAvatar,
        sender: "You",
        message: "Hello Adebayo!",
        time: "01:35 PM",
      },
    ],
  },
];
