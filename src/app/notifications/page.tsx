'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useBabies } from '@/hooks/useBaby';
import {
  getVapidPublicKey,
  subscribePush,
  createNotificationSetting,
  getNotificationSettings,
} from '@/lib/api';
import BottomNav from '@/components/common/BottomNav';
import Loading from '@/components/common/Loading';
import styles from '@/styles/notification-setting.module.css';

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)));
}

export default function NotificationSettingPage() {
  const router = useRouter();
  const { babies, loading: babiesLoading } = useBabies();
  const baby = babies[0];

  const [pushEnabled, setPushEnabled] = useState(false);

  const [feedingMode, setFeedingMode] = useState<'interval' | 'fixed'>('interval');
  const [feedingInterval, setFeedingInterval] = useState(180);
  const [feedingTimes, setFeedingTimes] = useState<string[]>([]);
  const [feedingNewTime, setFeedingNewTime] = useState('09:00');
  const [feedingEnabled, setFeedingEnabled] = useState(true);

  const [mealMode, setMealMode] = useState<'interval' | 'fixed'>('fixed');
  const [mealTimes, setMealTimes] = useState<string[]>(['09:00', '13:00', '17:00']);
  const [mealNewTime, setMealNewTime] = useState('09:00');
  const [mealEnabled, setMealEnabled] = useState(true);

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  // 기존 설정 불러오기
  useEffect(() => {
    if (!baby) return;
    getNotificationSettings(baby.id).then((res) => {
      const settings = res.data;
      const feeding = settings.find((s: any) => s.type === 'feeding');
      const meal = settings.find((s: any) => s.type === 'meal');

      if (feeding) {
        setFeedingMode(feeding.mode);
        setFeedingEnabled(feeding.enabled);
        if (feeding.mode === 'interval' && feeding.intervalMin) setFeedingInterval(feeding.intervalMin);
        if (feeding.mode === 'fixed' && feeding.fixedTimes) setFeedingTimes(feeding.fixedTimes.split(','));
      }
      if (meal) {
        setMealMode(meal.mode);
        setMealEnabled(meal.enabled);
        if (meal.fixedTimes) setMealTimes(meal.fixedTimes.split(','));
      }
    });
  }, [baby]);

  // 푸시 권한 + 구독 등록
  const enablePush = useCallback(async () => {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      setMessage('이 브라우저는 푸시 알림을 지원하지 않아요.');
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      setMessage('알림 권한이 거부되었어요.');
      return;
    }

    const registration = await navigator.serviceWorker.register('/sw.js');
    await navigator.serviceWorker.ready;

    const { data } = await getVapidPublicKey();
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(data.publicKey),
    });

    const subJson = subscription.toJSON();
    await subscribePush({
      endpoint: subJson.endpoint!,
      keys: { p256dh: subJson.keys!.p256dh, auth: subJson.keys!.auth },
    });

    setPushEnabled(true);
    setMessage('푸시 알림이 활성화됐어요!');
  }, []);

  // 알림 권한 상태 체크 (초기)
  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      setPushEnabled(Notification.permission === 'granted');
    }
  }, []);

  const handleSave = async () => {
    if (!baby) return;
    setSaving(true);
    setMessage('');
    try {
      await createNotificationSetting({
        babyId: baby.id,
        type: 'feeding',
        mode: feedingMode,
        intervalMin: feedingMode === 'interval' ? feedingInterval : undefined,
        fixedTimes: feedingMode === 'fixed' ? feedingTimes.join(',') : undefined,
        enabled: feedingEnabled,
      });
      await createNotificationSetting({
        babyId: baby.id,
        type: 'meal',
        mode: mealMode,
        fixedTimes: mealMode === 'fixed' ? mealTimes.join(',') : undefined,
        enabled: mealEnabled,
      });
      setMessage('알림 설정이 저장됐어요!');
    } catch {
      setMessage('저장에 실패했어요.');
    } finally {
      setSaving(false);
    }
  };

  if (babiesLoading) return <Loading />;

  return (
    <div className="page">
      <div className="page-header">
        <div className="profile-icon">🐣</div>
        <h1 className="app-title">AllergySafe Baby</h1>
      </div>

      <div className="page-content">
        <h2 className="title-md">알림 설정</h2>
        <p className="subtitle">수유와 이유식 시간을 알려드려요.</p>

        {/* 푸시 알림 권한 */}
        <div className={styles.toggleSwitch}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)' }}>푸시 알림 권한</p>
            <p style={{ fontSize: 11, color: 'var(--color-text-muted)', marginTop: 2 }}>
              {pushEnabled ? '알림이 활성화되어 있어요' : '알림을 받으려면 활성화해주세요'}
            </p>
          </div>
          {!pushEnabled && (
            <button onClick={enablePush} className="btn-primary" style={{ width: 'auto', padding: '10px 16px', fontSize: 12 }}>
              활성화
            </button>
          )}
        </div>

        {/* 수유 알림 */}
        <div className={styles.section}>
          <div className={styles.toggleSwitch} style={{ marginTop: 0 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)' }}>🍼 수유 알림</p>
            <div
              className={`${styles.switchTrack} ${feedingEnabled ? styles.on : ''}`}
              onClick={() => setFeedingEnabled((v) => !v)}
            >
              <div className={`${styles.switchThumb} ${feedingEnabled ? styles.on : ''}`} />
            </div>
          </div>

          {feedingEnabled && (
            <>
              <div className={styles.modeRow}>
                <button
                  onClick={() => setFeedingMode('interval')}
                  className={`choice-btn ${feedingMode === 'interval' ? 'active' : ''}`}
                >
                  주기 알림
                </button>
                <button
                  onClick={() => setFeedingMode('fixed')}
                  className={`choice-btn ${feedingMode === 'fixed' ? 'active' : ''}`}
                >
                  지정 시간
                </button>
              </div>

              {feedingMode === 'interval' ? (
                <div className="input-box" style={{ marginTop: 10 }}>
                  <span className="input-icon">⏱️</span>
                  <input
                    type="number"
                    value={feedingInterval}
                    onChange={(e) => setFeedingInterval(Number(e.target.value))}
                    placeholder="180"
                  />
                  <span style={{ fontSize: 12, color: 'var(--color-text-muted)', marginLeft: 8 }}>분마다</span>
                </div>
              ) : (
                <>
                  <div className={styles.fixedTimeRow}>
                    {feedingTimes.map((t, i) => (
                      <span key={i} className={styles.timeChip}>
                        {t}
                        <span
                          className={styles.timeChipRemove}
                          onClick={() => setFeedingTimes((arr) => arr.filter((_, idx) => idx !== i))}
                        >
                          ×
                        </span>
                      </span>
                    ))}
                  </div>
                  <div className={styles.addTimeRow}>
                    <input
                      type="time"
                      value={feedingNewTime}
                      onChange={(e) => setFeedingNewTime(e.target.value)}
                      className={styles.addTimeInput}
                    />
                    <button
                      onClick={() => setFeedingTimes((arr) => [...arr, feedingNewTime])}
                      className={styles.addTimeBtn}
                    >
                      추가
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* 이유식 알림 */}
        <div className={styles.section}>
          <div className={styles.toggleSwitch} style={{ marginTop: 0 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)' }}>🍽️ 이유식 알림</p>
            <div
              className={`${styles.switchTrack} ${mealEnabled ? styles.on : ''}`}
              onClick={() => setMealEnabled((v) => !v)}
            >
              <div className={`${styles.switchThumb} ${mealEnabled ? styles.on : ''}`} />
            </div>
          </div>

          {mealEnabled && (
            <>
              <div className={styles.fixedTimeRow}>
                {mealTimes.map((t, i) => (
                  <span key={i} className={styles.timeChip}>
                    {t}
                    <span
                      className={styles.timeChipRemove}
                      onClick={() => setMealTimes((arr) => arr.filter((_, idx) => idx !== i))}
                    >
                      ×
                    </span>
                  </span>
                ))}
              </div>
              <div className={styles.addTimeRow}>
                <input
                  type="time"
                  value={mealNewTime}
                  onChange={(e) => setMealNewTime(e.target.value)}
                  className={styles.addTimeInput}
                />
                <button
                  onClick={() => setMealTimes((arr) => [...arr, mealNewTime])}
                  className={styles.addTimeBtn}
                >
                  추가
                </button>
              </div>
            </>
          )}
        </div>

        {message && <p className="error-text" style={{ color: 'var(--color-primary-text)' }}>{message}</p>}

        <button onClick={handleSave} disabled={saving} className="btn-primary" style={{ marginTop: 24 }}>
          {saving ? '저장 중...' : '설정 저장'}
        </button>
      </div>

      <BottomNav />
    </div>
  );
}