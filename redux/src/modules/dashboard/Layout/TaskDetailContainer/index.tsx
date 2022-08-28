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
import { Task } from "common/utilities/types";
import { useMemo, useState } from "react";
import { CheckCircle, CheckCircleOutline, Delete } from "@material-ui/icons";
import { taskSlice } from "state/task/taskReducers";
import { useStoreSelector, useStoreDispatch } from "state/store";

const TaskDetailSection = () => {
  const [task, setTask] = useState<Task>();
  const { updateTask, removeTask } = taskSlice.actions;
  const selectedTask = useStoreSelector((state) => state.task.selectedTask);
  const dispatch = useStoreDispatch();
  const selectedCategory = useStoreSelector(
    (state) => state.category.selectedCategory
  );

  useMemo(() => {
    if (selectedTask) setTask(selectedTask);
  }, [selectedTask, selectedCategory]);

  useMemo(() => {
    setTask(undefined);
  }, [selectedCategory]);

  return (
    <Container>
      <Header>
        Task Details
        <span
          onClick={() => {
            if (!task) return;

            setTask({ ...task, isDone: !task?.isDone });
            dispatch(updateTask({ item: { ...task, isDone: !task?.isDone } }));
          }}
        >
          {task?.isDone ? <CheckCircle /> : <CheckCircleOutline />}

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

            dispatch(updateTask({ item: task }));
          }}
        >
          Submit
        </SubmitButton>
        <DeleteButton
          onClick={() => {
            if (task?.id) dispatch(removeTask({ id: task.id }));

            setTask(undefined);
          }}
        >
          <Delete />
        </DeleteButton>
      </ButtonsContainer>
    </Container>
  );
};

export default TaskDetailSection;
