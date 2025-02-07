import SecondaryButtonWrapper from "./SecondaryButton.style";

function SecondaryButton({ width, height, onClick, $disable, children }) {

  if($disable) onClick = () => {};

  return(
    <SecondaryButtonWrapper width={width} height={height} onClick={onClick} $disable={$disable}>{ children }</SecondaryButtonWrapper>
  );
}

export default SecondaryButton;