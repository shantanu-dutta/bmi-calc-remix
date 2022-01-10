import type { FormInputPropsType } from "~/types/form-input-props.type";

export default function RadioCardInput({
  id,
  name,
  label,
  value,
  checked,
}: FormInputPropsType) {
  return (
    <div className="card hoverable radio-card">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        defaultChecked={checked}
      />
      <label htmlFor={id}>
        <h5>{label}</h5>
      </label>
    </div>
  );
}
