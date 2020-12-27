import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex:1;
    background-color:#999;
`;
const Texto = styled.Text`
  color:${props => props.cor};
  font-size:20px;
  background-color:#DDD;
`;

export default () => {
  return (
    <Page>
      <Texto cor="red">Olá Mundo!</Texto>
      <Texto cor="#CCC">Segundo texto!</Texto>
      <Texto cor="#00FF00">Terceiro texto!</Texto>
    </Page>
  );
}
