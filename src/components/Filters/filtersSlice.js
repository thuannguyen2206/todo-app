// ===================== Cách 1 - Sử dụng Redux thuần ====================
// import {
//   SET_SEARCH_TEXT_FILTER,
//   SET_STATUS_FILTER,
//   SET_PRIORITIES_FILTER,
// } from "../../redux/constants";

// const initial = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// const filterReducer = (state = initial, action) => {
//   switch (action.type) {
//     case SET_SEARCH_TEXT_FILTER:
//       return { ...state, search: action.payload };
//     case SET_STATUS_FILTER:
//       return { ...state, status: action.payload };
//     case SET_PRIORITIES_FILTER:
//       return { ...state, priorities: action.payload };
//     default:
//       return state;
//   }
// };

// export default filterReducer;

// ================= Cách 2 - Sử dụng Redux-Toolkit ====================
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    setSearchTextFilter: (state, action) => {
      // => { type: "filters/setSearchTextFilter" }
      state.search = action.payload;
    },
    setStatusFilter: (state, action) => {
      // => { type: "filters/setStatusFilter" }
      state.status = action.payload;
    },
    setPrioritiesFilter: (state, action) => {
      // => { type: "filters/setPrioritiesFilter" }
      state.priorities = action.payload;
    },
  },
});

export default filtersSlice;
