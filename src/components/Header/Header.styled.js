import styled from 'styled-components';
import devices from 'utils/styles/devices';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;

    width: 100%;
    padding: 8px 20px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--main-btn-color);

    @media ${devices.tablet} {
        padding: 8px 40px;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: 8px 20px;
    box-sizing: border-box;

    @media ${devices.tablet} {
        padding: 8px 40px;
    }
`

export const HomePageLink = styled.span`
    margin: 0 auto;

    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;

    color: var(--dark-text-color);

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        color: var(--dark-accent-text-color);
    }

    @media ${devices.tablet} {
        font-size: 18px;
    }
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const AvatarContainer = styled.div`
    width: 40px;
    height: 40px;
    object-fit: contain;
    object-position: center;
    overflow: hidden;
`

export const Img = styled.img`
    width: 100%;
`

export const Greeting = styled.p`
    color: var(--dark-text-color);

    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;

    @media ${devices.tablet} {
        font-size: 16px;
    }
`

export const LogoutBtn = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: var(--dark-text-color);

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        color: var(--dark-accent-text-color);
    }
`