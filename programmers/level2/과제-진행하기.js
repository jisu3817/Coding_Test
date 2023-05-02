function solution(plans) {
  const result = [];

  const plansMap = plans
    .map((plan) => {
      const [hh, mm] = plan[1].split(":");
      const convertedMinute = Number(hh) * 60 + Number(mm);

      return [plan[0], convertedMinute, Number(plan[2])];
    })
    .sort((p1, p2) => p1[1] - p2[1]);

  const first = plansMap.shift();
  const stack = [first];
  let nowTime = first[1];

  while (plansMap.length) {
    const plan = plansMap.shift();
    const [name, start, time] = plan;
    let timeDiff = start - nowTime;

    nowTime = start;

    while (timeDiff > 0 && stack.length) {
      const stopPlan = stack.pop();
      const [stopName, stopStart, stopTime] = stopPlan;

      if (stopTime <= timeDiff) {
        result.push(stopName);
        timeDiff -= stopTime;
      } else {
        stopPlan[2] = stopTime - timeDiff;
        timeDiff = 0;
        stack.push(stopPlan);
      }
    }

    stack.push(plan);
  }

  while (stack.length) {
    result.push(stack.pop()[0]);
  }

  return result;
}
