import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addTask, selectTask } from "../../state/task_list/taskListSlice";

const SubmitTask = () => {
  const taskList = useSelector(selectTask);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(newTask));
    setNewTask("");
  };

  const handleClick = () => {
    let input = document.querySelector(".input");
    let task = document.createElement("div");
    task.innerHTML = taskList;
    input.appendChild(task);
  };

  return (
    <form className="task-submit-form" onSubmit={handleSubmit}>
      <label htmlFor="task-type">Value to be stored</label>
      <input
        id="task-type"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      ></input>
      <button type="submit">Store</button>
      <button onClick={() => handleClick()}>display</button>
      <div className="input"></div>
    </form>
  );
};

export default SubmitTask;