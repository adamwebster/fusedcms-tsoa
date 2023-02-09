import { ContentType } from "./ContentType";

export type ContentTypeCreationParams = Pick<
  ContentType,
  "name" | "id" | "description" | "createdOn" | "fields" | "updatedOn"
>;

export class ContentTypeService {
  public get(id: string, name?: string): ContentType {
    console.log("this is the id:" + id);
    return {
      id,
      name: name ?? "Content Type 1",
      description: "This is the description of the content type",
      fields: [],
      createdOn: new Date(),
      updatedOn: new Date(),
    };
  }

  public create(
    contentTypeCreationParams: ContentTypeCreationParams
  ): ContentType {
    return {
      id: Math.floor(Math.random() * 10000),
      ...contentTypeCreationParams,
    };
  }
}
