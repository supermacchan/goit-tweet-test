import styled from 'styled-components';
import devices from 'utils/styles/devices';

export const Form = styled.form`
    max-width: 500px;
    text-align: center;
`

export const MainTitle = styled.h2`
    margin: 0 0 22px 0;

    color: var(--dark-accent-text-color);
    font-size: 24px;
    font-weight: 700;

    @media ${devices.tablet} {
        font-size: 32px;
    }
`

export const Label = styled.h3`
    margin: 0 0 12px 0;

    color: var(--dark-accent-text-color);
    font-size: 16px;
    font-weight: 500;

    @media ${devices.tablet} {
        font-size: 20px;
    }
`

export const Input = styled.input`
    padding: 12px;
    margin-right: 5px;

    border-radius: 10px;
    border: 1px solid var(--dark-accent-text-color);

    background-color: var(--main-btn-color);
    color: var(--dark-text-color);

    font-family: inherit;
    font-size: 12px;

    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        border-color: var(--active-btn-color);
    }

    @media ${devices.tablet} {
        font-size: 14px;
    }
`

export const Button = styled.button`
    cursor: pointer;
    padding: 12px;

    border-radius: 10px;
    border: 1px solid transparent;

    background-color: var(--btn-hover-color);
    color: var(--light-text-color);

    font-family: inherit;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: var(--active-btn-color);
        color: var(--dark-text-color);
    }

    @media ${devices.tablet} {
        padding: 12px 18px;
        font-size: 14px;
    }
`