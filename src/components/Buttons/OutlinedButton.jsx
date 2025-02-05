import * as OutlinedButtonStyle from "./OutlinedButton.style";

function OutlinedButton({ width, height, $emoji, $disable, children }) {

    return (
        <OutlinedButtonStyle.OutlinedButtonWrapper width={width} height={height} $emoji={$emoji} $disable={$disable}>
            {OutlinedButtonStyle.returnEmoji($emoji, height, $disable)}
            <OutlinedButtonStyle.OutlinedButtonText>{children}</OutlinedButtonStyle.OutlinedButtonText>
        </OutlinedButtonStyle.OutlinedButtonWrapper>
    );
  }
  
  export default OutlinedButton;