function solution(park, routes) {
  const answer = [];

  const parkX = park[0].length;
  const parkY = park.length;

  const start = [0, 0];

  // 시작점 찾기
  for (let i = 0; i < park.length; i += 1) {
    const parkOneLine = park[i];
    const startIdx = parkOneLine.indexOf("S");

    if (startIdx > -1) {
      start[0] = i;
      start[1] = startIdx;
      break;
    }
  }

  for (let j = 0; j < routes.length; j += 1) {
    const splitedRoutes = routes[j].split(" ");
    const direction = splitedRoutes[0];
    const distance = splitedRoutes[1];

    if (direction === "E") {
      const after = start[1] + Number(distance);
      if (after >= parkX) continue;

      const isIncludeX = park[start[0]]
        .slice(start[1] + 1, after + 1)
        .includes("X");
      if (isIncludeX) continue;

      start[1] = after;
    }
    if (direction === "W") {
      const after = start[1] - Number(distance);
      if (after < 0) continue;

      const isIncludeX = park[start[0]].slice(after, start[1]).includes("X");
      if (isIncludeX) continue;

      start[1] = after;
    }
    if (direction === "N") {
      const after = start[0] - Number(distance);
      if (after < 0) continue;

      const isIncludeX = park
        .map((x) => x[start[1]])
        .slice(after, start[0])
        .includes("X");
      if (isIncludeX) continue;

      start[0] = after;
    }
    if (direction === "S") {
      const after = start[0] + Number(distance);
      if (after >= parkY) continue;

      const isIncludeX = park
        .map((x) => x[start[1]])
        .slice(start[0] + 1, after + 1)
        .includes("X");
      if (isIncludeX) continue;

      start[0] = after;
    }
  }

  return start;
}
