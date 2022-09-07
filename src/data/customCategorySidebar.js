import BabyBoy from "components/icons/BabyBoy";
import BabyGirl from "components/icons/BabyGirl";
import Car from "components/icons/Car";
import Dress from "components/icons/Dress";
import Food from "components/icons/Food";
import Gift from "components/icons/Gift";
import Laptop from "components/icons/Laptop";
import MakeUp from "components/icons/MakeUp";
import Man from "components/icons/Man";
import Microphone from "components/icons/Microphone";
import MotorBike from "components/icons/MotorBike";
import Pets from "components/icons/Pets";
import PlantPot from "components/icons/PlantPot";
import TeddyBear from "components/icons/TeddyBear";
import Woman from "components/icons/Woman";
const navigations = [
  {
    icon: MotorBike,
    title: "Bikes",
    href: "/product/search/bikes",
    menuComponent: "MegaMenu2",
    menuData: [
      {
        icon: Man,
        title: "Man",
        href: "/product/search/fashion",
        megaMenu: "MegaMenu2",
      },
      {
        icon: Woman,
        title: "Woman",
        href: "/product/search/electronics",
        megaMenu: 2,
      },
      {
        icon: BabyBoy,
        title: "Baby Boy",
        href: "/product/search/home&garden",
        megaMenu: 3,
      },
      {
        icon: BabyGirl,
        title: "Baby Girl",
        href: "/product/search/bikes",
        megaMenu: "MegaMenu1",
      },
    ]

  },
  {
    icon: Gift,
    title: "Gifts",
    href: "/product/search/gifts",
    menuComponent: "MegaMenu2",
    menuData: [
      {
        icon: Dress,
        title: "Fashion",
        href: "/product/search/fashion",
      },
      {
        icon: Laptop,
        title: "Electronics",
        href: "/product/search/electronics",
      },
      {
        icon: PlantPot,
        title: "Home & Garden",
        href: "/product/search/home&garden",
      },
      {
        icon: MotorBike,
        title: "Bikes",
        href: "/product/search/bikes",
      },
      {
        icon: Gift,
        title: "Gifts",
        href: "/product/search/gifts",
      },
      {
        icon: Microphone,
        title: "Music",
        href: "/product/search/music",
      },
      {
        icon: MakeUp,
        title: "Health & Beauty",
        href: "/product/search/health&beauty",
      },
      {
        icon: Pets,
        title: "Pets",
        href: "/product/search/pets",
      },
      {
        icon: TeddyBear,
        title: "Baby Toys",
        href: "/product/search/baby-toys",
      },
      {
        icon: Food,
        title: "Groceries",
        href: "/product/search/groceries",
      },
      {
        icon: Car,
        title: "Automotive",
        href: "/product/search/automotive",
      },
    ],
  },
  {
    icon: Microphone,
    title: "Music",
    href: "/product/search/music",
    menuComponent: "MegaMenu1",
  },
  {
    icon: MakeUp,
    title: "Health & Beauty",
    href: "/product/search/health&beauty",
    menuComponent: "MegaMenu1",
  },
  {
    icon: Pets,
    title: "Pets",
    href: "/product/search/pets",
    menuComponent: "MegaMenu1",
  },
  {
    icon: TeddyBear,
    title: "Baby Toys",
    href: "/product/search/baby-toys",
    menuComponent: "MegaMenu1",
  },
  {
    icon: Food,
    title: "Groceries",
    href: "/product/search/groceries",
    menuComponent: "MegaMenu1",
  },
  {
    icon: Car,
    title: "Automotive",
    href: "/product/search/automotive",
    menuComponent: "MegaMenu1",
  },
];
export default navigations;
