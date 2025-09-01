import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const KeywordsSection: React.FC = () => {
  const [keywords, setKeywords] = useState([
    'купить квартиру',
    'ищу юриста',
    'нужен дизайнер',
    'разработка приложений',
    'продвижение в соцсетях'
  ]);
  const [newKeyword, setNewKeyword] = useState('');

  const addKeyword = () => {
    if (newKeyword.trim() && !keywords.includes(newKeyword.trim())) {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword('');
    }
  };

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter(k => k !== keyword));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addKeyword();
    }
  };

  const keywordEffectiveness = [
    { keyword: 'купить квартиру', effectiveness: 85 },
    { keyword: 'юридические услуги', effectiveness: 70 },
    { keyword: 'дизайнер интерьера', effectiveness: 78 },
    { keyword: 'разработка приложений', effectiveness: 65 }
  ];

  return (
    <div className="space-y-6">
      {/* Keywords Management */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Ключевые слова</h2>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Ключевые слова для отслеживания
            </label>
            <div className="flex flex-wrap gap-2 mb-4">
              {keywords.map((keyword, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full text-sm"
                >
                  <span>{keyword}</span>
                  <button
                    onClick={() => removeKeyword(keyword)}
                    className="text-gray-500 hover:text-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Введите ключевое слово и нажмите Enter"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={addKeyword}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Добавьте слова или фразы, которые будут отслеживаться в чатах
            </div>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all">
              Сохранить
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
              Добавить и применить
            </button>
          </div>
        </div>
      </div>

      {/* Keywords Effectiveness */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Эффективность ключевых слов</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keywordEffectiveness.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">{item.keyword}</span>
                  <span className="text-sm text-gray-600">{item.effectiveness}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      item.effectiveness >= 80 ? 'bg-green-500' :
                      item.effectiveness >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${item.effectiveness}%` }}
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

export default KeywordsSection;