import styled from "styled-components"
import { devices } from '../../theme-and-global-styles/screenSizes'

export const StyledCard = styled.section`
    .card_body{
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        border-radius: 5%;
        height: 350px;
        width: 250px;
        padding: 20px;
        background: ${({theme}) => {return theme.colors.blue}};
        max-width: 230px;
        overflow: hidden;
        overflow-wrap: break-word;
    }
    .card__desc{
        text-align: center;
        overflow: hidden;

        max-width: 230px;
    }
    

    @media ${devices.mobile}{
    }
    @media ${devices.tablet}{
    }
    @media ${devices.laptop}{
    }
    @media${devices.desktop}{
    }
`