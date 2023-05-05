import styled from "styled-components"
import { devices } from '../../theme-and-global-styles/screenSizes'

export const StyledEditButton = styled.button`
border: none;
padding: 0;
font: inherit;
cursor: pointer;
outline: inherit;
background: transparent;


position: absolute;

right: 30px;
top: 3px;
width: 30px;
height: 30px;

border-radius: 4px;
:hover{
  animation-name: hop;
  animation-duration: .5s;
  animation-iteration-count: 2;
}

@keyframes hop {
        0% {
            transform: translate(2px, 0px)
        }
        50% {
            transform: translate(-2px, 0px)
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