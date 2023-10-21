function migratoryBirds(arr) {
    // Write your code here

    let mostBirds = 0;
    let IdMostBirds = 0;

    const tracker = {}

    for (const bird of arr) {

        tracker[bird] = (tracker[bird] || 0) + 1 
    }

    const values = Object.values(tracker);
    mostBirds = Math.max(...values);

    for (const birdId of Object.keys(tracker)) {
        if (IdMostBirds>0) break;
        if (tracker[birdId] === mostBirds) {
            IdMostBirds = birdId;
        }
    }

    return IdMostBirds;

}


console.log(migratoryBirds([1,1,2,2,2,3,3,3,3]));