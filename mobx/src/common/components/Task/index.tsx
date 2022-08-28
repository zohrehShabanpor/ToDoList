import { Task } from "common/utilities/types";
import { Task as TaskCom } from "./styles";
import { RadioComponent } from "../Form";
import { observer } from "mobx-react";
import { useTaskStore } from "common/store";

type prop = {
  task: Task;
};

const TaskComponent = ({
  task,
  ...props
}: prop & React.DOMAttributes<HTMLDivElement>) => {
  let globalStore = useTaskStore();

  return (
    <TaskCom
      {...props}
      style={task.isDone ? { textDecoration: `line-through` } : undefined}
    >
      <RadioComponent
        onClick={() => {
          globalStore.UpdateTask({ ...task, isDone: !task.isDone });
        }}
        value={task.isDone}
      ></RadioComponent>
      {task.title}
    </TaskCom>
  );
};

export default observer(TaskComponent);
