import React, { useState } from 'react';

const GoalItem = ({ goal, updateGoal, deleteGoal, makeDeposit }) => {
  const [depositAmount, setDepositAmount] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(goal.name);
  const [editedTargetAmount, setEditedTargetAmount] = useState(goal.targetAmount);

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid positive number for deposit amount.');
      return;
    }
    makeDeposit(goal.id, amount);
    setDepositAmount('');
  };

  const handleSave = () => {
    const parsedTargetAmount = parseFloat(editedTargetAmount);
    if (!editedName.trim()) {
      alert('Goal name cannot be empty.');
      return;
    }
    if (isNaN(parsedTargetAmount) || parsedTargetAmount <= 0) {
      alert('Please enter a valid positive number for Target Amount.');
      return;
    }
    updateGoal(goal.id, { ...goal, name: editedName, targetAmount: parsedTargetAmount });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedName(goal.name);
    setEditedTargetAmount(goal.targetAmount);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            placeholder="Goal Name"
          />
          <input
            type="number"
            value={editedTargetAmount}
            onChange={(e) => setEditedTargetAmount(e.target.value)}
            placeholder="Target Amount"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{goal.name}</h3>
          <p>Target: ${goal.targetAmount} | Saved: ${goal.savedAmount}</p>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            placeholder="Deposit Amount"
          />
          <button onClick={handleDeposit}>Deposit</button>
          <button onClick={() => deleteGoal(goal.id)}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default GoalItem;
