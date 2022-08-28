import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uuid } from "common/utilities";
import { Task, TaskTemp } from "common/utilities/types";

interface ITaskState {
  tasks: Array<Task> | undefined;
  selectedTask: Task | undefined;
}

const initialState: ITaskState = {
  tasks: undefined,
  selectedTask: undefined,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<{ item: TaskTemp; categoryId: string }>
    ) => {
      let id = uuid();
      let task = {
        ...action.payload.item,
        id: id,
        categoryId: action.payload.categoryId,
      };

      if (state.tasks) state.tasks?.push(task);
      else state.tasks = [task];
    },
    updateTask: (state, action: PayloadAction<{ item: Task }>) => {
      state.tasks = state.tasks?.map((task) =>
        task.id === action.payload.item.id ? action.payload.item : task
      );
      if (action.payload.item.id === state.selectedTask?.id) {
        state.selectedTask = action.payload.item;
      }
    },
    removeTask: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks?.filter((e) => e.id !== action.payload.id);
    },
    setSelectedTask: (
      state,
      action: PayloadAction<{ id: string | undefined }>
    ) => {
      state.selectedTask = state.tasks?.find((e) => e.id === action.payload.id);
    },
  },
});
