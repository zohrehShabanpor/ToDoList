import { makeAutoObservable } from "mobx";
import { enableStaticRendering } from "mobx-react";
import { useMemo } from "react";
import { Category, CategoryTemp } from "common/utilities/types";
import { uuid } from "common/utilities";

enableStaticRendering(typeof window === "undefined");

let store: CategoryStore;

export class CategoryStore {
  public Categories?: Array<Category>;
  public ActiveCategory?: Category;

  constructor() {
    makeAutoObservable(this);
  }

  public AddCategory(item: CategoryTemp) {
    let id = uuid();
    let category = { ...item, id: id };

    if (this.Categories) this.Categories?.push(category);
    else this.Categories = [category];

    if (!this.ActiveCategory || this.ActiveCategory.id === "") {
      this.ActiveCategory = category;
    }

    return id;
  }

  public ChangeActiveCategory(id: string) {
    this.ActiveCategory = this.Categories?.find((e) => e.id === id) || {
      id: "",
      title: "unknown",
    };
  }
}

function initializeStore() {
  const _store = store ?? new CategoryStore();

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
}

export function useCategoryStore() {
  const store = useMemo(() => initializeStore(), []);
  return store;
}
