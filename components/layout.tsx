import { Outlet } from "react-router-dom";
import { Header } from "@/components/header";
import { TasksProvider } from "@/context/tasksContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TasksProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </TasksProvider>
  );
}