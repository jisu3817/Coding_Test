{
  function checkDuplicatedString(s) {
    const sArr = s.split('');

    return sArr.some((s) => {
      return sArr.indexOf(s) !== sArr.lastIndexOf(s);
    });
  }

  console.log(checkDuplicatedString('hello'));
}
