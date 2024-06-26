import { Container, Select, TextField } from "@mui/material";
import styled from "styled-components";

export const AppContainer = styled(Container)({
  marginTop: "2rem",
});

export const FormContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "1rem",
});

export const StyledTextField = styled(TextField)({
  marginRight: "1rem",
  flex: 1,
});

export const LanguageSelector = styled(Select)({
  marginLeft: "auto",
});
