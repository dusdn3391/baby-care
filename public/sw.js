self.addEventListener('push', (event) => {
  const data = event.data.json();

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      data: data.data,
      actions: data.actions || [],
      icon: '/icons/icon-192.png',
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const { logId } = event.notification.data || {};
  let status = null;

  if (event.action === 'done') status = 'done';
  if (event.action === 'skip') status = 'skipped';

  if (status && logId) {
    event.waitUntil(
      fetch('http://localhost:3000/notification/logs/respond', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ logId, status }),
      })
    );
  } else {
    // 알림 본문 클릭 시 앱 열기
    event.waitUntil(clients.openWindow('/'));
  }
});