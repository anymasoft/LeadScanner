import React, { useState } from 'react';
import { MessageSquare, CheckCircle, Settings } from 'lucide-react';

const IntegrationSection: React.FC = () => {
  const [telegramUsername, setTelegramUsername] = useState('@aleksey_tg');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Интеграция с Telegram</h2>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ваш Telegram username
            </label>
            <input
              type="text"
              value={telegramUsername}
              onChange={(e) => setTelegramUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="text-xs text-gray-500 mt-1">
              Для отправки уведомлений о новых лидах
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Статус подключения
            </label>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-green-700 font-medium">Бот подключен</span>
            </div>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all">
            <Settings className="w-4 h-4" />
            Настроить заново
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;