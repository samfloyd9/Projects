function RandomCode() {
  
  // takes only words with 5 letters or more and reverses them
function spinWords(string){
  let reversedString = '';
  const reversedStrArray = string.split(' ');
  reversedStrArray.map((str, i) => {
    if (str.length >= 5) {
      reversedStrArray[i] = str.split('').reverse().join('');
    } else {
      reversedStrArray[i] = str;
    }
    reversedString = reversedStrArray.join(' ');
  });
  return reversedString;
}

// return masked string, where the last 4 are revealed 
// (ex. Credit Card, Passwords, Secret Question)
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
    
  return (
    <div>Random Code</div>
  );
}

export default RandomCode;