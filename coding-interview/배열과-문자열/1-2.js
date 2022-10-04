{
  function stringPermutation(s1, s2) {
    const sortedS1 = s1.split('').sort().join();
    const sortedS2 = s2.split('').sort().join();

    console.log(sortedS1, sortedS2);
    if (sortedS1 !== sortedS2) console.log(false);
    else console.log(true);
  }

  stringPermutation('dog', 'god');
}
