import { background } from "common/assets";
import TaskSection from "./Layout/TaskContainer";
import TaskDetailSection from "./Layout/TaskDetailContainer";
import {
  DashboardContainer,
  BackgroundImage,
  TitleContainer,
  MainRowContainer,
} from "./styles";
import { useStoreSelector } from "state/store";

const DashboardModule = () => {
  const selectedCategory = useStoreSelector(
    (state) => state.category.selectedCategory
  );

  return (
    <>
      <BackgroundImage src={background} />
      <DashboardContainer>
        <TitleContainer>{selectedCategory?.title}</TitleContainer>
        <MainRowContainer>
          <TaskSection />
          <TaskDetailSection />
        </MainRowContainer>
      </DashboardContainer>
    </>
  );
};

export default DashboardModule;
