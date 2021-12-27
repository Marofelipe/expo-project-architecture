import React from "react";
import { Text, TouchableOpacity } from "react-native";
import functionStyles from './styles';


export default function Button({small = false, reverse= false,value, action}) {
  const styles = functionStyles(small, reverse);
  return (
    <TouchableOpacity style={[styles.botao]} onPress={action}>
      <Text style={[styles.valor]}>{value}</Text>
    </TouchableOpacity>
  );
};