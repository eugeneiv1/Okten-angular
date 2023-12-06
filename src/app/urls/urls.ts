const baseURL = 'https://jsonplaceholder.typicode.com/';

const users = `${baseURL}/users`;

const urls = {
  users: {
    base: users,
    getPosts: (id:number):string => `${users}/${id}/posts`
  }
}

export {
  urls
}
