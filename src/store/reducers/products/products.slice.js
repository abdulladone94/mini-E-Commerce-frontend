import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  a: 0,
  posts: [], // To store fetched posts
  filteredPosts: [], // To store posts after filtering by search
  searchQuery: "", // To store the search query
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null, // To store error messages
};

// Async thunk to fetch posts
export const fetchProducts = createAsyncThunk(
  "counter/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:8800/api/products");
    const data = await response.json();
    console.log("Fetched Posts:", data); // Logs the fetched data
    return data; // Pass data to the fulfilled action
  }
);

// Async thunk for deleting a product
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:8800/api/products/${id}`); // Adjust the endpoint as necessary
      return id; // Return the deleted product ID
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const counterSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.a += 1;
    },
    decrement: (state) => {
      state.a -= 1;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      // Filter posts based on the search query
      state.filteredPosts = state.posts.filter(
        (post) =>
          post.productName
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          post.sku.toLowerCase().includes(action.payload.toLowerCase()) ||
          post.price.toString().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload; // Update the fetched posts
        state.filteredPosts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message; // Store error message
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post._id !== action.payload); // Remove deleted product
        // Re-filter posts based on the current search query after a delete
        state.filteredPosts = state.posts.filter((post) =>
          post.productName
            .toLowerCase()
            .includes(state.searchQuery.toLowerCase())
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { increment, decrement, setSearchQuery } = counterSlice.actions;
export default counterSlice.reducer;
