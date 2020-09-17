import React, { useState, useEffect } from "react";

interface Props {}

const RaceCondition: React.FC<Props> = () => {
  const [kitten, setKitten] = useState(true);
  const [puppy, setPuppy] = useState(true);
  const [lawnmowerOn, setLawnmowerOn] = useState(false);

  useEffect((): void => {
    console.log({ kitten, puppy, lawnmowerOn });
  }, [kitten, puppy, lawnmowerOn]);

  const mowSafely = () => {
    setKitten(false);
    setPuppy(false);
    setLawnmowerOn(true);
  };

  const stopMowing = () => {
    setKitten(true);
    setPuppy(true);
    setLawnmowerOn(false);
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
