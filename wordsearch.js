const wordSearch = (letters, word) => { 
   
    let newArray = [];
    for (let i = 0; i < letters[0].length; i++) {
      newArray[i] = [];
    }
  
    for (let row = 0; row < letters.length; row++) {
      for (let co = 0; co < letters[row].length; co++) {
        newArray[co][row] = letters[row][co];
      }
    }
       const verticalJoin = newArray.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    
    

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
  };


module.exports = wordSearch
