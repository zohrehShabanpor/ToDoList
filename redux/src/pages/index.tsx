import { BrowserRouter } from "react-router-dom";
import { Layout } from "common/components";
import { CATEGORIES, TASKS, USERNAME } from "common/constants";
import { Provider, useDispatch } from "react-redux";
import Routes from "routes";
import { store, useStoreSelector } from "state/store";
import { categorySlice } from "state/category/categoryReducers";
import { taskSlice } from "state/task/taskReducers";
import { userSlice } from "state/user/taskReducers";
import { useEffect } from "react";

const Application = () => {
  const dispatch = useDispatch();
  const categories = useStoreSelector((state) => state.category.categories);
  const selctedCategory = useStoreSelector(
    (state) => state.category.selectedCategory
  );
  const { AddCategory } = categorySlice.actions;
  const { addTask } = taskSlice.actions;
  const { setUsername } = userSlice.actions;

  useEffect(() => {
    CATEGORIES.map((item) => {
      dispatch(AddCategory({ item: item }));
    });

    dispatch(setUsername({ username: USERNAME }));
  }, []);

  useEffect(() => {
    if (selctedCategory?.id)
      TASKS.map((item) => {
        dispatch(addTask({ item: item, categoryId: selctedCategory?.id }));
      });
  }, [categories]);

  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

function RouterWrapper() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </Provider>
  );
}

export default RouterWrapper;

export { default as DashboardPage } from "./dashboard";
