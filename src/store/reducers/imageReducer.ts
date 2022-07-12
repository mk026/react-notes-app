import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import IImage from "../../models/IImage";

interface ImagesState {
  images: IImage[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ImagesState = {
  images: [],
  isLoading: false,
  error: null,
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    enableLoading(state) {
      state.isLoading = true;
    },
    fetchImagesSuccess(state, action: PayloadAction<IImage[]>) {
      state.isLoading = false;
      state.images = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    addImageSuccess(state, action: PayloadAction<IImage>) {
      state.images.push(action.payload);
      state.isLoading = false;
    },
    updateNoteSuccess(state, action: PayloadAction<IImage>) {
      const imageId = action.payload._id;
      const oldImageIdx = state.images.findIndex(
        (image) => image._id === imageId
      );
      state.images[oldImageIdx] = action.payload;
      state.isLoading = false;
    },
    deleteNoteSuccess(state, action: PayloadAction<IImage>) {
      state.isLoading = false;
      state.images = state.images.filter(
        (image) => image._id !== action.payload._id
      );
    },
  },
});
