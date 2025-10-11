import headset from "/headset.png";
import backpack from "/backpack.png";
import flask from "/flask.png";
import lamp from "/lamp.png";
import sneakers from "/sneakers.png";
import wristwatch from "/wristwatch.png";
import yogaMat from "/yoga-mat.png";
import coffeeMaker from "/coffee-maker.png";
import type { Product } from "../types/myTypes";

export const products: Product[] = [
  {
    id: 1,
    image: headset,
    category: "Electronics",
    title: "Wireless HeadPhones",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    price: 79.99,
  },
  {
    id: 2,
    image: backpack,
    category: "Accessories",
    title: "Leather Backpack",
    description:
      "Handcrafted leather backpack with laptop compartment. Durable and stylish for everyday use.",
    price: 89.99,
  },
  {
    id: 3,
    image: flask,
    category: "Accessories",
    title: "Water Bottle",
    description:
      "Insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 24.99,
  },
  {
    id: 4,
    image: lamp,
    category: "Home",
    title: "Desk Lamp",
    description:
      "LED desk lamp with adjustable brightness and color temperature. Eye-friendly lighting for work and study.",
    price: 59.99,
  },
  {
    id: 5,
    image: sneakers,
    category: "Footwear",
    title: "Running Shoes",
    description:
      "Lightweight running shoes with responsive cushioning and breathable mesh upper for maximum comfort.",
    price: 129.99,
  },
  {
    id: 6,
    image: wristwatch,
    category: "Electronics",
    title: "Smart Watch",
    description:
      "Advanced fitness tracking, heart rate monitoring, and smartphone notifications in a stylish design.",
    price: 199.99,
  },
  {
    id: 7,
    image: yogaMat,
    category: "Fitness",
    title: "Wireless HeadPhones",
    description:
      "Non-slip yoga mat with extra cushioning. Perfect for yoga, pilates, and floor exercises.",
    price: 39.99,
  },
  {
    id: 8,
    image: coffeeMaker,
    category: "Electronics",
    title: "Coffee Maker",
    description:
      "Programmable coffee maker with thermal carafe. Brew the perfect cup every morning.",
    price: 149.99,
  },
];
