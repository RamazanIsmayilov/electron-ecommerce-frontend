import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductsState, Product } from './types';
import { fetchProducts as fetchProductsApi } from './productApi';

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null
};

export const fetchProducts = createAsyncThunk<Product[]>('products/fetchProducts',
    async () => {
        return await fetchProductsApi();
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default productsSlice.reducer;
