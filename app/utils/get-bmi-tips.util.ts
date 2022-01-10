import type { BmiStatusType } from "~/types/bmi-status.type";

export default function getBmiTips(status: BmiStatusType): string {
  switch (status) {
    case "healthy":
      return "A BMI of <strong>18 - 24.5</strong> indicates that you're in a good place. Keep up your healthy habits!";

    case "under-weight":
      return "Your BMI is currently <strong>less than 18</strong> indicating you are under-weight. Please consult your doctor!";

    case "over-weight":
      return "Your BMI is currently in range <strong>25 - 30</strong> indicating you are over-weight. Please consult your doctor!";

    case "obese":
      return "Your BMI is currently <strong>greater than 30</strong> indicating you are obese. Please consult your doctor immediately!!";

    default:
      return "No tips for now";
  }
}
