import React from "react";
import DeliciousCard from "./DeliciousCard";
import Egg from "../images/Egg.png";
import Tacos from "../images/tacos.png";
import Pizza from "../images/Pizza.png";
import Barfi from "../images/Barfi.png";
import Coffee from "../images/coffee.png";
import cake from "../images/cake.png";
import Wrap from "../images/wrap.png";
import Burger from "../images/burger.png";

const DishData = [
  {
    image: Egg,
    Hading: "Egg Rice",
    text: "Cooked rice, beaten eggs, spring onions or scallions, oil, and soy sauce.",
    price: "$10",
  },
  {
    image: Pizza,
    Hading: "Pizza",
    text: "Dough flour, yeast, water, salt, crust, sauce, and toppings.",
    price: "$29",
  },
  {
    image: Burger,
    Hading: "Burger",
    text: "Ground beef (80% lean, 20% fat), Salt and pepper, American cheese, Butter, Hamburger buns or slider buns.",
    price: "$19",
  },
  {
    image: Wrap,
    Hading: "Wrap",
    text: "Cooked Chicken, Romaine Lettuce, Roma Tomatoes, Red Onion, Shredded Cheese.",
    price: "$10",
  },
  {
    image: Tacos,
    Hading: "Tacos",
    text: "Onions, lettuce or cabbage, singkamas, and cheese.",
    price: "$15",
  },
  {
    image: Barfi,
    Hading: "Barfi",
    text: "Milk powder, dry-fruits.",
    price: "$18",
  },
  {
    image: cake,
    Hading: "Cake",
    text: "Flour is perhaps the most important ingredient in a cake mix.",
    price: "$30",
  },
  {
    image: Coffee,
    Hading: "Coffee",
    text: "Carbohydrates, fats, water, proteins, acids, alkaloids (caffeine), minerals, and flavorings.",
    price: "$5",
  },
];

export default function Delicious() {
  return (
    <div className="w-screen bg-custom-blue min-h-screen py-10 pt-44 md:pt-10 ">
      <div className="text-center mb-8">
        <h1 className="font-space_Grotesk_regular text-4xl ">
          Delicious Dishes...
        </h1>
        <div className="w-20 h-0.5 bg-[#edae49] mx-auto mt-2"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 mt-36">
        {DishData.map((dish, index) => (
          <DeliciousCard key={index} dish={dish} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="w-32 h-12 rounded-2xl text-[#edae49] bg-[#006494]">
          See More
        </button>
      </div>
    </div>
  );
}
