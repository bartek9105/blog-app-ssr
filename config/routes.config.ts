export const routes = {
  root: () => "/",
  login: () => "/login",
  signup: () => "/signup",
  post: {
    new: () => "/post/new",
  },
  category: (id: number) => `/category/${id}`,
  search: () => "/search",
  saved: () => "saved",
};
