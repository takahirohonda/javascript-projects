import { MoviesDataSource } from './moviesDataSource';
import { movies } from '../data/movies';
describe('movieDataSource', () => {
  it('should return movie by id', () => {
    const movieDataSource = new MoviesDataSource();
    const movie = movieDataSource.getMoviesById(1);
    expect(movie).toEqual(movies[0]);
  });
});
