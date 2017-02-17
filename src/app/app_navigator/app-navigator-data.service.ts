import {NAVIGATOR_ITEMS} from "./app-navigator-items";

export class AppNavigatorDataService {

    getNavigatorItems() : Promise<{}[]> {
        return Promise.resolve(NAVIGATOR_ITEMS);
    }

    getNavigatorItemsAsString() : Promise<string> {
        return Promise.resolve(JSON.stringify(NAVIGATOR_ITEMS));
    }
}


// If service is registered at bootstrap level, that serice is avilable for the whole applicationCache.
// If service is registered at component level with directives, that is available to that componentna and it's children.
