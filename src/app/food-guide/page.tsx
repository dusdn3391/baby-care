'use client';
import { useState, useEffect } from 'react';
import { useBabies } from '@/hooks/useBaby';
import { getFoodGuide } from '@/lib/api';
import { FoodGuide } from '@/types';
import BottomNav from '@/components/common/BottomNav';
import Loading from '@/components/common/Loading';
import styles from '@/styles/food-guide.module.css';

const foodEmoji: Record<string, string> = {
  '쌀미음': '🍚', '찹쌀미음': '🍚',
  '쌀': '🍚', '감자': '🥔', '고구마': '🍠', '애호박': '🥒', '당근': '🥕',
  '달걀노른자': '🍳', '소고기': '🥩', '닭고기': '🍗',
  '잡곡(소량)': '🌾', '두부': '🧊', '흰살생선': '🐟', '달걀전체': '🥚',
  '브로콜리': '🥦', '시금치': '🥬', '과일류': '🍎',
  '대부분의 식품': '🍽️', '생선': '🐟', '달걀': '🥚', '유제품': '🥛', '다양한 채소·과일': '🥗',
  '꿀': '🍯', '생우유': '🥛', '달걀흰자': '🥚', '견과류': '🥜', '조개류': '🦪',
  '새우': '🦐', '게': '🦀', '오징어': '🦑', '소금': '🧂', '설탕': '🍬',
  '견과류(통째)': '🥜', '짠음식': '🧂', '가공식품': '🥫', '꿀(12개월 미만)': '🍯',
  '당분 많은 음식': '🍬', '통견과류': '🥜',
};

const foodDesc: Record<string, string> = {
  '쌀미음': '가장 안전한 시작',
  '쌀': '소화 잘되는 곡류',
  '감자': '부드럽고 소화 잘됨',
  '고구마': '부드럽고 단맛 풍부',
  '소고기': '철분 보충 필수',
  '닭고기': '부드러운 단백질',
  '두부': '식물성 단백질',
  '브로콜리': '비타민 풍부',
};

export default function FoodGuidePage() {
  const { babies } = useBabies();
  const baby = babies[0];
  const [guide, setGuide] = useState<FoodGuide | null>(null);
  const [ageMonths, setAgeMonths] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (baby?.ageMonths !== undefined) {
      setAgeMonths(baby.ageMonths);
    }
  }, [baby]);

  useEffect(() => {
    setLoading(true);
    getFoodGuide(ageMonths)
      .then((res) => setGuide(res.data))
      .finally(() => setLoading(false));
  }, [ageMonths]);

  return (
    <div className="page">
      <div className="page-header">
        <div className="profile-icon">🐣</div>
        <h1 className="app-title">AllergySafe Baby</h1>
      </div>

      <div className="page-content">
        {/* 상단 배지 + 개월수 선택 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className={styles.badge}>{ageMonths}개월 가이드</span>
          <div className={styles.ageSelector}>
            <button onClick={() => setAgeMonths((v) => Math.max(4, v - 1))} className={styles.ageBtn}>−</button>
            <span className={styles.ageValue}>{ageMonths}개월</span>
            <button onClick={() => setAgeMonths((v) => Math.min(24, v + 1))} className={styles.ageBtn}>+</button>
          </div>
        </div>

        {/* 타이틀 */}
        <div className={styles.titleRow}>
          <div>
            <h2 className="title-md">초기 이유식의 시작</h2>
            <p className="subtitle">모유/분유에서 반고형식으로 넘어가는 시기예요.</p>
          </div>
          <span className={styles.titleIcon}>🍴</span>
        </div>

        {loading ? (
          <Loading />
        ) : guide && (
          <>
            {/* 먹어도 되는 음식 */}
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>✅</span>
              <p className={styles.sectionTitle}>먹어도 되는 음식</p>
            </div>
            <div className={styles.allowedGrid}>
              {guide.allowed.map((food, i) => (
                <div key={i} className={styles.allowedCard}>
                  <span className={styles.allowedEmoji}>{foodEmoji[food] ?? '🥣'}</span>
                  <span className={styles.allowedName}>{food}</span>
                  <span className={styles.allowedDesc}>{foodDesc[food] ?? '안전하게 시작해보세요'}</span>
                </div>
              ))}
            </div>

            {/* 주의해야 할 음식 */}
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>⚠️</span>
              <p className={styles.sectionTitle}>주의해야 할 음식</p>
            </div>
            <div className={styles.warnList}>
              {guide.notAllowed.map((food, i) => (
                <div key={i} className={styles.warnItem}>
                  <div className={styles.warnIcon}>{foodEmoji[food] ?? '🚫'}</div>
                  <div className={styles.warnBody}>
                    <p className={styles.warnTitle}>{food}</p>
                    <p className={styles.warnDesc}>알레르기 위험으로 섭취하지 않은 식품이에요.</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 반고형식 전환 팁 */}
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>💡</span>
              <p className={styles.sectionTitle}>반고형식 전환 팁</p>
            </div>
            <div className={styles.tipCard}>
              <div className={styles.tipList}>
                {guide.notes.split('.').filter(Boolean).map((tip, i) => (
                  <div key={i} className={styles.tipItem}>
                    <span className={styles.tipCheck}>✓</span>
                    <span className={styles.tipText}>{tip.trim()}.</span>
                  </div>
                ))}
                <div className={styles.tipItem}>
                  <span className={styles.tipCheck}>✓</span>
                  <span className={styles.tipText}>
                    새로운 재료는 3일 간격을 두고 소량씩 알레르기 반응을 관찰해주세요.
                  </span>
                </div>
                <div className={styles.tipItem}>
                  <span className={styles.tipCheck}>✓</span>
                  <span className={styles.tipText}>
                    아이가 거부한다면 억지로 먹이지 말고 며칠 후 다시 시도해보세요.
                  </span>
                </div>
              </div>
            </div>

            {/* 하단 안내 */}
            <p className={styles.bottomLabel}>오늘의 식단 기록하기</p>

            <button
              onClick={() => location.href = '/meal/new'}
              className="btn-primary"
              style={{ marginTop: 8 }}
            >
              기록 추가
            </button>
          </>
        )}
      </div>

      <BottomNav />
    </div>
  );
}