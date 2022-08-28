import { SidebarContainer, ListItem } from "./styles";
import { Menu } from "@material-ui/icons";
import { taskSlice } from "state/task/taskReducers";
import { useStoreDispatch, useStoreSelector } from "state/store";
import { categorySlice } from "state/category/categoryReducers";

const Sidebar = () => {
  const { setSelectedTask } = taskSlice.actions;
  const { SetSelectedCategory } = categorySlice.actions;
  const dispatch = useStoreDispatch();
  const categories = useStoreSelector((state) => state.category.categories);

  return (
    <SidebarContainer>
      <Menu
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      />

      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Lists
          </h5>
        </div>
        <div className="offcanvas-body">
          {categories?.map((item, index) => {
            return (
              <ListItem
                key={index}
                onClick={() => {
                  dispatch(SetSelectedCategory({ id: item.id }));
                  dispatch(setSelectedTask({ id: undefined }));
                }}
              >
                {item.title}
              </ListItem>
            );
          })}
        </div>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
