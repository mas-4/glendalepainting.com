import styled from 'styled-components'

export const TitleBox = styled.h1`
    font-size: ${props => props.size || props.theme.size8};
    width: ${props => props.width};
    border-left ${props => props.borderSize || props.theme.size2} solid ${props => props.borderColor};
    color: ${props => props.color};
    margin: 0 auto;
    padding: 0 0 0 1.6rem;
    line-height: 0.9;
    text-align: left;
`