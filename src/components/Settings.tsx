import { ChevronLeft, Edit2, Check, Users, Building, Shield, Bell, DollarSign, LogOut, ChevronRight } from 'lucide-react';

export default function Settings() {
  return (
    <div className="flex flex-col h-full">
      <header className="sticky top-0 z-50 bg-darkBg/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 -ml-2 rounded-full hover:bg-darkCard">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Settings</h1>
        </div>
        <button className="text-primary font-medium">Done</button>
      </header>

      <div className="px-6 space-y-8 mt-4 pb-6">
        <section>
          <div className="flex items-center gap-4 bg-darkCard p-4 rounded-twelve border border-white/5">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary overflow-hidden">
              <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDke5MB0mLtHgnJivA9tUwxJnTrKq3O34auQjILP_yLYCyinbyUOnAWqLxX3LXw5LlOib8q2uh1MXoO0p-H2y6SeRJoJ_7c5jk0D5fxIJMZWpiJ-tN5Yah-pV8t1ae1fyofOtQyEgw8s2F63AZjcjQ6AB_OPolFZGAJtbk1ZEgjjJE0LGw-UUoaZEysjrOH73etyrLz_h6ddAkO78WtidjERt9TF2q7c8VG1BDU-rJTujKgfx7Y6X4oodd_yYoXxVeKPd0mnqgAW06C" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold">John Doe</h2>
              <p className="text-sm text-gray-400">Administrator • San Francisco</p>
            </div>
            <button className="p-2 bg-gray-800 rounded-full">
              <Edit2 className="w-4 h-4 text-gray-300" />
            </button>
          </div>
        </section>

        <section>
          <div className="relative overflow-hidden bg-gradient-to-br from-primary to-blue-700 p-6 rounded-twelve shadow-xl shadow-primary/20">
            <div className="absolute -right-4 -top-4 opacity-20">
              <svg fill="white" height="120" viewBox="0 0 120 120" width="120">
                <circle cx="60" cy="60" r="60"></circle>
              </svg>
            </div>
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <span className="bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">Current Plan</span>
                  <h3 className="text-2xl font-bold mt-2 text-white">Pro Plan</h3>
                </div>
                <div className="bg-white text-primary font-bold px-3 py-1 rounded-lg text-sm">
                  Active
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm text-white/90">
                  <Check className="w-4 h-4 mr-2" />
                  Unlimited Inventory Items
                </li>
                <li className="flex items-center text-sm text-white/90">
                  <Check className="w-4 h-4 mr-2" />
                  Advanced Analytics & AI
                </li>
                <li className="flex items-center text-sm text-white/90">
                  <Check className="w-4 h-4 mr-2" />
                  Priority 24/7 Support
                </li>
              </ul>
              <button className="mt-6 w-full py-3 bg-white text-primary font-bold rounded-twelve hover:bg-gray-100 transition-colors">
                Manage Subscription
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest px-2">Account Configuration</h4>
            <div className="bg-darkCard rounded-twelve divide-y divide-white/5 overflow-hidden">
              <div className="flex items-center justify-between p-4 active:bg-gray-800 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="font-medium">User Management</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </div>
              
              <div className="flex items-center justify-between p-4 active:bg-gray-800 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Building className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Warehouse Locations</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex items-center justify-between p-4 active:bg-gray-800 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                    <Shield className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Security & 2FA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-green-500 font-medium">On</span>
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest px-2">Preferences</h4>
            <div className="bg-darkCard rounded-twelve divide-y divide-white/5 overflow-hidden">
              <div className="flex items-center justify-between p-4 active:bg-gray-800 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Bell className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Notifications</span>
                </div>
                <div className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 active:bg-gray-800 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Default Currency</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">USD ($)</span>
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button className="w-full flex items-center justify-center gap-2 p-4 text-red-500 font-semibold border border-red-500/20 rounded-twelve active:bg-red-500/5 transition-colors">
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
            <p className="text-center text-[10px] text-gray-600 mt-6 uppercase tracking-[0.2em]">Version 4.2.0 (Build 882)</p>
          </div>
        </section>
      </div>
    </div>
  );
}
