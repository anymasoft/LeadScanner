import React from 'react';
import { X, Check, Star } from 'lucide-react';

interface TariffModalProps {
  onClose: () => void;
}

const TariffModal: React.FC<TariffModalProps> = ({ onClose }) => {
  const tariffPlans = [
    {
      name: 'Стартовый',
      price: '990₽/мес',
      features: [
        '10 ключевых слов',
        '5 чатов для мониторинга',
        'AI-анализ контекста',
        'Уведомления в Telegram'
      ],
      current: true,
      recommended: false
    },
    {
      name: 'Профессиональный',
      price: '2990₽/мес',
      features: [
        '50 ключевых слов',
        '20 чатов для мониторинга',
        'AI-анализ контекста и тональности',
        'Расширенные уведомления',
        'Приоритетная поддержка'
      ],
      current: false,
      recommended: true
    },
    {
      name: 'Бизнес',
      price: '5990₽/мес',
      features: [
        'Неограниченные ключевые слова',
        'Неограниченные чаты',
        'Полный AI-анализ',
        'Интеграция с CRM',
        'Персональный менеджер'
      ],
      current: false,
      recommended: false
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Выбор тарифного плана</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tariffPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative border rounded-xl p-6 transition-all ${
                  plan.recommended 
                    ? 'border-blue-500 bg-blue-50 transform scale-105' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Рекомендуем
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{plan.price}</div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${
                    plan.current
                      ? 'bg-gray-100 text-gray-600 cursor-not-allowed'
                      : plan.recommended
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  disabled={plan.current}
                >
                  {plan.current ? 'Текущий план' : 'Выбрать тариф'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffModal;