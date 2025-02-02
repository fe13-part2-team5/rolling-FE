import { useState } from "react";
import { ErrorMessage, Input } from "./TextField.style";

function InputField() {
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setError(e.target.value === "");
  };

  return (
    <>
      {/* default width: 100% */}
      <Input
        width="300px"
        placeholder="Placeholder"
        value={value}
        onChange={handleChange}
        error={error}
      />
      {error && <ErrorMessage>값을 입력해 주세요.</ErrorMessage>}
    </>
  );
}

export default InputField;
