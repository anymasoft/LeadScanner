import React, { useState } from 'react';
import { Plus, X, Users } from 'lucide-react';

const ChannelsSection: React.FC = () => {
  const [channels, setChannels] = useState([
    'Недвижимость Москвы',
    'Бизнес консультации',
    'Дизайн интерьера',
    'Стартапы и IT',
    'Маркетинг и Реклама'
  ]);
  const [newChannel, setNewChannel] = useState('');

  const recommendedChannels = [
    { name: 'Недвижимость и аренда', members: '12.5k' },
    { name: 'Юридические консультации', members: '8.7k' },
    { name: 'Дизайн и архитектура', members: '6.3k' }
  ];

  const addChannel = () => {
    if (newChannel.trim() && !channels.includes(newChannel.trim())) {
      setChannels([...channels, newChannel.trim()]);
      setNewChannel('');
    }
  };

  const removeChannel = (channel: string) => {
    setChannels(channels.filter(c => c !== channel));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addChannel();
    }
  };

  return (
    <div className="space-y-6">
      {/* Channels Management */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Отслеживаемые каналы и чаты</h2>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Добавленные чаты и каналы
            </label>
            <div className="flex flex-wrap gap-2 mb-4">
              {channels.map((channel, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full text-sm"
                >
                  <span>{channel}</span>
                  <button
                    onClick={() => removeChannel(channel)}
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
                value={newChannel}
                onChange={(e) => setNewChannel(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Введите username чата или канала"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={addChannel}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Добавьте чаты и каналы, в которых нужно отслеживать ключевые слова
            </div>
          </div>

          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
            Добавить и сохранить
          </button>
        </div>
      </div>

      {/* Recommended Channels */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Популярные каналы для вашей ниши</h2>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            {recommendedChannels.map((channel, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="font-medium text-gray-900">{channel.name}</div>
                  <div className="text-sm text-gray-600 flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {channel.members} участников
                  </div>
                </div>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all text-sm">
                  Добавить
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelsSection;