import React from 'react';
import styled from 'styled-components/native';
import lista from './src/lista';
import ListaItem from './src/components/ListaItem';
import AddItemArea from './src/components/AddItemArea';

const Page = styled.SafeAreaView`
    flex:1;    
`;
const Listagem = styled.FlatList`
  flex:1;
`;

export default () => {
  return (
    <Page>
      <AddItemArea />
      <Listagem
        data={lista}
        renderItem={({ item }) => <ListaItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </Page>
  );
}