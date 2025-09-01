import React from 'react';
import { TrendingUp, Users, Clock, Target } from 'lucide-react';
import StatsCard from '../StatsCard';

const StatisticsSection: React.FC = () => {
  const chartData = [
    { day: 'Пн', height: 80 },
    { day: 'Вт', height: 65 },
    { day: 'Ср', height: 90 },
    { day: 'Чт', height: 75 },
    { day: 'Пт', height: 95 },
    { day: 'Сб', height: 40 },
    { day: 'Вс', height: 30 }
  ];

  const sourceData = [
    { name: 'Недвижимость Москвы', percentage: 35 },
    { name: 'Бизнес консультации', percentage: 25 },
    { name: 'Дизайн интерьера', percentage: 15 },
    { name: 'Стартапы и IT', percentage: 15 },
    { name: 'Маркетинг и Реклама', percentage: 10 }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Всего лидов"
          value="342"
          change="+8% за месяц"
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
          title="Среднее время ответа"
          value="12 мин"
          change="+2 мин за неделю"
          changeType="negative"
          icon={Clock}
          color="orange"
        />
        <StatsCard
          title="Эффективность ключевых слов"
          value="76%"
          change="+5% за месяц"
          changeType="positive"
          icon={TrendingUp}
          color="purple"
        />
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Лиды по дням</h2>
        </div>
        <div className="p-6">
          <div className="flex items-end justify-between h-32 gap-4">
            {chartData.map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className="w-full bg-blue-600 rounded-t-md transition-all hover:bg-blue-700"
                  style={{ height: `${item.height}%` }}
                ></div>
                <div className="text-xs text-gray-600 mt-2">{item.day}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sources */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Источники лидов</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sourceData.map((source, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">{source.name}</span>
                  <span className="text-sm text-gray-600">{source.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 bg-blue-600 rounded-full transition-all"
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;