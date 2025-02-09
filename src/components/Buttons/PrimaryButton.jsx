 import PrimaryButtonWrapper from "./PrimaryButton.style";

function PrimaryButton({ width, height, onClick, $disable, children }) {

  if($disable) onClick = () => {};

  return(
    <PrimaryButtonWrapper width={width} height={height} onClick={onClick} $disable={$disable}>{ children }</PrimaryButtonWrapper>
  );
}

export default PrimaryButton;