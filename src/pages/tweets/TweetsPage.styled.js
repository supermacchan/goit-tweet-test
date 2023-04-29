import styled from 'styled-components';
import bg from '../../images/background-image.jpg';

export const Wrapper = styled.div`
    padding-top: 68px;

    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    box-sizing: border-box;
`

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    list-style: none;
    margin: 0;
    padding: 0;
`

export const Button = styled.button`
    cursor: pointer;
    padding: 15px 25px;
    margin-top: 20px;

    border: none;
    border-radius: 10px;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;

    background-color: var(--main-btn-color);
    color: var(--dark-text-color);

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: var(--btn-hover-text-color);
    }
`