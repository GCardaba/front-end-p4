export type User = {
  id: string;
  name: string;
  username: string;
  profile_image_url: string;
};

export type UserResponse = { 
    "_id": "string",
    "username": "string",
    "email": "string",
  "posts": [
    {
      "_id": "string",
      "contenido": "string",
      "autor": {
        "_id": "string",
        "username": "string"
      },
      "likes": [
        "string"
      ],
      "retweets": [
        {
          "usuario": "string",
        }
      ],
      "comentarios": [
        {
          "_id": "string",
          "contenido": "string",
          "autor": {
            "_id": "string",
            "username": "string"
          },
        }
      ],
      "createdAt": "2026-04-24T14:27:42.632Z",
      "updatedAt": "2026-04-24T14:27:42.632Z"
    }
  ]

};

/* /api/users/{id}/profile */
