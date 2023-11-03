function validAnagrams(str1,str2) {
    const str1Arr=str1.split('');
    const str2Arr=str2.split('');

    const freq1 = str1Arr.reduce((acc,char)=>{
        acc[char] = (acc[char] || 0)+1;
        return acc;
    },{})

    const freq2 = str2Arr.reduce((acc,char)=>{
        acc[char] = (acc[char] || 0)+1;
        return acc;
    },{})

    return (Object.keys(freq1).every(keys=>freq1[keys] === freq2[keys]));
}

module.exports = validAnagrams;
