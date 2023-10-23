function countingValleys(steps, path) {
    let currentAltitude = 0;
    let valleysCrossed = 0;

    for (let i = 0; i < path.length; i++) {
        let previousAltitude = currentAltitude;
        currentAltitude = path.charAt(i) === 'U' ? currentAltitude+ 1 : currentAltitude-1;
        if (currentAltitude === -1 && previousAltitude === 0) {
            valleysCrossed++;
        }

    }
    return valleysCrossed;
}

console.log(countingValleys(8,'UDDDUDUU'));