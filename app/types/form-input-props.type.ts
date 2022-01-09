export type FormInputPropsType = {
  id: string;
  name: string;
  label: string;
};

export type RangeInputPropsType = Omit<FormInputPropsType, "label"> & {
  min: number;
  max: number;
  units: string;
  defaultValue?: number;
};
