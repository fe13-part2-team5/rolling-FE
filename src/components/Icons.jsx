import Add from "../assets/icons/add.svg";
import ArrowDown from "../assets/icons/arrow_down.svg";
import ArrowLeft from "../assets/icons/arrow_left.svg";
import ArrowRight from "../assets/icons/arrow_right.svg";
import Check from "../assets/icons/check.svg";
import Close from "../assets/icons/close.svg";
import Completed from "../assets/icons/completed.svg";
import Deleted from "../assets/icons/deleted.svg";
import Edit from "../assets/icons/edit.svg";
import Person from "../assets/icons/person.svg";
import Plus from "../assets/icons/plus.svg";
import Share from "../assets/icons/share.svg";
import Logo from "../assets/icons/logo.svg";
import { theme } from "../styles/theme";

const AddIcon = ({ size = 24, color = theme.colors.black }) => {
  return <Add width={size} heigth={size} color={color} />;
};

const ArrowDownIcon = ({ size = 24, color = theme.colors.black }) => {
  return <ArrowDown width={size} heigth={size} color={color} />;
};

const ArrowLeftIcon = ({ size = 24, color = theme.colors.black }) => {
  return <ArrowLeft width={size} heigth={size} color={color} />;
};

const ArrowRightIcon = ({ size = 24, color = theme.colors.black }) => {
  return <ArrowRight width={size} heigth={size} color={color} />;
};

const CheckIcon = ({ size = 24, color = theme.colors.black }) => {
  return <Check width={size} heigth={size} color={color} />;
};

const CloseIcon = ({ size = 24, color = theme.colors.black }) => {
  return <Close width={size} heigth={size} color={color} />;
};

const CompletedIcon = ({ size = 24, color = theme.colors.black }) => {
  return <Completed width={size} heigth={size} color={color} />;
};

const DeletedIcon = ({ size = 24, color = theme.colors.black }) => {
  return <Deleted width={size} heigth={size} color={color} />;
};

const EditIcon = ({ size = 24, color = theme.colors.black }) => {
  return <Edit width={size} heigth={size} color={color} />;
};

const PersonIcon = ({ size = 24, color = theme.colors.black }) => {
  return <Person width={size} heigth={size} color={color} />;
};

const PlusIcon = ({ size = 24, color = theme.colors.black }) => {
  return <Plus width={size} heigth={size} color={color} />;
};

const ShareIcon = ({ size = 24, color = theme.colors.black }) => {
  return <Share width={size} heigth={size} color={color} />;
};

const LogoIcon = ({ size = 24 }) => {
  return <Logo width={size} heigth={size} />;
};

export {
  AddIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  CloseIcon,
  CompletedIcon,
  DeletedIcon,
  EditIcon,
  PersonIcon,
  PlusIcon,
  ShareIcon,
  LogoIcon,
};
