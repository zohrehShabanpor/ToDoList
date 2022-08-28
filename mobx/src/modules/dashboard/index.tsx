import { useCategoryStore } from "common/store";
import { background } from "common/assets";
import TaskSection from "./Layout/TaskContainer";
import TaskDetailSection from "./Layout/TaskDetailContainer";
import {
  DashboardContainer,
  BackgroundImage,
  TitleContainer,
  MainRowContainer,
} from "./styles";
import { observer } from "mobx-react";

const DashboardModule = () => {
  let categoryStore = useCategoryStore();

  return (
    <>
      <BackgroundImage src={background} />
      <DashboardContainer>
        <TitleContainer>{categoryStore.ActiveCategory?.title}</TitleContainer>
        <MainRowContainer>
          <TaskSection />
          <TaskDetailSection />
        </MainRowContainer>
      </DashboardContainer>
    </>
  );
};

export default observer(DashboardModule);
