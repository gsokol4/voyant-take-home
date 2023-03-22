import styled from "styled-components"
import { devices } from '../../theme+globalStyles/screenSizes'

export const StyledCourseHeader = styled.section`
    min-height: 60vh;
    background: ${({theme}) => {return theme.colors.primaryTextColor}};
    display: flex;
    padding: 0% 10%;
    justify-content: center;
    align-content: center;
    color: ${({theme}) => {return theme.colors.primaryBackgroundColor}};
    background: purple;
    .text-display{
        display: flex;
        flex-direction: column;
        padding: 0 0 0px 0px;
        align-content: center;
        justify-content: center;
        max-width: 1200px;
        position: relative;
    
        .text-display-header{
            font-size: 1.5em;
            margin: 18px;
        }

        .text-display-content{
            font-size: 1.2em;
            background: pink;
            font-weight: lighter;
        }
    
    
    }

    @media ${devices.mobile}{
    }
    @media ${devices.tablet}{
        .text-display{ 
            .text-display-header{
            font-size: 2.5em;
            margin: 24px;
            }
        }
    }
    @media ${devices.laptop}{

    }
    @media${devices.desktop}{
    }
`