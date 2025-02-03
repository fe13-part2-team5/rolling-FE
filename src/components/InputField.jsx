import { useState } from "react";
import { ErrorMessage, Input } from "./TextField.style";

function InputField() {
  const [error, setError] = useState(true);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setError(e.target.value === "");
  };

  const handleBlur = () => {
    setError(value === "");
  };

  return (
    <>
      {/* default width: 100% */}
      <Input
        width="300px"
        placeholder="Placeholder"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error}
      />
      {error && <ErrorMessage>값을 입력해 주세요.</ErrorMessage>}
    </>
  );
}

export default InputField;
