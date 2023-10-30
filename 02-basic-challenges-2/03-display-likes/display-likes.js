function displayLikes(names) {
    const len = names.length;
    let stats ='';
    if(len === 0){
        stats = 'no one likes this';
    }else if(len === 1){
        stats = `${names[0]} likes this`
    }else if(len === 2){
        stats = `${names[0]} and ${names[1]} like this`
    }else if(len === 3){
        stats = `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else{
        stats = `${names[0]}, ${names[1]} and ${len-2} others like this`
    }
    return stats;
}

module.exports = displayLikes;
