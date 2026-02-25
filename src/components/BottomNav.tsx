import { Home, BarChart2, Package, Settings as SettingsIcon, Plus } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-darkBg/95 backdrop-blur-xl border-t border-gray-800 px-6 py-3 flex justify-between items-center z-50">
      <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-primary' : 'text-gray-500'}`}>
        <Home className="h-6 w-6" />
        <span className="text-[10px] font-medium">Home</span>
      </button>
      <button onClick={() => setActiveTab('pipeline')} className={`flex flex-col items-center gap-1 ${activeTab === 'pipeline' ? 'text-primary' : 'text-gray-500'}`}>
        <BarChart2 className="h-6 w-6" />
        <span className="text-[10px] font-medium">Pipeline</span>
      </button>
      
      <div className="-mt-12 relative z-50">
        <button className="w-14 h-14 bg-primary rounded-full shadow-lg shadow-primary/30 flex items-center justify-center text-white border-4 border-darkBg">
          <Plus className="h-8 w-8" />
        </button>
      </div>

      <button onClick={() => setActiveTab('inventory')} className={`flex flex-col items-center gap-1 ${activeTab === 'inventory' ? 'text-primary' : 'text-gray-500'}`}>
        <Package className="h-6 w-6" />
        <span className="text-[10px] font-medium">Inventory</span>
      </button>
      <button onClick={() => setActiveTab('settings')} className={`flex flex-col items-center gap-1 ${activeTab === 'settings' ? 'text-primary' : 'text-gray-500'}`}>
        <SettingsIcon className="h-6 w-6" />
        <span className="text-[10px] font-medium">Settings</span>
      </button>
    </nav>
  );
}
