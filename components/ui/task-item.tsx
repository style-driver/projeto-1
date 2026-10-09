import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuthStore } from "@/stores/authStore";
import { Trash2, Edit3 } from "lucide-react";
import type { Task } from "@/types/task";

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onEdit, onDelete }: TaskItemProps) {
  const { session } = useAuthStore();

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/tasks/${task.id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${session?.access_token}` },
      });
      if (response.ok) onDelete(task.id);
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <Card className="w-full transition-all hover:shadow-lg">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex-1">
          <h3 className="font-medium text-zinc-900">{task.title}</h3>
          <p className="text-sm text-zinc-600 mt-1 line-clamp-2">{task.description}</p>
          {task.dueDate && (
            <p className="text-xs text-zinc-500 mt-2">Vencimento: {new Date(task.dueDate).toLocaleDateString()}</p>
          )}
        </div>
        <div className="flex gap-2 ml-4">
          <Button variant="outline" size="sm" onClick={() => onEdit(task)} aria-label="Editar">
            <Edit3 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleDelete} aria-label="Excluir">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}