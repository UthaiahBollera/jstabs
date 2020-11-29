const Tab = (function () {
  const allTabs = document.querySelectorAll('[data-tab-target]');
  const allTabContent = document.querySelectorAll('[data-tab-content]');
  allTabs.forEach(tab =>{    
    const targetId = tab.dataset.tabTarget;    
    tab.addEventListener('click',(event) =>{
      allTabs.forEach(_tab=>_tab.classList.remove('active'));
      allTabContent.forEach(_tabContent=>_tabContent.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(targetId).classList.add('active');
    });
  })
})();
