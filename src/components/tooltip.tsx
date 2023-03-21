import { findIcon, findName, findRecipes, typeToItems } from "../data";

export const Item = ({
  id,
  amt,
  primary,
}: {
  id: number;
  amt: number;
  primary?: boolean;
}) => {
  let opts: Record<string, string> = {
    border: "2px solid transparent",
  };
  if (primary) {
    opts = {
      border: "2px solid black",
      boxShadow: "0 0 3px gold",
    };
  }

  return (
    <div
      style={{
        display: "grid",
        gridAutoFlow: "column",
        gridGap: 4,
        padding: "4px",
        justifySelf: "flex-end",
        backgroundColor: "rgb(3, 69, 77)",
        borderRadius: "0.5em",
        alignItems: "center",
        ...opts,
      }}
    >
      <div style={{ fontFamily: "monospace" }}>{amt}</div>

      <img
        src={findIcon(id)}
        width={32}
        style={{ maxHeight: 32 }}
        alt={findName(id)}
      />
    </div>
  );
};

export const Tooltip = ({ id }: { id: number }) => (
  <div
    style={{
      border: "4px solid black",
      padding: 8,
      backgroundColor: "rgb(2, 89, 81)",
      fontSize: "0.9rem",
      fontWeight: 600,
    }}
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "22px auto",
        gridGap: 8,
        alignItems: "center",
      }}
    >
      <img
        src={findIcon(id)}
        width={22}
        style={{ maxHeight: 22 }}
        alt={findName(id)}
      />
      <div>
        {findName(id)} -
        <span style={{ opacity: 0.8, fontSize: "0.8rem" }}>{id}</span>
      </div>
    </div>
    <div
      style={{
        display: "grid",
        gridGap: "1em",
        gridAutoFlow: "row",
      }}
    >
      {findRecipes(id).map((recipe) => {
        return (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "0.5fr 1fr",
                backgroundColor: "rgba(20, 3, 45, 0.1)",
                padding: "4px 0",
                alignItems: "center",
                borderRadius: "0.5em",
              }}
            >
              <div
                style={{
                  padding: "4px 8px",
                }}
              >
                <span style={{ fontStyle: "italic" }}>{recipe.time}</span>
                <span>s 💨</span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridGap: "8px",
                  gridTemplateColumns: "auto 22px",
                  justifySelf: "flex-end",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0 8px",
                }}
              >
                {recipe.type}
                <img
                  src={findIcon(typeToItems(recipe.type)[0])}
                  width={22}
                  alt={recipe.type}
                />
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1em 3em",
                fontSize: "1rem",
                alignItems: "center",
              }}
            >
              {recipe.result.map(([amt, id]) => (
                <>
                  <div
                    style={{
                      display: "grid",
                      gridAutoFlow: "column",
                      justifyContent: "flex-end",
                      gridGap: 16,
                    }}
                  >
                    {recipe.requirements.map(([amt, id]) => (
                      <Item id={id} amt={amt} />
                    ))}
                  </div>
                  <div>{"->"}</div>
                  <Item id={id} amt={amt} primary={true} />
                </>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

// <span style={{ opacity: 0.8, fontSize: "0.8rem" }}>
//   <em>{id}</em>
// </span>
//
//
//
// <div>
//   {recipe.requirements.map(([amt, id]) => {
//     return (
//       <div
//         style={{
//           display: "grid",
//           gridGap: "8px",
//           gridAutoFlow: "column",
//           gridTemplateColumns: "1fr 3fr",
//           alignItems: "center",
//         }}
//       >
//         <Item id={id} amt={amt} />
//         <div style={{ display: "grid", lineHeight: 0.6 }}>
//           <div>{findName(id)}</div>
//           <div
//             style={{
//               fontSize: "0.8em",
//               opacity: 0.5,
//               textShadow: "1px 1px black",
//               justifySelf: "flex-end",
// 	position: "fixed"
//             }}
//           >
//             {id}
//           </div>
//         </div>
//       </div>
//     );
//   })}
// </div>
