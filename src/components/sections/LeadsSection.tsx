import React, { useState } from 'react';
import { Search, Filter, Download, ExternalLink } from 'lucide-react';

const LeadsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const leads = [
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
    },
    {
      id: 4,
      name: 'Дмитрий Кузнецов',
      username: '@dmitry_kuznetsov',
      text: 'разработка приложений',
      chat: 'Стартапы и IT',
      time: '09:15',
      link: 'https://t.me/dmitry_kuznetsov'
    },
    {
      id: 5,
      name: 'Ольга Новикова',
      username: '@olga_novikova',
      text: 'продвижение в соцсетях',
      chat: 'Маркетинг и Реклама',
      time: '08:30',
      link: 'https://t.me/olga_novikova'
    },
    {
      id: 6,
      name: 'Иван Иванов',
      username: '@ivan_ivanov',
      text: 'аренда квартиры',
      chat: 'Недвижимость Москвы',
      time: 'вчера',
      link: 'https://t.me/ivan_ivanov'
    },
    {
      id: 7,
      name: 'Екатерина Смирнова',
      username: '@ekaterina_smirnova',
      text: 'юридическая консультация',
      chat: 'Бизнес консультации',
      time: 'вчера',
      link: 'https://t.me/ekaterina_smirnova'
    }
  ];

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.chat.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Все лиды</h2>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all text-sm">
              <Filter className="w-4 h-4" />
              Фильтры
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all text-sm">
              <Download className="w-4 h-4" />
              Экспорт в CSV
            </button>
          </div>
        </div>
        
        {/* Search */}
        <div className="p-6 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Поиск по лидам..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Leads List */}
        <div className="p-6">
          <div className="space-y-3">
            {filteredLeads.map(lead => (
              <div
                key={lead.id}
                onClick={() => window.open(lead.link, '_blank')}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-all group"
              >
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{lead.name}</div>
                  <div className="text-sm text-gray-600">
                    {lead.username} · {lead.text} · {lead.chat}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-sm text-gray-500">{lead.time}</div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsSection;