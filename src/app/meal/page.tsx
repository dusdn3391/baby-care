'use client';
import { useBabies } from '@/hooks/useBaby';
import { useMeal } from '@/hooks/useMeal';
import BottomNav from '@/components/common/BottomNav';
import Loading from '@/components/common/Loading';
import Link from 'next/link';
import styles from '@/styles/record-list.module.css';

const reactionEmoji: Record<string, string> = {
  good: '😋',
  normal: '😐',
  bad: '😢',
};

export default function MealPage() {
  const { babies } = useBabies();
  const baby = babies[0];
  const { meals, stats, loading } = useMeal(baby?.id ?? 0);

  if (loading) return <Loading />;

  return (
    <div className="page">
      <div className="page-header">
        <div className="profile-icon">🐣</div>
        <h1 className="app-title">AllergySafe Baby</h1>
        <Link href="/meal/new" className={`${styles.addBtn} ${styles.headerRight}`}>
          + 기록
        </Link>
      </div>

      <div className="page-content">
        <h2 className="title-md">이유식 기록</h2>
        <p className="subtitle">오늘 우리 아기의 이유식 현황이에요.</p>

        {/* 오늘 통계 */}
        {stats && (
          <div className={`${styles.statBanner} ${styles.mint}`} style={{ marginTop: 16 }}>
            <p className={`${styles.statBannerTitle} ${styles.mint}`}>오늘 총 {stats.totalCount}회</p>
            <p className={`${styles.statBannerSub} ${styles.mint}`}>총 {stats.totalAmountG}g</p>
            {stats.menus.length > 0 && (
              <div className={styles.tagRow}>
                {stats.menus.map((menu, i) => (
                  <span key={i} className={`${styles.tag} ${styles.mint}`}>{menu}</span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 오늘 이유식 기록 */}
        <p className={styles.listTitle}>오늘 이유식 기록</p>

        {meals.length === 0 ? (
          <div className={styles.emptyBox}>
            <p className={styles.emptyIcon}>🥕</p>
            <p className={styles.emptyText}>오늘 이유식 기록이 없어요</p>
          </div>
        ) : (
          <div className={styles.listWrap}>
            {meals.map((meal) => {
              const time = new Date(meal.eatenAt).toLocaleTimeString('ko-KR', {
                hour: '2-digit',
                minute: '2-digit',
              });
              return (
                <div key={meal.id} className={styles.item}>
                  <div className={`${styles.itemIcon} ${styles.mint}`}>🍽️</div>
                  <div className={styles.itemBody}>
                    <p className={styles.itemTitle}>{meal.menu}</p>
                    <p className={styles.itemSub}>
                      {meal.amountG ? `${meal.amountG}g` : ''}
                      {meal.reaction ? ` ${reactionEmoji[meal.reaction]}` : ''}
                    </p>
                  </div>
                  <p className={styles.itemTime}>{time}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}