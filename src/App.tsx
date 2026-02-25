import { useState } from 'react';
import Home from './components/Home';
import Pipeline from './components/Pipeline';
import Inventory from './components/Inventory';
import Settings from './components/Settings';
import BottomNav from './components/BottomNav';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="bg-darkBg text-gray-100 h-screen flex flex-col font-sans antialiased max-w-md mx-auto relative shadow-2xl overflow-hidden">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {activeTab === 'home' && <Home />}
        {activeTab === 'pipeline' && <Pipeline />}
        {activeTab === 'inventory' && <Inventory />}
        {activeTab === 'settings' && <Settings />}
      </div>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
