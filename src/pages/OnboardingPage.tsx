import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Palette, Scale, TrendingUp, Code, Briefcase, ArrowRight } from 'lucide-react';

const OnboardingPage: React.FC = () => {
  const [selectedNiche, setSelectedNiche] = useState<string>('');
  const navigate = useNavigate();

  const niches = [
    { id: 'realty', name: 'Недвижимость', icon: Building, color: 'bg-green-100 text-green-600' },
    { id: 'design', name: 'Дизайн', icon: Palette, color: 'bg-purple-100 text-purple-600' },
    { id: 'legal', name: 'Юридические услуги', icon: Scale, color: 'bg-blue-100 text-blue-600' },
    { id: 'marketing', name: 'Маркетинг', icon: TrendingUp, color: 'bg-red-100 text-red-600' },
    { id: 'it', name: 'IT и разработка', icon: Code, color: 'bg-indigo-100 text-indigo-600' },
    { id: 'freelance', name: 'Фриланс', icon: Briefcase, color: 'bg-yellow-100 text-yellow-600' },
  ];

  const handleSave = () => {
    if (!selectedNiche) {
      alert('Пожалуйста, выберите нишу');
      return;
    }

    // Сохраняем выбранную нишу
    localStorage.setItem('userNiche', selectedNiche);
    localStorage.setItem('onboardingCompleted', 'true');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Выберите вашу нишу</h1>
          <p className="text-gray-600">Это поможет нам настроить LeadSensei под ваши потребности</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {niches.map((niche) => {
            const IconComponent = niche.icon;
            return (
              <div
                key={niche.id}
                onClick={() => setSelectedNiche(niche.id)}
                className={`p-6 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                  selectedNiche === niche.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg ${niche.color} flex items-center justify-center mb-3`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900">{niche.name}</h3>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleSave}
          disabled={!selectedNiche}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          Сохранить и продолжить
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default OnboardingPage;