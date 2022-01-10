import clsx from "clsx";
import type { BmiStatusType } from "~/types/bmi-status.type";

type BmiStatusCardPropsType = {
  bmi: number;
  status: BmiStatusType;
};

export default function BmiStatusCard({ bmi, status }: BmiStatusCardPropsType) {
  return (
    <div className="card bmi-card">
      <div className="title">Your Health</div>
      <div className={clsx("bmi", status)}>{bmi}</div>
      <div className={clsx("status", status)}>{status}</div>
    </div>
  );
}
