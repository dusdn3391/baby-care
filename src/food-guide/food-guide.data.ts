export const FOOD_GUIDE: Record<number, {
  allowed: string[];
  notAllowed: string[];
  notes: string;
}> = {
  4: {
    allowed: ['쌀미음', '찹쌀미음'],
    notAllowed: ['꿀', '생우유', '달걀흰자', '견과류', '생선', '소금', '설탕', '조개류'],
    notes: '이유식 초기: 묽은 미음 1~2회, 수유 위주',
  },
  6: {
    allowed: ['쌀', '감자', '고구마', '애호박', '당근', '달걀노른자', '소고기', '닭고기'],
    notAllowed: ['꿀', '생우유', '달걀흰자', '견과류', '새우', '게', '오징어', '소금', '설탕'],
    notes: '이유식 중기: 하루 1~2회, 입자감 조금씩 추가',
  },
  9: {
    allowed: ['쌀', '잡곡(소량)', '두부', '흰살생선', '달걀전체', '브로콜리', '시금치', '과일류'],
    notAllowed: ['꿀', '생우유', '견과류(통째)', '짠음식', '가공식품'],
    notes: '이유식 후기: 하루 2~3회, 잘게 다진 형태',
  },
  12: {
    allowed: ['대부분의 식품', '생선', '달걀', '유제품', '다양한 채소·과일'],
    notAllowed: ['꿀(12개월 미만)', '짠음식', '당분 많은 음식', '통견과류'],
    notes: '완료기: 어른 식사와 유사하게, 단 자극적이지 않게',
  },
};

export function getFoodGuide(ageMonths: number) {
  const keys = Object.keys(FOOD_GUIDE).map(Number).sort((a, b) => a - b);
  let guide = FOOD_GUIDE[keys[0]];
  for (const key of keys) {
    if (ageMonths >= key) guide = FOOD_GUIDE[key];
  }
  return { ageMonths, ...guide };
}