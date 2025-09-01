import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  MessageSquare,
  Plus,
  X,
  Search,
  Filter,
  ExternalLink,
  Star,
  Clock,
  CheckCircle
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DashboardSection from '../components/sections/DashboardSection';
import LeadsSection from '../components/sections/LeadsSection';
import KeywordsSection from '../components/sections/KeywordsSection';
import ChannelsSection from '../components/sections/ChannelsSection';
import AIRecommendationsSection from '../components/sections/AIRecommendationsSection';
import StatisticsSection from '../components/sections/StatisticsSection';
import ConversionSection from '../components/sections/ConversionSection';
import NotificationsSection from '../components/sections/NotificationsSection';
import IntegrationSection from '../components/sections/IntegrationSection';
import AccountSection from '../components/sections/AccountSection';
import TariffModal from '../components/TariffModal';

interface MainDashboardProps {
  setAuth: (auth: boolean) => void;
}

const MainDashboard: React.FC<MainDashboardProps> = ({ setAuth }) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showTariffModal, setShowTariffModal] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onboardingCompleted = localStorage.getItem('onboardingCompleted');
    if (!onboardingCompleted) {
      navigate('/onboarding');
      return;
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    setAuth(false);
    navigate('/login');
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardSection onNavigate={setActiveSection} />;
      case 'leads':
        return <LeadsSection />;
      case 'keywords':
        return <KeywordsSection />;
      case 'channels':
        return <ChannelsSection />;
      case 'ai-recommendations':
        return <AIRecommendationsSection />;
      case 'statistics':
        return <StatisticsSection />;
      case 'conversion':
        return <ConversionSection />;
      case 'notifications':
        return <NotificationsSection />;
      case 'integration':
        return <IntegrationSection />;
      case 'account':
        return <AccountSection />;
      default:
        return <DashboardSection onNavigate={setActiveSection} />;
    }
  };

  const getSectionTitle = () => {
    const titles = {
      dashboard: 'Дашборд',
      leads: 'Все лиды',
      keywords: 'Ключевые слова',
      channels: 'Каналы и чаты',
      'ai-recommendations': 'AI-рекомендации',
      statistics: 'Статистика',
      conversion: 'Конверсия',
      notifications: 'Уведомления',
      integration: 'Интеграция',
      account: 'Аккаунт'
    };
    return titles[activeSection] || 'Дашборд';
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          title={getSectionTitle()}
          onShowTariffModal={() => setShowTariffModal(true)}
          onLogout={handleLogout}
        />
        
        <main className="flex-1 overflow-y-auto p-6">
          {renderActiveSection()}
        </main>
      </div>

      {showTariffModal && (
        <TariffModal onClose={() => setShowTariffModal(false)} />
      )}
    </div>
  );
};

export default MainDashboard;