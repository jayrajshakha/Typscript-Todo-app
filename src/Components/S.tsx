export const saveTodos = (todos: todosType[]): void => {
    localStorage.setItem("mytodos", JSON.stringify(todos));
  };
  
  export const getTodos = (): todosType[] => {
    const todos = localStorage.getItem("mytodos");
    return todos ? JSON.parse(todos) : [];
  };