import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "@/context/tasksContext";
import { Button } from "@/components/ui/button";

export default function EditTaskPage() {
  const { id } = useParams<{ id: string }>();
  const { tasks, toggleTask, deleteTask } = useTasks();
  const navigate = useNavigate();

  const task = tasks.find(t => t.id === id);

  if (!task) {
    navigate("/tasks");
    return null;
  }

  const handleSave = (updatedTask: Omit<import("@/types/task").Task, "id" | "created_at" | "updated_at" | "user_id">) => {
    // Em uma implementação real, atualizaríamos a tarefa no contexto
    // Por simplicidade, vamos apenas redirecionar de volta
    navigate("/tasks");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Editar Tarefa</h2>
        <TaskForm
          initialData={task}
          onSave={handleSave}
          onCancel={() => navigate("/tasks")}
        />
      </div>
    </div>
  );
}