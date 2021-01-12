import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex: 1;
`;
const Texto = styled.Text`
    font-size: 15px;
`;

const Page = () => {
    return (
        <Container>
            <Texto>Página PERFIL</Texto>
        </Container>
    );
}
Page.navigationOptions = () => {
    const DrawerImage = styled.Image`
        width:35px;
        height:35px;
    `;

    return {
        title:'Perfil',        
        drawerIcon:({focused, tintColor})=>(
            <DrawerImage source={focused?
                require('../images/perfil_active.jpg'):
                require('../images/perfil_black.jpg')}
            />
        )
    };
}

export default Page;