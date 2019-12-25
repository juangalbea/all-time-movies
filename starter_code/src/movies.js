/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (array) => {
    let newArray = array.map(element => element)
    newArray.sort((a,b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        }else {
        return a.year - b.year
        }
    });
    return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

let howManyMovies = (array) => {
    let newArray = array.filter(movie => {
        return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
    });
    return newArray.length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

let orderAlphabetically = (array) => {
    let newArray
};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
