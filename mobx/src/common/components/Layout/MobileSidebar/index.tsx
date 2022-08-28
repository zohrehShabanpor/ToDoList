import { SidebarContainer, ListItem } from "./styles";
import { useCategoryStore, useTaskStore } from "common/store";
import { useEffect, useState } from "react";
import { Category } from "common/utilities/types";
import { observer } from "mobx-react";
import { Menu } from "@material-ui/icons";

const Sidebar = () => {
  const [categories, setCategories] = useState<Array<Category>>();
  let categoryStore = useCategoryStore();
  let taskStore = useTaskStore();

  useEffect(() => {
    if (categoryStore.Categories) setCategories(categoryStore.Categories);
  }, [categoryStore.Categories]);

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
          {categories?.map((item) => {
            return (
              <ListItem
                onClick={() => {
                  categoryStore.ChangeActiveCategory(item.id);
                  taskStore.setSelectedTask(undefined);
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

export default observer(Sidebar);
