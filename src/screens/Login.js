import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { StackActions, NavigationActions } from 'react-navigation';

const Container = styled.SafeAreaView`
    flex: 1;
`;
const Texto = styled.Text`
    font-size: 15px;
`;
const Botao = styled.Button``;

const Input = styled.TextInput`
    border: 1px solid #CCC;
    font-size: 12px;
    padding: 10px;
    height: 50px;
    margin: 20px
`;

const Page = (props) => {

    const handleLogin = () => {
        const resetAction = StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'Home'})
            ]
        });
        props.navigation.dispatch(resetAction);
    }

    return (
        <Container>
            <Texto>Página LOGIN</Texto>

            <Input value={props.name} onChangeText={e=>props.setName(e)} />

            <Texto>NOME: {props.name}</Texto>
            <Texto>IDADE: {props.idade}</Texto>

            <Botao title="Fazer Login" onPress={handleLogin} />
        </Container>
    );
}
Page.navigationOptions = () => {
    return {
        title:'Login'
    };
}

const mapStateToProps = (state) => {
    return {
        name:state.userReducer.name,
        email:state.userReducer.email,
        idade:state.userReducer.idade
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        setName:(name) => dispatch({type:'SET_NAME', payload:{ name }})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);