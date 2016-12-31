function cakes(recipe, available) {
    var maxCakes, count;
    for (var key in recipe) {
        if (!available[key]) {
            return 0;
        }
        count = Math.floor(available[key]/recipe[key]);
        console.log(count);
        if (!maxCakes || count < maxCakes) {
            maxCakes = count;
        }
    }
    return maxCakes;
}
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); 