import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoalForm from './components/GoalForm';
import GoalList from './components/GoalList';
import Overview from './components/Overview';

const App = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.get('http://localhost:3000/goals');
        setGoals(response.data);
      } catch (error) {
        console.error('Failed to fetch goals:', error);
        alert('Failed to fetch goals from server.');
      }
    };
    fetchGoals();
  }, []);

  const addGoal = async (goal) => {
    try {
      const response = await axios.post('http://localhost:3000/goals', goal);
      setGoals([...goals, response.data]);
    } catch (error) {
      console.error('Failed to add goal:', error);
      alert('Failed to add goal.');
    }
  };

  const updateGoal = async (id, updatedGoal) => {
    try {
      const response = await axios.put(`http://localhost:3000/goals/${id}`, updatedGoal);
      setGoals(goals.map(goal => (goal.id === id ? response.data : goal)));
    } catch (error) {
      console.error('Failed to update goal:', error);
      alert('Failed to update goal.');
      
    }
  };

  const deleteGoal = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/goals/${id}`);
      setGoals(goals.filter(goal => goal.id !== id));
    } catch (error) {
      console.error('Failed to delete goal:', error);
      alert('Failed to delete goal.');
    }
  };

  const makeDeposit = async (id, amount) => {
    try {
      const goal = goals.find(goal => goal.id === id);
      const updatedFields = { savedAmount: goal.savedAmount + amount };
      const response = await axios.patch(`http://localhost:3000/goals/${id}`, updatedFields);
      setGoals(goals.map(g => (g.id === id ? response.data : g)));
    } catch (error) {
      console.error('Failed to make deposit:', error);
      alert('Failed to make deposit.');
    }
  };

  return (
    <div>
      <h1>Smart Goal Planner</h1>
      <GoalForm addGoal={addGoal} />
      <GoalList goals={goals} updateGoal={updateGoal} deleteGoal={deleteGoal} makeDeposit={makeDeposit} />
      <Overview goals={goals} />
    </div>
  );
};

export default App;
