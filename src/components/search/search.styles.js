import styled from "styled-components"
import { devices } from '../../theme-and-global-styles/screenSizes'

export const StyledSearch = styled.section`
    
    background: purple;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    gap: 10px;

    .search_form{
        display: flex;
        
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