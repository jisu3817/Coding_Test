{
  function checkOneChangedString(firstString, secondString) {
    // 문자열 길이 검사
    if (Math.abs(firstString.length - secondString.length) > 1) return false;

    const s1 =
      firstString.length > secondString.length ? firstString : secondString;
    const s2 =
      firstString.length > secondString.length ? secondString : firstString;

    let idx1 = 0;
    let idx2 = 0;
    let diffStringCnt = false;

    while (idx1 < s1.length && idx2 < s2.length) {
      console.log(idx1);
      console.log(idx2);
      console.log(diffStringCnt);
      if (s1[idx1] != s2[idx2]) {
        if (diffStringCnt) return false;
        diffStringCnt = true;

        if (s1.length === s2.length) {
          idx2 += 1;
        }
      } else {
        idx2 += 1;
      }
      idx1 += 1;
    }
    return true;
  }

  console.log(checkOneChangedString('acbdd', 'abce'));
}
