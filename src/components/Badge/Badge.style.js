import styled from "styled-components";

export const Container = styled.div`
  ${({ theme }) => theme.flexLayout()}
  width: 41px;
  height: 20px;
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor][100]};
  color: ${({ theme, fontColor }) => theme.colors[fontColor][500]};
  border-radius: 4px;
`;

export const Label = styled.label`
  ${({ theme }) => theme.fonts["14r"]};
`;

export const EmojiBadgeContainer = styled.div`
  ${({ theme }) => theme.flexLayout()}
  gap: 4px;
  width: 66px;
  height: 36px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.54);
  border-radius: 32px;
  ${({ theme }) => theme.fonts["16r"]};
`;

export const Emoji = styled.div`
  font-size: 15px;
`;

export const Likes = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;
