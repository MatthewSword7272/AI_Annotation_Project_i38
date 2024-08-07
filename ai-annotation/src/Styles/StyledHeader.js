import styled from 'styled-components'
import * as Constants from "../constants";

const StyledHeader = styled.header`
    text-align: center;
    font-size: 20px;
    background-color: ${Constants.WHITE};
    border-bottom: 5px solid green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;

const StyledHeaderSection = styled.div`
    display: flex;
    align-items: center;
    column-gap: 50px;
`

const StyledHeaderLogo = styled.img`
    width: 7em;
`

const StyledHeaderLinks = styled.div`
    display: flex;
    column-gap: 70px;

    h4 {
        font-weight: 300;
    }
`

const StyledHeaderProfile = styled.div`
    display: flex;
    column-gap: 20px;
`

export {StyledHeader, StyledHeaderLogo, StyledHeaderLinks, StyledHeaderProfile, StyledHeaderSection};