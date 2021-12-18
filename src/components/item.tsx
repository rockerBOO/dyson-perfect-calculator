import Tippy from "@tippyjs/react";
import { calculateRequirements, findIcon, findName } from "../data";

export const ItemBlock = ({ amount, item }) => (
  <div className="item-result-item">
    <div className="item-result-item-block">
      <div className="item-amount">{amount}</div>
      <div className="item-icon">
        <Tippy content={findName(item)}>
          <img src={findIcon(item)} alt={findName(item)} width={22} />
        </Tippy>
				<div className="item-name">{findName(item)}</div>
      </div>
    </div>
  </div>
);

const Item = ({ item, amount }: { item: number; amount: number }) => {
  return (
    <div className="item-result">
      <ItemBlock item={item} amount={amount} />
      <div>
        {calculateRequirements([amount, item]).map((recipe) => {
          return (
            <div className="production">
              <div className="craft-type">{recipe.type}</div>
              <div className="time">{recipe.time}s </div>
              <div className="item-requirements">
                <div className="requirements">
                  {recipe.requirements.map(([amt, id]) => {
                    return <ItemBlock amount={amt} item={id} />;
                  })}
                </div>
                <details
                  className="producers--detail"
                  key={recipe.result[0][1]}
                >
                  <summary>producers</summary>
                  <div className="producers">
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

export default Item;
