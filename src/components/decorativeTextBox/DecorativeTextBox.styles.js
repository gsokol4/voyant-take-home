import styled from "styled-components"
import { devices } from '../../theme+globalStyles/screenSizes'

export const DecorativeTextBox = styled.div`
    height: 1200px;
    width: 1400px;
    background: rgb(234,239,241);
    border-radius: 30px;
    transform: rotate(50deg);
    z-index: -1;
    //position: absolute;
    right: 975px;
    bottom:900px;
    position: relative;
    ::after{
        background: rgb(234,239,241);
        position: relative;
    }
    @media ${devices.mobile}{
    }
    @media ${devices.tablet}{
        height: 1200px;
        width: 1200px;
        bottom: 800px;
        right: 800px;
    }
    @media ${devices.laptop}{
        height: 1200px;
        width: 1200px;
        bottom: 800px;
        right: 700px;
    }
    @media${devices.desktop}{
        height: 1400px;
        width: 1400px;
        bottom: 900px;
        right: 300px;
    }
`