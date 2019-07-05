import { showFilms } from "../filmsController";

describe('filmsController', () => {
    describe('showFilms()', () => {
        test('should return movies ids and names', () => {
            const movies = showFilms();
            expect(Object.keys(movies)).toEqual(['id','name']);
            console.log(movies);
        });
    });
});
