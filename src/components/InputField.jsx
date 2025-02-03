import { useState } from "react";
import * as T from "./TextField.style";

function InputField({ width = "100%" }) {
  const [error, setError] = useState(false);
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
      <T.Input
        width={width}
        placeholder="Placeholder"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        $error={error}
      />
      {error && <T.ErrorMessage>값을 입력해 주세요.</T.ErrorMessage>}
    </>
  );
}

export default InputField;
