import { useEffect, useRef, useState } from "react";
import { SelectBox, Label, Options, Option } from "./TextField.style";

// 데이터 예시
const optionData = [
  { key: 1, value: "1번" },
  { key: 2, value: "2번" },
  { key: 3, value: "3번" },
  { key: 4, value: "4번" },
];

function Dropdown({ width = "100%" }) {
  const selectRef = useRef(null);
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState(optionData[0].value);

  const handleChangeSelectValue = (e) => {
    setCurrentValue(e.target.getAttribute("value"));
  };

  useEffect(() => {
    // DOM(Dropdown) 외부 클릭 시, 목록 닫힘
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  return (
    <>
      {/* default width: 100% */}
      <SelectBox
        width={width}
        onClick={() => setIsShowOptions((prev) => !prev)}
        ref={selectRef}
      >
        <Label $show={isShowOptions}>{currentValue}</Label>
        <Options $show={isShowOptions}>
          {optionData.map((data) => (
            <Option
              key={data.key}
              value={data.value}
              onClick={handleChangeSelectValue}
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
