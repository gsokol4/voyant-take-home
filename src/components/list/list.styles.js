import styled from "styled-components"
import { devices } from '../../theme-and-global-styles/screenSizes'

export const StyledList = styled.section`
    
    display: flex;
    flex-wrap: wrap;
    margin: 25px;
    background: blue;
    color: pink;
    gap: 25px;
    justify-content: space-evenly;

    .card_body{
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: blue;
        border: 1px solid black;
        border-radius: 5%;
        height: 350px;
        width: 250px;
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