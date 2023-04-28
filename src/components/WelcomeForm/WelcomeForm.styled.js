import styled from 'styled-components';

export const Form = styled.form`
    width: 500px;

    padding: 20px;
    margin-top: 60px;

    text-align: center;
`

export const MainTitle = styled.h2`
    margin: 0 0 22px 0;

    color: var(--dark-accent-text-color);
    font-size: 32px;
    font-weight: 700;
`

export const Label = styled.h3`
    margin: 0 0 12px 0;

    color: var(--dark-accent-text-color);
    font-size: 20px;
    font-weight: 500;
`

export const Input = styled.input`
    padding: 12px;
    margin-right: 5px;

    border-radius: 10px;
    border: 1px solid var(--dark-accent-text-color);

    background-color: var(--main-btn-color);
    color: var(--dark-text-color);

    font-family: inherit;
    font-size: 14px;

    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        border-color: var(--active-btn-color);
    }
`

export const Button = styled.button`
    padding: 12px 18px;

    border-radius: 10px;
    border: 1px solid transparent;

    background-color: var(--btn-hover-color);
    color: var(--light-text-color);

    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: var(--active-btn-color);
        color: var(--dark-text-color);
    }
`