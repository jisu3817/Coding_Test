{
  function palindromicPermutation(s) {
    const changedString = s.toLowerCase().replace(/\s/g, '').split('');

    let obj = {};
    let oddNumberCnt = 0;
    let result = true;

    for (let i = 0; i < changedString.length; i += 1) {
      if (Object.keys(obj).includes(changedString[i]) === false) {
        obj[changedString[i]] = 1;
      } else obj[changedString[i]] += 1;
    }

    for (key in obj) {
      if (obj[key] % 2 === 1) oddNumberCnt += 1;
      if (oddNumberCnt > 1) {
        result = false;
        break;
      }
    }
    return result;
  }

  console.log(palindromicPermutation('Tact Coat'));
}
