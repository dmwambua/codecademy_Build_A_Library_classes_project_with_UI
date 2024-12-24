//THIS IS WHAT THE ASSIGNMENT CALLS FOR, HOWEVER, I WANTED TO DO A UI FOR THIS PROJECT AND SO ONLY THE INDEX.HTML FILE IS USED, THIS MAIN,JS FILE IS NOT USED AND IS COMMENTED OUT

/*
class Media {
  constructor(title, isCheckedOut = false, ratings = []) {
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = ratings;
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    const ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const numberOfRatings = this._ratings.length;
    return numberOfRatings === 0 ? 0 : ratingsSum / numberOfRatings;
  }
  addRating(newRating) {
    // Round to one decimal point using ceil logic
    const roundedRating = Math.ceil(newRating * 10) / 10;
    this._ratings.push(roundedRating);
  }
}

class Book extends Media {
  constructor(title, isCheckedOut, author, pages, ratings) {
    super(title, isCheckedOut, ratings);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, isCheckedOut, ratings, director, runTime) {
    super(title, isCheckedOut, ratings);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class Cd extends Media {
  constructor(title, isCheckedOut, ratings, songs) {
    super(title, isCheckedOut, ratings);
    this._songs = songs;
  }
  get songs() {
    return this._songs;
  }
}

// Testing the updated addRating method
// Create a Book instance
const book1 = new Book("The Great Gatsby", false, "F. Scott Fitzgerald", 180, [4.23, 5.67, 3.89]);
console.log("Initial Ratings:", book1.ratings);
book1.addRating(4.56);
console.log("Ratings After Adding 4.56 (Rounded):", book1.ratings);

// Create a Movie instance
const movie1 = new Movie("Inception", false, [4.45, 3.78, 4.99], "Christopher Nolan", 148);
console.log("\nInitial Ratings:", movie1.ratings);
movie1.addRating(3.14);
console.log("Ratings After Adding 3.14 (Rounded):", movie1.ratings);

// Create a CD instance
const cd1 = new Cd("Thriller", false, [4.12, 4.88, 3.99], ["Thriller", "Beat It", "Billie Jean"]);
console.log("\nInitial Ratings:", cd1.ratings);
cd1.addRating(4.01);
console.log("Ratings After Adding 4.01 (Rounded):", cd1.ratings);
*/