/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (array) => {
    let newArray = array.map(element => element)
    newArray.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } else {
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
    let newArray = array.map(e => e.title);
    newArray.sort().splice(20);
    return newArray
};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

let ratesAverage = (array) => {
    if (array.length === 0) {
        return 0;
    }
    let newArray = array.filter(elem => {
        return typeof elem.rate !== 'undefined';
    })
    let number = newArray.reduce((sum, ele) => {
        return sum += ele.rate / array.length;
    }, 0);
    return +number.toFixed(2);
}

// Iteration 5: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = (array) => {
    let newArray = array.filter(movie => {
        return movie.genre.includes('Drama');
    });
    let number = newArray.reduce((sum, ele) => {
        return sum += ele.rate / newArray.length;
    }, 0);
    return +number.toFixed(2);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

let turnHoursToMinutes = (array) => {
    let newArray = JSON.parse(JSON.stringify(movies));
    newArray.map(movie => {
        let y = movie.duration.split(' ');
        let num = 0;
        for (let i = 0; i < y.length; i++) {
            if (y[i].includes('h')) {
                num += 60 * +y[i].replace('h', '');
            } else if (y[i].includes('min')) {
                num += +y[i].replace('min', '');
            }
        }
        movie.duration = +num
        return movie;
    })
    return newArray;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
