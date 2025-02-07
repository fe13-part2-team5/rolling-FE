import * as DeleteButtonStyle from "./DeleteButtonStyle";

function DeleteButton({ $disable }) {
    return (
      <DeleteButtonStyle.DeleteButtonWrapper $disable={$disable}>
        {DeleteButtonStyle.returnDeletedIcon($disable)}
      </DeleteButtonStyle.DeleteButtonWrapper>
    );
  }
  
  export default DeleteButton;