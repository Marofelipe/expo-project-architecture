import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../../../components/Button";
import InputText from "../../../components/Input";

import styles from "./styles";
export default function Item({ name, price, description, count: initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [totalPrice, setTotalPrice] = useState(price);
  const [showCard, setShowCard] = useState(true);

  const updateTotalCount = (newCount) => {
    setCount(newCount);
    calculateTotal(newCount);
  };

  const calculateTotal = (count) => {
    setTotalPrice(count * price);
  };

  const reverseShowState = () => {
    setShowCard(!showCard);
    updateTotalCount(1);
  }
  return (
    <>
      <TouchableOpacity style={styles.informacao}>
        <Text style={styles.nome}>{name}</Text>
        <Text style={styles.descricao}>{description}</Text>
        <Text style={styles.preco}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </Text>
      </TouchableOpacity>
      <View style={styles.carrinho}>
        <View>
          <View style={styles.valor}>
            <Text style={styles.descricao}>Quantidade: </Text>
            <InputText
              inputStyle={styles.quantidade}
              value={count}
              onChange={updateTotalCount}
            />
          </View>
          <View style={styles.valor}>
            <Text style={styles.descricao}>Preço: </Text>
            <Text style={styles.preco}>{Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalPrice)}</Text>
          </View>
        </View>
        <Button value="Remover do Carrinho" />
      </View>
      <View style={styles.divisor}></View>
    </>
  );
}
