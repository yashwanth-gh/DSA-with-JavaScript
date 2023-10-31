function areAllCharactersUnique(str) {
    const set = new Set(str.split(''));
    if(set.size !== str.length)return false;
    return true;
}

module.exports = areAllCharactersUnique;
