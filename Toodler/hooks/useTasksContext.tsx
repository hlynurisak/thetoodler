import { useContext } from 'react';
import { TasksContext, TasksContextType } from '@/contexts/TasksContext';

// Custom hook to access the tasks context
export function useTasksContext(): TasksContextType {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error('useTasksContext must be used within a TasksProvider');
  }

  return context;
}
