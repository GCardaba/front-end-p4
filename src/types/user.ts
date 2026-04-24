export type User = {
  _id: string;
  name: string;
  username: string;
  seguidores: [ {
        _id: string;
        username: string;}
    ];
    siguiendo: [{
        _id: string;
        username: string;}
    ];

    createdAt: Date;
    updatedAt: Date;
    __v: number;
};

export type Comentario = {
    _id: string;
    contenido: string;
    autor: {
        _id: string;
        username: string;
    };
    fecha: Date;

}

export type Post = {
  _id: string;
  contenido: string;
  autor: {
    _id: string;
    username: string
  };
  likes: [string];
  retweets: [
    {
      usuario: string;
      fecha: Date;
    }
  ];
  comentarios: Comentario[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}


export type UserResponse = { 
  user: User;
  posts: Post[];
};
