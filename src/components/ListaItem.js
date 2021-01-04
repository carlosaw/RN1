import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableOpacity`
  padding:10px;
  background-color:#EEE;
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
  border:3px solid #CCC;
  background-color:${props => props.done ? '#00FF00' : '#FFF'};
`;

export default (props) => {
  return (
    <Item onPress={props.onPress} activeOpacity={0.5}>
      <>
        <ItemText>{props.data.task}</ItemText>
        <ItemCheck done={props.data.done}></ItemCheck>
      </>
    </Item>
  );
}