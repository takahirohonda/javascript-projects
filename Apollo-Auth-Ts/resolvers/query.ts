/* eslint-disable no-unused-vars */
export interface Context {
  dataSources: any;
}

export const Query = {
  movies: (parent: unknown, args: unknown, { dataSources }: Context, info: unknown) => {
    return dataSources.moviesDataSource.getMovies();
  },
  movieById: (parent: unknown, args: unknown, { dataSources }: Context, info: unknown) => {
    return dataSources.moviesDataSource.getMovies();
  },
};
