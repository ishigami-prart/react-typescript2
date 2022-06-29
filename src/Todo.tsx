type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
};
export const Todo = (props: TodoType) => {
  const { title, userid, completed } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー${userid})`}</p>;
};
