import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 20px;
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor][100]};
  color: ${({ theme, fontColor }) => theme.colors[fontColor][500]};
  border-radius: 4px;
`;

const Label = styled.label`
  ${({ theme }) => theme.fonts["14r"]};
`;

const EmojiBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 66px;
  height: 36px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.54);
  border-radius: 32px;
  ${({ theme }) => theme.fonts["16r"]};
`;

const Emoji = styled.div`
  font-size: 15px;
`;

const Likes = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

export { Container, Label, EmojiBadgeContainer, Emoji, Likes };
