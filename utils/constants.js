export const EndPointUrl = "";

const sampleProductData = [
  {
    _id: "1",
    name: "Handcrafted Granite Shoes",
    description:
      "Sed est expedita ipsa veritatis dolor. Voluptatem non ratione omnis odit at. Ducimus est consectetur architecto veniam repudiandae ullam.",
    category: {
      _id: "1",
      name: "Shoes",
      parentCategory: null,
    },
    brand: {
      _id: "1",
      name: "Handcrafted",
    },
    variants: [
      {
        _id: "1",
        sku: "N3W25B4P8F",
        price: 715.28,
        compareAtPrice: 1015.92,
        size: "S",
        color: "orchid",
        imageUrls: ["https://via.placeholder.com/150"],
        inventory: {
          quantity: 64,
          policy: "deny",
        },
      },
    ],
    images: ["https://via.placeholder.com/150"],
    rating: {
      average: 2.88,
      count: 943,
    },
    tags: ["Handcrafted", "Granite", "Shoes"],
    isActive: true,
    createdAt: "2024-04-11T03:16:46.396Z",
    updatedAt: "2024-04-14T14:49:45.703Z",
  },
  {
    _id: "2",
    name: "Licensed Concrete Towels",
    description:
      "Ut quia et et dolor nemo odit. Ad voluptatum quia aut quibusdam et. Eum illo repudiandae ut.",
    category: {
      _id: "2",
      name: "Towels",
      parentCategory: null,
    },
    brand: {
      _id: "2",
      name: "Licensed",
    },
    variants: [
      {
        _id: "2",
        sku: "Q2K71W4M3J",
        price: 345.66,
        compareAtPrice: 688.19,
        size: "M",
        color: "tan",
        imageUrls: ["https://via.placeholder.com/150"],
        inventory: {
          quantity: 47,
          policy: "continue",
        },
      },
    ],
    images: ["https://via.placeholder.com/150"],
    rating: {
      average: 4.38,
      count: 680,
    },
    tags: ["Licensed", "Concrete", "Towels"],
    isActive: true,
    createdAt: "2024-04-10T12:06:27.357Z",
    updatedAt: "2024-04-14T14:49:45.703Z",
  },
  {
    _id: "3",
    name: "Gorgeous Wooden Table",
    description:
      "Sunt nostrum ut dolorem. Autem sunt quia. Et omnis adipisci non accusantium exercitationem dolor. Aspernatur sed quia temporibus.",
    category: {
      _id: "3",
      name: "Furniture",
      parentCategory: null,
    },
    brand: {
      _id: "3",
      name: "Gorgeous",
    },
    variants: [
      {
        _id: "3",
        sku: "F5J14E9Y8Q",
        price: 583.25,
        compareAtPrice: 1047.92,
        size: null,
        color: "white",
        imageUrls: ["https://via.placeholder.com/150"],
        inventory: {
          quantity: 88,
          policy: "deny",
        },
      },
    ],
    images: ["https://via.placeholder.com/150"],
    rating: {
      average: 3.16,
      count: 878,
    },
    tags: ["Gorgeous", "Wooden", "Table"],
    isActive: true,
    createdAt: "2024-04-11T03:26:54.384Z",
    updatedAt: "2024-04-14T14:49:45.703Z",
  },
  {
    _id: "4",
    name: "Ergonomic Fresh Shirt",
    description:
      "Quo iusto enim harum ipsum aliquid veritatis corrupti. Ea quam rerum id. Reprehenderit exercitationem dolorem facilis modi ab qui.",
    category: {
      _id: "4",
      name: "Clothing",
      parentCategory: null,
    },
    brand: {
      _id: "4",
      name: "Ergonomic",
    },
    variants: [
      {
        _id: "4",
        sku: "T2V83C2Z4W",
        price: 310.09,
        compareAtPrice: 517.23,
        size: "XL",
        color: "pink",
        imageUrls: ["https://via.placeholder.com/150"],
        inventory: {
          quantity: 42,
          policy: "continue",
        },
      },
    ],
    images: ["https://via.placeholder.com/150"],
    rating: {
      average: 1.85,
      count: 108,
    },
    tags: ["Ergonomic", "Fresh", "Shirt"],
    isActive: false,
    createdAt: "2024-04-11T03:36:52.179Z",
    updatedAt: "2024-04-14T14:49:45.703Z",
  },
  {
    _id: "5",
    name: "Incredible Cotton Keyboard",
    description:
      "Eos iusto quisquam sed et aspernatur nemo veniam. Possimus quaerat voluptas voluptas eius voluptatem voluptate. Expedita fugiat soluta quam.",
    category: {
      _id: "5",
      name: "Electronics",
      parentCategory: null,
    },
    brand: {
      _id: "5",
      name: "Incredible",
    },
    variants: [
      {
        _id: "5",
        sku: "K8W42X3V1M",
        price: 756.17,
        compareAtPrice: 1015.25,
        size: null,
        color: "yellow",
        imageUrls: ["https://via.placeholder.com/150"],
        inventory: {
          quantity: 19,
          policy: "deny",
        },
      },
    ],
    images: ["https://via.placeholder.com/150"],
    rating: {
      average: 2.04,
      count: 123,
    },
    tags: ["Incredible", "Cotton", "Keyboard"],
    isActive: true,
    createdAt: "2024-04-11T03:46:14.204Z",
    updatedAt: "2024-04-14T14:49:45.703Z",
  },
  {
    _id: "6",
    name: "Refined Fresh Computer",
    description:
      "Natus dolore ipsa dolorem et accusamus veritatis. Quisquam minus ea ut odio.",
    category: {
      _id: "6",
      name: "Electronics",
      parentCategory: null,
    },
    brand: {
      _id: "6",
      name: "Refined",
    },
    variants: [
      {
        _id: "6",
        sku: "C7N41D3Y5B",
        price: 835.12,
        compareAtPrice: 1201.23,
        size: null,
        color: "plum",
        imageUrls: ["https://via.placeholder.com/150"],
        inventory: {
          quantity: 31,
          policy: "continue",
        },
      },
    ],
    images: ["https://via.placeholder.com/150"],
    rating: {
      average: 3.61,
      count: 857,
    },
    tags: ["Refined", "Fresh", "Computer"],
    isActive: true,
    createdAt: "2024-04-11T03:55:33.744Z",
    updatedAt: "2024-04-14T14:49:45.703Z",
  },
];
