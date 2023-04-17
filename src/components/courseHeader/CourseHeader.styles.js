import styled from "styled-components"
import { devices } from '../../theme+globalStyles/screenSizes'

const StyledCourseHeader = styled.section`
    height: 70vh;
    min-height: 500px;
    max-height: 70vh;
    //background: ${({theme}) => {return theme.colors.primaryTextColor}};
    display: flex;
    padding: 0% 10%;
    justify-content: center;
    align-content: center;
    color: ${({theme}) => {return theme.colors.primaryBackgroundColor}};
    overflow: hidden;
    .text-display{
        display: flex;
        flex-direction: column;
        padding: 0 0 0px 0px;
        align-content: center;
        justify-content: center;
        max-width: 1200px;
        position: relative;
        margin: 18px;
        row-gap: 1.5em;
    
        .text-display-header{
            font-size: 1.3em;
        }

        .text-display-content{
            font-size: 1em;
            font-weight: lighter;
        }
        .text-display-p{
            font-weight: lighter;
        }
    
    
    }

    @media ${devices.mobile}{
    }
    @media ${devices.tablet}{
        .text-display{ 
        margin: 24px;
            .text-display-header{
            font-size: 1.5em;
            margin-right: -150px;
            }
            .text-display-content{
            margin-right: -75px;
            }
            .text-display-content{
            margin-right: -50px;
            }
        }
        
    }
    @media ${devices.laptop}{
        .text-display{ 
            .text-display-header{
            font-size: 2.5em;
            }
            .text-display-content{
            font-size: 1.3em;
        }
        }
    }
    @media${devices.desktop}{
    }
`

const StyledCourseContainer = styled.section`
    overflow: hidden;
    min-height: 500px;
    max-height:70vh;
    @media ${devices.mobile}{
    }
    @media ${devices.tablet}{

    }
    @media ${devices.laptop}{

    }
    @media${devices.desktop}{
    }
`
export {StyledCourseContainer, StyledCourseHeader}