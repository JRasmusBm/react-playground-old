import React, { useReducer, useEffect } from "react";
import produce from "immer";

interface Props {}
interface State {
  puppy: boolean;
  kitten: boolean;
  lawnmowerOn: boolean;
}
type Action =
  | {
      type: "MOW_SAFELY";
    }
  | { type: "STOP_MOWING" };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "MOW_SAFELY":
      return produce(state, (draftState) => {
        draftState.kitten = false;
        draftState.puppy = false;
        draftState.lawnmowerOn = true;
      });
    case "STOP_MOWING":
      return produce(state, (draftState) => {
        draftState.kitten = true;
        draftState.puppy = true;
        draftState.lawnmowerOn = false;
      });
  }
};

const RaceCondition: React.FC<Props> = () => {
  const [{ kitten, puppy, lawnmowerOn }, dispatch] = useReducer(reducer, {
    kitten: true,
    puppy: true,
    lawnmowerOn: false,
  });

  useEffect((): void => {
    console.log({ kitten, puppy, lawnmowerOn });
  }, [kitten, puppy, lawnmowerOn]);

  const mowSafely = () => {
    dispatch({ type: "MOW_SAFELY" });
  };

  const stopMowing = () => {
    dispatch({ type: "STOP_MOWING" });
  };

  return (
    <main>
      <article>
        <p>Kitten: {String(kitten)}</p>
        <p>Puppy: {String(puppy)}</p>
        <p>lawnmowerOn: {String(lawnmowerOn)}</p>
      </article>
      <button
        type="button"
        onClick={() => {
          Promise.resolve().then(() =>
            lawnmowerOn ? stopMowing() : mowSafely()
          );
        }}
      >
        {lawnmowerOn ? "Stop Mowing" : "Mow Safely"}
      </button>
    </main>
  );
};

export default RaceCondition;
