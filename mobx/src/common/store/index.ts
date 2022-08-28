import { makeAutoObservable } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { useMemo } from "react";

enableStaticRendering(typeof window === "undefined");

let store: Store;

export class Store {
  public Username?: string;

  constructor() {
    makeAutoObservable(this);
  }

  public SetUsername(username: string) {
    this.Username = username;
  }
}

function initializeStore() {
  const _store = store ?? new Store();

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
}

export function useStore() {
  const store = useMemo(() => initializeStore(), []);
  return store;
}

export { useCategoryStore } from "./category";
export { useTaskStore } from "./task";
