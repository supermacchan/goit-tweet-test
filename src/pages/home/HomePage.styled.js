import styled from 'styled-components';
import devices from 'utils/styles/devices';
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

    padding: 60px 20px 0 20px;

    @media ${devices.tablet} {
        padding: 60px 40px 0 40px;
    }

    @media ${devices.desktop} {
        padding: 100px 40px 0 40px;
    }
`