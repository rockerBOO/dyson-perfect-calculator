import Tippy from "@tippyjs/react";
import { ChangeEventHandler, useState } from "react";
// import "style-loader!css-loader!tippy.js/dist/tippy.css";
import {
  calculateRequirements,
  dspItems,
  findIcon,
  findName,
  DSPItem,
} from "../data";
import Item from "./item";
import Recipes from "./recipes";

const onChange: (
  setFunction: (value: string | undefined) => void
) => ChangeEventHandler<HTMLInputElement> = (setFunction) => (e) => {
  setFunction(e.target.value);
};

const forLink = (str: string) => {
  return str.replace(" ", "_");
};

const Calculator: React.FunctionComponent = () => {
  const [amount, setAmount] = useState<string | undefined>(undefined);
  const [item, selectItem] = useState<DSPItem | undefined>();

  return (
    <div>
      <div style={{ display: "grid", justifyContent: "center" }}>
        <h1>Dyson Sphere Program Perfect Calculator</h1>
      </div>
      <form>
        <section className="item-selector" style={{}}>
          <div className="calculations">
            <label htmlFor="amount">Amount per second</label>
            <input
              id="amount"
              type="text"
              name="amount"
              value={amount}
              placeholder="amount per second"
              onChange={onChange(setAmount)}
            />
          </div>
          <div className="calculator-options">
            <div className="selected-option">
              Selected: <img src={item?.icon} alt={item?.name} width={44} />
            </div>
            <div className="selected-option-item">
              {item ? <Item item={item.id} amount={1} /> : <></>}
            </div>
            <div className="items">
              {dspItems.map((item) => (
                <div
									className="item-icon"
                  key={item.name}
                  onClick={() => selectItem(item)}
                  style={{ cursor: "pointer" }}
                >
                  <Tippy content={item.name}>
                    <img src={item.icon} width={44} alt={item.name} />
                  </Tippy>
                </div>
              ))}
            </div>
          </div>
        </section>
      </form>

      <Recipes />
    </div>
  );
};

export default Calculator;
