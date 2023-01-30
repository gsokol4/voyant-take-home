import styled from "styled-components"
import { devices } from '../../theme+globalStyles/screenSizes'

export const StyledNav = styled.nav`
    background-color: ${({theme}) => {return theme.colors.primaryBackgroundColor}};
    color: ${({theme}) => {return theme.colors.primaryTextColor}};
    display: flex;
    align-items: center;
    background-color: purple;
    button{
        background-color: pink;
    }

    @media ${devices.mobile}{
        background-color: red;
    }
    @media ${devices.tablet}{
        background-color: orange;
    }
    @media ${devices.laptop}{
        background-color: yellow;
    }
    @media${devices.desktop}{
        background-color: green;
    }
`