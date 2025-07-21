import React from 'react';
import GoalItem from './GoalItem';

const GoalList = ({ goals, updateGoal, deleteGoal, makeDeposit }) => {
  return (
    <div>
      {goals.map(goal => (
        <GoalItem key={goal.id} goal={goal} updateGoal={updateGoal} deleteGoal={deleteGoal} makeDeposit={makeDeposit} />
      ))}
    </div>
  );
};

export default GoalList;
