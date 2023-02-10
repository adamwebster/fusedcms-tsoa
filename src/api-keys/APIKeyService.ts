import { APIKey } from './APIKey';

export type APIKeyCreationParams = Pick<
    APIKey,
    'id' | 'name' | 'description' | 'key' | 'secret' | 'createdAt' | 'updatedAt'
>;

export class APIKeyService {
    public get(id: string, name?: string): APIKey {
        console.log('this is the id:' + id);
        return {
            id,
            name: name ?? 'API Key 1',
            description: 'This is the description of the API key',
            key: 'key',
            secret: 'secret',
            createdAt: new Date(),
            updatedAt: new Date(),
        };
    }

    public create(contentTypeCreationParams: APIKeyCreationParams): APIKey {
        return {
            id: Math.floor(Math.random() * 10000),
            ...contentTypeCreationParams,
        };
    }
}
