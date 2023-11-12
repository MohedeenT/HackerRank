function climbingLeaderboard(leaderboard, playerScores) {
    const distinctLeaderboard = [...new Set(leaderboard)];
    const ranks = [];

    let i = distinctLeaderboard.length - 1;
    console.log(i);

    for (const score of playerScores) {
        while (i >= 0 && score >= distinctLeaderboard[i]) {
            console.log(score + " is grearter than " + distinctLeaderboard[i] );
            i--;
        }
        if (i === -1) {
            ranks.push(1);
        } else {
            ranks.push(i + 2);
        }
    }

    return ranks;
}

console.log(climbingLeaderboard([100,90,80],[106,80,84,77,105]));