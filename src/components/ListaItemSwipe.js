import { Left } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
const ListaItemSwipe = styled.TouchableHighlight`
    width:100%;
    height:45px;
    background-color:#FFF;
    justify-content:center;
`;
const ListaItemIcon = styled.View`
    width:20px;
    height:20px;
    background-color:#FFF;
    margin-left:15px;
`;
export default (props) => {
    return (
        //Código funcional apresentado em aula
        /*
        <ListaItemSwipe onPress={props.onDelete} underlayColor="#FF3333">
            <ListaItemIcon></ListaItemIcon>
        </ListaItemSwipe>
        */

        //Tentativa de colocar uma imagem no swipe
        <ListaItemSwipe onPress={props.onDelete}>
            <Image
                source={require('../images/trash.png')}
                style={{
                    width: 30,
                    height: 30,
                    marginLeft: 10
                }}
                resizeMode="cover"
            />
        </ListaItemSwipe>

    );
}