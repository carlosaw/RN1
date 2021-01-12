import React from 'react';
import styled from 'styled-components/native';

const TabBarIcon = styled.View`
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
`;
const TabBarImg = styled.Image`
    width: 30px;
    height: 30px;
`;
const TabBarBadge = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 12px;
    background-color: #FF0000;
    position: absolute;
    justify-content: center;
    align-items: center;
    right: 0;
    top: 0;
`;
const TabBarBadgeCount = styled.Text`
    font-size: 9px;
    color: #FFF;
    font-weight: bold;
`;

export default (props) => {
    let img = null;

    switch(props.route) {
        case 'Welcome':
            img = (props.focused)?
                require('../images/home_active.png'):
                require('../images/home_black.jpg');
            break;
        case 'Login':
            img = (props.focused)?
                require('../images/msg_active.jpg'):
                require('../images/msg_black.png');
            break;
    }

    return (
        <TabBarIcon>
            <TabBarImg source={img} />
            {props.badge > 0 &&
                <TabBarBadge>
                    <TabBarBadgeCount>{props.badge}</TabBarBadgeCount>
                </TabBarBadge>
            }           
        </TabBarIcon>
    );
}