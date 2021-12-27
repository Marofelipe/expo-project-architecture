import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Routes from './src/routes';
import DefaultScreen from './src/components/Screen';
import reactotron from 'reactotron-react-native';

// Conectando ao reactotron para debug
reactotron.configure().useReactNative().connect();
console.tron = reactotron;
export default function App() {
  console.tron.log({ curso: "alura"})
  return (
    <DefaultScreen>
      <Routes />
    </DefaultScreen>
  );
}
