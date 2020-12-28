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
const CalcButton = styled.Button`
  margin-top:10px;
`;
const ResultArea = styled.View`
  margin-top:30px;
  background-color:#EEE;
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

    if(nBill) {
      setTip( (10/100) * nBill );
    } else {
      alert("Digite o valor da conta!");
    }
  }

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Valor da conta"
        placeholderTextColor='#000'
        keyboardType="numeric"
        value={bill}
        onChangeText={n=>setBill(n)}
      />
      <CalcButton title="CALCULAR" onPress={calc} />
      {tip > 0 &&
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>R$ {tip.toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill) + tip.toFixed(2)}</ResultItem>
        </ResultArea>
      }      
    </Page>
  );
}