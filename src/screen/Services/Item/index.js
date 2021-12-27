import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../../../components/Button";
import InputText from "../../../components/Input";

import styles from "./styles";
export default function Item({ name, price, description }) {
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCard, setShowCard] = useState(false);

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
      <TouchableOpacity style={styles.informacao} onPress={reverseShowState}>
        <Text style={styles.nome}>{name}</Text>
        <Text style={styles.descricao}>{description}</Text>
        <Text style={styles.preco}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </Text>
      </TouchableOpacity>
      {showCard && <View style={styles.carrinho}>
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
        <Button value="Adicionar ao Carrinho" />
      </View>}
      <View style={styles.divisor}></View>
    </>
  );
}
