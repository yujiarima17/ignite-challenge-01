import { ChangeEventHandler } from "react";
import stylesCheckBox from "../css/Checkbox.module.css";
interface CheckBoxProps {
  changeIsComplete: ChangeEventHandler<HTMLInputElement> | undefined;
}
export function CheckBox({ changeIsComplete }: CheckBoxProps) {
  return (
    <label className={stylesCheckBox.customCheckbox}>
      <input type="checkbox" onChange={changeIsComplete}></input>
      <span className={stylesCheckBox.checkmark}></span>
    </label>
  );
}
