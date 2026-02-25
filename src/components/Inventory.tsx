import { Plus, Search } from 'lucide-react';

export default function Inventory() {
  return (
    <div className="flex flex-col h-full">
      <header className="p-4 pt-8 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Inventory</h1>
          <button aria-label="Add Product" className="p-2 bg-darkCard rounded-twelve border border-gray-800">
            <Plus className="h-5 w-5 text-primary" />
          </button>
        </div>
        
        <div className="relative group">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-500" />
          </span>
          <input 
            className="w-full bg-darkCard border-none focus:ring-1 focus:ring-primary rounded-twelve py-3 pl-10 text-sm placeholder-gray-500 transition-transform focus:scale-[1.02] outline-none" 
            placeholder="Search inventory..." 
            type="text" 
          />
        </div>
      </header>

      <section className="px-4 pb-4 overflow-x-auto no-scrollbar flex space-x-2">
        <button className="px-4 py-2 bg-primary text-white text-xs font-semibold rounded-twelve whitespace-nowrap">All Items</button>
        <button className="px-4 py-2 bg-darkCard text-gray-400 text-xs font-semibold rounded-twelve border border-gray-800 whitespace-nowrap">Electronics</button>
        <button className="px-4 py-2 bg-darkCard text-gray-400 text-xs font-semibold rounded-twelve border border-gray-800 whitespace-nowrap">Hardware</button>
        <button className="px-4 py-2 bg-darkCard text-gray-400 text-xs font-semibold rounded-twelve border border-gray-800 whitespace-nowrap">Furniture</button>
        <button className="px-4 py-2 bg-darkCard text-gray-400 text-xs font-semibold rounded-twelve border border-gray-800 whitespace-nowrap">Apparel</button>
      </section>

      <section className="flex-1 overflow-y-auto px-4 pb-6 space-y-3">
        {/* Product 1 */}
        <div className="bg-darkCard p-3 rounded-twelve flex items-center space-x-4 border border-gray-800/50">
          <div className="w-16 h-16 bg-gray-800 rounded-twelve overflow-hidden flex-shrink-0">
            <img alt="Laptop" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz2juVzlPYjzNGGwdikBtJbxYwxFCKWL_E6PGL5dNQTMHk8hedq6aUTx_dUQaH059iKiwjVvOa-TjeIGJtt5FH92alnznmJdjiRWV1iHJeYQT4kIFlRbiTQUOZa6zJySoTTkfhNHsOqmBfzGTIL__JugTb65bUAx6GNh6e4j-6RPb03KHdTgKCmgDVB6_PeDvQs-vYaGcwV0aD2AjEoorH3hs4bl0ndcr3DYRiScJV1_OGRRy2tkylroxq07QtOm1nTVeroR1DgNPZ" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold truncate">Dell XPS 15 9520</h3>
            <p className="text-xs text-gray-500">SKU: DX15-9520-B</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-300">Stock: 42 units</span>
              <span className="text-sm font-bold text-primary">$1,299.00</span>
            </div>
          </div>
        </div>

        {/* Product 2 - Low Stock */}
        <div className="bg-darkCard p-3 rounded-twelve flex items-center space-x-4 border border-lowStock/20">
          <div className="w-16 h-16 bg-gray-800 rounded-twelve overflow-hidden flex-shrink-0">
            <img alt="Mouse" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKHXgcbctzeh5Jf1AKqcqVqmlZOX21jWTazHySK1npvsdqJ7VJf8ZsO9MP35nGuJzB-pLsxPBZQnQZCXECsR-neAnhGp1KbjpPc7wBrPRbi-FEypqHpuba4dzpFuGeyDtFh7YXk-WjZPT3KH20ama6zNud-RE2u4EkfqfpHM4xsUUkcPCkrX8mlCgo9OnP5BfJZ-lR2W_grohLwX_2Jh_IHFvPw6RR_8sixWOgwcqKIn_oSbmqh8809mb3o-vCD4LGGSPAZM5nITOM" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <h3 className="text-sm font-semibold truncate">Logitech MX Master 3S</h3>
              <span className="bg-lowStock/10 text-lowStock text-[10px] px-2 py-0.5 rounded-full border border-lowStock/30 font-bold uppercase tracking-wide">Low Stock</span>
            </div>
            <p className="text-xs text-gray-500">SKU: LOG-MX3S-GR</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs font-medium text-lowStock">Stock: 4 units</span>
              <span className="text-sm font-bold text-primary">$99.00</span>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-darkCard p-3 rounded-twelve flex items-center space-x-4 border border-gray-800/50">
          <div className="w-16 h-16 bg-gray-800 rounded-twelve overflow-hidden flex-shrink-0">
            <img alt="Keyboard" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJhAa9LKV0uLr1CTPdG40zmcIiVJuR2z3EK6LtkhixXLerhNz2gGHGCTTevLy4emkxKkzLjBdjeJaGirGJTBTi90JgUxHIlzT2Cym_MqzdUyotFeIBFpTVQaI74N23z4iLWBNdXU63_qlg4HNZ1ZcQ86VRAhkRP3IOE_-DCeomOk2NAcFp2X-UX2WeXvG49Qlfxa7mRcRGRCG_pXaElMbRwD33XDeLlkoKAuwUZ_rzo0S86vU8OP3sKyWVC-k3716qFK6HkCxhPXLg" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold truncate">Keychron K2 Mechanical</h3>
            <p className="text-xs text-gray-500">SKU: KCH-K2-V2</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-300">Stock: 18 units</span>
              <span className="text-sm font-bold text-primary">$89.00</span>
            </div>
          </div>
        </div>

        {/* Product 4 - Low Stock */}
        <div className="bg-darkCard p-3 rounded-twelve flex items-center space-x-4 border border-lowStock/20">
          <div className="w-16 h-16 bg-gray-800 rounded-twelve overflow-hidden flex-shrink-0">
            <img alt="Hub" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCm5z3PP0yGNK14qJN8Iu01VdfdxU2OUcNA17nh__GtFx9w1uUOyEewB4hXtT2PWYe1WeVmiV-Lmw6rVE2rlHYwRIK0DrO6EG8PvA0DgWl7eLGfZ-2Y_xrsEBb2hD-eblvVciosMBniFzEwVVfBqQb6cU0xdwU5YDCxfxqwWIvvw2_84idip1zGCRhEr006pJYJZC-KXxuAMCVtn5d-vVgboRoPgOrI4YLL2VZ3PzhfVbJA38AZHgDlFmYvvXKYdtpuAQJvp8O2x22" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <h3 className="text-sm font-semibold truncate">USB-C Multiport Hub</h3>
              <span className="bg-lowStock/10 text-lowStock text-[10px] px-2 py-0.5 rounded-full border border-lowStock/30 font-bold uppercase tracking-wide">Low Stock</span>
            </div>
            <p className="text-xs text-gray-500">SKU: HUB-8IN1-SL</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs font-medium text-lowStock">Stock: 2 units</span>
              <span className="text-sm font-bold text-primary">$59.99</span>
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="bg-darkCard p-3 rounded-twelve flex items-center space-x-4 border border-gray-800/50">
          <div className="w-16 h-16 bg-gray-800 rounded-twelve overflow-hidden flex-shrink-0">
            <img alt="Desk" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf1coB2Rb__d2xSniR1PN4bWfqnakxoV1Aha0BP9MkqYJ9J6dVEcjsUCIrce7xZMdYydQyDyK_SC8OIYJZjS016et72EkDbbeoTS_jaSuGBewHZc8kfK6RmpWrfB_4Hma0p1i0g5RFSZYFz957ZaaJV0eKkoBhFqDbKPluFXiAnvY0GYWZPv3BrlphypmTRptscFmunkka-wytqhcpZhCho3iGbnUYyybWg8T_F8-WeGXLXZZyJERgtFZa4WbfYYNBccfV_81ZmuzB" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold truncate">Adjustable Standing Desk</h3>
            <p className="text-xs text-gray-500">SKU: FLX-SD-WHT</p>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-300">Stock: 12 units</span>
              <span className="text-sm font-bold text-primary">$349.00</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
