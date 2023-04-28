import styled from 'styled-components';

export const List = styled.ul`
    list-style: none;
    margin: 0 0 20px 0;
    padding: 0;

    display: flex;
    gap: 8px;
`

export const Button = styled.button`
    cursor: pointer;
    padding: 12px 10px;

    border: none;
    border-radius: 10px;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

    background-color: var(--main-btn-color);
    color: var(--dark-text-color);

    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: var(--btn-hover-text-color);
    }
`