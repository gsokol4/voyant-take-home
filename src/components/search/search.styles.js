import styled from "styled-components"
import { devices } from '../../theme-and-global-styles/screenSizes.js'

export const StyledSearch = styled.section`
    
    background-image: ${({theme}) => {return (`linear-gradient(to right, ${theme.colors.teal}, ${theme.colors.blue})`)}};
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    gap: 10px;
    color: ${({theme}) => {return theme.colors.white}};

    .search__form{
        display: flex;
        
    }
    .search__title{
        color: ${({theme}) => {return theme.colors.white}};
        font-size: 2rem;
        margin-bottom: 26px;
    }

    .search__util-buttons{
        display: flex;
        flex-wrap: wrap;
        max-width: 600px;
        gap: 10px;
        justify-content: center;
    }

    .search__button{
        color: ${({theme}) => {return theme.colors.white}};
        background: transparent;
        border-color: ${({theme}) => {return theme.colors.white}};
        margin-left: 5px;
    }

    .search__button:hover{
        animation-name: jump;
        animation-duration: .5s;
        animation-iteration-count: infinite;
        color: ${({theme}) => {return theme.colors.green}};
        background: ${({theme}) => {return theme.colors.white}};
        border-color: ${({theme}) => {return theme.colors.green}};
    }

    .search__button:active{
        color: ${({theme}) => {return theme.colors.white}};
        background: ${({theme}) => {return theme.colors.green}};
        border-color: ${({theme}) => {return theme.colors.white}};
    }

    @keyframes jump {
        0% {
            transform: translate(1px, 1px)
        }
        50% {
            transform: translate(-1px, -1px)
        }
        100% {
            transform: translate(0px, 0px)
        }
    }

    @media ${devices.mobile}{
    }
    @media ${devices.tablet}{
    }
    @media ${devices.laptop}{
        .search__title{
        font-size: 3rem;
        }
    }
    @media${devices.desktop}{

    }
`