import { Task } from "common/utilities/types";
import { Task as TaskCom } from "./styles";
import { RadioComponent } from "../Form";
import { taskSlice } from "state/task/taskReducers";
import { useStoreDispatch } from "state/store";

type prop = {
  task: Task;
};

const TaskComponent = ({
  task,
  ...props
}: prop & React.DOMAttributes<HTMLDivElement>) => {
  const { updateTask } = taskSlice.actions;
  const dispatch = useStoreDispatch();

  return (
    <TaskCom
      {...props}
      style={task.isDone ? { textDecoration: `line-through` } : undefined}
    >
      <RadioComponent
        onClick={() => {
          dispatch(updateTask({ item: { ...task, isDone: !task.isDone } }));
        }}
        value={task.isDone}
      ></RadioComponent>
      {task.title}
    </TaskCom>
  );
};

export default TaskComponent;
