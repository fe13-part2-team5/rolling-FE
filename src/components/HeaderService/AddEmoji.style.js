import styled from "styled-components";

export const Button = styled.button`
  width: 88px;
  height: 36px;
  padding: 6px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white};

  cursor: pointer;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  width: 56px;
  height: 24px;
  white-space: nowrap;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray[900]};
  ${({ theme }) => ({ ...theme.fonts["16r"] })};
  font-weight: 500;

  white-space: nowrap;
`;

export const EmojiPickerWrapper = styled.div`
  position: absolute;
  top: 130%;
  right: 100px;
  z-index: 999;

  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;
