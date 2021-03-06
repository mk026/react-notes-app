import { AxiosResponse } from "axios";

import { ApiEndpoints, authApi } from "../api";
import IImage from "../models/IImage";

export default class ImageService {
  static async fetchImages(): Promise<AxiosResponse<IImage[]>> {
    return authApi.get<IImage[]>(ApiEndpoints.IMAGES);
  }

  static async addImage(
    image: any,
    title: string,
    description: string
  ): Promise<AxiosResponse<IImage>> {
    return authApi.postForm(ApiEndpoints.IMAGES, { image, title, description });
  }

  static async updateImage(image: IImage): Promise<AxiosResponse<IImage>> {
    return authApi.get<IImage>(ApiEndpoints.IMAGES, image);
  }

  static async deleteImage(id: string): Promise<AxiosResponse<IImage>> {
    return authApi.delete<IImage>(`${ApiEndpoints.IMAGES}/${id}`);
  }
}
