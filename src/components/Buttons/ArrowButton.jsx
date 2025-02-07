import * as ArrowButtonStyle from "./ArrowButton.style";

function ArrowButton({ direction, onClick }) {

    return (
      <ArrowButtonStyle.ArrowButtonWrapper onClick={onClick}>
        {ArrowButtonStyle.returnArrowImg(direction)}
      </ArrowButtonStyle.ArrowButtonWrapper>
    );
  }
  
export default ArrowButton;