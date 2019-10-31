var languagesArrayCreation = function () {

  return ['Html', 'CSS', 'Java', 'PHP' ];
}

var numbersArrayCreation = function () {

    return [ 0, 1, 2, 3, 4, 5 ];
}

var ElementReplacement = function (languages) {
  languages[2]='Javascript';
  // J'accéde par la fonction à l'item Java qui se trouve à la 2éme position.Je le remplace par Javascript.
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages.push('Ruby','Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
numbers.unshift(-2,-1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
languages.shift();
  return languages;
}

var deleteArrayLastElement = function (languages) {
languages.pop();
  return languages;
}

var stringToArray = function (socialMediaInString) {
socialMedia = socialMediaInString.split(',');
// le socialMedia recoit le reste de la chaine donc on le met en 1er. On retourne le tableau socialMedia.
  return socialMedia;
}

var arrayToString = function (languages) {

  return 'A compléter';
}

var arraySort = function (socialMedia) {

  return 'A compléter';
}

var arrayInvert = function (languages){


  return 'A compléter';
}
