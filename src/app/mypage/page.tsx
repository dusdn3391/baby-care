'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import { useBabies } from '@/hooks/useBaby';
import { getNotificationSettings, deleteNotificationSetting } from '@/lib/api';
import BottomNav from '@/components/common/BottomNav';
import Loading from '@/components/common/Loading';
import Link from 'next/link';
import styles from '@/styles/mypage.module.css';

interface NotificationSetting {
  id: number;
  type: string;
  mode: string;
  intervalMin?: number;
  fixedTimes?: string;
  enabled: boolean;
}

export default function MyPage() {
  const router = useRouter();
  const { user, logout, hasHydrated } = useAuthStore();
  const { babies, loading: babiesLoading } = useBabies();
  const baby = babies[0];

  const [settings, setSettings] = useState<NotificationSetting[]>([]);
  const [pushPermission, setPushPermission] = useState<string>('default');
  const [subscribed, setSubscribed] = useState(false);
  const [loadingSettings, setLoadingSettings] = useState(true);

  useEffect(() => {
    if (!hasHydrated) return;
    if (!user) router.push('/login');
  }, [hasHydrated, user]);

  useEffect(() => {
    if (!baby) return;
    getNotificationSettings(baby.id)
      .then((res) => setSettings(res.data))
      .finally(() => setLoadingSettings(false));
  }, [baby]);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      setPushPermission(Notification.permission);
    }
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((reg) =>
        reg.pushManager.getSubscription().then((sub) => setSubscribed(!!sub))
      );
    }
  }, []);

  const handleDelete = async (id: number) => {
    await deleteNotificationSetting(id);
    setSettings((prev) => prev.filter((s) => s.id !== id));
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (!hasHydrated || !user || babiesLoading) return <Loading />;

  const formatSetting = (s: NotificationSetting) => {
    if (s.mode === 'interval') {
      return `${s.intervalMin}분마다`;
    }
    return s.fixedTimes ? s.fixedTimes.split(',').join(', ') : '-';
  };

  return (
    <div className="page">
      <div className="page-header">
        <div className="profile-icon">🐣</div>
        <h1 className="app-title">AllergySafe Baby</h1>
      </div>

      <div className="page-content">
        {/* 프로필 카드 */}
        <div className="card">
          <div className={styles.profileCard}>
            <div className={styles.profileAvatar}>👤</div>
            <div>
              <p className={styles.profileName}>{user?.name}</p>
              <p className={styles.profileEmail}>{user?.email}</p>
            </div>
          </div>
        </div>

        {/* 푸시 알림 상태 */}
        <p className={styles.sectionTitle}>푸시 알림 상태</p>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)' }}>알림 권한</p>
              <p style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 2 }}>
                {pushPermission === 'granted' ? '허용됨' : pushPermission === 'denied' ? '거부됨' : '아직 설정 안 함'}
              </p>
            </div>
            <span className={`${styles.statusBadge} ${pushPermission === 'granted' ? styles.on : styles.off}`}>
              <span className={`${styles.dot} ${pushPermission === 'granted' ? styles.on : styles.off}`} />
              {pushPermission === 'granted' ? '허용' : '미허용'}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)' }}>구독 상태</p>
              <p style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 2 }}>
                {subscribed ? '서버에 등록되어 알림을 받을 수 있어요' : '구독되지 않았어요'}
              </p>
            </div>
            <span className={`${styles.statusBadge} ${subscribed ? styles.on : styles.off}`}>
              <span className={`${styles.dot} ${subscribed ? styles.on : styles.off}`} />
              {subscribed ? '구독중' : '미구독'}
            </span>
          </div>
        </div>

        {/* 알림 설정 바로가기 */}
        <p className={styles.sectionTitle}>알림 설정</p>
        <Link href="/notifications" className={styles.linkRow}>
          알림 시간 설정하기
          <span className={styles.linkArrow}>›</span>
        </Link>

        {/* 등록된 알림 목록 */}
        {loadingSettings ? (
          <Loading />
        ) : settings.length === 0 ? (
          <div className="card">
            <p className={styles.emptyText}>등록된 알림이 없어요</p>
          </div>
        ) : (
          settings.map((s) => {
            const isFeeding = s.type === 'feeding';
            return (
              <div key={s.id} className={styles.settingItem}>
                <div className={styles.settingLeft}>
                  <div className={`${styles.settingIcon} ${isFeeding ? styles.yellow : styles.mint}`}>
                    {isFeeding ? '🍼' : '🍽️'}
                  </div>
                  <div>
                    <p className={styles.settingTitle}>{isFeeding ? '수유 알림' : '이유식 알림'}</p>
                    <p className={styles.settingSub}>
                      {s.enabled ? formatSetting(s) : '비활성화됨'}
                    </p>
                  </div>
                </div>
                <button className={styles.deleteBtn} onClick={() => handleDelete(s.id)}>
                  삭제
                </button>
              </div>
            );
          })
        )}

        {/* 로그아웃 */}
        <button className={styles.logoutBtn} onClick={handleLogout}>
          로그아웃
        </button>
      </div>

      <BottomNav />
    </div>
  );
}