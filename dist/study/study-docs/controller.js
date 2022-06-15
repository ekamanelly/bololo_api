"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studyPropertyDocs = exports.studyDocs = void 0;
exports.studyDocs = {
    post: {
        apiBody: 'Please provide the required params',
        response: 'you should status 200 with study object',
    },
    get: {
        query: {
            page: 'Please provide this value or 1 as it default',
            search: 'few word to do an index search on the study(description property)',
        },
        params: {
            id: 'please provide this value to zero down on a study',
        },
        response: 'you should status 200 with an array of studies',
    },
};
exports.studyPropertyDocs = {
    post: {
        apiBody: 'Please provide the required params',
        response: 'you should status 200 with study object',
    },
    get: {
        query: {
            tag: 'While this is not a required query, it will help to filter the collection from the server based on possible values',
        },
        params: {
            id: 'please provide this value to zero down on a study',
        },
        response: 'you should status 200 with an array of studies',
    },
    delete: {
        params: {
            id: 'please provide this value to zero down on a study',
        },
        response: 'you should status 200 with an object of status true of false',
    },
};
//# sourceMappingURL=controller.js.map