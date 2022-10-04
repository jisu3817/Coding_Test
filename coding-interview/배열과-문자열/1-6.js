{
  function compression(beforeCompression) {
    const beforeCompressionArr = beforeCompression.split("");
    let result = "";
    let targetCnt = 0;

    for (let i = 0; i < beforeCompression.length; i += 1) {
      targetCnt += 1;

      if (
        i + 1 > beforeCompression.length ||
        beforeCompressionArr[i] !== beforeCompressionArr[i + 1]
      ) {
        result += beforeCompressionArr[i] + `${targetCnt}`;
        targetCnt = 0;
      }
    }
    return result.length < beforeCompressionArr.length
      ? result
      : beforeCompression;
  }

  console.log(compression("aabccccaaa"));
}
