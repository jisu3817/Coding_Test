function fourthProblem(N, M) {
  const newN = Array.from(new Set(N));
  let result = 0;
  
  let count = 0;
  let pos = M.indexOf(N[0]); 

  while (pos !== -1) {
    
    count++;
    pos = M.indexOf(N[0], pos + 1); 
  }

  return result;
}

console.log(fourthProblem('good', 'daood'));
// console.log(fourthProblem('atyb', 'fghw'));