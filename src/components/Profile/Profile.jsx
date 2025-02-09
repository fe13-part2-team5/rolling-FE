import { PersonIcon } from "../Icons";
import * as P from "./Profile.style";

function Profile() {
  return (
    <P.ProfileCircle>
      <PersonIcon height={32} color={"white"} />
    </P.ProfileCircle>
  );
}

function BoxProfile() {
  return (
    <P.ProfileBox>
      <P.Icon>Icon</P.Icon>
      <PersonIcon height={32} color={"white"} />
    </P.ProfileBox>
  );
}

export { Profile, BoxProfile };
