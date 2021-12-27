import React from "react";
import { FlatList } from "react-native";

import Item from "./Item";
import DefaultScreen from "../../components/Screen";
import ShoppingCartStatus from "../../components/CartStatus";

const services = [
  {
    id: 1,
    name: "Shower",
    price: 79.9,
    description: "We don't clean your kat! but if needed, we do.",
    count: 2,
  },
  {
    id: 2,
    name: "V4 vaccine",
    price: 89.9,
    description: "The first of two doses of V4's vaccine.",
    count: 2,
  },
  {
    id: 3,
    name: "Rabies Vaccine",
    price: 99.9,
    description:
      "One dose of Rabies's vaccine, your kat needs just one for year.",
    count: 2,
    },
];

export default function ShoppingCart() {
  const total = services.reduce((sum, {price, count}) => sum + (price * count), 0);
  return (
    <>
      <ShoppingCartStatus total={total}/>
      <FlatList
        data={services}
        key={({ item }) => item.id}
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item }) => <Item {...item} />}
      />
    </>
  );
}
