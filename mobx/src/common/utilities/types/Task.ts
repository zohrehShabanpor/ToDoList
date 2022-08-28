export type Task = {
  id: string;
  categoryId: string;
  title: string;
  description?: string;
  isDone: boolean;
};

export type TaskTemp = {
  title: string;
  description?: string;
  isDone: boolean;
};
