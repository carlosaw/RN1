import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items:center;
    background-color:#0000FF;    
`;
const Botao = styled.Button``;

export default () => {
  const [statusHide, setStatusHide] = useState(false);

  return (
    <Page>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#EEE"
        hidden={statusHide}
        animated={true}
      />

      <Botao
        title="Toggle StatusBar"
        onPress={() => setStatusHide(!statusHide)}
      />

    </Page>
  );
}