export default function About() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Sobre este Projeto</h1>
      <p className="text-gray-700 mb-4">
        Este é um sistema completo de gestão de tarefas criado com o Pulse Coding e React + TypeScript,
        incluindo autenticação, CRUD de tarefas e interface moderna.
      </p>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-3">Tecnologias</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>React 19 com TypeScript</li>
          <li>Tailwind CSS + shadcn/ui</li>
          <li>autenticação via Supabase</li>
          <li>Zustand para estado local</li>
          <li>roteamento com React Router</li>
        </ul>
      </div>
    </div>
  );
}