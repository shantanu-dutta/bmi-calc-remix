export type FormInputPropsType = {
  id: string;
  name: string;
  label: string;
  value: string;
  checked: boolean;
};

export type RangeInputPropsType = Omit<
  FormInputPropsType,
  "label" | "value" | "checked"
> & {
  min: number;
  max: number;
  units: string;
  defaultValue?: number;
};
