import { DataSource } from 'apollo-datasource';
import { movies } from '../data/movies';

export class MoviesDataSource extends DataSource {
  constructor() {
    super();
  }

  getMovies() {
    return movies;
  }

  getMoviesById(id: number) {
    console.log(movies.filter(movie => movie.id === id));
    return movies.filter(movie => movie.id === id)[0];
  }
}
