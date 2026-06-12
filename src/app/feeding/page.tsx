'use client';
import { useBabies } from '@/hooks/useBaby';
import { useFeeding } from '@/hooks/useFeeding';
import BottomNav from '@/components/common/BottomNav';
import Loading from '@/components/common/Loading';
import Link from 'next/link';
import styles from '@/styles/record-list.module.css';

const typeLabel: Record<string, { label: string; emoji: string }> = {
  breast: { label: '모유', emoji: '🤱' },
  formula: { label: '분유', emoji: '🍼' },
  mixed: { label: '혼합', emoji: '🔀' },
};

export default function FeedingPage() {
  const { babies } = useBabies();
  const baby = babies[0];
  const { feedings, stats, loading } = useFeeding(baby?.id ?? 0);

  if (loading) return <Loading />;

  return (
    <div className="page">
      <div className="page-header">
        <div className="profile-icon">🐣</div>
        <h1 className="app-title">AllergySafe Baby</h1>
        <Link href="/feeding/new" className={`${styles.addBtn} ${styles.headerRight}`}>
          + 기록
        </Link>
      </div>

      <div className="page-content">
        <h2 className="title-md">수유 기록</h2>
        <p className="subtitle">오늘 우리 아기의 수유 현황이에요.</p>

        {/* 오늘 통계 */}
        {stats && (
          <div className={`${styles.statBanner} ${styles.yellow}`} style={{ marginTop: 16 }}>
            <p className={`${styles.statBannerTitle} ${styles.yellow}`}>오늘 총 {stats.totalCount}회</p>
            <p className={`${styles.statBannerSub} ${styles.yellow}`}>총 {stats.totalAmountMl}ml</p>
            {Object.keys(stats.byType).length > 0 && (
              <div className={styles.tagRow}>
                {Object.entries(stats.byType).map(([type, count]) => (
                  <span key={type} className={`${styles.tag} ${styles.yellow}`}>
                    {typeLabel[type]?.emoji} {typeLabel[type]?.label} {count}회
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 오늘 수유 기록 */}
        <p className={styles.listTitle}>오늘 수유 기록</p>

        {feedings.length === 0 ? (
          <div className={styles.emptyBox}>
            <p className={styles.emptyIcon}>🍼</p>
            <p className={styles.emptyText}>오늘 수유 기록이 없어요</p>
          </div>
        ) : (
          <div className={styles.listWrap}>
            {feedings.map((feeding) => {
              const time = new Date(feeding.fedAt).toLocaleTimeString('ko-KR', {
                hour: '2-digit',
                minute: '2-digit',
              });
              return (
                <div key={feeding.id} className={styles.item}>
                  <div className={`${styles.itemIcon} ${styles.yellow}`}>
                    {typeLabel[feeding.type]?.emoji}
                  </div>
                  <div className={styles.itemBody}>
                    <p className={styles.itemTitle}>{typeLabel[feeding.type]?.label}</p>
                    <p className={styles.itemSub}>
                      {feeding.amountMl ? `${feeding.amountMl}ml` : `${feeding.durationMin}분`}
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