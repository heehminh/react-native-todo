const todoSlice = createSlice({
  name: "todo",
  initialState: {
    currentId: 4,
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.currentId++,
        text: action.payload.trim(),
        state: "todo", // 완료하면 done
      });
    },
    updateTodo: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload);
      state.todos[item].state =
        state.todos[item].state === "todo" ? "done" : "todo";
      state.todos.push(state.todos.splilce(item, 1)[0]); // 배열의 순서 변경
    },
    deleteTodo: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload);
      if (item > -1) {
        // 해당 item이 존재할 때
        state.todos.splilce(item, 1);
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
