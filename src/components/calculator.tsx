import { ChangeEventHandler, useState } from "react";
import {
  calculateRequirements,
  RecipeTree,
  dspItems,
  findIcon,
  findName,
  Item,
  Recipe,
} from "../data";
import Recipes from "./Recipes";
import Tippy from "@tippyjs/react";

import "style-loader!css-loader!tippy.js/dist/tippy.css";

const onChange: (
  setFunction: (value: string | undefined) => void
) => ChangeEventHandler<HTMLInputElement> = (setFunction) => (e) => {
  setFunction(e.target.value);
};

const forLink = (str: string) => {
  return str.replace(" ", "_");
};

const Item = ({ item, amount }: { item: number; amount: number }) => {
  return (
    <div className="item-result">
      <div className="item-result-item">
        <div className="item-amount">{amount}</div>
        <div className="item-icon">
          <img src={findIcon(item)} alt={findName(item)} width={22} />
        </div>
        <div className="item-name">{findName(item)}</div>
      </div>
      <div>
        {calculateRequirements([amount, item]).map((recipe) => {
          return (
            <div className="production">
              <div className="time">{recipe.time}s </div>
              <div className="item-requirements">
                <div className="requirements">
                  {recipe.requirements.map(([amt, id]) => {
                    return (
                      <div className="item">
                        <div>{amt}</div>
                        <Tippy content={`${findName(id)}`}>
                          <img
                            src={findIcon(id)}
                            alt={findName(id)}
                            width={28}
                          />
                        </Tippy>
                      </div>
                    );
                  })}
                </div>
                <details className="producers" key={recipe.result[0][1]}>
                  <summary>Producers</summary>
                  <div>
                    {recipe.producers?.map((r) => {
                      return (
                        <div>
                          <div>
                            {r.result.map(([a, i]) => {
                              return <Item item={i} amount={a} />;
                              // return (
                              //   <div>
                              //     {a} {findName(i)}
                              //     <img src={findIcon(i)} alt={findName(i)} width={22} />
                              //   </div>
                              // );
                            })}{" "}
                          </div>{" "}
                        </div>
                      );
                    })}
                  </div>
                </details>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// const RecipeComponent = ({ recipe }: { recipe: Array<Recipe> }) => {
//   return (
//     <div
// 			className="recipe"
//     >
//       <div className="results">
// 				{recipe.map(r => {
// 					return r.result.map(([amount, itemId]) => {
//           return (
//             <div className="result">
//               <div>{amount}</div>
//               <div>
//                 <img src={findIcon(itemId)} alt={findName(itemId)} width="22" />
//               </div>
//             </div>
//           );
// 	});
// 				})}
//       </div>

// <div>
// 					</div>
//         <div
//           className="time"
//           style={{
//             display: "grid",
//             justifyContent: "center",
//           }}
//         >
//           <div
//             className="time-amount"
//             style={{
//               fontSize: "1.1em",
//               display: "grid",
//               justifyContent: "center",
//            }}
//           >
//             {recipe.time}s
//           </div>
//           <div>&lt;--</div>
//         </div>
//       ) : (
//         <></>
//       )}
// 			<div className="requirement">
//       {recipe.type !== "miner" ? (
//         <div className="requirements">
//           {recipe.requirements.length == 0
//             ? "no requirements for " + findName(recipe.result[0][1])
//             : ""}
//           {recipe.requirements.map((r) => {
//             return <RecipeComponent recipe={r} />;
//           })}
//         </div>
//       ) : (
//         <></>
//       )}</div>
//     </div>
//   );
// };

const Calculator: React.FunctionComponent = () => {
  const [amount, setAmount] = useState<string | undefined>(undefined);
  const [item, selectItem] = useState<Item | undefined>();

  return (
    <div>
      <h1>Dyson Sphere Program Perfect Calculator</h1> <form>
        <section style={{ display: "grid", justifyContent: "center" }}>
          <label htmlFor="amount">Amount per second</label>
          <input
            id="amount"
            type="text"
            name="amount"
            value={amount}
            placeholder="amount per second"
            onChange={onChange(setAmount)}
          />
          <div className="calculator-options">
            <div>
              Selected: <img src={item?.icon} alt={item?.name} width={44} />
            </div>
            <div>{item ? <Item item={item.id} amount={1} /> : <></>}</div>
            <div
              className="items"
              style={{
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
