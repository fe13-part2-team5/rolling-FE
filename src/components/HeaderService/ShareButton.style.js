import styled from "styled-components";

export const Button = styled.button`
  width: 56px;
  height: 36px;
  margin-right: 24px;
  padding: 6px 16px;

  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white};

  cursor: pointer;
`;

export const ShareMenuWrapper = styled.div`
  position: absolute;
  top: 120%;
  left: 40px;
  z-index: 1000;

  width: 140px;
  height: 120px;
  padding: 10px 1px;

  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
`;

export const ShareOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 138px;
    height: 50px;

    border: none;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.white};

    ${({ theme }) => ({ ...theme.fonts["16r"] })};

    cursor: pointer;
  }

  button:hover {
    background: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;
