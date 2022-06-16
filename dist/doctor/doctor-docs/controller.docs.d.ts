export declare const doctorDocs: {
    post: {
        apiBody: string;
        response: string;
    };
    get: {
        query: {
            page: string;
            search: string;
        };
        params: {
            id: string;
        };
        response: string;
    };
    update: {
        apiBody: string;
        id: string;
        response: string;
    };
    delete: {
        id: string;
        response: string;
    };
};
export declare class UpdateNDeleteResponse {
    modified: boolean;
}
