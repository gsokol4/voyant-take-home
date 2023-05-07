import styled from "styled-components"
import { devices } from '../../theme-and-global-styles/screenSizes.js'

export const StyledLogo = styled.div`
width: 100px;
object-fit: cover;
margin: 15px 15px 15px 25px;

    @media ${devices.mobile}{
    }
    @media ${devices.tablet}{
    }
    @media ${devices.laptop}{
        width: 175px;
    }
    @media${devices.desktop}{
    }
`