import React, { PropsWithChildren } from "react";
import styled from "styled-components";

import { colors } from "../../styles/colors";

const StyledContainer = styled.div`
  background-color: ${colors.primary};
  min-height: 100vh;
`;

const Container: React.FC<PropsWithChildren<any>> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
