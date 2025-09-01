import React from 'react';
import { TrendingUp, Target, Users, Clock } from 'lucide-react';

const ConversionSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Анализ конверсии</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold text-gray-900">18%</div>
              <div className="text-sm text-gray-600">Общая конверсия</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold text-gray-900">342</div>
              <div className="text-sm text-gray-600">Всего лидов</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold text-gray-900">12 мин</div>
              <div className="text-sm text-gray-600">Время ответа</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionSection;