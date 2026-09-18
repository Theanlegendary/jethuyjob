
  /* ==========================================================================
     SMART-INSPIRED HOMEPAGE RENDERERS (LESS INFORMATION | MORE PREMIUM)
     ========================================================================== */

  function renderHomeTopEmployers() {
    const grid = document.getElementById('home-top-employers-grid');
    if (!grid) return;

    const employers = [
      { name: 'FPT Software', logo: 'images/brands/fpt.svg', jobsCount: 24, fallback: 'FPT' },
      { name: 'Viettel Group', logo: 'images/brands/viettel.svg', jobsCount: 18, fallback: 'VTL' },
      { name: 'Vietcombank', logo: 'images/brands/vcb.svg', jobsCount: 32, fallback: 'VCB' },
      { name: 'Samsung Vietnam', logo: 'images/brands/samsung.svg', jobsCount: 20, fallback: 'SS' },
      { name: 'Shopee Vietnam', logo: 'images/brands/shopee.svg', jobsCount: 28, fallback: 'SHP' },
      { name: 'Vingroup / VinFast', logo: 'images/brands/vingroup.svg', jobsCount: 15, fallback: 'VIN' }
    ];

    grid.innerHTML = employers.map(emp => `
      <div class="wt-employer-card" data-company-name="${emp.name}">
        <div class="wt-employer-logo-box">
          <img src="${emp.logo}" alt="${emp.name}" class="wt-employer-logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <span style="display:none; font-weight:800; font-size:14px; color:#0c1b2e;">${emp.fallback}</span>
        </div>
        <div class="wt-employer-name">${emp.name}</div>
        <div class="wt-employer-jobs-count">${emp.jobsCount} open jobs <i class="fa-solid fa-arrow-right" style="font-size:10px;"></i></div>
      </div>
    `).join('');

    grid.querySelectorAll('.wt-employer-card').forEach(card => {
      card.addEventListener('click', () => {
        const comp = card.getAttribute('data-company-name');
        state.filters.search = comp.toLowerCase();
        switchView('browse');
        renderBrowseProjects();
      });
    });
  }

  function renderHomeFeaturedOpportunities() {
    const grid = document.getElementById('home-featured-opps-grid');
    if (!grid) return;

    const featuredJobs = state.projects.filter(p => p.featured || p.hot).slice(0, 4);
    if (featuredJobs.length === 0) featuredJobs.push(...state.projects.slice(0, 4));

    grid.innerHTML = featuredJobs.map(p => {
      const initial = p.logoType || (p.company ? p.company.split(' ').map(w => w[0]).join('').substring(0, 3).toUpperCase() : 'VJ');
      const logoUrl = resolveBrandLogo(p);
      const salaryText = p.salaryDisplay || (p.budgetMin ? `${p.budgetMin}–${p.budgetMax} USD` : 'Thỏa thuận');
      const heroImg = p.heroImage || 'images/project_dashboard.jpg';
      const descShort = p.description ? (p.description.substring(0, 95) + '...') : 'Cơ hội phát triển sự nghiệp tại tập đoàn công nghệ hàng đầu...';

      return `
        <div class="wt-featured-card" data-project-id="${p.id}">
          <div class="wt-featured-img-box">
            <img src="${heroImg}" alt="${p.title}" class="wt-featured-img" onerror="this.src='images/project_dashboard.jpg'">
            <div class="wt-featured-badge-overlay">${p.workType || p.type || 'Toàn thời gian'}</div>
          </div>
          <div class="wt-featured-body">
            <div class="wt-featured-meta">
              <span><strong>${p.company || 'Doanh Nghiệp'}</strong></span>
              <span>•</span>
              <span><i class="fa-solid fa-location-dot"></i> ${p.location || 'Hà Nội'}</span>
            </div>
            <h4 class="wt-featured-title">${p.title}</h4>
            <p class="wt-featured-desc">${descShort}</p>
            <div class="wt-featured-footer">
              <span class="wt-featured-salary">${salaryText}</span>
              <span class="wt-featured-action">Chi tiết <i class="fa-solid fa-arrow-right"></i></span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.wt-featured-card').forEach(card => {
      card.addEventListener('click', () => {
        const prjId = card.getAttribute('data-project-id');
        switchView('browse');
        setTimeout(() => updateJobDetailPreview(prjId), 80);
      });
    });
  }

  function renderHomeLatestJobs(filterKey = 'all') {
    const grid = document.getElementById('home-smart-jobs-grid');
    if (!grid) return;

    let filtered = [...state.projects];
    if (filterKey === 'remote') {
      filtered = filtered.filter(p => (p.location && p.location.toLowerCase().includes('remote')) || (p.workType && p.workType.toLowerCase().includes('remote')));
    } else if (filterKey === 'fulltime') {
      filtered = filtered.filter(p => p.type === 'Full-Time' || (p.workType && p.workType.toLowerCase().includes('toàn thời gian')));
    } else if (filterKey === 'salary30') {
      filtered = filtered.filter(p => (p.budgetMin && p.budgetMin >= 1200) || (p.salaryDisplay && (p.salaryDisplay.includes('35') || p.salaryDisplay.includes('40') || p.salaryDisplay.includes('45') || p.salaryDisplay.includes('50'))));
    } else if (filterKey === 'saved') {
      filtered = filtered.filter(p => state.savedJobs.has(p.id));
    }

    const displayJobs = filtered.slice(0, 6);

    if (displayJobs.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: #ffffff; border: 1px dashed #cbd5e1; border-radius: 16px;">
          <i class="fa-regular fa-folder-open" style="font-size: 32px; color: #94a3b8; margin-bottom: 12px;"></i>
          <p style="font-size: 15px; color: #64748b; font-weight: 600;">Không có vị trí phù hợp trong bộ lọc này.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = displayJobs.map(p => {
      const initial = p.logoType || (p.company ? p.company.split(' ').map(w => w[0]).join('').substring(0, 3).toUpperCase() : 'VJ');
      const logoUrl = resolveBrandLogo(p);
      const salaryText = p.salaryDisplay || (p.budgetMin ? `${p.budgetMin}–${p.budgetMax} USD` : 'Thỏa thuận');
      const isSaved = state.savedJobs.has(p.id);

      return `
        <div class="wt-smart-job-card" data-project-id="${p.id}">
          <div>
            <div class="wt-smart-card-header">
              <div class="wt-smart-company-group">
                <div class="wt-smart-logo-box">
                  <img src="${logoUrl}" alt="${initial}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                  <span style="display:none; font-weight:800; font-size:12px; color:#0c1b2e;">${initial}</span>
                </div>
                <div>
                  <div class="wt-smart-company-name">${p.company || 'Doanh Nghiệp Tuyển Dụng'}</div>
                  <div style="font-size: 12px; color: #94a3b8;">${p.timeAgo || p.postedDate || 'Hôm nay'}</div>
                </div>
              </div>
              <button type="button" class="btn-save-job-inline" data-save-id="${p.id}" style="background: none; border: none; cursor: pointer; color: ${isSaved ? '#0044cc' : '#94a3b8'}; font-size: 17px;" title="${isSaved ? 'Đã lưu' : 'Lưu việc'}">
                <i class="fa-${isSaved ? 'solid' : 'regular'} fa-bookmark"></i>
              </button>
            </div>

            <h3 class="wt-smart-title">${p.title}</h3>

            <div class="wt-smart-meta-row">
              <div class="wt-smart-meta-item">
                <i class="fa-solid fa-location-dot" style="color: #64748b;"></i>
                <span>${p.location || 'Hà Nội'}</span>
              </div>
              <span>•</span>
              <div class="wt-smart-meta-item">
                <i class="fa-solid fa-briefcase" style="color: #64748b;"></i>
                <span>${p.workType || p.type || 'Toàn thời gian'}</span>
              </div>
              ${p.hot ? `<span>•</span><span style="background: #fef2f2; color: #dc2626; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 4px;">Ưu tiên</span>` : ''}
            </div>
          </div>

          <div class="wt-smart-card-footer">
            <div class="wt-smart-salary">${salaryText}</div>
            <button type="button" class="wt-smart-apply-btn" data-apply-id="${p.id}">
              <span>Ứng tuyển</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.wt-smart-job-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-save-job-inline') || e.target.closest('.wt-smart-apply-btn')) return;
        const prjId = card.getAttribute('data-project-id');
        switchView('browse');
        setTimeout(() => updateJobDetailPreview(prjId), 80);
      });
    });

    grid.querySelectorAll('.btn-save-job-inline').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prjId = btn.getAttribute('data-save-id');
        if (state.savedJobs.has(prjId)) {
          state.savedJobs.delete(prjId);
          btn.style.color = '#94a3b8';
          btn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
          showToast('Đã bỏ lưu việc làm');
        } else {
          state.savedJobs.add(prjId);
          btn.style.color = '#0044cc';
          btn.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
          showToast('Đã lưu việc làm vào danh sách quan tâm');
        }
        updateSavedCountUI();
      });
    });

    grid.querySelectorAll('.wt-smart-apply-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prjId = btn.getAttribute('data-apply-id');
        openQuickApplyModal(prjId);
      });
    });
  }

  function renderHomeMarketNews() {
    const grid = document.getElementById('home-market-news-grid');
    if (!grid) return;

    const articles = window.initialArticles || [];
    const displayArts = articles.slice(0, 3);

    grid.innerHTML = displayArts.map(art => `
      <div class="wt-news-card" data-art-id="${art.id}">
        <div class="wt-news-img-box">
          <img src="${art.image}" alt="${art.title}" class="wt-news-img" onerror="this.src='images/project_dashboard.jpg'">
        </div>
        <div class="wt-news-body">
          <div class="wt-news-tag">${art.category || 'Tin Tức'}</div>
          <h3 class="wt-news-title">${art.title}</h3>
          <p class="wt-news-summary">${art.summary ? (art.summary.substring(0, 110) + '...') : ''}</p>
          <div class="wt-news-meta">
            <span><i class="fa-regular fa-clock"></i> ${art.date || '18/09/2026'}</span>
            <span>•</span>
            <span>${art.author || 'WorkThean Media'}</span>
          </div>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.wt-news-card').forEach(card => {
      card.addEventListener('click', () => {
        switchView('insights');
      });
    });
  }

  function renderInsightsPage() {
    const leadContainer = document.getElementById('insights-editorial-grid');
    const topicsContainer = document.getElementById('insights-topics-grid');
    if (!leadContainer) return;

    const articles = window.initialArticles || [];
    const leadArt = articles.find(a => a.featured) || articles[0];
    const topicArts = articles.filter(a => a.id !== (leadArt ? leadArt.id : ''));

    if (leadArt) {
      leadContainer.innerHTML = `
        <article class="fw-lead-article" data-article-id="${leadArt.id}">
          <div class="fw-lead-img-box">
            <img src="${leadArt.image}" alt="${leadArt.title}" class="fw-lead-img" onerror="this.src='images/hero_team.jpg'">
          </div>
          <div class="fw-lead-content">
            <span class="fw-category-badge">${leadArt.category}</span>
            <h3 class="fw-article-title">${leadArt.title}</h3>
            <p class="fw-article-summary">${leadArt.summary}</p>
            <div class="fw-article-meta">
              <span><i class="fa-solid fa-user-pen"></i> ${leadArt.author}</span>
              <span>•</span>
              <span><i class="fa-regular fa-clock"></i> ${leadArt.date}</span>
            </div>
          </div>
        </article>
        <div style="display:flex; flex-direction:column; gap:16px;">
          ${topicArts.slice(0, 2).map(a => `
            <div class="fw-topic-card" style="padding:16px;">
              <span class="fw-category-badge" style="font-size:10px;">${a.category}</span>
              <h4 style="font-size:15px; font-weight:700; color:#0f172a; margin:6px 0;">${a.title}</h4>
              <div style="font-size:12px; color:#64748b;"><i class="fa-regular fa-clock"></i> ${a.date}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (topicsContainer) {
      topicsContainer.innerHTML = topicArts.slice(2).map(a => `
        <div class="fw-topic-card">
          <span class="fw-category-badge">${a.category}</span>
          <h4 style="font-size:15px; font-weight:700; color:#0f172a; margin:8px 0 6px;">${a.title}</h4>
          <p style="font-size:12.5px; color:#475569; line-height:1.45; margin-bottom:10px;">${a.summary}</p>
          <div style="font-size:12px; color:#94a3b8;"><i class="fa-regular fa-clock"></i> ${a.date} • ${a.author}</div>
        </div>
      `).join('');
    }
  }

  function initSmartHomeInteractions() {
    const searchInput = document.getElementById('hero-search-input');
    const locationSelect = document.getElementById('hero-search-location');
    const submitBtn = document.getElementById('btn-hero-search-submit');

    const handleHeroSearch = () => {
      const q = searchInput ? searchInput.value.trim().toLowerCase() : '';
      const loc = locationSelect ? locationSelect.value : 'all';
      state.filters.search = q;
      state.filters.location = loc;
      switchView('browse');
      renderBrowseProjects();
    };

    submitBtn?.addEventListener('click', handleHeroSearch);
    searchInput?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleHeroSearch();
    });

    document.querySelectorAll('[data-topic-search]').forEach(el => {
      el.addEventListener('click', () => {
        const kw = el.getAttribute('data-topic-search');
        state.filters.search = kw.toLowerCase();
        switchView('browse');
        renderBrowseProjects();
      });
    });

    document.querySelectorAll('#home-latest-filter-pills .wt-filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('#home-latest-filter-pills .wt-filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const filterKey = pill.getAttribute('data-home-filter');
        renderHomeLatestJobs(filterKey);
      });
    });

    document.getElementById('btn-cta-hire-talent')?.addEventListener('click', () => {
      const modal = document.getElementById('modal-enterprise-consult');
      if (modal) modal.classList.add('show');
    });

    document.getElementById('footer-link-post-job')?.addEventListener('click', openWizardModal);
    document.getElementById('footer-link-consult')?.addEventListener('click', () => {
      const modal = document.getElementById('modal-enterprise-consult');
      if (modal) modal.classList.add('show');
    });
  }

  function updateSavedCountUI() {
    const count = state.savedJobs.size;
    const pillCount = document.getElementById('home-saved-pill-count');
    if (pillCount) pillCount.textContent = count;
    const menuCount = document.getElementById('menu-saved-count');
    if (menuCount) menuCount.textContent = count;
  }


function createCleanJobCardHTML(p, isSaved) {
  const initial = p.logoType || (p.company ? p.company.split(' ').map(w => w[0]).join('').substring(0, 3).toUpperCase() : 'VJ');
  const logoUrl = resolveBrandLogo(p);
  const salaryText = p.salaryDisplay || (p.budgetMin ? `${p.budgetMin} – ${p.budgetMax} USD` : 'Thỏa thuận');
  const skills = p.skills || ['React', 'Node.js', 'TypeScript'];
  const displaySkills = skills.slice(0, 3);
  const extraCount = skills.length > 3 ? skills.length - 3 : 0;
  const postedTime = p.postedDate || p.timeAgo || 'Cập nhật hôm nay';

  const avatarHtml = `<img
    src="${logoUrl}"
    alt="${initial}"
    class="w-full h-full object-contain"
    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
  /><span class="w-full h-full font-bold text-slate-700 text-xs items-center justify-center bg-slate-100" style="display:none;">${initial}</span>`;

  return `
    <article class="p-5 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all shadow-sm flex items-start gap-4 group cursor-pointer relative" data-project-id="${p.id}">
      <!-- Left Logo -->
      <div class="w-14 h-14 rounded-xl bg-white border border-slate-200 p-2 flex items-center justify-center shrink-0 overflow-hidden">
        ${avatarHtml}
      </div>

      <!-- Content Details -->
      <div class="flex-1 min-w-0 pr-8">
        <!-- Title & Tag Line -->
        <div class="flex items-center gap-2 mb-1 flex-wrap">
          ${p.hot ? '<span class="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">⚡ Urgent</span>' : '<span class="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Mới</span>'}
          <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors truncate">
            ${p.title}
          </h3>
        </div>

        <!-- Company Name -->
        <p class="text-sm font-medium text-slate-700 mb-1 truncate">
          ${p.company || p.clientName || 'Doanh Nghiệp'}
        </p>

        <!-- Salary & Location -->
        <p class="text-sm font-semibold text-slate-900 mb-1.5 flex items-center gap-1.5 flex-wrap">
          <span class="text-red-600 font-bold">${salaryText}</span>
          <span class="text-slate-300">|</span>
          <span class="text-slate-600 font-normal">${p.location || 'Hà Nội'}</span>
        </p>

        <!-- Time Ago -->
        <div class="text-xs text-slate-500 flex items-center gap-1 mb-2.5">
          <span class="material-symbols-outlined text-sm text-slate-400">schedule</span>
          <span>${postedTime}</span>
        </div>

        <!-- Skill Tags -->
        <div class="flex items-center gap-1.5 flex-wrap">
          ${displaySkills.map(s => `<span class="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs rounded font-medium">${s}</span>`).join('')}
          ${extraCount > 0 ? `<span class="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs rounded font-medium">+${extraCount}</span>` : ''}
        </div>
      </div>

      <!-- Top-Right Heart Button -->
      <button class="absolute top-5 right-5 w-9 h-9 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-red-600 transition-colors" data-action="save" title="Lưu việc làm">
        <i class="fa-${isSaved ? 'solid' : 'regular'} fa-heart ${isSaved ? 'text-red-600' : ''} text-base"></i>
      </button>
    </article>
  `;
}

/* ==========================================================================
   VIETNAM RECRUITMENT MARKETPLACE - APP LOGIC & SPA CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // Central Application State
  
  // Reliable Brand Logo Resolver
  const brandLogoLookup = {
    'fpt': 'images/brands/fpt.svg',
    'vietcombank': 'images/brands/vcb.svg',
    'vcb': 'images/brands/vcb.svg',
    'vingroup': 'images/brands/vinfast.svg',
    'vinfast': 'images/brands/vinfast.svg',
    'vf': 'images/brands/vinfast.svg',
    'viettel': 'images/brands/viettel.svg',
    'vtl': 'images/brands/viettel.svg',
    'shopee': 'images/brands/shopee.svg',
    'shp': 'images/brands/shopee.svg',
    'momo': 'images/brands/momo.svg',
    'tiki': 'images/brands/tiki.svg',
    'kiotviet': 'images/brands/kiotviet.svg',
    'kiot': 'images/brands/kiotviet.svg',
    'vnpay': 'images/brands/vnpay.svg',
    'grab': 'images/brands/grab.svg',
    'samsung': 'images/brands/samsung.svg',
    'ss': 'images/brands/samsung.svg',
    'axon': 'images/brands/axon.svg',
    'vpbank': 'images/brands/vpbank.svg',
    'vpbs': 'images/brands/vpbank.svg',
    'vng': 'images/brands/vng.svg',
    'nike': 'images/brands/nike.svg',
    'zara': 'images/brands/zara.svg',
    'loreal': 'images/brands/loreal.svg',
    'unilever': 'images/brands/unilever.svg',
    'adidas': 'images/brands/adidas.svg'
  };

  function resolveBrandLogo(p) {
    if (!p) return 'images/brands/fpt.svg';
    if (p.logoUrl && p.logoUrl.startsWith('images/brands/')) return p.logoUrl;
    const comp = ((p.company || p.clientName || '') + ' ' + (p.title || '')).toLowerCase();
    for (const [key, path] of Object.entries(brandLogoLookup)) {
      if (comp.includes(key)) return path;
    }
    const type = (p.logoType || '').toLowerCase();
    for (const [key, path] of Object.entries(brandLogoLookup)) {
      if (type.includes(key) || key.includes(type)) return path;
    }
    return p.logoUrl || 'images/brands/fpt.svg';
  }

  const state = {
    currentView: 'home',
    mode: 'work', // 'work' = candidate, 'hire' = employer
    projects: [...initialProjects],
    freelancers: [...initialFreelancers],
    categories: [...initialCategories],
    notifications: [...initialNotifications],
    savedJobs: new Set(['prj-100', 'prj-101']),
    newsFilter: 'all',
    opportunityFilter: 'all',
    articles: (function() {
      try {
        const saved = localStorage.getItem('workthean_articles');
        return saved ? JSON.parse(saved) : [...initialArticles];
      } catch(e) {
        return [...initialArticles];
      }
    })(),
    quickFilter: 'all',
    attachedCVFile: null,
    companies: [],
    escrowLedger: [],
    selectedProject: null,
    filters: {
      search: '',
      category: 'all',
      location: 'all',
      type: 'all',
      minBudget: 0,
      maxBudget: 100000000,
      skills: []
    }
  };


  // Initialize Modules
  initSalaryCalculator();
  updateSavedJobsCountUI();
  initMobileNav();
  initBrowseFilters();
  initNavigation();
  initSmartHomeInteractions();
  initMarketInsights();
  initSearch();
  initQuickFilterPills();
  initBestJobsShowcase();
  initCompanySpotlight();
  initQuickApplyModal();
  initJobDetailPage();
  initPostJobWizard();
  initAuthSystem();
  initFreelancersDirectory();
  initHRPostSystem();
  initOpportunityTabs();
  loadProjectsFromAPI();
  handleUrlRouting();

  // Boot the correct default view — HOME with editorial + square jobs
  switchView('home');

  // Listen to browser forward/back & hash change
  window.addEventListener('hashchange', handleUrlRouting);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.show, .modal-overlay.show').forEach(m => m.classList.remove('show'));
    }
  });


  /* ==========================================================================
     SPA VIEW SWITCHER & NAVIGATION
     ========================================================================== */
  
  function openEnterpriseModal(type) {
    showToast(`🏢 Tính năng ${type || 'Doanh nghiệp'} — Liên hệ: hr@vietnamjobs.vn`);
  }

  
  function initMobileNav() {
    const hamburger = document.getElementById('btn-hamburger');
    const overlay = document.getElementById('mobile-nav-overlay');
    const drawer = document.getElementById('mobile-nav-drawer');

    const openDrawer = () => {
      if(overlay) overlay.classList.add('open');
      if(drawer) drawer.classList.add('open');
      hamburger?.setAttribute('aria-expanded', 'true');
    };

    const closeDrawer = () => {
      if(overlay) overlay.classList.remove('open');
      if(drawer) drawer.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
    };

    hamburger?.addEventListener('click', openDrawer);
    overlay?.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });

    drawer?.querySelectorAll('.drawer-item[data-view]').forEach(btn => {
      btn.addEventListener('click', () => {
        switchView(btn.getAttribute('data-view'));
        closeDrawer();
      });
    });

    document.getElementById('btn-open-auth-modal-mobile')?.addEventListener('click', () => {
      closeDrawer();
      document.getElementById('modal-auth')?.classList.add('show');
    });

    document.getElementById('btn-open-post-project-mobile')?.addEventListener('click', () => {
      closeDrawer();
      openWizardModal();
    });
  }

  function initNavigation() {
    document.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetView = btn.getAttribute('data-view');
        switchView(targetView);
      });
    });

    document.getElementById('btn-open-post-project')?.addEventListener('click', openWizardModal);
    document.getElementById('footer-btn-post-job')?.addEventListener('click', openWizardModal);
    document.getElementById('footer-btn-headhunt')?.addEventListener('click', () => {
      openEnterpriseModal('Headhunt VIP');
    });
  }

  function switchView(viewId, updateHash = true) {
    state.currentView = viewId;

    document.querySelectorAll('.app-view').forEach(view => view.classList.remove('active-view'));
    const activeEl = document.getElementById(`view-${viewId}`);
    if (activeEl) {
      void activeEl.offsetWidth; // Trigger reflow for fresh entrance animation
      activeEl.classList.add('active-view');
    }

    // Sync Top Tier-2 Brand Nav Items
    document.querySelectorAll('.brand-nav-item').forEach(btn => {
      if (btn.getAttribute('data-view') === viewId) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    if (updateHash && viewId !== 'job-detail') {
      history.replaceState(null, null, ' ');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Sync Top Tier Nav Items
    document.querySelectorAll('.wt-nav-link').forEach(btn => {
      if (btn.getAttribute('data-view') === viewId) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    if (viewId === 'home') {
      renderHomeTopEmployers();
      renderHomeFeaturedOpportunities();
      renderHomeLatestJobs('all');
      renderHomeMarketNews();
    } else if (viewId === 'browse') {
      renderBrowseProjects();
    } else if (viewId === 'company') {
      renderCompanyPage();
    } else if (viewId === 'salary') {
      initSalaryCalculator();
    } else if (viewId === 'insights') {
      renderInsightsPage();
    } else if (viewId === 'freelancers') {
      renderFreelancersDirectory();
    }
  }

  /* ==========================================================================
     URL ROUTING (SUPPORT DIRECT LINK WITH JOB ID)
     ========================================================================== */
  function handleUrlRouting() {
    const hash = window.location.hash;
    const urlParams = new URLSearchParams(window.location.search);

    let jobId = urlParams.get('id');

    if (!jobId && hash.includes('id=')) {
      const match = hash.match(/id=([^&]+)/);
      if (match) jobId = decodeURIComponent(match[1]);
    }

    if (jobId) {
      showJobDetail(jobId, false);
    }
  }

  /* ==========================================================================
     JOB DETAIL PAGE WITH ID (#view-job-detail)
     ========================================================================== */
  function initJobDetailPage() {
    document.getElementById('btn-back-to-jobs-feed')?.addEventListener('click', () => {
      switchView('home');
    });

    document.getElementById('btn-copy-job-id')?.addEventListener('click', () => {
      if (state.selectedProject) {
        navigator.clipboard?.writeText(state.selectedProject.id);
        showToast(`📋 Đã sao chép mã việc làm: ${state.selectedProject.id}`);
      }
    });

    document.getElementById('btn-detail-trigger-apply')?.addEventListener('click', () => {
      if (state.selectedProject) openQuickApplyModal(state.selectedProject.id);
    });

    document.getElementById('btn-bottom-apply-now')?.addEventListener('click', () => {
      if (state.selectedProject) openQuickApplyModal(state.selectedProject.id);
    });

    document.getElementById('btn-detail-trigger-save')?.addEventListener('click', (e) => {
      if (!state.selectedProject) return;
      const prjId = state.selectedProject.id;
      const btn = e.currentTarget;
      
      if (state.savedJobs.has(prjId)) {
        state.savedJobs.delete(prjId);
        btn.classList.remove('saved');
        btn.innerHTML = '<i class="fa-regular fa-bookmark"></i> Lưu Việc';
        showToast('Đã bỏ lưu việc làm');
      } else {
        state.savedJobs.add(prjId);
        btn.classList.add('saved');
        btn.innerHTML = '<i class="fa-solid fa-bookmark bookmark-pop" style="color:#0a66c2;"></i> Đã Lưu';
        showToast('❤️ Đã lưu việc làm vào danh sách yêu thích!');
      }
      const icon = btn.querySelector('i');
      if (icon) {
        icon.classList.remove('bookmark-pop');
        void icon.offsetWidth; // reflow
        icon.classList.add('bookmark-pop');
      }
      updateSavedJobsCountUI();
      renderHomeFeaturedProjects();
    });

    document.getElementById('btn-detail-trigger-share')?.addEventListener('click', () => {
      if (!state.selectedProject) return;
      const shareUrl = `${window.location.origin}${window.location.pathname}#job?id=${encodeURIComponent(state.selectedProject.id)}`;
      navigator.clipboard?.writeText(shareUrl);
      showToast(`🔗 Đã sao chép link chi tiết việc làm mã ${state.selectedProject.id}!`);
    });
  }

  function showJobDetail(projectId, updateHash = true) {
    const p = state.projects.find(x => x.id === projectId) || 
              initialProjects.find(x => x.id === projectId) || 
              state.projects[0];

    if (!p) return;
    state.selectedProject = p;

    // Header Info
    const idTag = document.getElementById('detail-job-id-tag');
    const idInline = document.getElementById('detail-id-inline');
    const titleEl = document.getElementById('detail-job-title');
    const compEl = document.getElementById('detail-company-name');
    const logoEl = document.getElementById('detail-company-logo');
    const locEl = document.getElementById('detail-location');
    const worktypeEl = document.getElementById('detail-worktype');
    const postedTimeEl = document.getElementById('detail-posted-time');
    const salaryEl = document.getElementById('detail-salary-value');
    const saveBtn = document.getElementById('btn-detail-trigger-save');

    if (idTag) idTag.textContent = p.id;
    if (idInline) idInline.innerHTML = `<i class="fa-solid fa-fingerprint"></i> ID: ${p.id}`;
    if (titleEl) titleEl.textContent = p.title;
    if (compEl) compEl.textContent = p.company || p.clientName || 'Doanh Nghiệp Tuyển Dụng';
    
    const logoText = p.logoType || (p.company || p.clientName || 'VN').substring(0, 3).toUpperCase();
    const logoUrl = resolveBrandLogo(p);
    
    if (logoEl) {
      logoEl.innerHTML = `<img src="${logoUrl}" alt="${logoText}" class="card-brand-logo" style="width:54px;height:54px;object-fit:contain;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" /><span class="card-brand-fallback" style="display:none;width:54px;height:54px;font-size:16px;">${logoText}</span>`;
    }

    if (locEl) locEl.innerHTML = `<i class="fa-solid fa-location-dot" style="color:var(--fl-primary);"></i> ${p.location || 'Hà Nội & TP.HCM'}`;
    if (worktypeEl) worktypeEl.innerHTML = `<i class="fa-solid fa-briefcase"></i> ${p.workType || p.type || 'Toàn thời gian'}`;
    if (postedTimeEl) postedTimeEl.innerHTML = `<i class="fa-regular fa-clock"></i> ${p.postedDate || p.timeAgo || 'Đăng gần đây'}`;

    const salaryVal = p.salaryDisplay || (p.budgetMin ? (`${p.budgetMin} – ${p.budgetMax} USD`) : '30 – 50 triệu/tháng');
    if (salaryEl) salaryEl.textContent = salaryVal;

    if (saveBtn) {
      if (state.savedJobs.has(p.id)) {
        saveBtn.innerHTML = '<i class="fa-solid fa-bookmark" style="color:#0a66c2;"></i> Đã Lưu';
      } else {
        saveBtn.innerHTML = '<i class="fa-regular fa-bookmark"></i> Lưu Việc';
      }
    }

    // Main Description & Requirements
    const descEl = document.getElementById('detail-description-text');
    if (descEl) {
      descEl.innerHTML = `
        <p style="margin-bottom:12px;">${p.description || 'Tham gia trực tiếp phát triển và triển khai hệ thống giải pháp công nghệ cao cho doanh nghiệp hàng đầu tại Việt Nam.'}</p>
        <p style="margin-bottom:12px;"><strong>Trách nhiệm công việc chính:</strong></p>
        <ul style="list-style:disc; padding-left:20px; line-height:1.7; color:var(--fl-text-body);">
          <li>Tham gia phân tích yêu cầu nghiệp vụ và thiết kế kiến trúc hệ thống module tương ứng.</li>
          <li>Lập trình, tối ưu hóa hiệu năng cơ sở dữ liệu và đảm bảo tính bảo mật, khả năng mở rộng cao.</li>
          <li>Phối hợp cùng Product Manager, QA và Tech Lead để nghiệm thu sản phẩm đúng tiến độ cam kết.</li>
          <li>Tham gia xây dựng tài liệu kỹ thuật, hướng dẫn vận hành và chuyển giao công nghệ.</li>
        </ul>
      `;
    }

    // Skills Pills
    const skillsContainer = document.getElementById('detail-skills-container');
    if (skillsContainer) {
      const skillsList = (p.skills && p.skills.length > 0) ? p.skills : ['Java', 'Spring Boot', 'SQL', 'Git', 'Docker'];
      skillsContainer.innerHTML = skillsList.map(s => `
        <span class="detail-skill-pill"><i class="fa-solid fa-check"></i> ${s}</span>
      `).join('');
    }

    // Sidebar Specs
    const sideAvatar = document.getElementById('sidebar-company-avatar');
    const sideCompName = document.getElementById('sidebar-company-name');
    const sideRating = document.getElementById('sidebar-company-rating');
    const sideHireRate = document.getElementById('sidebar-company-hire-rate');
    const sideSince = document.getElementById('sidebar-company-since');
    const sideId = document.getElementById('sidebar-spec-id');
    const sideSalary = document.getElementById('sidebar-spec-salary');
    const sideLoc = document.getElementById('sidebar-spec-location');
    const sideWorktype = document.getElementById('sidebar-spec-worktype');
    const sideDeadline = document.getElementById('sidebar-spec-deadline');

    if (sideAvatar) {
      sideAvatar.innerHTML = `<img src="${logoUrl}" alt="${logoText}" class="card-brand-logo" style="width:42px;height:42px;object-fit:contain;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" /><span class="card-brand-fallback" style="display:none;width:42px;height:42px;">${logoText}</span>`;
    }
    if (sideCompName) sideCompName.textContent = p.company || p.clientName || 'Doanh Nghiệp Tuyển Dụng';
    if (sideRating) sideRating.textContent = `${p.clientRating || 5.0} / 5.0 (${p.clientReviews || 84} đánh giá)`;
    if (sideHireRate) sideHireRate.textContent = p.clientHireRate || '98%';
    if (sideSince) sideSince.textContent = p.clientMemberSince || 'Năm 2018';

    if (sideId) sideId.textContent = p.id;
    if (sideSalary) sideSalary.textContent = salaryVal;
    if (sideLoc) sideLoc.textContent = p.location || 'Hà Nội & TP.HCM';
    if (sideWorktype) sideWorktype.textContent = p.workType || p.type || 'Toàn thời gian';
    if (sideDeadline) sideDeadline.textContent = p.timeLeft || 'Còn 15 ngày';

    // Switch View & Update Hash
    switchView('job-detail', false);

    if (updateHash) {
      window.location.hash = `job?id=${encodeURIComponent(p.id)}`;
    }
  }

  /* ==========================================================================
     SEARCH & FILTERING
     ========================================================================== */
  function initSearch() {
    const searchInput = document.getElementById('header-search-input');
    const locationSelect = document.getElementById('hero-location-select');
    const submitBtn = document.getElementById('btn-hero-submit-search');

    const handleSearch = () => {
      state.filters.search = searchInput?.value.trim().toLowerCase() || '';
      state.filters.location = locationSelect?.value || 'all';
      renderHomeFeaturedProjects();
      renderBrowseProjects();

      if (state.currentView !== 'home' && state.currentView !== 'browse') {
        switchView('browse');
      } else {
        const feedEl = document.getElementById('projects-feed');
        feedEl?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    };

    searchInput?.addEventListener('input', () => {
      state.filters.search = searchInput.value.trim().toLowerCase();
      renderHomeFeaturedProjects();
    });

    locationSelect?.addEventListener('change', handleSearch);
    submitBtn?.addEventListener('click', handleSearch);

    // Quick Search Tags (YBOX Style)
    document.querySelectorAll('.quick-search-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const kw = tag.getAttribute('data-filter-keyword');
        if (searchInput) searchInput.value = kw;
        state.filters.search = kw.toLowerCase();
        renderHomeFeaturedProjects();
        showToast(`🔍 Đang tìm kiếm: ${kw}`);
        document.getElementById('projects-feed')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    const topCapsuleInput = document.getElementById('top-capsule-search-input');
    const topCapsuleBtn = document.getElementById('btn-top-capsule-search');

    const handleTopCapsuleSearch = () => {
      const q = topCapsuleInput?.value.trim().toLowerCase() || '';
      state.filters.search = q;
      if (searchInput) searchInput.value = topCapsuleInput?.value || '';
      renderHomeFeaturedProjects();
      if (state.currentView !== 'home' && state.currentView !== 'browse') {
        switchView('home');
      }
      document.getElementById('projects-feed')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    topCapsuleInput?.addEventListener('input', () => {
      state.filters.search = topCapsuleInput.value.trim().toLowerCase();
      renderHomeFeaturedProjects();
    });

    topCapsuleInput?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleTopCapsuleSearch();
    });

    topCapsuleBtn?.addEventListener('click', handleTopCapsuleSearch);

    document.getElementById('sidebar-btn-post-job')?.addEventListener('click', openWizardModal);
    document.getElementById('nav-btn-hot-badge')?.addEventListener('click', () => {
      const hotPill = document.querySelector('[data-quick-filter="hot"]');
      hotPill?.click();
      document.getElementById('projects-feed')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* ==========================================================================
     QUICK FILTER TABS (ABOVE JOB FEED)
     ========================================================================== */
  function initQuickFilterPills() {
    const pills = document.querySelectorAll('.filter-pill-btn');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.quickFilter = pill.getAttribute('data-quick-filter') || 'all';
        renderHomeFeaturedProjects();
      });
    });
  }

  function updateSavedJobsCountUI() {
    const badge = document.getElementById('saved-jobs-count-badge');
    if (badge) badge.textContent = state.savedJobs.size;
  }

  /* ==========================================================================
     BEST JOBS SHOWCASE & CLEAN CARD RENDERING
     ========================================================================== */
  function initBestJobsShowcase() {
    document.querySelectorAll('.best-job-mini-card').forEach(card => {
      const prjId = card.getAttribute('data-project-id');
      
      const saveBtn = card.querySelector('.btn-save-heart');
      if (saveBtn) {
        if (state.savedJobs.has(prjId)) {
          saveBtn.classList.add('saved');
          saveBtn.innerHTML = '<i class="fa-solid fa-heart"></i>';
        }

        saveBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (state.savedJobs.has(prjId)) {
            state.savedJobs.delete(prjId);
            saveBtn.classList.remove('saved');
            saveBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
            showToast('Đã bỏ lưu việc làm');
          } else {
            state.savedJobs.add(prjId);
            saveBtn.classList.add('saved');
            saveBtn.innerHTML = '<i class="fa-solid fa-heart"></i>';
            showToast('❤️ Đã lưu việc làm vào danh sách yêu thích!');
          }
          updateSavedJobsCountUI();
        });
      }

      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-save-heart')) return;
        showJobDetail(prjId);
      });
    });
  }

  function initCompanySpotlight() {
    document.querySelectorAll('[data-filter-company]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const compName = el.getAttribute('data-filter-company');
        const searchInput = document.getElementById('header-search-input');
        if (searchInput) searchInput.value = compName;
        state.filters.search = compName.toLowerCase();
        renderHomeFeaturedProjects();
        showToast(`🔍 Đang hiển thị việc làm mới tại ${compName}`);
        const feed = document.getElementById('projects-feed');
        feed?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  
  function showSkeletonLoader(containerId, count = 3) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = Array.from({length: count}, () => `
      <div class="skeleton-card">
        <div style="display:flex;gap:12px;align-items:flex-start">
          <div class="skeleton-line" style="width:48px;height:48px;border-radius:8px;flex-shrink:0;"></div>
          <div style="flex:1">
            <div class="skeleton-line wide"></div>
            <div class="skeleton-line mid"></div>
            <div class="skeleton-line short"></div>
          </div>
        </div>
        <div style="margin-top:12px">
          <div class="skeleton-line full"></div>
          <div class="skeleton-line mid"></div>
        </div>
      </div>
    `).join('');
  }

  function hideSkeletonLoader(containerId) {
    // handled by rendering content over it
  }

  function initProjectsFeed() {
    showSkeletonLoader('projects-feed', 4);
    setTimeout(() => {
      renderHomeFeaturedProjects();
    }, 300);
  }

  function renderHomeFeaturedProjects() {
    const feedContainer = document.getElementById('projects-feed');
    if (!feedContainer) return;

    let filtered = [...state.projects];

    if (state.quickFilter === 'hot') {
      filtered = filtered.filter(p => p.hot === true);
    } else if (state.quickFilter === 'remote') {
      filtered = filtered.filter(p => (p.location && p.location.toLowerCase().includes('remote')) || (p.workType && p.workType.toLowerCase().includes('linh hoạt')));
    } else if (state.quickFilter === 'fulltime') {
      filtered = filtered.filter(p => !p.type || p.type === 'Full-Time');
    } else if (state.quickFilter === 'highsalary') {
      filtered = filtered.filter(p => (p.budgetMax && p.budgetMax >= 2000) || (p.salaryDisplay && p.salaryDisplay.includes('35')));
    } else if (state.quickFilter === 'saved') {
      filtered = filtered.filter(p => state.savedJobs.has(p.id));
    }

    if (state.filters.search) {
      const q = state.filters.search.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(q) || 
        (p.company && p.company.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.skills && p.skills.some(s => s.toLowerCase().includes(q)))
      );
    }

    if (filtered.length === 0) {
      feedContainer.innerHTML = `
        <div style="background:#ffffff; border:1px solid var(--fl-border); border-radius:var(--radius-lg); padding:40px 20px; text-align:center;">
          <i class="fa-solid fa-folder-open" style="font-size:36px; color:var(--fl-text-light); margin-bottom:12px;"></i>
          <h4 style="font-size:16px; font-weight:700; color:var(--fl-text-heading); margin-bottom:6px;">Không tìm thấy việc làm phù hợp</h4>
          <p style="font-size:13.5px; color:var(--fl-text-muted);">Hãy thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc để xem toàn bộ danh sách.</p>
        </div>
      `;
      return;
    }

    feedContainer.innerHTML = filtered.map(p => {
      const isSaved = state.savedJobs.has(p.id);
      const isPromoted = p.featured || p.hot;
      const initial = p.logoType || (p.company ? p.company.split(' ').map(w => w[0]).join('').substring(0, 3).toUpperCase() : 'VJ');
      const logoUrl = resolveBrandLogo(p);
      const salaryText = p.salaryDisplay || (p.budgetMin ? `${p.budgetMin} – ${p.budgetMax} USD` : 'Thỏa thuận');
      const applicantCount = p.applicantsCount || (p.bids ? p.bids.length : 12);

      const avatarHtml = `<img
        src="${logoUrl}"
        alt="${initial}"
        class="card-brand-logo"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      /><span class="card-brand-fallback" style="display:none;">${initial}</span>`;

      return `
        <article class="career-job-card ${isPromoted ? 'promoted' : ''}" data-project-id="${p.id}">
          <div class="career-card-left-section">
            <div class="career-avatar-circle">
              ${avatarHtml}
            </div>

            <div class="career-main-details">
              <div class="career-title-row">
                <h3 class="career-job-title">${p.title}</h3>
                <span class="badge-hot-tag"><i class="fa-solid fa-fire"></i> GẤP</span>
                <span class="badge-new-yellow">NEW</span>
                ${p.top100 !== false ? '<span class="badge-top100-star"><i class="fa-solid fa-star"></i> TOP 100</span>' : ''}
              </div>

              <div class="career-company-row">
                <span class="company-name-bold">${p.company || p.clientName || 'Animalz Technologies'}</span>
                <i class="fa-solid fa-circle-check career-verified-check" title="Doanh nghiệp đã xác thực"></i>
                <span class="career-meta-sep">•</span>
                <span class="career-location-text"><i class="fa-solid fa-location-dot" style="color:var(--fl-primary); font-size:12px;"></i> ${p.location || 'Hà Nội & TP.HCM'}</span>
                <span class="career-meta-sep">•</span>
                <span class="career-workmode-badge"><i class="fa-solid fa-briefcase" style="font-size:11px;"></i> ${p.workType || 'Full-Time'}</span>
              </div>

              <div class="career-pills-row">
                ${p.boosted !== false ? '<span class="pill-tag-boosted"><i class="fa-solid fa-rocket"></i> Boosted</span>' : ''}
                ${p.featured ? '<span class="pill-tag-featured"><i class="fa-solid fa-crown"></i> Ưu Tiên</span>' : ''}
                <span class="pill-tag-white"><i class="fa-solid fa-shield"></i> Xác thực 100%</span>
                <span class="pill-tag-white"><i class="fa-solid fa-circle-check" style="color:var(--fl-primary);"></i> Tuyển gấp</span>
              </div>

              <div class="career-live-meta">
                <span><i class="fa-regular fa-clock"></i> ${p.postedDate || p.timeAgo || '2 giờ trước'}</span>
                <span class="career-meta-sep">•</span>
                <span><i class="fa-solid fa-users" style="color:var(--fl-primary);"></i> <strong>${applicantCount}</strong> người đã nộp CV</span>
                <span class="career-meta-sep">•</span>
                <span style="color:var(--fl-text-muted); font-size:11.5px;"><i class="fa-solid fa-hashtag"></i> ${p.id}</span>
              </div>
            </div>
          </div>

          <div class="career-card-right-section">
            <div class="career-salary-box">
              <div class="career-salary-text">${salaryText}</div>
              <div class="career-salary-subbadge"><i class="fa-solid fa-circle-dollar-to-slot"></i> Thu nhập hấp dẫn</div>
            </div>

            <div class="career-action-buttons-group">
              <button class="btn-save-pill ${isSaved ? 'saved' : ''}" title="Lưu việc làm" data-action="save">
                <i class="fa-${isSaved ? 'solid' : 'regular'} fa-bookmark"></i> ${isSaved ? 'Đã lưu' : 'Lưu'}
              </button>
              <button class="btn-apply-prominent" data-action="view-detail">
                Xem Chi Tiết <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Bind Event Listeners
    feedContainer.querySelectorAll('.career-job-card').forEach(card => {
      const prjId = card.getAttribute('data-project-id');

      card.querySelectorAll('[data-action="save"]').forEach(saveBtn => {
        saveBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (state.savedJobs.has(prjId)) {
            state.savedJobs.delete(prjId);
            showToast('Đã bỏ lưu việc làm');
          } else {
            state.savedJobs.add(prjId);
            showToast('❤️ Đã lưu việc làm vào danh sách yêu thích!');
          }
          updateSavedJobsCountUI();
          renderHomeFeaturedProjects();
        });
      });

      card.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="save"]')) return;
        feedContainer.querySelectorAll('.career-job-card').forEach(c => c.classList.remove('active-selected'));
        card.classList.add('active-selected');
        updateJobDetailPreview(prjId);
      });
    });

    // Automatically preview first item on load
    if (filtered.length > 0) {
      updateJobDetailPreview(filtered[0].id);
    }
  }

  /* ==========================================================================
     FREIGHTWAVES EDITORIAL, SQUARE JOBS, PHNOM PENH POST & SPLIT PANE RENDERERS
     ========================================================================== */

  function renderHomeEditorial() {
    const leadContainer = document.getElementById('home-editorial-grid');
    const topicsContainer = document.getElementById('home-topics-grid');
    if (!leadContainer) return;

    const articles = window.initialArticles || [];
    const leadArt = articles.find(a => a.featured) || articles[0];
    const topicArts = articles.filter(a => a.id !== (leadArt ? leadArt.id : ''));

    if (leadArt) {
      leadContainer.innerHTML = `
        <article class="fw-lead-article" data-article-id="${leadArt.id}">
          <div class="fw-lead-img-box">
            <img src="${leadArt.image}" alt="${leadArt.title}" class="fw-lead-img" onerror="this.src='images/hero_team.jpg'">
          </div>
          <div class="fw-lead-content">
            <span class="fw-category-badge">${leadArt.category}</span>
            <h3 class="fw-article-title">${leadArt.title}</h3>
            <p class="fw-article-summary">${leadArt.summary}</p>
            <div class="fw-article-meta">
              <span><i class="fa-solid fa-user-pen"></i> ${leadArt.author}</span>
              <span>•</span>
              <span><i class="fa-regular fa-clock"></i> ${leadArt.date}</span>
            </div>
          </div>
        </article>
        <div style="display:flex; flex-direction:column; gap:16px;">
          ${topicArts.slice(0, 2).map(a => `
            <div class="fw-topic-card" style="padding:16px;">
              <span class="fw-category-badge" style="font-size:10px;">${a.category}</span>
              <h4 style="font-size:15px; font-weight:700; color:#0f172a; margin:6px 0;">${a.title}</h4>
              <div style="font-size:12px; color:#64748b;"><i class="fa-regular fa-clock"></i> ${a.date}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (topicsContainer) {
      topicsContainer.innerHTML = topicArts.slice(2).map(a => `
        <div class="fw-topic-card">
          <span class="fw-category-badge">${a.category}</span>
          <h4 style="font-size:15px; font-weight:700; color:#0f172a; margin:8px 0 6px;">${a.title}</h4>
          <p style="font-size:12.5px; color:#475569; line-height:1.45; margin-bottom:10px;">${a.summary}</p>
          <div style="font-size:12px; color:#94a3b8;"><i class="fa-regular fa-clock"></i> ${a.date} • ${a.author}</div>
        </div>
      `).join('');
    }
  }

  function renderHomeSquareJobs() {
    const grid = document.getElementById('home-square-jobs-grid');
    if (!grid) return;

    const jobs = state.projects.slice(0, 4);
    grid.innerHTML = jobs.map(p => {
      const initial = p.logoType || (p.company ? p.company.split(' ').map(w => w[0]).join('').substring(0, 3).toUpperCase() : 'VJ');
      const logoUrl = resolveBrandLogo(p);
      const salaryText = p.salaryDisplay || (p.budgetMin ? `${p.budgetMin}–${p.budgetMax} USD` : 'Thỏa thuận');
      const descShort = p.description ? (p.description.substring(0, 110) + '...') : 'Tuyển dụng nhân sự chất lượng cao với mức đãi ngộ hấp dẫn...';

      return `
        <div class="square-job-card" data-project-id="${p.id}">
          <div>
            <div class="square-card-top">
              <div class="square-logo-box">
                <img src="${logoUrl}" alt="${initial}" class="square-logo-img" onerror="this.src='images/brands/fpt.svg'">
              </div>
              <div>
                <div style="font-size:12px; font-weight:700; color:#475569;">${p.company || 'Doanh Nghiệp'}</div>
                <div style="font-size:11px; color:#94a3b8;"><i class="fa-solid fa-location-dot"></i> ${p.location || 'Hà Nội'}</div>
              </div>
            </div>
            <h4 class="square-job-title">${p.title}</h4>
            <p class="square-job-desc">${descShort}</p>
          </div>
          <div class="square-card-bottom">
            <span class="square-salary-badge">${salaryText}</span>
            <span style="font-size:11px; font-weight:700; color:#0a66c2;">Ứng tuyển <i class="fa-solid fa-chevron-right"></i></span>
          </div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.square-job-card').forEach(card => {
      card.addEventListener('click', () => {
        const prjId = card.getAttribute('data-project-id');
        switchView('browse');
        setTimeout(() => updateJobDetailPreview(prjId), 100);
      });
    });
  }

  function renderCompanyPage() {
    const heroContainer = document.getElementById('ppp-hero-story');
    const gridContainer = document.getElementById('ppp-company-articles-grid');
    const directoryContainer = document.getElementById('ppp-corporate-directory');
    if (!heroContainer) return;

    const companyArts = window.initialCompanyArticles || [];

    if (companyArts.length > 0) {
      const main = companyArts[0];
      heroContainer.innerHTML = `
        <span class="fw-category-badge">${main.category}</span>
        <h2 style="font-size:24px; font-weight:800; color:#0c1b2e; margin:10px 0;">${main.title}</h2>
        <p style="font-size:14px; color:#475569; line-height:1.6; margin-bottom:14px;">${main.summary}</p>
        <div style="font-size:12px; color:#94a3b8; display:flex; align-items:center; gap:12px;">
          <span><img src="${main.logo}" alt="" style="width:20px; height:20px; object-fit:contain; vertical-align:middle;"> <strong>${main.company}</strong></span>
          <span>•</span>
          <span><i class="fa-regular fa-clock"></i> ${main.date}</span>
        </div>
      `;

      if (gridContainer) {
        gridContainer.innerHTML = companyArts.slice(1).map(a => `
          <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:16px;">
            <span class="fw-category-badge" style="font-size:10px;">${a.category}</span>
            <h4 style="font-size:15px; font-weight:700; color:#0f172a; margin:6px 0;">${a.title}</h4>
            <p style="font-size:12.5px; color:#64748b; line-height:1.4; margin-bottom:8px;">${a.summary}</p>
            <div style="font-size:11px; color:#94a3b8;">${a.company} • ${a.date}</div>
          </div>
        `).join('');
      }
    }

    if (directoryContainer) {
      const topBrands = ['FPT Software', 'Samsung Vietnam', 'Nike Vietnam', 'L\'Oréal Vietnam', 'Viettel Solutions', 'Inditex / Zara'];
      directoryContainer.innerHTML = topBrands.map(b => `
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:12px; display:flex; align-items:center; justify-content:space-between;">
          <div style="font-weight:700; font-size:13.5px; color:#0f172a;">${b}</div>
          <span style="font-size:11px; font-weight:700; color:#0a66c2; background:#e0f2fe; padding:2px 8px; border-radius:4px;">Hồ sơ</span>
        </div>
      `).join('');
    }
  }

  function updateJobDetailPreview(projectId) {
    const pane = document.getElementById('job-detail-preview-panel');
    if (!pane) return;

    const p = state.projects.find(x => x.id === projectId) || state.projects[0];
    if (!p) return;

    state.selectedProject = p;
    const initial = p.logoType || (p.company ? p.company.split(' ').map(w => w[0]).join('').substring(0, 3).toUpperCase() : 'VJ');
    const logoUrl = resolveBrandLogo(p);
    const salaryText = p.salaryDisplay || (p.budgetMin ? `${p.budgetMin} – ${p.budgetMax} USD` : 'Thỏa thuận');
    const isSaved = state.savedJobs.has(p.id);

    pane.innerHTML = `
      <div class="preview-company-header">
        <img src="${logoUrl}" alt="${initial}" class="preview-logo" onerror="this.src='images/brands/fpt.svg'">
        <div>
          <h3 style="font-size:20px; font-weight:800; color:#0c1b2e; margin-bottom:4px;">${p.title}</h3>
          <div style="font-size:14px; font-weight:700; color:#0a66c2;">${p.company || 'Doanh Nghiệp Tuyển Dụng'}</div>
          <div style="font-size:12.5px; color:#64748b; margin-top:2px;"><i class="fa-solid fa-location-dot"></i> ${p.location || 'Hà Nội'} • ${p.workType || 'Toàn thời gian'}</div>
        </div>
      </div>

      <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px;">
        <button type="button" class="btn-linkedin-apply" id="btn-preview-apply">
          <i class="fa-solid fa-paper-plane"></i> Ứng Tuyển Nhanh
        </button>
        <button type="button" style="background:#f1f5f9; border:1px solid #cbd5e1; color:#334155; padding:10px 18px; border-radius:24px; font-weight:700; cursor:pointer;" id="btn-preview-save">
          <i class="fa-${isSaved ? 'solid' : 'regular'} fa-bookmark" style="${isSaved ? 'color:#0a66c2;' : ''}"></i> ${isSaved ? 'Đã Lưu' : 'Lưu Việc'}
        </button>
      </div>

      <div style="border-top:1px solid #e2e8f0; padding-top:16px;">
        <h4 style="font-size:15px; font-weight:700; color:#0f172a; margin-bottom:8px;">Mô Tả Công Việc</h4>
        <p style="font-size:13.5px; color:#334155; line-height:1.6; margin-bottom:16px;">${p.description || 'Tham gia trực tiếp phát triển hệ thống sản phẩm chuyển đổi số quy mô lớn...'}</p>

        <h4 style="font-size:15px; font-weight:700; color:#0f172a; margin-bottom:8px;">Quyền Lợi & Mức Lương</h4>
        <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:8px; font-weight:700; color:#dc2626; margin-bottom:16px;">
          💰 ${salaryText}
        </div>

        <h4 style="font-size:15px; font-weight:700; color:#0f172a; margin-bottom:8px;">Kỹ Năng Yêu Cầu</h4>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:16px;">
          ${(p.skills || ['React', 'Node.js']).map(s => `<span style="background:#e0f2fe; color:#0369a1; font-size:12px; font-weight:600; padding:4px 10px; border-radius:4px;">${s}</span>`).join('')}
        </div>
      </div>
    `;

    document.getElementById('btn-preview-apply')?.addEventListener('click', () => {
      openQuickApplyModal(p.id);
    });

    document.getElementById('btn-preview-save')?.addEventListener('click', () => {
      if (state.savedJobs.has(p.id)) {
        state.savedJobs.delete(p.id);
        showToast('Đã bỏ lưu việc làm');
      } else {
        state.savedJobs.add(p.id);
        showToast('❤️ Đã lưu việc làm!');
      }
      updateSavedJobsCountUI();
      updateJobDetailPreview(p.id);
    });
  }

  
  function initBrowseFilters() {
    const updateActiveBadge = () => {
      const activeCount = document.querySelectorAll('.browse-cat-filter:checked, .browse-type-filter:checked, .browse-loc-filter:checked').length;
      const badge = document.getElementById('filter-active-badge');
      if (badge) {
        if (activeCount > 0) {
          badge.textContent = activeCount;
          badge.style.display = 'inline-block';
        } else {
          badge.style.display = 'none';
        }
      }
    };

    document.getElementById('btn-apply-browse-filters')?.addEventListener('click', () => {
      renderBrowseProjects();
      showToast('🔍 Đã áp dụng bộ lọc thành công!');
    });

    document.getElementById('btn-reset-browse-filters')?.addEventListener('click', () => {
      document.querySelectorAll('.browse-cat-filter, .browse-type-filter, .browse-loc-filter').forEach(cb => {
        cb.checked = false;
      });
      const sortSelect = document.getElementById('browse-sort-select');
      if (sortSelect) sortSelect.value = 'newest';
      updateActiveBadge();
      renderBrowseProjects();
      showToast('🔄 Đã đặt lại toàn bộ bộ lọc tìm kiếm');
    });

    document.getElementById('browse-sort-select')?.addEventListener('change', renderBrowseProjects);

    document.querySelectorAll('.browse-cat-filter, .browse-type-filter, .browse-loc-filter').forEach(cb => {
      cb.addEventListener('change', () => {
        updateActiveBadge();
        renderBrowseProjects();
      });
    });
  }

  function renderBrowseProjects() {
    const browseFeed = document.getElementById('browse-projects-feed');
    if (!browseFeed) return;

    const checkedCats = [...document.querySelectorAll('.browse-cat-filter:checked')].map(c => c.value);
    const checkedTypes = [...document.querySelectorAll('.browse-type-filter:checked')].map(c => c.value);
    const checkedLocs = [...document.querySelectorAll('.browse-loc-filter:checked')].map(c => c.value);
    const sortVal = document.getElementById('browse-sort-select')?.value || 'newest';

    let projects = [...state.projects];

    if (checkedCats.length > 0) projects = projects.filter(p => checkedCats.includes(p.category));
    if (checkedTypes.length > 0) projects = projects.filter(p => checkedTypes.some(t => (p.workType || p.type || '').toLowerCase().includes(t.toLowerCase())));
    if (checkedLocs.length > 0) {
      const locMap = { 'hcm': ['hcm', 'hồ chí minh', 'tp.hcm', 'ho chi minh', 'sài gòn'], 'hanoi': ['hà nội', 'ha noi', 'hà noi'], 'danang': ['đà nẵng', 'da nang'], 'bacninh': ['bắc ninh', 'bac ninh'] };
      projects = projects.filter(p => {
        const loc = (p.location || '').toLowerCase();
        return checkedLocs.some(filterKey => {
          const aliases = locMap[filterKey] || [filterKey];
          return aliases.some(alias => loc.includes(alias));
        });
      });
    }

    if (state.filters.search) {
      const q = state.filters.search.toLowerCase();
      projects = projects.filter(p =>
        p.title.toLowerCase().includes(q) ||
        (p.company || '').toLowerCase().includes(q) ||
        (p.skills || []).some(s => s.toLowerCase().includes(q))
      );
    }

    if (state.opportunityFilter && state.opportunityFilter !== 'all') {
      projects = projects.filter(p => p.opportunityType === state.opportunityFilter);
    }

    if (sortVal === 'salary') projects.sort((a, b) => (b.budgetMax || 0) - (a.budgetMax || 0));
    else if (sortVal === 'applicants') projects.sort((a, b) => (b.applicantsCount || 0) - (a.applicantsCount || 0));

    const countEl = document.getElementById('browse-results-count');
    if (countEl) countEl.textContent = projects.length;

    if (projects.length === 0) {
      browseFeed.innerHTML = `<div class="bg-white border border-slate-200 rounded-xl p-10 text-center"><span class="material-symbols-outlined text-4xl text-slate-400">folder_open</span><h4 class="mt-2 text-base font-bold text-slate-900">Không tìm thấy việc làm phù hợp</h4></div>`;
      return;
    }

    browseFeed.innerHTML = projects.map(p => {
      const isSaved = state.savedJobs.has(p.id);
      const initial = p.logoType || (p.company ? p.company.split(' ').map(w => w[0]).join('').substring(0, 3).toUpperCase() : 'VJ');
      const logoUrl = resolveBrandLogo(p);
      const salaryText = p.salaryDisplay || (p.budgetMin ? `${p.budgetMin}–${p.budgetMax}` : 'Thỏa thuận');
      return `
        <div class="job-item-split-card" data-project-id="${p.id}">
          <div style="display:flex; align-items:flex-start; gap:12px;">
            <div style="width:44px;height:44px;border-radius:8px;border:1px solid #e2e8f0;background:#fff;padding:4px;flex-shrink:0;display:flex;align-items:center;justify-content:center;">
              <img src="${logoUrl}" alt="${initial}" style="width:100%;height:100%;object-fit:contain;" onerror="this.src='images/brands/fpt.svg'">
            </div>
            <div style="flex:1;min-width:0;">
              <div style="font-size:15px;font-weight:700;color:#0a66c2;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${p.title}</div>
              <div style="font-size:12.5px;font-weight:600;color:#334155;margin-bottom:2px;">${p.company || 'Doanh Nghiệp'}</div>
              <div style="font-size:12px;color:#64748b;">
                <i class="fa-solid fa-location-dot"></i> ${p.location || 'Hà Nội'} &nbsp;•&nbsp;
                <span style="color:#dc2626;font-weight:700;">${salaryText}</span>
              </div>
              <div style="margin-top:6px;display:flex;gap:4px;flex-wrap:wrap;">
                ${p.hot ? '<span style="background:#fef2f2;color:#dc2626;font-size:10px;font-weight:700;padding:2px 6px;border-radius:3px;">⚡ Gấp</span>' : '<span style="background:#f0f7ff;color:#0a66c2;font-size:10px;font-weight:700;padding:2px 6px;border-radius:3px;">Mới</span>'}
                ${isSaved ? '<span style="background:#f0f7ff;color:#0a66c2;font-size:10px;padding:2px 6px;border-radius:3px;"><i class="fa-solid fa-bookmark"></i> Đã lưu</span>' : ''}
              </div>
            </div>
          </div>
        </div>`;
    }).join('');

    // Bind split-pane click → update right detail panel (no page redirect)
    const allCards = browseFeed.querySelectorAll('.job-item-split-card');
    allCards.forEach(card => {
      const prjId = card.getAttribute('data-project-id');
      card.addEventListener('click', () => {
        allCards.forEach(c => c.classList.remove('active-selected'));
        card.classList.add('active-selected');
        updateJobDetailPreview(prjId);
      });
    });

    // Auto-preview first job on browse load
    if (projects.length > 0) {
      allCards[0]?.classList.add('active-selected');
      updateJobDetailPreview(projects[0].id);
    }
  }

  /* ==========================================================================
     1-CLICK QUICK APPLY MODAL
     ========================================================================== */
  function initQuickApplyModal() {
    const modal = document.getElementById('modal-quick-apply');
    const closeBtn = document.getElementById('close-quick-apply-modal');
    const cancelBtn = document.getElementById('btn-cancel-quick-apply');
    const dropzone = document.getElementById('cv-dropzone-box');
    const fileInput = document.getElementById('qa-input-cv-file');
    const previewBox = document.getElementById('cv-attached-preview');
    const filenameEl = document.getElementById('cv-attached-filename');
    const removeFileBtn = document.getElementById('btn-remove-attached-cv');
    const form = document.getElementById('quick-apply-form');

    const closeModal = () => modal?.classList.remove('show');

    closeBtn?.addEventListener('click', closeModal);
    cancelBtn?.addEventListener('click', closeModal);

    modal?.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    dropzone?.addEventListener('click', () => fileInput?.click());

    dropzone?.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });

    dropzone?.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));

    dropzone?.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleCVFileSelected(e.dataTransfer.files[0]);
      }
    });

    fileInput?.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handleCVFileSelected(e.target.files[0]);
      }
    });

    removeFileBtn?.addEventListener('click', () => {
      state.attachedCVFile = null;
      if (fileInput) fileInput.value = '';
      if (previewBox) previewBox.style.display = 'none';
      if (dropzone) dropzone.style.display = 'block';
    });

    function handleCVFileSelected(file) {
      if (!file) return;
      state.attachedCVFile = file;
      if (filenameEl) filenameEl.textContent = file.name;
      if (previewBox) previewBox.style.display = 'flex';
      if (dropzone) dropzone.style.display = 'none';
      showToast(`📄 Đã đính kèm hồ sơ CV: ${file.name}`);
    }

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const applicantName = document.getElementById('qa-input-name')?.value || 'Ứng viên';
      const jobTitle = document.getElementById('quick-apply-job-title')?.textContent || 'Vị trí';

      closeModal();
      form.reset();
      state.attachedCVFile = null;
      if (previewBox) previewBox.style.display = 'none';
      if (dropzone) dropzone.style.display = 'block';

      showToast(`🎉 Ứng tuyển thành công vị trí "${jobTitle}"! Nhà tuyển dụng sẽ sớm liên hệ với bạn.`);
    });
  }

  function openQuickApplyModal(projectId) {
    const modal = document.getElementById('modal-quick-apply');
    if (!modal) return;

    const p = state.projects.find(x => x.id === projectId) || {
      title: 'Senior Software Engineer',
      company: 'FPT Software'
    };

    const titleEl = document.getElementById('quick-apply-job-title');
    const compEl = document.getElementById('quick-apply-company-name');
    const idInput = document.getElementById('quick-apply-project-id');

    if (titleEl) titleEl.textContent = p.title;
    if (idInput) idInput.value = p.id;
    if (compEl) {
      compEl.innerHTML = `
        <span>${p.company || p.clientName || 'Doanh Nghiệp'}</span>
        <i class="fa-solid fa-circle-check" style="color: var(--fl-primary); font-size: 11px;"></i>
      `;
    }

    modal.classList.add('show');
  }

  /* ==========================================================================
     POST JOB WIZARD MODAL
     ========================================================================== */
  function initPostJobWizard() {
    const modal = document.getElementById('modal-wizard');
    const closeBtn = document.getElementById('close-wizard-modal');
    const cancelBtn = document.getElementById('btn-cancel-wizard');
    const form = document.getElementById('wizard-form') || document.getElementById('wizard-job-form');

    const closeModal = () => modal?.classList.remove('show');

    closeBtn?.addEventListener('click', closeModal);
    cancelBtn?.addEventListener('click', closeModal);

    modal?.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('wiz-job-title').value;
      const company = document.getElementById('wiz-company-name').value;
      const location = document.getElementById('wiz-job-location').value;
      const desc = document.getElementById('wiz-job-desc').value;
      const minBudget = document.getElementById('wiz-min-budget').value || '15,000,000₫';
      const maxBudget = document.getElementById('wiz-max-budget').value || '35,000,000₫';

      const newPrj = {
        id: `prj-${Date.now()}`,
        title,
        company,
        location,
        salaryDisplay: `${minBudget} - ${maxBudget}`,
        hot: true,
        postedDate: 'Vừa xong',
        timeAgo: 'Vừa xong',
        applicantsCount: 0,
        logoType: company.substring(0, 3).toUpperCase(),
        description: desc,
        clientVerified: true
      };

      state.projects.unshift(newPrj);
      closeModal();
      form.reset();
      renderHomeFeaturedProjects();
      showToast('🎉 Đăng tin tuyển dụng thành công! Tin đã xuất hiện trên trang chủ.');
    });
  }

  function openWizardModal() {
    document.getElementById('modal-wizard')?.classList.add('show');
  }

  /* ==========================================================================
     COMPLETE SIGN IN / SIGN UP & AUTHENTICATION CONTROLLER
     ========================================================================== */
  function initAuthSystem() {
    const modal = document.getElementById('modal-auth');
    const closeBtn = document.getElementById('close-auth-modal');
    const tabSignIn = document.getElementById('tab-auth-signin');
    const tabSignUp = document.getElementById('tab-auth-signup');
    const formSignIn = document.getElementById('auth-signin-form');
    const formSignUp = document.getElementById('auth-signup-form');

    const guestGroup = document.getElementById('header-auth-guest');
    const userProfile = document.getElementById('header-user-profile');
    const userAvatarEl = document.getElementById('header-user-avatar');
    const userNameEl = document.getElementById('header-user-name');
    const dropNameEl = document.getElementById('dropdown-user-name');
    const dropEmailEl = document.getElementById('dropdown-user-email');
    const dropRoleEl = document.getElementById('dropdown-user-role');
    const userMenuTrigger = document.getElementById('btn-user-profile-menu');
    const userDropdown = document.getElementById('user-dropdown-menu');
    const logoutBtn = document.getElementById('btn-user-logout');

    const openModal = (tab = 'signin') => {
      if (tab === 'signup') {
        tabSignUp?.click();
      } else {
        tabSignIn?.click();
      }
      modal?.classList.add('show');
    };

    const closeModal = () => modal?.classList.remove('show');

    // Header Trigger Buttons
    document.getElementById('btn-header-signin')?.addEventListener('click', () => openModal('signin'));
    document.getElementById('btn-header-signup')?.addEventListener('click', () => openModal('signup'));
    document.getElementById('btn-open-auth-modal-mobile')?.addEventListener('click', () => openModal('signin'));
    closeBtn?.addEventListener('click', closeModal);

    modal?.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // Tab Switching
    tabSignIn?.addEventListener('click', () => {
      tabSignIn.classList.add('active');
      tabSignUp?.classList.remove('active');
      if (formSignIn) formSignIn.style.display = 'block';
      if (formSignUp) formSignUp.style.display = 'none';
    });

    tabSignUp?.addEventListener('click', () => {
      tabSignUp.classList.add('active');
      tabSignIn?.classList.remove('active');
      if (formSignUp) formSignUp.style.display = 'block';
      if (formSignIn) formSignIn.style.display = 'none';
    });

    // User Dropdown Toggle
    userMenuTrigger?.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdown?.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      userDropdown?.classList.remove('show');
    });

    // Render Logged-In User UI
    function renderUserAuthUI(user) {
      if (!user) {
        if (guestGroup) guestGroup.style.display = 'flex';
        if (userProfile) userProfile.style.display = 'none';
        return;
      }

      if (guestGroup) guestGroup.style.display = 'none';
      if (userProfile) userProfile.style.display = 'inline-block';

      const initials = (user.name || 'User').split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
      if (userAvatarEl) userAvatarEl.textContent = initials;
      if (userNameEl) userNameEl.textContent = user.name || 'Ứng viên';
      if (dropNameEl) dropNameEl.textContent = user.name || 'Ứng viên';
      if (dropEmailEl) dropEmailEl.textContent = user.email || 'user@vietnamjobs.vn';
      if (dropRoleEl) dropRoleEl.textContent = user.role === 'Employer' ? '🏢 Nhà Tuyển Dụng' : '⭐ Ứng Viên VIP';

      // Update menu saved count
      const menuSaved = document.getElementById('menu-saved-count');
      if (menuSaved) menuSaved.textContent = state.savedJobs.size;
    }

    // Check Local Storage on Boot
    const savedUserJson = localStorage.getItem('vietnamjobs_auth_user');
    if (savedUserJson) {
      try {
        const user = JSON.parse(savedUserJson);
        renderUserAuthUI(user);
      } catch (e) {}
    }

    // Sign In Submission
    formSignIn?.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('signin-email')?.value?.trim();
      const pass = document.getElementById('signin-password')?.value;

      if (!email || !pass) {
        showToast('⚠️ Vui lòng nhập đầy đủ thông tin đăng nhập!');
        return;
      }

      const user = {
        name: email.split('@')[0].toUpperCase(),
        email: email,
        role: 'Candidate',
        loginTime: new Date().toISOString()
      };

      localStorage.setItem('vietnamjobs_auth_user', JSON.stringify(user));
      renderUserAuthUI(user);
      closeModal();
      showToast(`🎉 Xin chào ${user.name}! Đăng nhập thành công vào VietnamJobs.`);
    });

    // 1-Click Demo Login
    document.getElementById('btn-quick-demo-login')?.addEventListener('click', () => {
      const demoUser = {
        name: 'Thean Lê',
        email: 'thean.le@vietnamjobs.vn',
        role: 'Candidate',
        loginTime: new Date().toISOString()
      };
      localStorage.setItem('vietnamjobs_auth_user', JSON.stringify(demoUser));
      renderUserAuthUI(demoUser);
      closeModal();
      showToast('⚡ Đã đăng nhập nhanh với tài khoản mẫu (Thean Lê)!');
    });

    // Sign Up Submission
    formSignUp?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signup-name')?.value?.trim();
      const email = document.getElementById('signup-email')?.value?.trim();
      const phone = document.getElementById('signup-phone')?.value?.trim();
      const role = document.getElementById('signup-role')?.value || 'Candidate';
      const password = document.getElementById('signup-password')?.value;

      if (!name || !email || !password) {
        showToast('⚠️ Vui lòng điền đầy đủ các thông tin có dấu *!');
        return;
      }

      const newUser = {
        name,
        email,
        phone,
        role,
        registeredAt: new Date().toISOString()
      };

      localStorage.setItem('vietnamjobs_auth_user', JSON.stringify(newUser));
      renderUserAuthUI(newUser);
      closeModal();
      showToast(`🎊 Chúc mừng ${name}! Tạo tài khoản thành công.`);
    });

    // Logout
    logoutBtn?.addEventListener('click', () => {
      localStorage.removeItem('vietnamjobs_auth_user');
      renderUserAuthUI(null);
      userDropdown?.classList.remove('show');
      showToast('👋 Bạn đã đăng xuất thành công khỏi hệ thống.');
    });

    // Dropdown shortcuts
    document.getElementById('dropdown-btn-saved')?.addEventListener('click', () => {
      userDropdown?.classList.remove('show');
      const savedPill = document.querySelector('[data-quick-filter="saved"]');
      savedPill?.click();
      document.getElementById('projects-feed')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    document.getElementById('dropdown-btn-applied')?.addEventListener('click', () => {
      userDropdown?.classList.remove('show');
      showToast('📄 Bạn đang có 1 hồ sơ đang trong quy trình xét duyệt.');
    });

    document.getElementById('dropdown-btn-post-job')?.addEventListener('click', () => {
      userDropdown?.classList.remove('show');
      openWizardModal();
    });

    document.getElementById('link-forgot-pass')?.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('📩 Vui lòng liên hệ tổng đài 1900 6868 hoặc email support@vietnamjobs.vn để đặt lại mật khẩu.');
    });
  }

  /* ==========================================================================
     FREELANCERS & CANDIDATES DIRECTORY
     ========================================================================== */
  function initFreelancersDirectory() {
    const grid = document.getElementById('freelancers-grid');
    if (!grid) return;

    grid.innerHTML = state.freelancers.map(f => {
      const skillsHtml = (f.skills || []).map(s => `<span class="detail-skill-pill" style="font-size:11.5px; padding:3px 10px;"><i class="fa-solid fa-check"></i> ${s}</span>`).join('');
      const avatarImg = f.photoUrl ? `<img src="${f.photoUrl}" alt="${f.name}" style="width:52px; height:52px; border-radius:50%; object-fit:cover; border:2px solid #fff; box-shadow:var(--shadow-sm);" />` : `<div style="width:52px; height:52px; border-radius:50%; background:var(--fl-primary-light); color:var(--fl-primary); font-weight:800; display:flex; align-items:center; justify-content:center; font-size:16px;">${f.avatarText}</div>`;

      return `
        <div class="career-job-card" style="display:flex; flex-direction:column; justify-content:space-between; padding:22px; cursor:default;">
          <div>
            <div style="display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:14px;">
              <div style="display:flex; align-items:center; gap:14px;">
                ${avatarImg}
                <div>
                  <h3 style="font-size:16px; font-weight:800; color:var(--fl-text-heading); margin-bottom:2px; display:flex; align-items:center; gap:6px;">
                    ${f.name}
                    <i class="fa-solid fa-circle-check" style="color:var(--fl-primary); font-size:13px;" title="Ứng viên đã xác thực"></i>
                  </h3>
                  <div style="font-size:13px; color:var(--fl-primary); font-weight:600;">${f.title}</div>
                  <div style="font-size:12px; color:var(--fl-text-light); margin-top:2px;">
                    <i class="fa-solid fa-location-dot"></i> ${f.country} • <i class="fa-solid fa-star" style="color:#eab308;"></i> ${f.rating} (${f.reviewsCount} đánh giá)
                  </div>
                </div>
              </div>
            </div>

            <p style="font-size:13px; color:var(--fl-text-body); line-height:1.5; margin-bottom:14px;">${f.bio || f.tagline}</p>
            
            <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:16px;">
              ${skillsHtml}
            </div>
          </div>

          <div style="display:flex; gap:10px; border-top:1px solid var(--fl-border); padding-top:14px;">
            <button class="btn-signup-red-solid" style="flex:1; justify-content:center; padding:9px 12px; font-size:13px;" data-candidate-name="${f.name}">
              <i class="fa-solid fa-paper-plane"></i> Mời Phỏng Vấn
            </button>
            <button class="btn-login-red-outline" style="padding:9px 14px; font-size:13px;" data-view-profile="${f.name}">
              Xem CV
            </button>
          </div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('[data-candidate-name]').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-candidate-name');
        showToast(`✉️ Đã gửi lời mời phỏng vấn tới chuyên gia ${name}! Chúng tôi sẽ thông báo cho bạn ngay khi ứng viên phản hồi.`);
      });
    });

    grid.querySelectorAll('[data-view-profile]').forEach(btn => {
      btn.addEventListener('click', () => {
        const name = btn.getAttribute('data-view-profile');
        showToast(`📄 Đang mở hồ sơ năng lực chi tiết của ${name}...`);
      });
    });
  }

  /* ==========================================================================
     API DATA SYNC
     ========================================================================== */
  function loadProjectsFromAPI() {
    fetch('/api/projects')
      .then(res => res.ok ? res.json() : null)
      .then(resData => {
        const list = Array.isArray(resData) ? resData : (resData && Array.isArray(resData.data) ? resData.data : null);
        if (list && list.length > 0) {
          state.projects = list;
          renderHomeFeaturedProjects();
        }
      })
      .catch(() => {});
  }

  /* ==========================================================================
     TOAST NOTIFICATIONS
     ========================================================================== */
    
  /* ==========================================================================
     TAOBAO-STYLE ROTATING SEARCH PLACEHOLDER TICKER
     ========================================================================== */
  function initTaobaoSearchTicker() { return; // Disabled for clean corporate design
    const searchInputs = [
      document.getElementById('header-search-input'),
      document.getElementById('header-top-search-input'),
      document.getElementById('top-capsule-search-input')
    ].filter(Boolean);

    if (searchInputs.length === 0) return;

    const suggestions = [
      "🚀 Senior Java / Spring Boot Microservices (FPT, VCB)...",
      "💻 React 18 & Next.js 14 Fullstack Developer 35M+...",
      "🤖 AI & Machine Learning Solution Architect...",
      "🛍️ Digital Marketing Manager Shopee, Grab...",
      "📱 Senior Mobile Flutter / iOS Viettel Money...",
      "🎨 Senior Product UI/UX Designer Figma (MoMo, Tiki)...",
      "☁️ DevOps & Cloud AWS Kubernetes Engineer...",
      "⚡ Kỹ sư phần mềm VinFast Digital...",
      "🏢 Khám phá cơ hội tại 3,200+ doanh nghiệp hàng đầu..."
    ];

    let currentIndex = 0;
    let isFocused = false;

    searchInputs.forEach(input => {
      input.addEventListener('focus', () => { isFocused = true; });
      input.addEventListener('blur', () => { isFocused = false; });
    });

    setInterval(() => {
      if (isFocused) return;
      currentIndex = (currentIndex + 1) % suggestions.length;
      const nextText = suggestions[currentIndex];

      searchInputs.forEach(input => {
        if (!input.value) {
          input.setAttribute('placeholder', nextText);
        }
      });
    }, 2800);
  }

  
  /* ==========================================================================
     HOMEPAGE LIVE ACTIVITY TICKER & MARKET INSIGHTS CONTROLLER
     ========================================================================== */
  function initLiveActivityTicker() { return; // Disabled for clean corporate design
    // Check if user previously disabled ticker
    if (localStorage.getItem('vietnamjobs_hide_activity_ticker') === 'true') {
      return;
    }

    const toast = document.getElementById('live-activity-toast');
    const msgEl = document.getElementById('activity-toast-msg');
    const timeEl = document.getElementById('activity-toast-time');
    const closeBtn = document.getElementById('btn-close-activity-toast');
    const dontShowCb = document.getElementById('cb-dont-show-activity');
    const onlineCounter = document.getElementById('live-online-users');

    // Live Online Counter Fluctuation
    if (onlineCounter) {
      setInterval(() => {
        const delta = Math.floor(Math.random() * 7) - 3;
        const current = parseInt(onlineCounter.textContent.replace(/,/g, ''), 10) || 1486;
        onlineCounter.textContent = (current + delta).toLocaleString();
      }, 4000);
    }

    if (!toast || !msgEl) return;

    let tickerInterval = null;
    let toastTimeout = null;

    // "Không hiện lại" Checkbox Event Listener
    dontShowCb?.addEventListener('change', (e) => {
      e.stopPropagation();
      if (dontShowCb.checked) {
        localStorage.setItem('vietnamjobs_hide_activity_ticker', 'true');
        toast.classList.remove('show');
        clearInterval(tickerInterval);
        clearTimeout(toastTimeout);
        showToast('ℹ️ Đã tắt thông báo hoạt động ứng tuyển');
      }
    });

    dontShowCb?.closest('.activity-toast-dont-show')?.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    const activities = [
      { jobId: "prj-100", logo: "images/brands/fpt.svg", text: "Nguyễn Minh Tuấn vừa ứng tuyển <strong>Senior Backend Engineer</strong> tại FPT Software", time: "1 phút trước" },
      { jobId: "prj-101", logo: "images/brands/vcb.svg", text: "Vietcombank vừa gửi lời mời phỏng vấn tới ứng viên <strong>Trần Minh Quang</strong>", time: "3 phút trước" },
      { jobId: "prj-102", logo: "images/brands/vinfast.svg", text: "VinFast Digital vừa đăng tuyển 3 vị trí <strong>React / Next.js Senior</strong>", time: "5 phút trước" },
      { jobId: "prj-104", logo: "images/brands/shopee.svg", text: "Shopee Vietnam vừa nhận 4 hồ sơ ứng tuyển <strong>Digital Marketing Manager</strong>", time: "8 phút trước" },
      { jobId: "prj-103", logo: "images/brands/viettel.svg", text: "Vũ Đình Nam vừa nộp hồ sơ ứng tuyển <strong>Mobile Flutter Engineer</strong> tại Viettel", time: "12 phút trước" },
      { jobId: "prj-105", logo: "images/brands/momo.svg", text: "MoMo Fintech vừa xem hồ sơ của <strong>Nguyễn Hà My</strong> (UX Lead)", time: "15 phút trước" },
      { jobId: "prj-111", logo: "images/brands/samsung.svg", text: "Samsung R&D vừa mở tuyển 2 vị trí <strong>AI Data Engineer</strong>", time: "18 phút trước" }
    ];

    let actIndex = 0;
    let currentJobId = "prj-100";

    // Direct routing on toast click
    toast.addEventListener('click', (e) => {
      if (e.target.closest('.activity-toast-close') || e.target.closest('.activity-toast-dont-show')) return;
      if (currentJobId) {
        showJobDetail(currentJobId);
        toast.classList.remove('show');
      }
    });

    closeBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      toast.classList.remove('show');
    });

    function showNextActivity() {
      if (document.hidden) return;
      if (localStorage.getItem('vietnamjobs_hide_activity_ticker') === 'true') return;

      const act = activities[actIndex];
      actIndex = (actIndex + 1) % activities.length;
      currentJobId = act.jobId;

      const imgEl = document.getElementById('activity-toast-img');
      if (imgEl && act.logo) imgEl.src = act.logo;
      if (msgEl) msgEl.innerHTML = act.text;
      if (timeEl) timeEl.innerHTML = '<span class="live-pulse-dot" style="width:6px;height:6px;"></span> ' + act.time + ' <span style="margin-left:6px;color:var(--fl-primary);font-weight:700;">Xem chi tiết &rarr;</span>';

      toast.classList.add('show');

      clearTimeout(toastTimeout);
      // Stay visible for 7.5 seconds for comfortable reading
      toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
      }, 7500);
    }

    // Start ticker with comfortable unhurried 18s interval
    setTimeout(() => {
      showNextActivity();
      tickerInterval = setInterval(showNextActivity, 18000);
    }, 4000);
  }

  function initMarketInsights() {
    const chips = document.querySelectorAll('.market-role-chip');
    const salaryEl = document.getElementById('insight-salary');
    const seniorEl = document.getElementById('insight-senior');
    const demandEl = document.getElementById('insight-demand');
    const openCountEl = document.getElementById('insight-open-count');
    const compEl = document.getElementById('insight-companies');
    const exploreBtn = document.getElementById('btn-explore-role-jobs');

    const roleData = {
      'java': {
        salary: '28 – 50 triệu/tháng',
        senior: 'Senior: 45 – 70 triệu/tháng',
        demand: '+42% Nhu Cầu',
        openCount: '1,240+ vị trí đang mở',
        companies: [
          { name: 'FPT Software', img: 'images/brands/fpt.svg' },
          { name: 'Vietcombank', img: 'images/brands/vcb.svg' },
          { name: 'VinFast Digital', img: 'images/brands/vinfast.svg' },
          { name: 'Viettel Digital', img: 'images/brands/viettel.svg' }
        ],
        keyword: 'Java'
      },
      'react': {
        salary: '25 – 45 triệu/tháng',
        senior: 'Senior / Lead: 40 – 65 triệu/tháng',
        demand: '+56% Nhu Cầu',
        openCount: '1,890+ vị trí đang mở',
        companies: [
          { name: 'VinFast Digital', img: 'images/brands/vinfast.svg' },
          { name: 'KiotViet', img: 'images/brands/kiotviet.svg' },
          { name: 'Tiki', img: 'images/brands/tiki.svg' },
          { name: 'Shopee', img: 'images/brands/shopee.svg' }
        ],
        keyword: 'React'
      },
      'ai': {
        salary: '35 – 65 triệu/tháng',
        senior: 'Principal / Architect: 60 – 100+ triệu/tháng',
        demand: '+84% Đột Phá',
        openCount: '860+ vị trí đang mở',
        companies: [
          { name: 'Vietcombank', img: 'images/brands/vcb.svg' },
          { name: 'VNPay', img: 'images/brands/vnpay.svg' },
          { name: 'FPT AI Lab', img: 'images/brands/fpt.svg' },
          { name: 'Samsung R&D', img: 'images/brands/samsung.svg' }
        ],
        keyword: 'AI'
      },
      'mobile': {
        salary: '25 – 45 triệu/tháng',
        senior: 'Senior: 40 – 60 triệu/tháng',
        demand: '+38% Nhu Cầu',
        openCount: '940+ vị trí đang mở',
        companies: [
          { name: 'Viettel Money', img: 'images/brands/viettel.svg' },
          { name: 'MoMo', img: 'images/brands/momo.svg' },
          { name: 'Grab Vietnam', img: 'images/brands/grab.svg' },
          { name: 'VNG', img: 'images/brands/vng.svg' }
        ],
        keyword: 'Mobile'
      },
      'design': {
        salary: '22 – 42 triệu/tháng',
        senior: 'Lead UX: 35 – 55 triệu/tháng',
        demand: '+35% Nhu Cầu',
        openCount: '780+ vị trí đang mở',
        companies: [
          { name: 'MoMo Fintech', img: 'images/brands/momo.svg' },
          { name: 'Grab Vietnam', img: 'images/brands/grab.svg' },
          { name: 'Tiki Corp', img: 'images/brands/tiki.svg' },
          { name: 'Shopee', img: 'images/brands/shopee.svg' }
        ],
        keyword: 'Design'
      },
      'marketing': {
        salary: '20 – 38 triệu/tháng',
        senior: 'Head of Marketing: 40 – 70 triệu/tháng',
        demand: '+48% Nhu Cầu',
        openCount: '1,450+ vị trí đang mở',
        companies: [
          { name: 'Shopee Vietnam', img: 'images/brands/shopee.svg' },
          { name: 'Grab Vietnam', img: 'images/brands/grab.svg' },
          { name: 'Unilever', img: 'images/brands/unilever.svg' },
          { name: "L'Oréal", img: 'images/brands/loreal.svg' }
        ],
        keyword: 'Marketing'
      }
    };

    let currentKeyword = 'Java';

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const role = chip.getAttribute('data-role');
        const data = roleData[role];
        if (!data) return;

        currentKeyword = data.keyword;

        if (salaryEl) salaryEl.textContent = data.salary;
        if (seniorEl) seniorEl.textContent = data.senior;
        if (demandEl) demandEl.innerHTML = '<i class="fa-solid fa-arrow-trend-up"></i> ' + data.demand;
        if (openCountEl) openCountEl.textContent = data.openCount;
        if (exploreBtn) exploreBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i> Xem ' + data.openCount.split('+')[0] + '+ Việc Này';

        if (compEl) {
          compEl.innerHTML = data.companies.map(c => `
            <span class="hiring-comp-tag"><img src="${c.img}" alt="${c.name}"> ${c.name}</span>
          `).join('');
        }
      });
    });

    exploreBtn?.addEventListener('click', () => {
      switchView('browse');
      const searchInput = document.getElementById('header-search-input');
      if (searchInput) searchInput.value = currentKeyword;
      renderBrowseProjects();
      showToast(`🚀 Đang lọc danh sách việc làm ngành "${currentKeyword}"!`);
    });
  }

  
  /* ==========================================================================
     GROSS ⇄ NET SALARY CALCULATOR & ATS CV TOOLKIT CONTROLLER
     ========================================================================== */
  function initSalaryCalculator() {
    const grossBtn = document.getElementById('btn-calc-gross-to-net');
    const netBtn = document.getElementById('btn-calc-net-to-gross');
    const salaryInput = document.getElementById('calc-input-salary');
    const modeLabel = document.getElementById('calc-salary-mode-label');
    const dependentsSelect = document.getElementById('calc-dependents');
    const calcBtn = document.getElementById('btn-do-calculate');
    const resultTitle = document.getElementById('calc-result-title');
    const resultNetVal = document.getElementById('calc-net-result');
    const bhxhVal = document.getElementById('calc-bhxh-val');
    const bhytVal = document.getElementById('calc-bhyt-val');
    const bhtnVal = document.getElementById('calc-bhtn-val');
    const taxVal = document.getElementById('calc-tax-val');

    let isGrossToNet = true;

    grossBtn?.addEventListener('click', () => {
      isGrossToNet = true;
      grossBtn.classList.add('active');
      netBtn?.classList.remove('active');
      if (modeLabel) modeLabel.textContent = 'GROSS';
      if (resultTitle) resultTitle.textContent = 'LƯƠNG THỰC NHẬN (NET):';
      calculate();
    });

    netBtn?.addEventListener('click', () => {
      isGrossToNet = false;
      netBtn.classList.add('active');
      grossBtn?.classList.remove('active');
      if (modeLabel) modeLabel.textContent = 'NET';
      if (resultTitle) resultTitle.textContent = 'LƯƠNG GROSS CẦN ĐỀ XUẤT:';
      calculate();
    });

    function formatNumber(num) {
      return num.toLocaleString('vi-VN') + ' ₫';
    }

    function parseSalary(val) {
      if (!val) return 25000000;
      const clean = val.replace(/[^0-9]/g, '');
      return parseInt(clean, 10) || 25000000;
    }

    salaryInput?.addEventListener('input', (e) => {
      const raw = e.target.value.replace(/[^0-9]/g, '');
      if (raw) {
        e.target.value = parseInt(raw, 10).toLocaleString('en-US');
      }
    });

    function calculate() {
      const rawSalary = parseSalary(salaryInput?.value);
      const dependents = parseInt(dependentsSelect?.value || '0', 10);
      const selfDeduction = 11000000; // 11M VND per month
      const dependentDeduction = dependents * 4400000; // 4.4M per dependent

      let gross = rawSalary;
      let net = 0;

      if (isGrossToNet) {
        gross = rawSalary;
        // Insurance rates: BHXH 8%, BHYT 1.5%, BHTN 1%
        const bhxh = Math.round(gross * 0.08);
        const bhyt = Math.round(gross * 0.015);
        const bhtn = Math.round(gross * 0.01);
        const totalInsurance = bhxh + bhyt + bhtn;

        // Income before tax
        const incomeBeforeTax = Math.max(0, gross - totalInsurance);
        const taxableIncome = Math.max(0, incomeBeforeTax - selfDeduction - dependentDeduction);

        // Progressive PIT Tax (Thuế TNCN luỹ tiến 2026)
        let pit = 0;
        if (taxableIncome <= 5000000) pit = taxableIncome * 0.05;
        else if (taxableIncome <= 10000000) pit = 250000 + (taxableIncome - 5000000) * 0.1;
        else if (taxableIncome <= 18000000) pit = 750000 + (taxableIncome - 10000000) * 0.15;
        else if (taxableIncome <= 32000000) pit = 1950000 + (taxableIncome - 18000000) * 0.2;
        else if (taxableIncome <= 52000000) pit = 4750000 + (taxableIncome - 32000000) * 0.25;
        else if (taxableIncome <= 80000000) pit = 9750000 + (taxableIncome - 52000000) * 0.3;
        else pit = 18150000 + (taxableIncome - 80000000) * 0.35;

        pit = Math.round(pit);
        net = Math.max(0, gross - totalInsurance - pit);

        if (resultNetVal) resultNetVal.textContent = formatNumber(net);
        if (bhxhVal) bhxhVal.textContent = '-' + formatNumber(bhxh);
        if (bhytVal) bhytVal.textContent = '-' + formatNumber(bhyt);
        if (bhtnVal) bhtnVal.textContent = '-' + formatNumber(bhtn);
        if (taxVal) taxVal.textContent = pit > 0 ? ('-' + formatNumber(pit)) : '0 ₫';
      } else {
        // NET to GROSS estimation
        net = rawSalary;
        gross = Math.round(net / 0.895);
        const bhxh = Math.round(gross * 0.08);
        const bhyt = Math.round(gross * 0.015);
        const bhtn = Math.round(gross * 0.01);

        if (resultNetVal) resultNetVal.textContent = formatNumber(gross);
        if (bhxhVal) bhxhVal.textContent = formatNumber(bhxh);
        if (bhytVal) bhytVal.textContent = formatNumber(bhyt);
        if (bhtnVal) bhtnVal.textContent = formatNumber(bhtn);
        if (taxVal) taxVal.textContent = 'Quy đổi luỹ tiến';
      }
    }

    calcBtn?.addEventListener('click', () => {
      calculate();
      showToast('⚡ Đã tính xong mức thu nhập theo luật BHXH 2026!');
    });

    dependentsSelect?.addEventListener('change', calculate);

    // ATS CV Toolkit Download Handler
    document.getElementById('btn-download-cv-kit')?.addEventListener('click', () => {
      showToast('📥 Đang tải trọn bộ 50+ Mẫu CV Chuẩn ATS 2026 (Format .DOCX & .PDF)...');
      setTimeout(() => {
        showToast('✅ Tải hoàn tất! Chúc bạn ứng tuyển thành công vị trí mơ ước.');
      }, 1500);
    });
  }


  function showToast(msg, duration = 3800) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('toast-hide');
      setTimeout(() => toast.remove(), 260);
    }, duration);
  }

});
