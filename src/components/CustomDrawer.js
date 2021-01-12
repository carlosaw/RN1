import React from 'react';
import styled from 'styled-components/native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

const Scroll = styled.ScrollView`
    flex: 1;
`;
const Area = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;

const DrawerLogo = styled.Image`
    width: 50px;
    height: 50px;
    
    margin-top: 20px;
    margin-bottom: 20px;
`;
const Botao = styled.Button``;

export default (props) => {

    return (
        <Scroll>
            <Area>
                <DrawerLogo
                    source={('../images/trash.png')}
                />
                <DrawerNavigatorItems
                    {...props}
                    itemsContainerStyle={{width:'100%'}}
                />
                <Botao title="Sair" onPress={()=>props.navigation.navigate('Config')} />
            </Area>
        </Scroll>
    );
}