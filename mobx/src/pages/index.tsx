import { useEffect } from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import DashboardPage from "./dashboard";
import { Layout } from "common/components";
import { observer } from "mobx-react";
import { CATEGORIES, TASKS, USERNAME } from "common/constants";
import { useCategoryStore, useStore, useTaskStore } from "common/store";

const Application = () => {
  let categoryStore = useCategoryStore();
  let taskStore = useTaskStore();
  let globalStore = useStore();

  const initialStore = () => {
    CATEGORIES.map((item) => {
      categoryStore.AddCategory(item);
    });

    TASKS.map((item) => {
      taskStore.AddTask(item, categoryStore?.ActiveCategory?.id || "");
    });

    globalStore.SetUsername(USERNAME);
  };

  useEffect(() => {
    initialStore();
  }, [TASKS, CATEGORIES, USERNAME]);

  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Layout>
  );
};

function RouterWrapper() {
  return (
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  );
}

export default observer(RouterWrapper);

export { default as DashboardPage } from "./dashboard";
