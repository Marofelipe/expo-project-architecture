import React from "react";
import { FlatList } from "react-native";

import Item from "./Item";

const services = [
  {
    id: 1,
    name: "Shower",
    price: 79.9,
    description: "We don't clean your kat! but if needed, we do.",
  },
  {
    id: 2,
    name: "V4 vaccine",
    price: 89.9,
    description: "The first of two doses of V4's vaccine.",
  },
  {
    id: 3,
    name: "Rabies Vaccine",
    price: 99.9,
    description:
      "One dose of Rabies's vaccine, your kat needs just one for year.",
  },
];

export default function Services() {
  return (
    <FlatList
      data={services}
      key={({ item }) => item.id}
      keyExtractor={({ id }) => String(id)}
      renderItem={({ item }) => <Item {...item} />}
    />
  );
}
