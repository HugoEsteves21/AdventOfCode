import { INPUT } from "./inputDay2.js";

const createInput = () => {
  const NEWINPUT = new Object();

  Object.keys(INPUT).map((game) => {
    const firstArray = INPUT[game].split("; ");
    NEWINPUT[game] = [];
    const arrayWithSets = new Array();

    firstArray.map((sets) => {
      arrayWithSets.push(sets);
    });

    arrayWithSets.map((set) => {
      const setObj = new Object();
      const setArr = set.split(", ");

      setArr.map((cube) => {
        setObj[cube.split(" ")[1]] = cube.split(" ")[0];
      });
      NEWINPUT[game].push(setObj);
    });
  });
  return NEWINPUT;
};

const countIds = () => {
  const data = createInput();
  let gameCounter = 0;

  Object.keys(data).map((game) => {
    let passCondition = 0;
    data[game].map((set) => {
      if (
        (set.blue <= 14 || !set.hasOwnProperty("blue")) &&
        (set.red <= 12 || !set.hasOwnProperty("red")) &&
        (set.green <= 13 || !set.hasOwnProperty("green"))
      ) {
        passCondition++;
      }
    });
    if (passCondition === data[game].length) {
      gameCounter += Number(game);
    }
  });
  console.log(gameCounter);
};

countIds();
