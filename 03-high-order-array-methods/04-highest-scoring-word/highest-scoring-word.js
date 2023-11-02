function highestScoringWord(str) {
    let scores=[];
    scores = str.split(' ').map((word)=>{
        const wordScore = word.split('').reduce((sum,char)=>sum+(char.charCodeAt(0)-96),0)
        return wordScore
    })
    const max= Math.max(...scores);
    let maxIndex = -1;
    scores.forEach((score,index)=>{
        if(score===max)maxIndex =index;
    })
    // console.log(scores)
    // console.log(maxIndex)
    const solution = str.split(' ')[maxIndex]
    return solution;
}

module.exports = highestScoringWord;
