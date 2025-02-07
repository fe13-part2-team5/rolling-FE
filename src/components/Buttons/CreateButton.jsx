import * as CreateButtonStyle from "./CreateButtonStyle";

function CreateButton({ onClick, $disable }) {

    if($disable) onClick = () => {};

    return (
        <CreateButtonStyle.ButtonWrapper onClick={onClick} $disable={$disable}>
            {CreateButtonStyle.returnPlusIcon()}
        </CreateButtonStyle.ButtonWrapper>
    );
  }
  
  export default CreateButton;