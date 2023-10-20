function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here

    const convertedApples = apples.map((apple)=> apple + a).filter((apple)=> apple >= s && apple <= t)
    const convertedOranges = oranges.map((orange)=> orange + b).filter((orange)=> orange >= s && orange <= t)

    console.log(convertedApples.length);
    console.log(convertedOranges.length);
}

countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6])