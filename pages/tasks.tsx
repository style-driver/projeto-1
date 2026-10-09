import { useTasks } from "@/context/tasksContext";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { TaskItem } from "@/components/ui/task-item";

export default function TasksPage() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Minhas Tarefas</h1>
        <button
          onClick={() => navigate("/tasks/new")}
          className="btn-primary hover:bg-primary/90"
        >
          Nova Tarefa
        </button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={() => toggleTask(task.id)}
                onEdit={() => navigate(`/tasks/${task.id}/edit`)}
                onDelete={() => deleteTask(task.id)}
              />
            ))}
            {tasks.length === 0 && (
              <p className="text-center text-gray-500 py-4">Nenhuma tarefa encontrada.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}