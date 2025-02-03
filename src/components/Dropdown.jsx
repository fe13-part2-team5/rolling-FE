import { useEffect, useRef, useState } from "react";
import * as T from "./TextField.style";

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
      <T.SelectBox
        width={width}
        onClick={() => setIsShowOptions((prev) => !prev)}
        ref={selectRef}
      >
        <T.Label $show={isShowOptions}>{currentValue}</T.Label>
        <T.Options $show={isShowOptions}>
          {optionData.map((data) => (
            <T.Option
              key={data.key}
              value={data.value}
              onClick={handleChangeSelectValue}
            >
              {data.value}
            </T.Option>
          ))}
        </T.Options>
      </T.SelectBox>
    </>
  );
}

export default Dropdown;
