'use client';

import supabase from '../supabase';
import { useState } from 'react';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from('tasks').insert([
      { title, description },
    ]);
    if (error) {
      console.error(error);
    } else {
      console.log('Task created:', data);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;