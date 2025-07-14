import { useEffect, useState } from "react";
import { FaBroom } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const Tasks = ({ onDeleteTask, toggleRem }) => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const onDelete = (id) => {
    onDeleteTask(id);
    navigate("/all-tasks");
  };

  const remTrue = (reminder) => {
    return reminder
      ? "block px-4 py-4 mb-2 bg-red-200"
      : "block px-4 py-4 mb-2 bg-blue-200";
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("/api/tasks");
        const data = await res.json();
        setTasks(data);
        console.log(data)
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  return (
    <>
      <div className="container mx-auto p-10">
        {loading ? <Spinner loading={loading} /> : <h1></h1>}

        {tasks.map((task) => (
          <div
            className={remTrue(task.reminder)}
            key={task.id}
            onDoubleClick={() => {
              toggleRem(task);
            }}
          >
            <div className="">
              <h2 className="text-2xl text-center">{task.name}</h2>
              <p className="text-xl text-center">{task.time}</p>
            </div>
            {/* <FaBroom className="inline font-size-3xl"/> */}
            <button
              className=" w-full my-2 mx-auto block bg-red-300 py-2 px-4 rounded-md"
              onClick={() => {
                onDelete(task.id);
              }}
            >
              Delete
              <FaBroom />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tasks;
