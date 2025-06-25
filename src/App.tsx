import './index.css';

import React, { useState } from 'react';

import IntelligentCodeGeneration from './IntelligentCodeGeneration';
import IntelligentOrchestrationValidation from './IntelligentOrchestrationValidation';
// Import all diagram components
import MainSOFIADiagram from './Architecture';
import SmartKnowledgeHub from './SmartKnowledgeHub';

// Sidebar navigation component
const Sidebar = ({ activeView, setActiveView }: { 
  activeView: string; 
  setActiveView: (view: string) => void; 
}) => {
  const menuItems = [
    {
      id: 'main',
      title: 'SOFIA Overview',
      subtitle: 'Main System Architecture',
      icon: '🏗️'
    },
    {
      id: 'code-generation',
      title: 'Code Generation',
      subtitle: 'SovConfigAssistant AI Tool',
      icon: '⚡'
    },
    {
      id: 'orchestration',
      title: 'Orchestration & Validation',
      subtitle: 'Zero-Touch Deployment',
      icon: '🔄'
    },
    {
      id: 'knowledge-hub',
      title: 'Smart Knowledge Hub',
      subtitle: 'RAG-Powered Intelligence',
      icon: '🧠'
    }
  ];

  return (
    <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-white mb-2">SOFIA Platform</h1>
        <p className="text-gray-400 text-sm">AI-Driven Cloud Buildout System</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                activeView === item.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <div className="flex items-start space-x-3">
                <span className="text-2xl">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-base">{item.title}</div>
                  <div className={`text-sm ${
                    activeView === item.id ? 'text-blue-100' : 'text-gray-400'
                  }`}>
                    {item.subtitle}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="text-xs text-gray-500 text-center">
          <p>SOFIA v1.0</p>
          <p>Microsoft Sovereign Cloud</p>
        </div>
      </div>
    </div>
  );
};

// Main content component
const MainContent = ({ activeView }: { activeView: string }) => {
  const renderDiagram = () => {
    switch (activeView) {
      case 'main':
        return <MainSOFIADiagram />;
      case 'code-generation':
        return <IntelligentCodeGeneration />;
      case 'orchestration':
        return <IntelligentOrchestrationValidation />;
      case 'knowledge-hub':
        return <SmartKnowledgeHub />;
      default:
        return <MainSOFIADiagram />;
    }
  };

  return (
    <div className="flex-1 bg-gray-900 overflow-auto">
      {renderDiagram()}
    </div>
  );
};

// Main App component
export default function App() {
  const [activeView, setActiveView] = useState('main');

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <MainContent activeView={activeView} />
    </div>
  );
}