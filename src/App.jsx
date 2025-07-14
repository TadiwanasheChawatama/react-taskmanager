import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import AddTask from "./pages/AddTask";
import Tasks from "./pages/Tasks";
import { toast } from "react-toastify";

const App = () => {
  // Add a new Task
  const submitNewTask = async (task) => {
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    return;
  };
  // Delete a Task
  const deleteTask = async (taskId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this Job??"
    );
    if (confirm) {
      const res = await fetch(`/api/tasks/${taskId}`, {
        method: "DELETE",
      });
      toast.success("Task Deleted Successfully!!");
    } else return;
  };
// Toggle reminder
  const toggleReminder = async (task) => {
    const newRem = {
      ...task,
      reminder: !task.reminder,
    };
    const res = await fetch(`/api/tasks/${task.id}`, {
      method: "PUT",
      header: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRem),
    });
  };

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/add-task"
          element={<AddTask submitTask={submitNewTask} />}
        />
        <Route
          path="/all-tasks"
          element={
            <Tasks onDeleteTask={deleteTask} toggleRem={toggleReminder} />
          }
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;
