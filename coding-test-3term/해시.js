function thirdProblem(participants) {
  const result = [];
  for (let participant of participants) {
    if (participant['성별'] === '남자') {
      if (participant['나이'] >= 18 && participant['나이'] < 60) {
        if (participant['키'] >= 170 && participant['체중'] >= 70) {
          result.push(participant['이름']);
        }
      }
    }
    // if (participant['성별'] === '남자' && participant['나이'] >= 18 && participant['나이'] < 60 && participant['키'] >= 170 && participant['체중'] >= 70) {
    //   result.push(participant['이름']);
    // }
  }
  return result;
}

const participants = [
	{
	이름: '조상우',
	성별: '남자',
	나이: 47,
	키: 181,
	체중: 85
	},
	{
	이름: '오일남',
	성별: '남자',
	나이: 77,
	키: 175,
	체중: 65
	},
	{
	이름: '한미녀',
	성별: '여자',
	나이: 45,
	키: 167,
	체중: 49
	},
	{
	이름: '압둘 알리',
	성별: '남자',
	나이: 33,
	키: 172,
	체중: 78
	},
	{
	이름: '장덕수',
	성별: '남자',
	나이: 44,
	키: 180,
	체중: 73
	},
	{
	이름: '강새벽',
	성별: '여자',
	나이: 27,
	키: 176,
	체중: 54
	}
]

console.log(thirdProblem(participants));