import type { BmiStatusType } from "~/types/bmi-status.type";

export default function calculateBmiStatus(bmi: number): BmiStatusType {
  let stat = "healthy";
  if (bmi < 18.5) {
    stat = "under-weight";
  } else if (bmi > 24.5 && bmi <= 29.9) {
    stat = "over-weight";
  } else if (bmi > 30) {
    stat = "obese";
  }
  return stat as BmiStatusType;
}
