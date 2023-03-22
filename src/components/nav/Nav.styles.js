import styled from "styled-components"
import { devices } from '../../theme+globalStyles/screenSizes'

export const StyledNav = styled.nav`
    background-color: ${({theme}) => {return theme.colors.primaryBackgroundColor}};
    color: ${({theme}) => {return theme.colors.primaryTextColor}};
    display: flex;
    align-items: center;
    background-color: ${({theme}) => {return theme.colors.backHighlight}};
    gap: 15px;

    .homeLink{
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${({theme}) => {return theme.colors.primaryTextColor}};
    }

    button{
        display: none;
        background: ${({theme}) => {return theme.colors.secondaryBackgroundColor}};
        color: ${({theme}) => {return theme.colors.primaryTextColor}};
        margin-left: auto;
        margin-right: 40px;
        min-height: 45px;
        border-color: ${({theme}) => {return theme.colors.primaryTextColor}};
        cursor: pointer;
        border-style: solid;
    }

    @media ${devices.mobile}{
    }
    @media ${devices.tablet}{
    }
    @media ${devices.laptop}{
        button{
            display: inline-block;
        }
    }
    @media${devices.desktop}{
    }
`