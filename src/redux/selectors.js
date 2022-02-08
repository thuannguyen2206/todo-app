// import { createSelector } from "reselect";
import { createSelector } from "@reduxjs/toolkit";

export const searchTextFilterSelector = (state) => state.filters.search;
export const statusFilterSelector = (state) => state.filters.status;
export const prioritiesFilterSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

//======= CÁCH 1 - TỰ VIẾT FILTER ===========

// export const todoListSelector = (state) => {
//     const searchText = searchTextFilter(state);

//     const todosRemaining = state.todoList.filter((todo)=>{
//         return todo.name.toLowerCase().includes(searchText.toLowerCase());
//     })

//     return todosRemaining;
// };

//======== CÁCH 2 - DÙNG THƯ VIỆN RESELECT ===========

export const todosRemaining = createSelector(
  todoListSelector,
  statusFilterSelector,
  prioritiesFilterSelector,
  searchTextFilterSelector,
  (todoList, status, priorities, searchText) => {
    return todoList.filter((todo) => {
      let searchResult = todo.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      if (status === "All") {
        return priorities.length
          ? searchResult && priorities.includes(todo.priority)
          : searchResult;
      }

      return (
        searchResult &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
