import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uuid } from "common/utilities";
import { Category, CategoryTemp } from "common/utilities/types";

interface ICategoryState {
  categories: Array<Category> | undefined;
  selectedCategory: Category | undefined;
}

const initialState: ICategoryState = {
  categories: undefined,
  selectedCategory: undefined,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    AddCategory: (state, action: PayloadAction<{ item: CategoryTemp }>) => {
      let id = uuid();
      let category = { ...action.payload.item, id: id };

      if (state.categories) state.categories?.push(category);
      else state.categories = [category];

      if (!state.selectedCategory) {
        state.selectedCategory = category;
      }
    },
    SetSelectedCategory: (state, action: PayloadAction<{ id: string }>) => {
      state.selectedCategory = state.categories?.find(
        (e) => e.id === action.payload.id
      );
    },
  },
});
