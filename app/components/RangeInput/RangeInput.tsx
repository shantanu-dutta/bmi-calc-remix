import { useState } from "react";
import type { RangeInputPropsType } from "~/types/form-input-props.type";

export default function RangeInput({
  id,
  name,
  min,
  max,
  units,
  defaultValue = (min + max) / 2,
}: RangeInputPropsType) {
  const [current, setCurrent] = useState(defaultValue);

  return (
    <div className="range-container">
      <input
        type="range"
        name={name}
        min={min}
        max={max}
        defaultValue={defaultValue}
        id={id}
        onChange={(event) => {
          const value = Number(event.target.value);
          setCurrent(value);
        }}
      />
      <div className="value-container">
        <span className="value">{current}</span>
        <span className="units">{units}</span>
      </div>
    </div>
  );
}
