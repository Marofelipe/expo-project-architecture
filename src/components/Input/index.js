import React from "react";

import { TextInput } from "react-native";
import styles from "./styles";

export default function InputText({value, onChange, inputStyle}) {
  
  const updateValue = (newValue, returnAction) => {
    const validadeInteger = newValue.match(/^[0-9]*$/);
    if (!validadeInteger) return;
    const removeLeftZero = newValue.replace(/^(0)(.+)/, '$2');

    returnAction(removeLeftZero);
  }
  const numberText = String(value);
  return (
    <TextInput
      style={[styles.campo, inputStyle]}
      keyboardType="number-pad"
      selectTextOnFocus
      onChangeText={(value) => {updateValue(value, onChange)}}
      value={numberText}
    />
  )
}