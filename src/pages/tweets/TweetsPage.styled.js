import styled from 'styled-components';
import bg from '../../images/background-image.jpg';

export const Wrapper = styled.div`
    padding-top: 68px;
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
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

`