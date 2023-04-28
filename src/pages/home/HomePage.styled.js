import styled from 'styled-components';
import bg from '../../images/background-image.jpg';

export const Wrapper = styled.div`
    height: calc(100vh - 55px);
    width: 100vw;

    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 40px;
`