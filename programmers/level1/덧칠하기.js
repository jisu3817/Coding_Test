function solution(n, m, section) {
  let result = 0;
  let paintableWall = 0;
  let paintedWall = 0;
  for (let i = 0; i < section.length; i += 1) {
    const nowSection = section[i];

    if (paintedWall === 0) {
      result += 1;
      paintableWall = nowSection + m - 1;
      paintedWall = nowSection;
    }

    if (paintableWall >= nowSection) {
      paintedWall = nowSection;
      continue;
    }

    if (paintableWall < nowSection) {
      result += 1;
      paintableWall = nowSection + m - 1;
      paintedWall = nowSection;
    }
  }

  return result;
}
