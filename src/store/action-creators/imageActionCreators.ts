import { AppDispatch } from "..";
import IImage from "../../models/IImage";
import ImageService from "../../services/ImageService";
import { imageSlice } from "../reducers";

export const fetchImages = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(imageSlice.actions.enableLoading());
    const response = await ImageService.fetchImages();
    dispatch(imageSlice.actions.fetchImagesSuccess(response.data));
  } catch (e) {
    dispatch(imageSlice.actions.setError((e as Error).message));
  }
};

export const addImage =
  (image: any, title: string, description: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(imageSlice.actions.enableLoading());
      const response = await ImageService.addImage(image, title, description);
      dispatch(imageSlice.actions.addImageSuccess(response.data));
    } catch (e) {
      dispatch(imageSlice.actions.setError((e as Error).message));
    }
  };

export const updateImage = (image: IImage) => async (dispatch: AppDispatch) => {
  try {
    dispatch(imageSlice.actions.enableLoading());
    const response = await ImageService.updateImage(image);
    dispatch(imageSlice.actions.updateImageSuccess(response.data));
  } catch (e) {
    dispatch(imageSlice.actions.setError((e as Error).message));
  }
};
