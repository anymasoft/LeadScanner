import React from 'react';
import { 
  BarChart3, 
  Users, 
  Key, 
  Radio, 
  Bot, 
  TrendingUp, 
  Target, 
  Bell, 
  Settings, 
  User,
  LogOut,
  MessageSquare
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeSection, 
  onSectionChange, 
  collapsed 
}) => {
  const navSections = [
    {
      title: 'Основное',
      items: [
        { id: 'dashboard', label: 'Дашборд', icon: BarChart3 },
        { id: 'leads', label: 'Все лиды', icon: Users }
      ]
    },
    {
      title: 'Мониторинг',
      items: [
        { id: 'keywords', label: 'Ключевые слова', icon: Key },
        { id: 'channels', label: 'Каналы и чаты', icon: Radio },
        { id: 'ai-recommendations', label: 'AI-рекомендации', icon: Bot }
      ]
    },
    {
      title: 'Аналитика',
      items: [
        { id: 'statistics', label: 'Статистика', icon: TrendingUp },
        { id: 'conversion', label: 'Конверсия', icon: Target }
      ]
    },
    {
      title: 'Настройки',
      items: [
        { id: 'notifications', label: 'Уведомления', icon: Bell },
        { id: 'integration', label: 'Интеграция', icon: Settings },
        { id: 'account', label: 'Аккаунт', icon: User }
      ]
    }
  ];

  return (
    <aside className={`bg-slate-800 text-white flex flex-col transition-all duration-300 ${
      collapsed ? 'w-20' : 'w-64'
    }`}>
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          {!collapsed && (
            <span className="ml-3 text-xl font-bold">LeadSensei</span>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        {navSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            {!collapsed && (
              <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-3 px-3">
                {section.title}
              </h3>
            )}
            <div className="space-y-1">
              {section.items.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-all ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    {!collapsed && (
                      <span className="ml-3">{item.label}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Tariff Info */}
      {!collapsed && (
        <div className="p-4 m-4 bg-slate-700 rounded-lg">
          <div className="text-sm font-semibold mb-2">Тариф: Стартовый</div>
          <div className="text-xs text-slate-400 space-y-1">
            <div>10 ключевых слов</div>
            <div>5 чатов для мониторинга</div>
            <div>AI-анализ контекста</div>
          </div>
        </div>
      )}

      {/* User Profile */}
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
            АК
          </div>
          {!collapsed && (
            <div className="ml-3 flex-1">
              <div className="text-sm font-medium">Алексей К.</div>
              <div className="text-xs text-slate-400">@aleksey_tg</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;