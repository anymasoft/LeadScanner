import React from 'react';
import { User, CreditCard } from 'lucide-react';

interface HeaderProps {
  title: string;
  onShowTariffModal: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onShowTariffModal, onLogout }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              АК
            </div>
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900">Алексей К.</div>
              <div className="text-xs text-gray-500">Тариф: Стартовый</div>
            </div>
          </div>
          
          <button
            onClick={onShowTariffModal}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm font-medium"
          >
            <CreditCard className="w-4 h-4" />
            Сменить тариф
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;