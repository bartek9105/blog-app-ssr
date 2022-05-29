export const routes = {
  root: () => "/",
  login: () => "/login",
  signup: () => "/signup",
  post: {
    new: () => "/post/new",
    details: (id: number) => `/post/${id}`,
  },
  category: (id: number) => `/category/${id}`,
  search: () => "/search",
  saved: () => "/saved",
};
