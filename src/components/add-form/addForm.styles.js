import styled from "styled-components"
import { devices } from '../../theme-and-global-styles/screenSizes.js'

export const StyledAddForm = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    margin: 24px;
    background: ${({theme}) => {return theme.colors.teal}};
    color: ${({theme}) => {return theme.colors.white}};
    .add_form__title{
      
    }
    .add_form__form{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    .add_form__label{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .add_form__button{
      width: 200px;
      height: 75px;
      font-size: 1.25em;
      cursor: pointer;
      background: ${({theme}) => {return theme.colors.white}};
      color: ${({theme}) => {return theme.colors.green}};
      border-color: ${({theme}) => {return theme.colors.green}};
    }
    .add_form__button:hover{
        animation-name: spin;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        color: ${({theme}) => {return theme.colors.green}};
        background: ${({theme}) => {return theme.colors.white}};
        border-color: ${({theme}) => {return theme.colors.green}};
    }

    .add_form__button:active{
        color: ${({theme}) => {return theme.colors.white}};
        background: ${({theme}) => {return theme.colors.green}};
        border-color: ${({theme}) => {return theme.colors.white}};
    }

    @keyframes spin {
        0% {
            transform: rotate(2deg);
        }
        20%{
            transform: rotate(-2deg);
        }
        40% {
            transform: rotate(2deg);
        }
        80% {
            transform: rotate(-10deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media ${devices.mobile}{
    }
    @media ${devices.tablet}{
    }
    @media ${devices.laptop}{
    }
    @media${devices.desktop}{
    }

  */
`