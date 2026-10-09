import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/stores/authStore";
import type { Task } from "@/types/task";

interface TaskFormProps {
  initialData?: Task;
  onSave: (task: Task) => void;
  onCancel: () => void;
}

export function TaskForm({ initialData, onSave, onCancel }: TaskFormProps) {
  const { session } = useAuthStore();
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [dueDate, setDueDate] = useState(initialData?.dueDate ? new Date(initialData.dueDate).toISOString().split("T")[0] : "");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!title.trim()) {
      setError("O título é obrigatório.");
      return;
    }

    setIsSubmitting(true);
    try {
      const url = initialData ? `/api/tasks/${initialData.id}` : "/api/tasks";
      const method = initialData ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${session?.access_token}`,
        },
        body: JSON.stringify({ title, description, dueDate: dueDate || null })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Falha ao salvar tarefa.");
      }

      const savedTask: Task = await response.json();
      onSave(savedTask);
    } catch (err) {
      console.error("Error saving task:", err);
      setError(err instanceof Error ? err.message : "Erro desconhecido.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{initialData ? "Editar Tarefa" : "Nova Tarefa"}</CardTitle>
        <CardDescription>
          {initialData ? "Atualize os detalhes da tarefa." : "Adicione uma nova tarefa à sua lista."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Digite o título"
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Digite a descrição"
              rows={3}
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dueDate">Data de Vencimento</Label>
            <Input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              disabled={isSubmitting}
            />
          </div>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <CardFooter className="flex justify-end gap-2 p-0 mt-4">
            <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Salvando..." : (initialData ? "Salvar" : "Criar")}</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}