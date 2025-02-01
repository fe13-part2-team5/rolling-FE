import styled from "styled-components";

const Input = styled.input`
  width: ${({ width }) => (width ? width : "100%")};
  height: 50px;
  margin: 0;
  padding: 12px 0 12px 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  /* Focus */
  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.gray[500]};
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[900]};
    }
  }

  /* Hover */
  &:hover {
    border-color: ${({ theme }) => theme.colors.gray[500]};
  }

  /* Active */
  &:active {
    border: 2px solid ${({ theme }) => theme.colors.gray[900]};
  }

  /* Disabled */
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[300]};
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[400]};
    }
  }

  /* Error */
  ${(props) =>
    props.error &&
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

export { Input, ErrorMessage };
