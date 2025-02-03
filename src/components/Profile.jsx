import styled from "styled-components";
import Person from "../assets/icons/person.svg";

const ProfileCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 80px;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  width: 197px;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
`;

const Icon = styled.div`
  margin-left: 22px;
`;

function Profile() {
  return (
    <ProfileCircle>
      <Person height={32} color={"white"} />
    </ProfileCircle>
  );
}

function BoxProfile() {
  return (
    <ProfileBox>
      <Icon>Icon</Icon>
      <Person style={{ marginLeft: 46 }} height={32} color={"white"} />
    </ProfileBox>
  );
}

export { Profile, BoxProfile };
