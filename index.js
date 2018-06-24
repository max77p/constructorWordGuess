var word = require("./word.js");

var words = {
    City:["toronto","california","london","montreal"],
    Sports:["soccer","curling","jordan","stadium","rink"],
    PopCulture:["katy","movie","jackson","instagram","hollywood","facebook"],
    Animals:["dog","hippo","rhino","panda","Lion","racoon"]
}

var pickcategory=function(){
    var keywords=Object.keys(words);
    var combine="";
    var selection;
    //console.log(keywords);
    var getrandomcategory= keywords[Math.floor(Math.random() * keywords.length)];
    hint(getrandomcategory);
    var wordsforCategory=words[getrandomcategory];
    temprandomword = wordsforCategory[Math.floor(Math.random() * wordsforCategory.length)]
    var temphangmanarr = temprandomword.toUpperCase().split("")
    return temphangmanarr;
}

var word1= new word.wordKey("Percy");
console.log(word1.wordArr);