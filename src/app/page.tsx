'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import { useBabies } from '@/hooks/useBaby';
import { useFeeding } from '@/hooks/useFeeding';
import { useMeal } from '@/hooks/useMeal';
import Loading from '@/components/common/Loading';
import BottomNav from '@/components/common/BottomNav';
import Link from 'next/link';
import styles from './dashboard.module.css';

export default function DashboardPage() {
  const router = useRouter();
  const { user, hasHydrated } = useAuthStore();
  const { babies, loading: babiesLoading } = useBabies();
  const baby = babies[0] ?? null;
  const { stats: feedingStats, feedings } = useFeeding(baby?.id ?? 0);
  const { stats: mealStats } = useMeal(baby?.id ?? 0);

  useEffect(() => {
    if (!hasHydrated) return;
    if (!user) router.push('/login');
  }, [hasHydrated, user]);

  useEffect(() => {
    if (!hasHydrated || !user) return;
    if (!babiesLoading && babies.length === 0) {
      router.push('/babies/new');
    }
  }, [hasHydrated, user, babiesLoading, babies]);

  if (!hasHydrated || !user) return <Loading />;
  if (babiesLoading) return <Loading />;

  const lastFeeding = feedings?.[0];
  const lastFeedingTime = lastFeeding
    ? new Date(lastFeeding.fedAt).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
    : null;
  const hoursSinceLast = lastFeeding
    ? Math.floor((Date.now() - new Date(lastFeeding.fedAt).getTime()) / (1000 * 60))
    : null;

  return (
    <div className="page">
      <div className="page-header">
        <div className="profile-icon">🐣</div>
        <h1 className="app-title">AllergySafe Baby</h1>
<span style={{ marginLeft: 'auto' }}>
  <Link href="/notifications" style={{ color: 'var(--color-text-muted)', fontSize: 18, textDecoration: 'none' }}>
    🔔
  </Link>
</span>      </div>

      <div className="page-content">
        <div className="card">
          <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>
            안녕하세요, <span style={{ color: 'var(--color-primary)' }}>{baby?.name ?? user?.name}</span> 보호자님!
          </p>
          <p className="subtitle">
            {baby?.ageMonths !== undefined ? `생후 ${baby.ageMonths * 30}일차, ` : ''}
            오늘도 안전한 식사 시간을 응원해요.
          </p>
        </div>

        <div className={styles.alertCard}>
          <div className={styles.alertIcon}>🔔</div>
          <div>
            <p className={styles.alertTitle}>
              {hoursSinceLast !== null && hoursSinceLast >= 180 ? '다음 수유 시간이 지났어요!' : '다음 수유 시간이 다가와요!'}
            </p>
            <p className={styles.alertSub}>
              {lastFeedingTime
                ? `마지막 수유로부터 ${Math.floor((hoursSinceLast ?? 0) / 60)}시간 ${(hoursSinceLast ?? 0) % 60}분이 지났습니다.`
                : '아직 수유 기록이 없어요.'}
            </p>
          </div>
        </div>

        <div className={styles.statRow}>
          <div className={`${styles.statCard} ${styles.yellow}`}>
            <div className={styles.statIcon}>🍼</div>
            <p className={`${styles.statLabel} ${styles.yellow}`}>오늘의 수유</p>
            <p className={styles.statValue}>
              {feedingStats?.totalCount ?? 0}회{' '}
              <span className={`${styles.statValueSub} ${styles.yellow}`}>/ {feedingStats?.totalAmountMl ?? 0}ml</span>
            </p>
          </div>

          <div className={`${styles.statCard} ${styles.mint}`}>
            <div className={styles.statIcon}>🍽️</div>
            <p className={`${styles.statLabel} ${styles.mint}`}>오늘의 이유식</p>
            <p className={styles.statValue}>
              {mealStats?.totalCount ?? 0}회{' '}
              <span className={`${styles.statValueSub} ${styles.mint}`}>/ {mealStats?.totalAmountG ?? 0}g</span>
            </p>
          </div>
        </div>

        <div className={`card ${styles.observeCard}`}>
          <div className={styles.observeHeader}>
            <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>
              오늘의 알레르기 관찰
            </p>
            <span className={styles.badgeSuccess}>이상 없음</span>
          </div>
          <div className={styles.tagRow}>
            {['우유', '달걀', '밀가루'].map((item) => (
              <span key={item} className={styles.tag}>{item}</span>
            ))}
          </div>
        </div>

        <p className={styles.sectionTitle}>간단 기록</p>

        <div className={styles.menuRow}>
          <Link href="/feeding/new" className={styles.menuItem} style={{ background: '#F5EFE3' }}>
            <span className={styles.menuIcon}>💉</span>
            <span className={styles.menuLabel}>수유 기록</span>
          </Link>

          <Link href="/meal/new" className={styles.menuItem} style={{ background: '#FCDF9B' }}>
            <span className={styles.menuIcon}>🍔</span>
            <span className={styles.menuLabel}>이유식 기록</span>
          </Link>

          <Link href="/food-guide" className={styles.menuItem} style={{ background: '#D6EFE3' }}>
            <span className={styles.menuIcon}>📋</span>
            <span className={styles.menuLabel}>식품 가이드</span>
          </Link>
        </div>

        <div className={styles.banner}>
          <p className={styles.bannerTitle}>{baby?.name ?? '우리 아기'}의 건강한 성장을 위해</p>
          <p className={styles.bannerSub}>오늘도 함께 노력해요.</p>
          <div className={styles.bannerFab}>+</div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}