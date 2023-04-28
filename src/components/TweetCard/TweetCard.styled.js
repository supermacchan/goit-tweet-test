import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;

    box-sizing: border-box;
    width: 380px;
    height: 460px;

    padding: 20px;
`

export const UpperPart = styled.div`
    display: flex;
    flex-direction: column;

    &::after {
        content: '';

        position: absolute;
        width: 380px;
        height: 8px;
        left: 0px;
        top: 214px;

        background: var(--light-text-color);
        box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
    }
`

export const Name = styled.p`
    position: absolute;
    top: 20px;
    right: 20px;

    margin: 0;

    color: var(--light-text-color);
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
`

export const Logo = styled.img`
    width: 76px;
`

export const Image = styled.img`
    align-self: center;
`

export const AvatarContainer = styled.div`
    width: 80px;
    height: 80px;
    object-fit: contain;
    overflow: hidden;

    box-sizing: border-box;
    border-radius: 50%;
    border: 8px solid var(--light-text-color);
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;

    position: absolute;
    top: 178px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
`

export const Avatar = styled.img`
    width: 100%;
`

export const LowerPart = styled.div`
    text-align: center;
`

export const Tweets = styled.p`
    margin-top: 62px;
    margin-bottom: 0;

    color: var(--light-text-color);
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;

`

export const Followers = styled.p`
    margin-top: 16px;
    margin-bottom: 0;

    color: var(--light-text-color);
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
`

export const Button = styled.button`
    cursor: pointer;

    margin-top: 26px;
    padding: 14px 10px;
    width: 196px;

    border: none;
    border-radius: 10px;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;

    background-color: var(--main-btn-color);
    color: var(--dark-text-color);

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background-color: var(--active-btn-color);
    }
`