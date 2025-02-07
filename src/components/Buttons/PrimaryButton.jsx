import PrimaryButtonWrapper from "./PrimaryButton.style";

function PrimaryButton({ width, height, $disable, children }) {
  return(
    <PrimaryButtonWrapper width={width} height={height} $disable={$disable}>{ children }</PrimaryButtonWrapper>
  );
}

export default PrimaryButton;