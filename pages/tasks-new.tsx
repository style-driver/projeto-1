import { useNavigate } from "react-router-dom";
import { useTasks } from "@/context/tasksContext";
import { Button } from "@/components/ui/button";

export default function NewTaskPage() {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSave = (task: Omit<import("@/types/task").Task, "id" | "created_at" | "updated_at" | "user_id">) => {
    addTask(task);
    navigate("/tasks");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Nova Tarefa</h2>
        <TaskForm
          onSave={handleSave}
          onCancel={() => navigate("/tasks")}
        />
      </div>
    </div>
  );
}