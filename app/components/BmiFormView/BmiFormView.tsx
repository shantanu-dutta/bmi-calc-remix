import RadioCardInput from "../RadioCardInput/RadioCardInput";
import RangeInput from "../RangeInput/RangeInput";

export default function BmiFormView() {
  return (
    <form method="post" className="bmi-form-container wrapper">
      <fieldset className="fieldset gender">
        <legend className="legend">Gender</legend>
        <RadioCardInput id="card_male" name="gender" label="Male" />
        <RadioCardInput id="card_female" name="gender" label="Female" />
      </fieldset>

      <fieldset className="fieldset age">
        <legend className="legend">Age</legend>
        <RangeInput
          name="age"
          min={0}
          max={100}
          defaultValue={25}
          id="input_age"
          units="year"
        />
      </fieldset>

      <fieldset className="fieldset height">
        <legend className="legend">Height</legend>
        <RangeInput
          name="height"
          min={0}
          max={200}
          defaultValue={120}
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
          defaultValue={60}
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
