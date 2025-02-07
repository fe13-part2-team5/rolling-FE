import * as ArrowButtonStyle from "./ArrowButton.style";

function ArrowButton({ direction }) {

    return (
      <ArrowButtonStyle.ArrowButtonWrapper>
        {ArrowButtonStyle.returnArrowImg(direction)}
      </ArrowButtonStyle.ArrowButtonWrapper>
    );
  }
  
export default ArrowButton;