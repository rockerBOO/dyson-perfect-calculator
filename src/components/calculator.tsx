import { ChangeEventHandler, useState } from "react";
import {
    calculateRequirements, CraftTree, dspItems,
    findIcon, findName, Item
} from "../data";
import Recipes from "./Recipes";

const onChange: (
  setFunction: (value: string | undefined) => void
) => ChangeEventHandler<HTMLInputElement> = (setFunction) => (e) => {
  setFunction(e.target.value);
};

const forLink = (str: string) => {
  return str.replace(" ", "_");
};

const Recipe = ({ recipe }: { recipe: CraftTree }) => {
  return (
    <div
      style={{
        padding: 16,
        display: "grid",
        gridTemplateColumns: "100px 44px 200px",
        backgroundColor: "hsla(220, 20%, 20%, 0.05)",
      }}
    >
      <div className="results">
        {recipe.result.map(([amount, itemId]) => {
          return (
            <div className="result">
              <div>{amount}</div>
              <div>
                <img src={findIcon(itemId)} alt={findName(itemId)} width="22" />
              </div>
            </div>
          );
        })}
        {recipe.type}
      </div>
      {recipe.type !== "miner" ? (
        <div
          className="time"
          style={{
            display: "grid",
            justifyContent: "center",
            gridTemplateRows: "36px 50px",
          }}
        >
          <div
            className="time-amount"
            style={{
              fontSize: "1.1em",
              display: "grid",
              justifyContent: "center",
            }}
          >
            {recipe.time}s
          </div>
          <div>&lt;--</div>
        </div>
      ) : (
        <></>
      )}
      {recipe.type !== "miner" ? (
        <div className="requirements">
          {recipe.requirements.length == 0
            ? "no requirements for " + findName(recipe.result[0][1])
            : ""}
          {recipe.requirements.map((r) => {
            return <Recipe recipe={r} />;
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const Calculator: React.FunctionComponent = () => {
  const [amount, setAmount] = useState<string | undefined>(undefined);
  const [item, selectItem] = useState<Item | undefined>();

  return (
    <div>
      <h1>Dyson Sphere Program Perfect Calculator</h1>
      <form>
        <section style={{ display: "grid" }}>
          <label htmlFor="amount">Amount per second</label>
          <input
            id="amount"
            type="text"
            name="amount"
            value={amount}
            placeholder="amount per second"
            onChange={onChange(setAmount)}
          />
          <div>
            <div>
              Selected: <img src={item?.icon} alt={item?.name} width={44} />
            </div>
            <div>
              {item ? (
                <div>
                  {calculateRequirements([1, item.id]).map((recipe) => {
                    return <Recipe recipe={recipe} />;
                  })}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div
              style={{
                maxWidth: "640px",
                padding: "16px",
                display: "grid",
                gridGap: "16px",
                gridTemplateColumns: "repeat(auto-fit, minmax(44px, 1fr)",
                alignItems: "center",
              }}
            >
              {dspItems.map((item) => (
                <div
                  key={item.name}
                  onClick={() => selectItem(item)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={item.icon} width={44} alt={item.name} />
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
