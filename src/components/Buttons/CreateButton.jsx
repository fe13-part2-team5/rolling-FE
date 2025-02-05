import * as CreateButtonStyle from "./CreateButtonStyle";

function CreateButton({ $disable }) {
    return (
        <CreateButtonStyle.ButtonWrapper $disable={$disable}>
            {CreateButtonStyle.returnPlusIcon()}
        </CreateButtonStyle.ButtonWrapper>
    );
  }
  
  export default CreateButton;