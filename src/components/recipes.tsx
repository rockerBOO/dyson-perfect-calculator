import Tippy from "@tippyjs/react";
import { findIcon, findName, dspRecipes } from "../data";
import Item, { ItemBlock } from "./item";
import styled from "styled-components";

const List = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`;

const Recipe = styled.div`
  background-color: hsla(170, 20%, 20%, 0.05);
`;

const Recipes = () => {
  return (
    <div>
      <h2>Recipes</h2>
      <List>
        {dspRecipes.map((craft, i) => {
          return (
            <Recipe key={craft.type + i} className="recipe">
              <div className="results">
                {craft.result.map(([amount, itemId]) => {
                  return <ItemBlock key={itemId} amount={amount} item={itemId} />;
                })}
              </div>

              <div className="craft-type">{craft.type}</div>
              <div className="time">{craft.time}s</div>
              <div className="requirements">
                {craft.requirements.map(([amount, item]) => (
                  <ItemBlock key={item} item={item} amount={amount} />
                ))}
              </div>
            </Recipe>
          );
        })}
      </List>
    </div>
  );
};

export default Recipes;
