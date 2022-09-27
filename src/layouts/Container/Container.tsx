import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import IStyledTheme from "../../models/styledtheme/IStyledTheme";
import styles from "./Container.module.css";

const StyledContainer = styled.main`
  background-color: ${({ theme }: IStyledTheme) => theme.primaryBackground};
`;

const Container = ({ children }: PropsWithChildren) => {
  return (
    <StyledContainer className={styles.container}> <h1>oi</h1>{children}</StyledContainer>
  );
};

export default Container;
