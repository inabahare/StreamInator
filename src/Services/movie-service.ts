import { MovieCollectionDto } from "@/models";
import { ApiService } from "./api-service";

export class MovieService extends ApiService {
  constructor () {
    super("/movie");
  }

  getAllCollections (): Promise<MovieCollectionDto[]> {
    return this.get("/get-all-collections");
  }
}
