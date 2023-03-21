import Tippy from "@tippyjs/react";
import { calculateRequirements, findIcon, findName } from "../data";
import { Tooltip } from "./tooltip";
import { animated, useSpring } from "react-spring";

export const ItemBlock = ({
  amount,
  item,
}: {
  amount: number;
  item: number;
}) => {
  const config = { tension: 500, friction: 30 };
  const initialStyles = { opacity: 0, transform: "scale(0.8)" };
  const [props, setSpring] = useSpring(() => initialStyles);

  function onMount() {
    setSpring({
      opacity: 1,
      transform: "scale(1)",
      onRest: () => {},
      config,
    });
  }

  function onHide({ unmount }: { unmount: () => void }) {
    setSpring({
      ...initialStyles,
      onRest: unmount,
      config: { ...config, clamp: true },
    });
  }

  return (
    <div className="item-result-item">
      <div className="item-result-item-block">
        <div className="item-amount">{amount}</div>
        <div className="item-icon">
          <Tippy
            render={(attrs) => (
              <animated.div style={props} {...attrs}>
                <Tooltip id={item} />
              </animated.div>
            )}
            animation={true}
            onMount={onMount}
            onHide={onHide}
          >
            <img
              src={findIcon(item)}
              alt={findName(item)}
              width={44}
              style={{ maxWidth: 44 }}
            />
          </Tippy>
          <div className="item-name">{findName(item)}</div>
        </div>
      </div>
    </div>
  );
};

const Item = ({ item, amount }: { item: number; amount?: number }) => {
  return (
    <div className="item-result">
      <div>
        {calculateRequirements([amount ?? 1, item]).map((recipe) => {
          return (
            <div className="production">
              <div className="results">
                {recipe.result.map(([amt, itemid]) => {
                  return <ItemBlock item={item} amount={amt} />;
                })}
              </div>
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
