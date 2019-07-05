import { showFilms } from "../filmsController";

const checkJsonFields = (movie) => {
    if (Object.keys(movie)[1] == 'name'
        && Object.keys(movie)[0] == 'id') {

        return true;
    }
    console.log(Object.keys(movie));
    return false;
};

describe('filmsController', () => {
    describe('showFilms()', () => {
        test('should return movies ids and names', () => {
            const movies = showFilms();
            // console.log(movies);
            // expect(movies.every(checkJsonFields)).toBeTruthy();
            // console.log(movies);
            expect(movies).toMatchSnapshot();

        });
    });
});
