import { findIcon, findName, findRecipes, typeToItems } from "../data";
import { calcTree } from "../lib/calc_tree";
import Tippy from "@tippyjs/react";
import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { Tooltip } from "./tooltip";
// import { Tooltip } from "./tooltip";

export const Tree = () => {
  const [tree, setTree] = useState<
    { id: number; time: number; needs: number }[]
  >([]);
  const [id, setId] = useState<string | undefined>("1142");
  const [amount, setAmount] = useState<string | undefined>("3");

  useEffect(() => {
    if (!id || !amount) {
      return;
    }

    const parsedId = Number.parseInt(id);
    const parsedAmount = Number.parseFloat(amount);

    if (!parsedId || !parsedAmount) {
      return;
    }

    // probably not a valid ID, we should skip updating
    if (parsedId >= 10_000 || parsedId < 1_000) {
      return;
    }

    setTree(calcTree([{ id: parsedId, time: 1, needs: parsedAmount }]));
    return function cleanup() {};
  }, [id, amount]);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridAutoFlow: "row",
          gridGap: "16px",
          maxWidth: "10em",
        }}
      >
        <input
          type="text"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="id"
        />
        <input
          type="text"
          name="amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          placeholder="amount"
        />
      </div>
      <div style={{ display: "grid", gridGap: "0.5em" }}>
        <Node results={tree} />
      </div>
    </div>
  );
};

type X = { id: number; time: number; needs: number };
// type Y = X[];

export const Node = ({ results, i = 0 }: { results: X | X[]; i?: number }) => {
  const config = { tension: 300, friction: 75 };
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

  if ("id" in results) {
    return (
      <div style={{ fontSize: "2em", marginLeft: (i - 3) * 16 }}>
        {/* @ts-ignore true */}
        <Tippy
          render={(attrs) => (
            <animated.div style={props} {...attrs}>
              <Tooltip id={results.id} />
            </animated.div>
          )}
          animation={true}
          onMount={onMount}
          onHide={onHide}
        >
          <div
            style={{
              border: "1px solid #2cdd6133",
              padding: "0.3em",
              display: "flex",
              gap: "1em",
              alignItems: "center",
              width: "100vw",
              maxWidth: "15em",
              cursor: "pointer",
            }}
          >
            <img
              src={findIcon(results.id)}
              alt={findName(results.id)}
              width={44}
              style={{ maxHeight: 44 }}
            />
            <span>
              {Math.round(results.needs) ===
              Number.parseFloat(results.needs.toFixed(2))
                ? Math.round(results.needs / (1 / results.time))
                : results.needs.toFixed(2)}
            </span>
            <span>{1 / results.time}s</span>
            <span>{results.time}s</span>
          </div>
        </Tippy>
      </div>
    );
  }

  return (
    <>
      {results.map((result) => {
        return <Node results={result} i={i + 1} />;
      })}
    </>
  );
};
