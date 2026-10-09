import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/authStore";

export function Header() {
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Gestão de Tarefas</h1>
      <nav className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-sm text-gray-600">Olá, {user.email}</span>
            <Button variant="outline" size="sm" onClick={() => signOut()}>Sair</Button>
          </>
        ) : (
          <>
            <Button variant="outline" size="sm" onClick={() => navigate("/login")}>Entrar</Button>
            <Button size="sm" onClick={() => navigate("/signup")}>Cadastrar</Button>
          </>
        )}
      </nav>
    </header>
  );
}