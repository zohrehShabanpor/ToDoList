import { useCategoryStore, useTaskStore } from "common/store";
import { TaskComponent } from "common/components";
import { Task, TaskTemp } from "common/utilities/types";
import { useMemo, useRef, useState } from "react";
import {
  TaskContainer,
  TaskContainer2,
  AddTaskContainer,
  Input,
  TaskAddButton,
} from "./styles";
import { observer } from "mobx-react";
import { ArrowBackIos } from "@material-ui/icons";

const TaskSection = () => {
  const [tasks, setTasks] = useState<Array<Task> | undefined>();
  const initialTask: TaskTemp = { title: "", isDone: false };
  const [newTask, setNewTasks] = useState<TaskTemp>(initialTask);
  let buttonRef = useRef<HTMLButtonElement>(null);
  let categoryStore = useCategoryStore();
  let taskStore = useTaskStore();

  const getData = () => {
    let data = taskStore.getActiveCategoryTasks(
      categoryStore.ActiveCategory?.id || ""
    );

    if (data) setTasks(data);
  };

  useMemo(() => {
    getData();
  }, [taskStore.Tasks, categoryStore.ActiveCategory]);

  return (
    <TaskContainer>
      <TaskContainer2>
        {tasks?.map((item, index) => {
          return (
            <TaskComponent
              onClick={() => {
                taskStore.setSelectedTask(item);
              }}
              key={index}
              task={item}
            />
          );
        })}
      </TaskContainer2>
      <AddTaskContainer>
        <Input
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              buttonRef.current?.click();
            }
          }}
          value={newTask?.title}
          onChange={(event) =>
            setNewTasks({ title: event.target.value, isDone: false })
          }
          placeholder="Click to add a task"
        />
        <TaskAddButton
          ref={buttonRef}
          onClick={() => {
            if (newTask && newTask.title != "") {
              taskStore.AddTask(
                newTask,
                categoryStore?.ActiveCategory?.id || ""
              );
            }

            setNewTasks(initialTask);
            getData();
          }}
        >
          <ArrowBackIos />
        </TaskAddButton>
      </AddTaskContainer>
    </TaskContainer>
  );
};

export default observer(TaskSection);
