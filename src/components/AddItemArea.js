import React, { useState } from 'react';
import styled from 'styled-components/native';

const AdditemArea = styled.View`
    background-color:#999;
    padding:10px;
`;
const AddItemInput = styled.TextInput`
    background-color:#FFF;
    font-size:15px;
    height:50px;
    border-radius:5px;
    padding:10px;
`;

export default (props) => {
    const [item, setItem] = useState('');

    const handleSubmit = () => {
        if (item.trim() == '') {
            alert('Digite uma tarefa');
        } else {
            props.onAdd(item);
            setItem('');
        }
    }

    return (
        <AdditemArea>
            <AddItemInput
                placeholder="Digite um novo item"
                value={item}
                onChangeText={e => setItem(e)}
                onSubmitEditing={handleSubmit}
                returnKeyType="send"
            />
        </AdditemArea>
    );
}