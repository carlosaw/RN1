import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex:1;
`;
const Header = styled.View`
  flex-direction:row;
  justify-content:center;
  flex-wrap:wrap;
  background-color:#CCC;
  height:200px;
`;

const Quadrado = styled.View`
  width:50px;
  height:50px;
  background-color:${props => props.cor};
`;

export default () => {
  return (
    <Page>
      <Header>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="yellow"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="pink"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="yellow"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="pink"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado cor="yellow"></Quadrado>
        <Quadrado cor="blue"></Quadrado>
        <Quadrado cor="pink"></Quadrado>
      </Header>

    </Page>
  );
}
