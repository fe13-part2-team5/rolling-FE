import * as OutlinedButtonStyle from "./OutlinedButton.style";

function OutlinedButton({ width, height, onClick, $emoji, $disable, children }) {

    if($disable) onClick = () => {};

    return (
        <OutlinedButtonStyle.OutlinedButtonWrapper width={width} height={height} onClick={onClick} $emoji={$emoji} $disable={$disable}>
            {OutlinedButtonStyle.returnEmoji($emoji, height, $disable)}
            <OutlinedButtonStyle.OutlinedButtonText>{children}</OutlinedButtonStyle.OutlinedButtonText>
        </OutlinedButtonStyle.OutlinedButtonWrapper>
    );
  }
  
  export default OutlinedButton;