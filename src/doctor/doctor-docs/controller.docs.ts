import { ApiProperty } from "@nestjs/swagger";

export const doctorDocs = {
  post: {
    apiBody: 'Please provide the required params',
    response: 'you should status 200 with doctor object',
  },
  get: {
    query: {
      page: 'Please provide this value or 1 as it default',
      search:
        'this would be the exact match to the doctor name, not fuzzy searches',
    },
    params: {
      id: 'please provide this value to zero down on a study',
    },
    response: 'you should status 200 with an array of doctor',
  },
  update: {
    apiBody: 'Please provide the required params',
    id: 'please provide the doctor\'s _id',
    response: 'you should status 200 with a  modified object',
  },
  delete: {
    id: 'please provide the doctor\'s _id',
    response:  'you should status 200 with a  modified object',
  },
};

export class UpdateNDeleteResponse {
  @ApiProperty({
    description: 'the value will be true if the action was successful',
  })
  modified: boolean;
}