import styled from "styled-components"
import { devices } from '../../theme-and-global-styles/screenSizes'

export const StyledNav = styled.nav`
    color: ${({theme}) => {return theme.colors.grey}};
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => {return theme.colors.white}};
    gap: 15px;

    .nav__home-link{
        display: none;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: ${({theme}) => {return theme.colors.grey}};
        font-size: .5em;
    }

    .nav__button{
        background: ${({theme}) => {return theme.colors.white}};
        color: ${({theme}) => {return theme.colors.grey}};
        margin-left: auto;
        margin-right: 40px;
        min-height: 50px;
        width: 100px;
        border-color: ${({theme}) => {return theme.colors.grey}};
        cursor: pointer;
        border-style: solid;
        border-radius: 30px;
        text-decoration: none;
    }


    
    .nav__button:hover{
        color: ${({theme}) => {return theme.colors.green}};
        background: ${({theme}) => {return theme.colors.white}};
        border-color: ${({theme}) => {return theme.colors.green}};
    }

    .nav__button:active{
        background: ${({theme}) => {return theme.colors.green}};
        border-color: none;
        color: ${({theme}) => {return theme.colors.white}};
    }

    .nav__arrow{
        width: 20px;
        height: 5px;
        background: ${({theme}) => {return theme.colors.grey}};
        margin-left: 10px;
        //animation-name: arrow;
        animation-duration: 3s;
        animation-iteration-count: infinite;

        div:before, .nav__arrow:after {
        content: ' ';
        height: 20px;
        width: 2px;
        background-color: #333;
        }
    }

    @media ${devices.mobile}{
    }
    @media ${devices.tablet}{
        .nav__home-link{
            font-size: 1em;
            display: flex;
        }
        
        .nav__button{
            margin-right: 40px;
            min-height: 50px;
            width: 200px;
        }
    }
    @media ${devices.laptop}{
    }
    @media${devices.desktop}{
    }
`