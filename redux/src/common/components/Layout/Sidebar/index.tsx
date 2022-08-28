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
import { taskSlice } from "state/task/taskReducers";
import { useStoreDispatch, useStoreSelector } from "state/store";
import { categorySlice } from "state/category/categoryReducers";

const Sidebar = () => {
  const { setSelectedTask } = taskSlice.actions;
  const { SetSelectedCategory } = categorySlice.actions;
  const categories = useStoreSelector((state) => state.category.categories);
  const user = useStoreSelector((state) => state.user);
  const selectedCategories = useStoreSelector(
    (state) => state.category.selectedCategory
  );
  const dispatch = useStoreDispatch();

  return (
    <SidebarContainer>
      <ProfileContainer>
        <ProfilePhoto src={profile} />
        <ProfileName>{user.username}</ProfileName>
      </ProfileContainer>

      <ListContainer>
        <ListTitle>Lists</ListTitle>
        {categories?.map((item, index) => {
          let isActive = item.id === selectedCategories?.id;

          return (
            <ListItem
              key={index}
              onClick={() => {
                dispatch(SetSelectedCategory({ id: item.id }));
                dispatch(setSelectedTask({ id: undefined }));
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

export default Sidebar;
