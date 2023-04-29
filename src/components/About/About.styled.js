import styled from 'styled-components';
import devices from 'utils/styles/devices';

export const Container = styled.div`
    max-width: 800px;
    padding: 25px 20px;
    border-radius: 10px;

    background-color: var(--card-bg-color);
    color: var(--light-text-color);
    text-align: center;
`

export const Title = styled.h3`
    margin: 0;

    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;

    @media ${devices.tablet} {
        font-size: 28px;
    }
`

export const Text = styled.p`
    margin: 20px 0;

    text-align: left;
    font-size: 14px;
    font-weight: 400;

    @media ${devices.tablet} {
        font-size: 18px;
    }
`

export const Encouragement = styled.h4`
    margin: 0 0 25px 0;

    font-size: 17px;
    font-weight: 500;

    @media ${devices.tablet} {
        font-size: 22px;
    }
`

export const Button = styled.p`
    margin: 0 auto;
    padding: 10px;
    max-width: 400px;

    font-size: 15px;
    font-weight: 500;

    border-radius: 10px;

    background-color: var(--main-btn-color);
    color: var(--dark-text-color);

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: var(--active-btn-color);
    }

    @media ${devices.tablet} {
        padding: 15px;
        font-size: 24px;
    }
`