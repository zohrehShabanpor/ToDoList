import { TaskComponent } from "common/components";
import { TaskTemp } from "common/utilities/types";
import { useRef, useState } from "react";
import {
  TaskContainer,
  TaskContainer2,
  AddTaskContainer,
  Input,
  TaskAddButton,
} from "./styles";
import { ArrowBackIos } from "@material-ui/icons";
import { taskSlice } from "state/task/taskReducers";
import { useStoreDispatch, useStoreSelector } from "state/store";

const TaskSection = () => {
  const initialTask: TaskTemp = { title: "", isDone: false };
  const [newTask, setNewTasks] = useState<TaskTemp>(initialTask);
  const { addTask, setSelectedTask } = taskSlice.actions;
  const tasks = useStoreSelector((state) => state.task.tasks);
  const selectedCategory = useStoreSelector(
    (state) => state.category.selectedCategory
  );
  const dispatch = useStoreDispatch();
  let buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <TaskContainer>
      <TaskContainer2>
        {tasks
          ?.filter((e) => e.categoryId === selectedCategory?.id)
          .map((item, index) => {
            return (
              <TaskComponent
                onClick={(event) => {
                  if (event.target !== event.currentTarget) return;

                  dispatch(setSelectedTask({ id: item.id }));
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
            if (newTask && newTask.title != "" && selectedCategory?.id) {
              dispatch(
                addTask({ item: newTask, categoryId: selectedCategory.id })
              );
            }

            setNewTasks(initialTask);
          }}
        >
          <ArrowBackIos />
        </TaskAddButton>
      </AddTaskContainer>
    </TaskContainer>
  );
};

export default TaskSection;
