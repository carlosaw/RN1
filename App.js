import React from 'react';
import styled from 'styled-components/native';
import lista from './src/lista';

const Page = styled.SafeAreaView`
    flex:1;    
`;
const Listagem = styled.ScrollView`
  flex:1;
`;
const Item = styled.TouchableOpacity`
  padding:10px;
  background-color:#CCC;
  flex-direction:row;
`;
const ItemText = styled.Text`
  font-size:15px;
  flex:1;
`;
const ItemCheck = styled.View`
  width:20px;
  height:20px;
  border-radius:10px;
  border:3px solid #FFF;
`;

export default () => {
  return (
    <Page>
      <Listagem>
        {lista.map((item, index) => {
          return (

            <Item key={index} onPress={() => { }} activeOpacity={0.7}>
              <>
                <ItemText>{item.task}</ItemText>
                <ItemCheck></ItemCheck>
              </>
            </Item>
          );
        })}
      </Listagem>
    </Page>
  );
}