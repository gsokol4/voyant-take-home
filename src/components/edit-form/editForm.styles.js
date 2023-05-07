import styled from "styled-components"
import { devices } from '../../theme-and-global-styles/screenSizes.js'

export const StyledEditForm = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 100px, 0px;
    .edit_form__form{
      background: ${({theme}) => {return theme.colors.cyan}};
      border-radius: 20px;
      
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      justify-content: center;
    }
    .edit_form__label{
      color: ${({theme}) => {return theme.colors.white}};
      text-align: center;
    }

    button{
      color: ${({theme}) => {return theme.colors.white}};
      border-color: ${({theme}) => {return theme.colors.white}};
    }

    button:hover{
        animation-name: jump;
        animation-duration: .5s;
        animation-iteration-count: infinite;
        color: ${({theme}) => {return theme.colors.green}};
        background: ${({theme}) => {return theme.colors.white}};
        border-color: ${({theme}) => {return theme.colors.green}};
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
    }
    @media${devices.desktop}{
    }
`