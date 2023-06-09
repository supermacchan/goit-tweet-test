import styled from 'styled-components';
import bg from '../../images/background-image.jpg';

export const Wrapper = styled.section`
    height: calc(100vh - 122px);
    padding-top: 68px;

    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    text-align: center;
`

export const Message = styled.h2`
    margin: 50px 0 0 0;

    color: var(--dark-accent-text-color);
`

export const LoaderContainer = styled.div`
    padding: 40px 0;
`