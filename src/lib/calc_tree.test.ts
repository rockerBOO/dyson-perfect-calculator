import { calcTree } from "./calc_tree";

test("that we can make a tree", () => {
  const result = calcTree([{ id: 1142, time: 1, needs: 1 }]);

  console.log(JSON.stringify(result));
});
