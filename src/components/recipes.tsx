import Tippy from "@tippyjs/react";
import { findIcon, findName, dspRecipes } from "../data";
import Item, { ItemBlock } from "./item";

const Recipes = () => {
  return (
    <div>
      <h2>Recipes</h2>
      <div
        style={{
          padding: "16px",
          display: "grid",
          gridGap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr)",
        }}
      >
        {dspRecipes.map((craft) => {
          return (
            <div
              style={{
                backgroundColor: "hsla(170, 20%, 20%, .05)",
                padding: 16,
              }}
            >
              <div className="results">
                {craft.result.map(([amount, itemId]) => {
                  return <ItemBlock amount={amount} item={itemId} />;
                })}
              </div>

              <div className="craft-type">{craft.type}</div>
              <div className="time">{craft.time}s</div>
              <div className="requirements">
                {craft.requirements.map(([amount, item]) => (
                  <ItemBlock item={item} amount={amount} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
