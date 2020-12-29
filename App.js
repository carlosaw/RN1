import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex:1;
    align-self:center;
`;

const HeaderText = styled.Text`
  font-size:18px;
`;

const Input = styled.TextInput`
  height:45px;
  font-size:14px;
  background-color:#EEE;
  margin-top:20px;
  border-radius:10px;
  padding:10px;
`;
const CalcBtn = styled.Button`
  
`;
const ResultArea = styled.View`
  margin-top:30px;
  background-color:#DDD;
  padding:20px;
  justify-content:center;
  align-items:center;
`;

const ResultItemTitle = styled.Text`
  font-size:14px;
  font-weight:bold;
`;

const ResultItem = styled.Text`
  font-size:15px;
  margin-bottom:30px;
`;

export default () => {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);

  const calc = () => {
    let nBill = parseFloat(bill);

    if (nBill) {
      setTip((10 / 100) * nBill);
    } else {
      alert("Digite o valor da conta!");
    }
  }

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Digite o valor da conta"
        placeholderTextColor='#CCC'
        keyboardType="numeric"
        value={bill}
        onChangeText={n => setBill(n)}
      />
      <CalcBtn
        title="CALCULAR"
        onPress={calc}
        color="#00B0FF"
      />
      {tip > 0 &&
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

          <ResultItemTitle>Gorjeta (10%)</ResultItemTitle>
          <ResultItem>R$ {tip.toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      }
    </Page>
  );
}