import RadioCardInput from "../RadioCardInput/RadioCardInput";
import RangeInput from "../RangeInput/RangeInput";

type BmiFormData = {
  height?: number;
  weight?: number;
  age?: number;
  gender?: string;
};

export default function BmiFormView({
  height,
  weight,
  gender,
  age,
}: BmiFormData) {
  return (
    <form method="post" className="bmi-form-container wrapper">
      <fieldset className="fieldset gender">
        <legend className="legend">Gender</legend>
        <RadioCardInput
          id="card_male"
          name="gender"
          value="male"
          label="Male"
          checked={gender === "male"}
        />
        <RadioCardInput
          id="card_female"
          name="gender"
          value="female"
          checked={gender === "female"}
          label="Female"
        />
      </fieldset>

      <fieldset className="fieldset age">
        <legend className="legend">Age</legend>
        <RangeInput
          name="age"
          min={0}
          max={100}
          defaultValue={age || 25}
          id="input_age"
          units="year"
        />
      </fieldset>

      <fieldset className="fieldset height">
        <legend className="legend">Height</legend>
        <RangeInput
          name="height"
          min={0}
          max={250}
          defaultValue={height || 150}
          id="input_height"
          units="cm"
        />
      </fieldset>

      <fieldset className="fieldset weight">
        <legend className="legend">Weight</legend>
        <RangeInput
          name="weight"
          min={0}
          max={150}
          defaultValue={weight || 50}
          id="input_weight"
          units="kg"
        />
      </fieldset>

      <button type="submit" className="btn submit-btn">
        Calculate BMI
      </button>
    </form>
  );
}
