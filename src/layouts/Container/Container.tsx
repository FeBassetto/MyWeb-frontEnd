import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import IStyledTheme from "../../models/IStyledtheme/IStyledTheme";
import styles from "./Container.module.css";

const StyledContainer = styled.main`
  background-color: ${({ theme }: IStyledTheme) => theme.primaryBackground};
`;

const Container = ({ children }: PropsWithChildren) => {
  return (
    <StyledContainer className={styles.container}>{children}</StyledContainer>
  );
};

export default Container;
