import { findIcon, findName, dspCrafts } from "../data";

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
        {dspCrafts.map((craft) => {
          return (
						<div style={{ backgroundColor: 'hsla(170, 20%, 20%, .05)', padding: 16 }}>
              <div>
                {findName(craft.result[0][1])}

                <img
                  width="44"
                  height="44"
                  src={findIcon(craft.result[0][1])}
                />
              </div>
              <div>
                {craft.requirements.map(([amount, item]) => (
                  <div>
                    {amount} {findName(item)}
                    <img
                      width="44"
                      height="44"
                      src={findIcon(item)}
                      alt={findName(item)}
                    />
                  </div>
                ))}
              </div>
              <div>{craft.type}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
