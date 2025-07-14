import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"

const AddTask = ({submitTask}) => {
const [taskName, setTaskName] = useState(""); 
const [day, setDay] = useState(""); 
const [reminder, setReminder] = useState(false); 

  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      "name":taskName,
      "time":day,
      reminder
    }
    console.log(newTask)
    submitTask(newTask);
    toast.success('Task Added Successfully!!')
    navigate("/all-tasks")
  };

  return (
    <>
      <div className="container p-10 mx-auto mt-10">
        <form
          onSubmit={
            formSubmit
          }
        >
          <h2 className="text-2xl text-center mb-6 block bg-red-100 p-6">
            Add New Task
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Task Name
            </label>
            <input
              type="text"
              id="task"
              name="task"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. Gymn Workout Session"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Day & Time
            </label>
            <input
              type="text"
              id="day"
              name="day"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. 21st of February"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="inline text-gray-700 font-bold mb-2">
              Reminder
            </label>
            <input
              type="checkbox"
              id="reminder"
              name="reminder"
              className="inline border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. Beautiful Apartment In Miami"
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
              required
            />
          </div>
          <button
            className="btn btn-block mb-3 px-6 py-2 bg-red-400 rounded-md mx-auto w-full"
            type="submit"
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
