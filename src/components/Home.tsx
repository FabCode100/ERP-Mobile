import { Bell, ArrowUpRight, ArrowDownRight, ShoppingBag, CreditCard, Building2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col space-y-6 pt-2">
      <header className="px-5 py-4 flex justify-between items-center sticky top-0 bg-darkBg/80 backdrop-blur-md z-40 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-twelve bg-primary flex items-center justify-center font-bold text-white">
            JD
          </div>
          <div>
            <h1 className="text-sm font-semibold">John Doe</h1>
            <p className="text-xs text-gray-500">Finance Manager</p>
          </div>
        </div>
        <button className="p-2 bg-darkCard border border-gray-800 rounded-twelve">
          <Bell className="h-5 w-5" />
        </button>
      </header>

      <main className="px-5 space-y-6">
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-darkCard p-4 rounded-twelve border border-gray-800 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success">
                <ArrowUpRight className="h-4 w-4" />
              </div>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Inflow</span>
            </div>
            <div className="text-xl font-bold">$42,900</div>
            <div className="text-[10px] text-success mt-1">+12.5% from last month</div>
          </div>
          <div className="bg-darkCard p-4 rounded-twelve border border-gray-800 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-danger/20 flex items-center justify-center text-danger">
                <ArrowDownRight className="h-4 w-4" />
              </div>
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Outflow</span>
            </div>
            <div className="text-xl font-bold text-gray-100">$18,450</div>
            <div className="text-[10px] text-danger mt-1">+3.2% from last month</div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Recent Transactions</h2>
            <button className="text-xs text-primary font-semibold">View All</button>
          </div>
          <div className="space-y-3">
            <div className="bg-darkCard p-4 rounded-twelve border border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-twelve bg-gray-800 flex items-center justify-center text-gray-400">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-sm">Apple Services</p>
                  <p className="text-xs text-gray-500">Subscription • May 12</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm">-$14.99</p>
                <span className="inline-block px-2 py-0.5 rounded-full text-[10px] bg-success/10 text-success border border-success/20 mt-1">Paid</span>
              </div>
            </div>

            <div className="bg-darkCard p-4 rounded-twelve border border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-twelve bg-gray-800 flex items-center justify-center text-gray-400">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-sm">Stripe Payout</p>
                  <p className="text-xs text-gray-500">Sales Income • May 11</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm text-success">+$2,450.00</p>
                <span className="inline-block px-2 py-0.5 rounded-full text-[10px] bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 mt-1">Pending</span>
              </div>
            </div>

            <div className="bg-darkCard p-4 rounded-twelve border border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-twelve bg-gray-800 flex items-center justify-center text-gray-400">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-sm">WeWork Office</p>
                  <p className="text-xs text-gray-500">Rent • May 10</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm">-$850.00</p>
                <span className="inline-block px-2 py-0.5 rounded-full text-[10px] bg-success/10 text-success border border-success/20 mt-1">Paid</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
