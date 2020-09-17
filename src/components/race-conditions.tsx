import React from "react";

import RaceCondition from "./race-condition";
import NoRaceCondition from "./no-race-condition";

interface Props {}

const RaceConditions: React.FC<Props> = () => {
  return (
    <main>
      <h1>React Async State Management</h1>
      <article>
        <h2>With Race Condition (useState)</h2>
        <RaceCondition />
      </article>
      <article>
        <h2>Without Race Condition (useReducer)</h2>
        <NoRaceCondition />
      </article>
    </main>
  );
};

export default RaceConditions;
