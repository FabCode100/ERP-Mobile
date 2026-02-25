import { Zap, Search, MoreHorizontal } from 'lucide-react';

export default function Pipeline() {
  return (
    <div className="flex flex-col h-full">
      <header className="sticky top-0 z-40 bg-darkBg/80 backdrop-blur-md border-b border-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-twelve bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <Zap className="h-5 w-5 text-white fill-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">Sales Pipeline</h1>
            <p className="text-xs text-gray-400 font-medium">Q4 Growth Strategy</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-white">
            <Search className="h-5 w-5" />
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-800">
            <img alt="User Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8RlKE5dpbbb4cZSZsaiyukhDSHsxQot7zvhhxZikRa4QK_9peuoB2vTJj_sMSM94AOf8NBqJtYFJWDcdF15aghVs4N2ER4I1M0enpCjsXpy-R_pxaBn3op4_kAfj4GWc1sHlREl8lGdS3F-CLkr1kn_ikZrOHK-BM5Ksj-3muICoD3--eHykE96m6bilx7E3YRKzWWoOQZwA5biFfbhaPX9MB5Cq7PoqoEdONiGpoCBhNc3gCbAV__XxRCE0-FHhD25JiLKkl-m78" />
          </div>
        </div>
      </header>

      <section className="p-4">
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          <div className="bg-darkCard border border-gray-800 p-4 rounded-twelve min-w-[140px] flex-1">
            <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Revenue</p>
            <p className="text-xl font-bold">$124.5k</p>
          </div>
          <div className="bg-darkCard border border-gray-800 p-4 rounded-twelve min-w-[140px] flex-1">
            <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Active Deals</p>
            <p className="text-xl font-bold">28</p>
          </div>
          <div className="bg-darkCard border border-gray-800 p-4 rounded-twelve min-w-[140px] flex-1">
            <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">Win Rate</p>
            <p className="text-xl font-bold text-primary">64%</p>
          </div>
        </div>
      </section>

      <main className="flex-1 overflow-x-auto no-scrollbar pb-6">
        <div className="flex px-4 gap-4 h-full">
          {/* Leads Column */}
          <section className="min-w-[280px] max-w-[280px] flex flex-col gap-4">
            <div className="flex items-center justify-between sticky top-0 bg-darkBg py-2 z-10">
              <h2 className="font-semibold text-sm flex items-center gap-2">
                Leads <span className="bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full text-[10px]">8</span>
              </h2>
              <button className="text-gray-500 hover:text-primary">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>

            <article className="bg-darkCard border border-gray-800 p-4 rounded-twelve space-y-3 cursor-pointer hover:ring-1 hover:ring-primary transition-all">
              <div className="flex justify-between items-start">
                <span className="bg-blue-900/30 text-blue-400 text-[10px] font-bold px-2 py-1 rounded">NEW INBOUND</span>
                <span className="text-xs text-gray-500">2h ago</span>
              </div>
              <div>
                <h3 className="font-medium text-sm">Enterprise CRM Integration</h3>
                <p className="text-xs text-gray-400 mt-1">Acme Global Corp</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-800">
                <div className="flex -space-x-2">
                  <img alt="Avatar" className="w-6 h-6 rounded-full border-2 border-darkCard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3oRepn0FqMZOOyg_9Brveam0w6FuoYGcyNbJMO96ieUay0EO7shzg9RyuRe1Jw3CtZvVnUB5NvNhHn3ZcY6MFY4B8dxsVdYgwhfT5TC6JmuLXeXcXmDgHKSZtuj7swkmqeQ6ugSKZ0eZbgNRYnqxQte9ppyWw7k2rZ_q-HZRFi6DxolNzcg11gj2Su-XHZLzJyuUeL_oXr86NkkZFu1u_mvkf82QZkTCK7H2B-qW_ova-SDC8OQsrFe2jUtxbQvNNmYeJLt9G_09X" />
                  <img alt="Avatar" className="w-6 h-6 rounded-full border-2 border-darkCard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVmEW6peY_E00uOQdYEmS4jaRxkS6DRqVxYD-ztOk4g0z9uTsQuYKj44_Fhx6qK65FPonp9PxpwHbW8BcP3sBzx0442uR8M2MVoaJe1ZpoimJIPKrsriBBticSxx-TEk_whk60niqZH8-C2Nd_JCzxf2rU00UXkxkLRc8_OyvNrnWkyMpwhaYL_umElOIZ5ZIjCpMtYd6_XoTSavaD2gWA9RbHg4eQXqqX8Zogqlei5AEqeaLDPAAWUtwor2zbNJMDhIWAEY2hvAhU" />
                </div>
                <p className="text-sm font-semibold">$12,000</p>
              </div>
            </article>

            <article className="bg-darkCard border border-gray-800 p-4 rounded-twelve space-y-3 cursor-pointer hover:ring-1 hover:ring-primary transition-all">
              <div className="flex justify-between items-start">
                <span className="bg-amber-900/30 text-amber-400 text-[10px] font-bold px-2 py-1 rounded">FOLLOW UP</span>
                <span className="text-xs text-gray-500">5h ago</span>
              </div>
              <div>
                <h3 className="font-medium text-sm">Cloud Infrastructure Migration</h3>
                <p className="text-xs text-gray-400 mt-1">Stark Industries</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-800">
                <div className="flex -space-x-2">
                  <img alt="Avatar" className="w-6 h-6 rounded-full border-2 border-darkCard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4B-JkwNresAYhl5Hw4BlwZUXGsZ5EMpnpIuWZkXsGcxJDGDeXejIqynZVvjFE2X4SLxwrpPUnpdxJ1IOBTFOmo40_NfPqDVWNjgQVMyNrBBSw3dbRdKEDsFIV9cFbFu-h2sKo7-GPAHA56z-tCgiHUVCT6GDJtD_hugipoNw53aZmYD_f0gtMxpR23A_2iuLW95c4hwpE9UHEEm5HzLxm_H3sjiCgdVySCA6Dzcs_Rl5D-YwzIbFy0qGfJ-rXdZmjLZKihtUvlfVj" />
                </div>
                <p className="text-sm font-semibold text-primary">$45,500</p>
              </div>
            </article>
          </section>

          {/* In Progress Column */}
          <section className="min-w-[280px] max-w-[280px] flex flex-col gap-4">
            <div className="flex items-center justify-between sticky top-0 bg-darkBg py-2 z-10">
              <h2 className="font-semibold text-sm flex items-center gap-2">
                In Progress <span className="bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full text-[10px]">12</span>
              </h2>
              <button className="text-gray-500 hover:text-primary">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>

            <article className="bg-darkCard border-l-4 border-l-primary border-y border-r border-gray-800 p-4 rounded-twelve space-y-3 cursor-pointer hover:ring-1 hover:ring-primary transition-all">
              <div className="flex justify-between items-start">
                <span className="bg-purple-900/30 text-purple-400 text-[10px] font-bold px-2 py-1 rounded">NEGOTIATION</span>
                <span className="text-xs text-primary animate-pulse">Live</span>
              </div>
              <div>
                <h3 className="font-medium text-sm">AI Analytics Dashboard</h3>
                <p className="text-xs text-gray-400 mt-1">Cyberdyne Systems</p>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1 mt-2">
                <div className="bg-primary h-1 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="flex -space-x-2">
                  <img alt="Avatar" className="w-6 h-6 rounded-full border-2 border-darkCard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2IvKdns0Z7DJyXM3m-q_6sZLx1H-B2hd7nH6zmS3157VJqGmV2mFs2-OVbxeKW8sWvDa2h47xxQWzYWg44bJ_rSCCqzBubgIghdH7-e-Syg7wJN-UeR5oeTb6eNS5TJ4yW7-2LYD_KctC3CAODT-mC-1Sj8C2vTiL9dRnEfHWR-iBN01moEmLdJAsntZ7Pl4yxBCp937qCmXxilHEqMoEwYE1NR-8OHXwyz5Xftl8I9DvVfYBaUdqnqddRSiCXHp6IqR3Calwb7-z" />
                  <img alt="Avatar" className="w-6 h-6 rounded-full border-2 border-darkCard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrqtdp0M18ZkYqhFYQwycXqGtEeAbwOrCFkSPUMpTmZLzP7ZuGwpjfaG7Q8IPUQ7BdHyukt0gtyqoqYbPuOpgqVj7aOCMQOeH-zv_9Oni58jU93xp0sg7wLkdFNc3D3AcOhKTmtYTDPfab8pOL_qPoymx_alzWlNLbg19crCmEF19hjET3fmi4AKdQR14TgOn02LiQeEOSXleLPZgiYWuI3xa_OM-V3ehRPXmAG92jPhyHzSQzDvMkr_XFQl8CybEl-quKScMCxUAM" />
                </div>
                <p className="text-sm font-semibold">$88,000</p>
              </div>
            </article>
          </section>

          {/* Closed Column */}
          <section className="min-w-[280px] max-w-[280px] flex flex-col gap-4 opacity-70">
            <div className="flex items-center justify-between sticky top-0 bg-darkBg py-2 z-10">
              <h2 className="font-semibold text-sm flex items-center gap-2">
                Closed <span className="bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full text-[10px]">4</span>
              </h2>
            </div>
            
            <article className="bg-darkCard/50 border border-gray-800 p-4 rounded-twelve space-y-3 cursor-pointer">
              <div className="flex justify-between items-start">
                <span className="bg-emerald-900/30 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded">WON</span>
                <span className="text-xs text-gray-500">Yesterday</span>
              </div>
              <h3 className="font-medium text-sm line-through text-gray-500">Security Audit v2</h3>
              <div className="flex items-center justify-between pt-2 border-t border-gray-800/30">
                <div className="flex -space-x-2">
                  <img alt="Avatar" className="w-6 h-6 rounded-full border-2 border-darkCard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsarOZJi3p2PFbHIAoFve9LxNNIAdI8lTta3JO7-CAaXZWH7ij39spx0BI8nnc2I6hYJRfH89xsyrdql3npQ7rpjWl1ZR6Vyq-PHHoC_-odjux7MdIF_hiMtuaCo125vU0WgekD7tjoJwxqlzf8M3sq31uKywlcDYyc4oyolHX1YEsImhrEK0r7mjP2H9J-y746Sqpf4DwOCvtVlXfSppbJdrWFJ6Pg4zWQph0wFr6wuSvVNW6FOADkbcDM5SWliGHJk28hzO6DeBh" />
                </div>
                <p className="text-sm font-semibold text-emerald-500">$5,400</p>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}
