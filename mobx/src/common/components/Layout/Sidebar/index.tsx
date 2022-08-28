import {
  SidebarContainer,
  ProfileContainer,
  ProfileName,
  ProfilePhoto,
  ListContainer,
  ListTitle,
  ListItem,
  ListActive,
} from "./styles";
import { profile } from "common/assets";
import { useCategoryStore, useStore, useTaskStore } from "common/store";
import { useEffect, useState } from "react";
import { Category } from "common/utilities/types";
import { observer } from "mobx-react";

const Sidebar = () => {
  const [categories, setCategories] = useState<Array<Category>>();
  let categoryStore = useCategoryStore();
  let globalStore = useStore();
  let taskStore = useTaskStore();

  useEffect(() => {
    if (categoryStore.Categories) setCategories(categoryStore.Categories);
  }, [categoryStore.Categories]);

  return (
    <SidebarContainer>
      <ProfileContainer>
        <ProfilePhoto src={profile} />
        <ProfileName>{globalStore.Username}</ProfileName>
      </ProfileContainer>

      <ListContainer>
        <ListTitle>Lists</ListTitle>
        {categories?.map((item) => {
          let isActive = item.id === categoryStore?.ActiveCategory?.id;

          return (
            <ListItem
              onClick={() => {
                categoryStore.ChangeActiveCategory(item.id);
                taskStore.setSelectedTask(undefined);
              }}
              active={isActive}
            >
              {item.title}
              {isActive ? <ListActive></ListActive> : undefined}
            </ListItem>
          );
        })}
      </ListContainer>
    </SidebarContainer>
  );
};

export default observer(Sidebar);
