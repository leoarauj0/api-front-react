import styled from 'styled-components';

export const STitle = styled.h1`
    font-size: 24px;
    color: ${props => (props.error ? 'red' : '#656565')};
    /*font-family: Arial, Helvetica, sans-serif;

    small{
        font-size: 14px;
        color: #001529
    }
    */
`;