import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "@/components/layout";
import Home from "@/pages/home";
import TasksPage from "@/pages/tasks";
import About from "@/pages/about";
import Login from "@/pages/login";
import SignUp from "@/pages/signup";
import NewTaskPage from "@/pages/tasks-new";
import EditTaskPage from "@/pages/tasks-edit";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/new" element={<NewTaskPage />} />
          <Route path="/tasks/:id/edit" element={<EditTaskPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}