import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { ContentType } from "./ContentType";
import {
  ContentTypeCreationParams,
  ContentTypeService,
} from "./ContentTypeService";

@Route("contenttype")
export class ContentTypeController extends Controller {
  @Get("{id}")
  public async getContentType(
    @Path() id: string,
    @Query() name?: string
  ): Promise<ContentType> {
    return new ContentTypeService().get(id, name);
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createContentType(
    @Body() requestBody: ContentTypeCreationParams
  ): Promise<void> {
    this.setStatus(201);
    new ContentTypeService().create(requestBody);
    return;
  }
}
