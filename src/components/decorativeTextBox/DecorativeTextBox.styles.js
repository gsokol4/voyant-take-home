import styled from "styled-components"
import { devices } from '../../theme+globalStyles/screenSizes'

export const DecorativeTextBox = styled.div`
    height: 1000px;
    width: 1400px;
    background: rgb(234,239,241);
    border-radius: 30px;
    transform: rotate(0deg);
    position: relative;
    top: 10px;
    left: -50px;
    z-index: -1;
    display: none;
    @media ${devices.mobile}{
    }
    @media ${devices.tablet}{
    }
    @media ${devices.laptop}{

    }
    @media${devices.desktop}{
    }
`