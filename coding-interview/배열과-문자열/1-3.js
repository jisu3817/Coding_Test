{
  function fillBlanks(s) {
    const sArr = s.split('');

    const filledBlanks = sArr.map((s) => {
      if (s === ' ') return '%20';
      else return s;
    });

    return filledBlanks.join('');
  }

  console.log(fillBlanks('ca t'));
}
