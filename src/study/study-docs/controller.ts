export const studyDocs = {
  post: {
    apiBody: 'Please provide the required params',
    response: 'you should status 200 with study object',
  },
  get: {
    query: {
      page: 'Please provide this value or 1 as it default',
      search:
        'few word to do an index search on the study(description property)',
    },
    params: {
      id: 'please provide this value to zero down on a study',
    },
    response: 'you should status 200 with an array of studies',
  },
};
