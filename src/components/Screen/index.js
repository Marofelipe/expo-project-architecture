import React from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar } from "react-native";

import globalStyles, { cores } from "../../styles/global.styles";
import styles from "./styles";

export default function DefaultScreen({children}) {
  return (
    <>
    <SafeAreaView style={styles.ajustaTela}>
      <StatusBar  backgroundColor={cores.roxo}/>
      <KeyboardAvoidingView
        style={globalStyles.preencher}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {children}
      </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView  style={styles.ajustaTelaBaixo}/>
      </>
  );
}