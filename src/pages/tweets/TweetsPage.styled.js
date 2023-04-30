import styled from 'styled-components';
import devices from 'utils/styles/devices';
import bg from '../../images/background-image.jpg';

export const Wrapper = styled.div`
    padding-top: 78px;
    min-height: calc(100vh - 123px);

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
    max-width: 550px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    list-style: none;
    margin: 0;
    padding: 0;

    @media ${devices.tablet} {
        max-width: 800px;
    }

    @media ${devices.desktop} {
        max-width: 1200px;
        gap: 30px;
    }
`

export const Button = styled.button`
    cursor: pointer;
    padding: 10px 25px;
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

    @media ${devices.tablet} {
        padding: 15px 30px;
        font-size: 16px;
    }
`

export const Error = styled.h2`
    margin: 50px 0;
    color: var(--dark-accent-text-color);
`

export const UpBtnContainer = styled.div`
    cursor: pointer;

    width: 80px;
    height: 80px;

    position: fixed;
    bottom: 70px;
    right: 50px;
    z-index: 15;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: var(--light-text-color);
    opacity: 0.6;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.59), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;

    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        opacity: 1;
    }
`

export const UpButton = styled.button`
    cursor: pointer;

    width: 60px;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    border-radius: 50%;
    border: 8px solid transparent;

    background-color: var(--btn-hover-color);
    color: var(--light-text-color);
`