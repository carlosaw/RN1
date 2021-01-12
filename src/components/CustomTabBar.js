import React from 'react';
import styled from 'styled-components/native';

const CustomTabBar = styled.SafeAreaView`
    margin: 20px;
    height: 70px;
    border-radius: 20px;
    background-color: #000;
    flex-direction: row;
`;

const CustomTabBarButton = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const CustomTabBarText = styled.Text`
    color: #FFF;
    font-size: 12px;
    font-weight: bold;
`;

export default (props) => {
    return (
        <CustomTabBar>
            {props.items.map((item, index) => {
                return (
                    <CustomTabBarButton key={index} onPress={()=>props.navigation.navigate(item.route)}>
                        <CustomTabBarText>{item.text}</CustomTabBarText>
                    </CustomTabBarButton>
                );
            })}
        </CustomTabBar>
    );
}