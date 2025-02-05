import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 476px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 12px 0px #00000014;
  border-radius: 16px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 116px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 6px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts["20r"]};
`;

export const Name = styled.span`
  ${({ theme }) => theme.fonts["20b"]};
`;

// TODO: Badge 컴포넌트 구현되면 수정하기
export const Badge = styled.div``;

export const ProfileImage = styled.div`
  width: 56px;
  height: 56px;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  border-radius: 100px;
  outline: 1px solid ${({ theme }) => theme.colors.gray[200]};
`;

export const Date = styled.div`
  ${({ theme }) => theme.fonts["14r"]};
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const Content = styled.div`
  width: 100%;
  height: 256px;
  margin-top: 16px;
  font-family: ${({ $font }) => $font};
  ${({ theme }) => {
    const { fontFamily, ...rest } = theme.fonts["18r"];
    return { ...rest };
  }}
  color: ${({ theme }) => theme.colors.gray[500]};
  overflow-y: scroll;
`;

// TODO: Button 컴포넌트 구현되면 수정하기
export const Button = styled.button`
  width: 120px;
  height: 40px;
  margin-top: 24px;
  padding: 7px 16px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.purple[600]};
  border: 0px;
  border-radius: 6px;
  cursor: pointer;
`;
