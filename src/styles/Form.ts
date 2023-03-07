import styled from "styled-components";
import theme, { ThemeProps } from "./Theme";

export type DefaultThemes = {
  theme: ThemeProps;
};

export const FormHorizontal = styled.form`
  padding: 12px;
  border-radius: ${({ theme }) => theme.rounded.lg};
`;

export const FormUserProfile = styled.div`
  display: flex;
  padding: 12px;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  span {
    color: #ffffff;
    margin-top: 24px;
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: #444444 0px 0px 0px 6px,
      ${({ theme }: DefaultThemes) => theme.colors.blue500} 0px 0px 0px 6px,
      ${({ theme }: DefaultThemes) => theme.colors.blue500} 0px 0px 0px 9px;
  }
`;

export const FormTitle = styled.h1`
  padding: 12px;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.8rem;
  text-align: center;
`;

export const FormGroup = styled.div`
  padding: 10px;
`;

export const FormControl = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  padding: 12px;
  font-size: 1.2rem;
  font-family: "Lexend Deca", sans-serif;
  border-radius: ${({ theme }: DefaultThemes) => theme.rounded.lg};
`;

export const FormLabel = styled.label``;

export const FormSubmit = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.2s;
  border-radius: ${({ theme }: DefaultThemes) => theme.rounded.lg};
  background-color: ${({ theme }: DefaultThemes) => theme.colors.blue500};

  &:hover {
    background-color: ${({ theme }: DefaultThemes) => theme.colors.blue600};
  }
`;

FormHorizontal.defaultProps = {
  theme,
};

FormUserProfile.defaultProps = {
  theme,
};

FormControl.defaultProps = {
  theme,
};

FormSubmit.defaultProps = {
  theme,
};
