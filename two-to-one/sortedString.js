function longest(s1, s2) {
    let oneString = s1 += s2;
    let sortedString = oneString.split('').filter(function (item, pos, self){
      return self.indexOf(item) === pos;
    }).sort().join('');
    return sortedString;
  }