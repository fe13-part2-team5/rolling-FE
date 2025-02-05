import * as ToggleButtonStyle from "./ToggleButton.style";

function ToggleButton({ width, height, handleToggle, $isToggled}) {

    return (
      <ToggleButtonStyle.ToggleButtonWrapper>
        <ToggleButtonStyle.ColorButton width={width} height={height} onClick={handleToggle} $isToggled={$isToggled} >컬러</ToggleButtonStyle.ColorButton>
        <ToggleButtonStyle.ImgButton width={width} height={height} onClick={handleToggle} $isToggled={$isToggled} >이미지</ToggleButtonStyle.ImgButton>
      </ToggleButtonStyle.ToggleButtonWrapper>
    );
  }
  
  export default ToggleButton;