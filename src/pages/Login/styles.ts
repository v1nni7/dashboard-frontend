import styled from "styled-components";
import {
  FormHorizontal,
  FormControl,
  FormLabel,
  FormGroup,
} from "../../styles/Form";
import theme from "../../styles/Theme";

export const WrapperLogin = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;

  ${FormHorizontal} {
    width: 420px;
    margin: 32px auto;
    background-color: #444444;

    ${FormGroup} {
      position: relative;

      ${FormLabel} {
        top: 20px;
        left: 18px;
        font-size: 2rem;
        position: absolute;

        svg {
          color: ${({ theme }) => theme.colors.blue500};
        }
      }

      ${FormControl} {
        outline: none;
        font-weight: 500;
        font-size: 1.4rem;
        padding-left: 46px;
        background-color: #cccccc;
        border: 2px solid transparent;

        &:focus {
          border: 2px solid ${({ theme }) => theme.colors.blue500};
        }
      }
    }
  }
`;

WrapperLogin.defaultProps = {
  theme,
};
