
import React, { useState, useEffect } from 'react';

const PushNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('push_notif_dismissed');
      if (!dismissed) setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('push_notif_dismissed', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-sm animate-bounce-in">
      <div className="glass p-6 rounded-2xl shadow-2xl border-l-4 border-primary">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-2 rounded-lg text-primary shrink-0">
            <span className="material-icons-outlined">notifications_active</span>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-900">Never miss a dose!</h4>
            <p className="text-sm text-slate-600 mt-1">Get refill reminders and exclusive offers from Madhu Medicals.</p>
            <div className="flex gap-3 mt-4">
              <button 
                onClick={handleDismiss}
                className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all"
              >
                Enable Notifications
              </button>
              <button 
                onClick={handleDismiss}
                className="text-slate-500 text-xs font-bold px-2 py-2 hover:text-slate-800"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PushNotification;
