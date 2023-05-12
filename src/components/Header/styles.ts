import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 56px;
    background-color: ${({ theme }) => (theme.COLORS.GRAY_600)};
`;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`;

