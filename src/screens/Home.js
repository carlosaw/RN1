import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFF;
`;
const Texto = styled.Text`
    font-size: 15px;
`;

const Botao = styled.Button``;

const Page = (props) => {
    return (
        <Container>
            <Texto>Página HOME</Texto>

            <Botao title="Fulano de Tal" onPress={()=>props.navigation.navigate('Perfil')} />

            <Botao title="Abrir Drawer" onPress={()=>props.navigation.openDrawer()} />
        </Container>
    );
}

Page.navigationOptions = () => {
    const DrawerImage = styled.Image`
        width:35px;
        height:35px;
    `;

    return {
        title:'Início',        
        drawerIcon:({focused, tintColor})=>(
            <DrawerImage source={focused?
                require('../images/home_active.png'):
                require('../images/home_black.jpg')}
            />
        )
    };
}

export default Page;