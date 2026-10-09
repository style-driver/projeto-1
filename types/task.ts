export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: string | null;
  created_at: string;
  updated_at: string;
  user_id: string;
}