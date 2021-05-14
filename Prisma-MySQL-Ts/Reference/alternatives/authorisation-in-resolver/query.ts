/* eslint-disable no-unused-vars */

import { ADMIN_ROLE, READONLY_ROLE } from '../../../constants';

export interface User {
  username: string,
  password: string,
  role: string[]

}
export interface Context {
  dataSources: any;
  user: User
}

export const Query = {
  movies: (parent: unknown, args: unknown, { dataSources, user }: Context, info: unknown) => {
    // Check permission here!
    if (user?.role.includes(ADMIN_ROLE)) {
      return dataSources.moviesDataSource.getMovies();
    }
    return undefined;
  },
  movieById: (parent: unknown, args: unknown, { dataSources, user }: Context, info: unknown) => {
    return dataSources.moviesDataSource.getMoviesById();
  },
};
