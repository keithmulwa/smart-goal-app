import React, { useState } from 'react';

const GoalForm = ({ addGoal }) => {
  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedTargetAmount = parseFloat(targetAmount);
    if (isNaN(parsedTargetAmount) || parsedTargetAmount <= 0) {
      alert('Please enter a valid positive number for Target Amount.');
      return;
    }
    addGoal({ name, targetAmount: parsedTargetAmount, savedAmount: 0, category, deadline });
    setName('');
    setTargetAmount('');
    setCategory('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Goal Name" required />
      <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} placeholder="Target Amount" required />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
      <input value={deadline} onChange={(e) => setDeadline(e.target.value)} type="date" required />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;
