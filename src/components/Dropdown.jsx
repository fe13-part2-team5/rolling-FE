import { useState } from "react";
import { ErrorMessage, Options, Option } from "./TextField.style";

function Dropdown() {
  const [error, setError] = useState(false);
  const [value, setValue] = useState("placeholder");

  const handleChange = (e) => {
    setValue(e.target.value);
    setError(e.target.value === "");
  };

  return (
    <>
      {/* default width: 100% */}
      <Options
        width="300px"
        value={value}
        onChange={handleChange}
        error={error}
      >
        <Option value="placeholder" disabled hidden>
          Placeholder
        </Option>
        <Option>1번</Option>
        <Option>2번</Option>
        <Option>3번</Option>
      </Options>
      {error && <ErrorMessage>값을 입력해 주세요.</ErrorMessage>}
    </>
  );
}

export default Dropdown;
