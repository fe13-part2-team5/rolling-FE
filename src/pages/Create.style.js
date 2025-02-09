import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;

  &.section-wrap {
    ${({ theme }) => theme.flexLayout("column")}
    width: 100%;
    max-width: 720px;
  }

  &.txt-box {
    margin: 0;
  }

  &.profile-wrap {
    ${({ theme }) => theme.flexLayout(undefined, "flex-start", undefined)}
    margin-top: 12px;
    gap: 32px;
  }

  &.profile-select-wrap {
    ${({ theme }) => theme.flexLayout("column", undefined, "flex-start")}
    gap: 12px;
  }

  &.profile-list-wrap {
    ${({ theme }) => theme.flexLayout()}
    gap: 4px;
  }
`;

export const Section = styled.section`
  ${({ theme }) => theme.flexLayout("column", "flex-start", "flex-start")};
  width: 100%;
  margin-bottom: 50px;

  &.name {
    margin-top: 57px;
    gap: 12px;
  }

  &.select-background {
    margin-bottom: 69px;
  }

  &.select-font {
    margin-bottom: 62px;
  }
`;

export const SectionTitle = styled.h3`
  margin-bottom: 12px;
  ${({ theme }) => theme.fonts["24b"]}
  &.bg-select-title {
    margin-bottom: 4px;
  }
`;

export const StyledToggleButton = styled.div`
  margin: 24px 0 45px;
`;

// PostMessage Page

export const ProfileList = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 56px;
  background-color: black; // 임시 색상 (이미지 대체)
`;
