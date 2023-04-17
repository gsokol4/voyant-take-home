import styled from "styled-components"
import { devices } from '../../theme+globalStyles/screenSizes'

export const StyledCallToAction = styled.section`
    height: 30vh;
    min-height: 200px;
    max-height: 428px;
    background: ${({theme})=>{return theme.colors.primaryColor}};
    background: ${ ({theme}) => {return theme.colors.primaryHighlight} };
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
    .callToAction__Title{
        color: ${({theme}) => {return theme.colors.primaryTextColor}};
        font-size: 2.5em;
        font-weight: lighter;
        text-align: center
    }

    .callToAction__Button{
        background: ${({theme}) => {return theme.colors.primaryTextColor}};
        color: ${({theme}) => {return theme.colors.backHighlight}};
        border-color: ${({theme}) => {return theme.colors.primaryHighlight}};
        height: 60px;
        width: 300px;
        font-size: 1.5em;
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

