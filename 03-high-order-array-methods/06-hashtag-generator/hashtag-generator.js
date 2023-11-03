function generateHashtag(str) {
    if(str.trim().length === 0 || str.length >140)return false;
    const strArr = str.split(' ').map(word=>(word.charAt(0).toUpperCase()+word.slice(1)));
    const hashtag = `#${strArr.join('')}`;
    return (hashtag);
}

module.exports = generateHashtag;