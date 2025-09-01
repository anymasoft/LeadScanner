import React from 'react';
import { Bot, Lightbulb, TrendingUp } from 'lucide-react';

const AIRecommendationsSection: React.FC = () => {
  const keywordRecommendations = [
    'аренда квартиры',
    'юридическая консультация',
    'дизайн проект',
    'мобильное приложение',
    'таргетированная реклама'
  ];

  const channelRecommendations = [
    'Архитектура и дизайн',
    'IT разработка',
    'Юридические услуги'
  ];

  return (
    <div className="space-y-6">
      {/* Keywords Recommendations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">AI-рекомендации</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Bot className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-900">Рекомендации по ключевым словам</h3>
            </div>
            <p className="text-gray-700 mb-4">
              На основе анализа ваших лидов, AI рекомендует добавить следующие ключевые слова:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {keywordRecommendations.map((keyword, index) => (
                <div
                  key={index}
                  className="px-3 py-2 bg-white border border-blue-200 rounded-full text-sm text-blue-800"
                >
                  {keyword}
                </div>
              ))}
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm">
              Применить все рекомендации
            </button>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-green-900">Рекомендации по каналам</h3>
            </div>
            <p className="text-gray-700 mb-4">
              AI рекомендует отслеживать эти чаты для увеличения количества лидов:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {channelRecommendations.map((channel, index) => (
                <div
                  key={index}
                  className="px-3 py-2 bg-white border border-green-200 rounded-full text-sm text-green-800"
                >
                  {channel}
                </div>
              ))}
            </div>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all text-sm">
              Добавить все каналы
            </button>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-purple-900">Анализ эффективности</h3>
            </div>
            <p className="text-gray-700 mb-3">
              На основе вашей текущей статистики, AI рекомендует:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2"></div>
                <span>Сфокусироваться на ключевых словах связанных с недвижимостью (показывают конверсию 85%)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2"></div>
                <span>Увеличить охват в бизнес-чатах (высокая активность потенциальных клиентов)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2"></div>
                <span>Добавить время ответа на лиды (сейчас среднее время ответа - 12 минут)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRecommendationsSection;