// @flow
import React from "react";
import styled from "@emotion/styled";

const StyledPageContainer = styled.div({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  alignItems: "center",
  padding: "32px",
});

export const PageContainer = ({
  children,
}: {
  children: React$Node,
}): React$Node => <StyledPageContainer>{children}</StyledPageContainer>;
