import styled from 'styled-components';
import devices from 'utils/styles/devices';

export const ImgContainer = styled.div`
    width: 80px;
    height: 80px;
    object-fit: contain;
    overflow: hidden;

    @media ${devices.tablet} {
        width: 120px;
        height: 120px;
    }
`

export const Img = styled.img`
    width: 100%;
`

export const Greeting = styled.h2`
    margin: 20px 0 0 0;

    color: var(--dark-accent-text-color);
    font-size: 20px;
    font-weight: 700;

    @media ${devices.tablet} {
        font-size: 32px;
    }
`