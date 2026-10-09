import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";

export default function Home() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo ao seu Dashboard!</h1>
      <p className="text-gray-600 mb-4">
        Gerencie suas tarefas de forma eficiente. Este é um painel protegido que só é visível após o login.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Estatísticas</h2>
          <p className="text-3xl font-bold text-blue-600">12</p>
          <p className="text-sm text-gray-500">Tarefas concluídas este mês</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Próximas Tarefas</h2>
          <ul className="text-sm text-gray-600">
            <li>• Revisar design do app</li>
            <li>• Otimizar performance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}