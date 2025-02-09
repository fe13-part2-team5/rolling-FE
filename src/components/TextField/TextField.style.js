import styled, { css } from "styled-components";

// Common TextField Styles
export const commonTextfieldStyles = css`
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

  ${(props) =>
    props.$error &&
    css`
      border-color: ${props.theme.colors.error};
      &::placeholder {
        color: ${props.theme.colors.gray[900]};
      }
    `}
`;

export const textfieldStateStyles = css`
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
`;

export const ErrorMessage = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.error};
  ${({ theme }) => theme.fonts["12r"]};
`;

// InputField
export const Input = styled.input`
  ${commonTextfieldStyles}
  ${textfieldStateStyles}
`;

// Dropdown
export const SelectBox = styled.div`
  ${commonTextfieldStyles}
  position: relative;
  padding: 0;
  border: none;
  cursor: pointer;
`;

export const Label = styled.label`
  ${commonTextfieldStyles}
  ${textfieldStateStyles}
    ${({ theme }) => theme.flexLayout(undefined, "flex-start")}
    gap: 246px;
  cursor: pointer;
  border: ${(props) =>
    props.$show
      ? `2px solid ${props.theme.colors.gray[500]}`
      : `1px solid ${props.theme.colors.gray[300]}`};
  border: ${(props) =>
    props.$show
      ? `2px solid ${props.theme.colors.gray[500]}`
      : `1px solid ${props.theme.colors.gray[300]}`};

  &:active {
    border-color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

export const Options = styled.ul`
  max-height: ${(props) => (props.$show ? "none" : "0")};
  margin-top: 8px;
  padding: 0;
  border: ${(props) =>
    props.$show ? `1px solid ${props.theme.colors.gray[300]}` : "none"};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  list-style: none;
`;

export const Option = styled.li`
  padding: 12px 16px;
  &:first-child {
    margin-top: 10px;
  }
  &:last-child {
    margin-bottom: 10px;
  }
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;
