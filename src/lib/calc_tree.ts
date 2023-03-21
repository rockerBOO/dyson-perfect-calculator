import { findRecipes } from "../data";

export const calcTree = (input = [{ id: 4, time: 1, needs: 10 }]) => {
  // what we want
  // what it needs
  // how to get it

  // Proliferator Mk.1

  // - time: 0.5
  // - material: 1 coal
  //
  // want 1 prolifertor per second

  // const want = 1;
  // const time = 1;
  //
  // const recipeTime = 0.5;
  // const material = "coal";
  // const id = 1401;
  // const materialAmount = 1;
  //
  // const requires = time / recipeTime;
  //
  // const needs = want * requires;

  return input.map(({ id, time, needs }) => {
    const recipes = findRecipes(id);

    if (recipes.length === 0) {
      return { id, time, needs };
    }

    return recipes.map((recipe) => {
      //
      return [
        ...recipe.result.map(([amount, id]) => {
          const time = 1 / recipe.time;

          return { id, time, needs: needs * (amount / time) };
        }),
        calcTree(
          recipe.requirements.map((req) => {
            console.log("requiurements", id, needs, req[0], time);
            return { id: req[1], time, needs: needs * (req[0] / time) };
          })
        ),
      ];
    });
  });
};
