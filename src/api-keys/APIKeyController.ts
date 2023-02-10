import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
} from 'tsoa';

import { APIKey } from './APIKey';
import { APIKeyCreationParams, APIKeyService } from './APIKeyService';

@Route('apikey')
export class APIKeyController extends Controller {
    @Get('{id}')
    public async getAPIKey(
        @Path() id: string,
        @Query() name?: string
    ): Promise<APIKey> {
        return new APIKeyService().get(id, name);
    }

    @SuccessResponse('201', 'Created')
    @Post()
    public async createAPIKey(
        @Body() requestBody: APIKeyCreationParams
    ): Promise<void> {
        this.setStatus(201);
        new APIKeyService().create(requestBody);
        return;
    }
}
