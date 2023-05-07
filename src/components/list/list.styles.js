import styled from "styled-components"
import { devices } from '../../theme-and-global-styles/screenSizes.js'

export const StyledList = styled.section`
    
    display: flex;
    flex-wrap: wrap;
    margin: 25px;
    gap: 25px;
    justify-content: space-evenly;

    @media ${devices.mobile}{
    }
    @media ${devices.tablet}{
    }
    @media ${devices.laptop}{
    }
    @media${devices.desktop}{
    }
`