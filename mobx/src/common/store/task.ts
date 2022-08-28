import { makeAutoObservable } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { useMemo } from "react";
import { Task, TaskTemp } from "common/utilities/types";
import { uuid } from "common/utilities";

enableStaticRendering(typeof window === "undefined");

let store: Store;

export class Store {
  public Tasks?: Array<Task>;
  public SelectedTask?: Task;

  constructor() {
    makeAutoObservable(this);
  }

  public AddTask(item: TaskTemp, categoryId: string): string {
    let id = uuid();
    let _tasks = this.Tasks ?? [];
    _tasks.push({ ...item, id: id, categoryId: categoryId });
    this.Tasks = _tasks;

    return id;
  }

  public UpdateTask(item: Task) {
    let _tasks = this.Tasks ?? [];

    this.Tasks = _tasks.map((task) => (task.id === item.id ? item : task));

    return this.Tasks.find((task) => task.id === item.id);
  }

  public setSelectedTask(item: Task | undefined) {
    this.SelectedTask = item;

    return this.SelectedTask;
  }

  public removeTask(id: string) {
    this.Tasks = this.Tasks?.filter((e) => e.id !== id);
  }

  public getIsDone(id: string) {
    return this.Tasks?.find((item) => item.id === id)?.isDone;
  }

  public getActiveCategoryTasks(categoryId: string) {
    return this.Tasks?.filter((e) => e.categoryId === categoryId);
  }
}

function initializeStore() {
  const _store = store ?? new Store();

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
}

export function useTaskStore() {
  const store = useMemo(() => initializeStore(), []);
  return store;
}
