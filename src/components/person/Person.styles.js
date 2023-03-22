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
    }
    @media ${devices.laptop}{
    }
    @media${devices.desktop}{
    }
`
const ImageContainer = styled.div(props)`
    //position: block;
    align-self: ${({props}) => {return props.alignSelf}};
    background: green;
    @media ${devices.mobile}{
    }
    @media ${devices.tablet}{
    }
    @media ${devices.laptop}{
    }
    @media${devices.desktop}{
    }
`


export {ImageContainer, StyledPerson}