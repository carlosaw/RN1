import React, { useState } from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Texto = styled.Text`
    font-size: 20px;
`;
const Botao = styled.Button`
`;
const Input = styled.TextInput`
    font-size: 15px;
    border: 1px solid #000;
    width: 90%;
    height: 50px;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 15px;
`;
const TituloLogo = styled.Image`
    width: 80px;
    height: 80px;
`;

const Screen = (props) => {

    const [nome, setNome] = useState('');

    const fazerLogin = () => {
        props.navigation.navigate('Login', {nome});
        setNome('');
    }

    return (
        <Page>
            <Texto>Seja bem vindo(a)</Texto>

            <Input value={nome} onChangeText={e=>setNome(e)} />

            <Botao title="Fazer Login" onPress={fazerLogin} />
        </Page>
    );
}

Screen.navigationOptions = ({navigation}) => {

    return {
        headerTitle:<TituloLogo source={require('../images/logo.jpg')} />,
        headerRight:<Botao title="Login" onPress={()=>navigation.navigate('Login')} />,
        headerLeft:<Botao title="Login" onPress={()=>navigation.navigate('Login')} />
        //title:'Bem-Vindo(a)'           
    }
};

export default Screen;