function solution(strings, n) {
  return strings.sort((a,b) => {
    const chr1 = a.charAt(n);
    const chr2 = b.charAt(n);
  
    if(chr1 === chr2) {
      return (a > b) - (b > a);
    }
    else {
      return (chr1 > chr2) - (chr2 > chr1);
    }
  })
}

