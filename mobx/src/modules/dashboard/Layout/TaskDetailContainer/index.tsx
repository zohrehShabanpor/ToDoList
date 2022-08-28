import {
  Container,
  Header,
  Title,
  DataContainer,
  Label,
  SubmitButton,
  TextArea,
  ButtonsContainer,
  DeleteButton,
} from "./styles";
import { useCategoryStore, useTaskStore } from "common/store";
import { Task } from "common/utilities/types";
import { observer } from "mobx-react";
import { useMemo, useState } from "react";
import { CheckCircle, CheckCircleOutline, Delete } from "@material-ui/icons";

const TaskDetailSection = () => {
  let taskStore = useTaskStore();
  let categoryStore = useCategoryStore();
  const [task, setTask] = useState<Task>();

  useMemo(() => {
    console.log("detal");

    if (taskStore.SelectedTask) setTask(taskStore.SelectedTask);
  }, [taskStore.SelectedTask, categoryStore.ActiveCategory]);

  useMemo(() => {
    setTask(undefined);
  }, [categoryStore.ActiveCategory]);

  return (
    <Container>
      <Header>
        Task Details
        <span
          onClick={() => {
            if (!task) return;

            setTask({ ...task, isDone: !task?.isDone });
            taskStore.UpdateTask({ ...task, isDone: !task?.isDone });
          }}
        >
          {taskStore.getIsDone(task?.id || "") ? (
            <CheckCircle />
          ) : (
            <CheckCircleOutline />
          )}

          <span>Mark as done</span>
        </span>
      </Header>
      <DataContainer>
        <Title
          value={task ? task?.title || "" : "Select a Task !"}
          onChange={(event) => {
            if (task) setTask({ ...task, title: event.target.value });
          }}
        />
        <Label>Description</Label>
        <TextArea
          placeholder="Add description for your task"
          value={task?.description ?? ""}
          onChange={(event) => {
            if (!task) return;

            setTask({ ...task, description: event.target.value });
          }}
        />
      </DataContainer>
      <ButtonsContainer>
        <SubmitButton
          onClick={() => {
            if (!task || !task.title) return;

            taskStore.UpdateTask(task);
          }}
        >
          Submit
        </SubmitButton>
        <DeleteButton
          onClick={() => {
            taskStore.removeTask(task?.id || "");
            setTask(undefined);
          }}
        >
          <Delete />
        </DeleteButton>
      </ButtonsContainer>
    </Container>
  );
};

export default observer(TaskDetailSection);
