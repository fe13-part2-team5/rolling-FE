import SecondaryButtonWrapper from "./SecondaryButton.style";

function SecondaryButton({ width, height, $disable, children }) {
  return(
    <SecondaryButtonWrapper width={width} height={height} $disable={$disable}>{ children }</SecondaryButtonWrapper>
  );
}

export default SecondaryButton;