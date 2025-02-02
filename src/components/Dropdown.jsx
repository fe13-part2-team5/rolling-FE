import { useState } from "react";
import { SelectBox, Label, Options, Option } from "./TextField.style";

const optionData = [
  { key: 1, value: "1번" },
  { key: 2, value: "2번" },
  { key: 3, value: "3번" },
  { key: 4, value: "4번" },
];

function Dropdown() {
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState(optionData[0].value);

  const handleChangeSelect = (e) => {
    setCurrentValue(e.target.getAttribute("value"));
  };

  return (
    <>
      <SelectBox
        width="300px"
        onClick={() => setIsShowOptions((prev) => !prev)}
      >
        <Label show={isShowOptions}>{currentValue}</Label>
        <Options show={isShowOptions}>
          {optionData.map((data) => (
            <Option
              key={data.key}
              value={data.value}
              onClick={handleChangeSelect}
            >
              {data.value}
            </Option>
          ))}
        </Options>
      </SelectBox>
    </>
  );
}

export default Dropdown;
