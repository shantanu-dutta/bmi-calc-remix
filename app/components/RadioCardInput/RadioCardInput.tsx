import type { FormInputPropsType } from "~/types/form-input-props.type";

export default function RadioCardInput({
  id,
  name,
  label,
}: FormInputPropsType) {
  return (
    <div className="radio-card">
      <input type="radio" name={name} id={id} />
      <label htmlFor={id}>
        <h5>{label}</h5>
      </label>
    </div>
  );
}
