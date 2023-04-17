import styled from "styled-components"
import { devices } from '../../theme+globalStyles/screenSizes'

const StyledPerson = styled.img`
    //position: block;
    //background: green;
    width: 100%;
    display:none;
    @media ${devices.mobile}{
        display: block;
        width: 600px;
        margin: 60px 0px 0px 0px;
        width: auto;
        float: left;
    }
    @media ${devices.tablet}{
        width: 375px;
    }
    @media ${devices.laptop}{
    }
    @media${devices.desktop}{
    }
`
const ImageContainer = styled.div`
    display: none;
    position: block;
    align-self: ${props => props.alignSelf};
    @media ${devices.mobile}{
    }
    @media ${devices.tablet}{
        display: block;
    }
    @media ${devices.laptop}{
    }
    @media${devices.desktop}{
    }
`


export {ImageContainer, StyledPerson}