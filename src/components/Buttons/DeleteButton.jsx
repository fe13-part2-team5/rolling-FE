import * as DeleteButtonStyle from "./DeleteButtonStyle";

function DeleteButton({ onClick, $disable }) {

  if($disable) onClick = () => {};

    return (
      <DeleteButtonStyle.DeleteButtonWrapper onClick={onClick} $disable={$disable}>
        {DeleteButtonStyle.returnDeletedIcon($disable)}
      </DeleteButtonStyle.DeleteButtonWrapper>
    );
  }
  
  export default DeleteButton;