import React from 'react';
import { TrendingUp, Users, Clock, Target, ArrowRight } from 'lucide-react';
import StatsCard from '../StatsCard';

interface DashboardSectionProps {
  onNavigate: (section: string) => void;
}

const DashboardSection: React.FC<DashboardSectionProps> = ({ onNavigate }) => {
  const recentLeads = [
    {
      id: 1,
      name: 'Мария Иванова',
      username: '@maria_ivanova',
      text: 'купить квартиру',
      chat: 'Недвижимость Москвы',
      time: '12:30',
      link: 'https://t.me/maria_ivanova'
    },
    {
      id: 2,
      name: 'Сергей Петров',
      username: '@sergey_petrov',
      text: 'юридические услуги',
      chat: 'Бизнес консультации',
      time: '11:45',
      link: 'https://t.me/sergey_petrov'
    },
    {
      id: 3,
      name: 'Анна Сидорова',
      username: '@anna_sidorova',
      text: 'дизайнер интерьера',
      chat: 'Дизайн интерьера',
      time: '10:20',
      link: 'https://t.me/anna_sidorova'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Лидов за сегодня"
          value="12"
          change="+2 с вчера"
          changeType="positive"
          icon={Users}
          color="blue"
        />
        <StatsCard
          title="Конверсия"
          value="18%"
          change="+3% за месяц"
          changeType="positive"
          icon={Target}
          color="green"
        />
        <StatsCard
          title="Активных отслеживаний"
          value="3"
          change="0 изменений"
          changeType="neutral"
          icon={TrendingUp}
          color="purple"
        />
        <StatsCard
          title="Новых ключевых слов"
          value="5"
          change="+5 за неделю"
          changeType="positive"
          icon={Target}
          color="orange"
        />
      </div>

      {/* Recent Leads */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Последние лиды</h2>
          <button
            onClick={() => onNavigate('leads')}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all text-sm font-medium"
          >
            Все лиды
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            {recentLeads.map(lead => (
              <div
                key={lead.id}
                onClick={() => window.open(lead.link, '_blank')}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-all"
              >
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{lead.name}</div>
                  <div className="text-sm text-gray-600">
                    {lead.username} · {lead.text} · {lead.chat}
                  </div>
                </div>
                <div className="text-sm text-gray-500 ml-4">{lead.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monitoring Status */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Статус мониторинга</h2>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium text-gray-900">Мониторинг активен</span>
              </div>
              <div className="text-sm text-gray-600">
                Отслеживается 3 чата, 8 ключевых слов
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all text-sm">
                Приостановить
              </button>
              <button
                onClick={() => onNavigate('keywords')}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all text-sm"
              >
                Настройки
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;