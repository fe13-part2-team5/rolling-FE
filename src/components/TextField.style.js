import styled, { css } from "styled-components";

// Common TextField Styles
const commonTextfieldStyle = css`
  width: ${({ width }) => width};
  height: 50px;
  margin: 0;
  padding: 12px 0 12px 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.gray[500]};
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[900]};
    }
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.colors.gray[900]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[300]};
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[400]};
    }
  }

  /* Error */
  ${(props) =>
    props.onError &&
    `
      border-color: ${props.theme.colors.error};
      &::placeholder {
        color: ${props.theme.colors.gray[900]};
      }
  `}
`;
const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fonts["12r"]};
`;

commonTextfieldStyle.defaultProps = {
  width: "100%",
};

// InputField
const Input = styled.input`
  ${commonTextfieldStyle}
`;

// Dropdown
const Options = styled.select`
  ${commonTextfieldStyle}
  &:active {
    border-color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

const Option = styled.option``;

export { Input, ErrorMessage, Options, Option };
