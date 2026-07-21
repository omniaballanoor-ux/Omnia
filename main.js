/* ==========================================================================
   main.js — الوظائف العامة المشتركة بين كل صفحات الموقع
   ========================================================================== */

/* ---------- 1. تبديل الثيم اللوني ---------- */
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('site_theme', theme);
}
document.addEventListener('DOMContentLoaded', ()=>{
  applyTheme(localStorage.getItem('site_theme') || 'royal');
  document.querySelectorAll('.theme-dot').forEach(dot=>{
    dot.addEventListener('click', ()=> applyTheme(dot.dataset.t));
  });

  /* ---------- 2. قائمة الجوال ---------- */
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  if(burger && navLinks){
    burger.addEventListener('click', ()=> navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> navLinks.classList.remove('open')));
  }

  /* ---------- 3. زر العودة للأعلى ---------- */
  const scrollBtn = document.getElementById('scrollTop');
  if(scrollBtn){
    window.addEventListener('scroll', ()=>{
      scrollBtn.classList.toggle('show', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
  }

  /* ---------- 4. الأسئلة الشائعة (أكورديون) ---------- */
  document.querySelectorAll('.faq-item').forEach(item=>{
    const q = item.querySelector('.faq-q');
    if(!q) return;
    q.addEventListener('click', ()=>{
      const wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(i=> i.classList.remove('open'));
      if(!wasOpen) item.classList.add('open');
    });
  });

  /* ---------- 5. تعليم الرابط النشط في القائمة حسب الصفحة الحالية ---------- */
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href') === current) a.classList.add('active');
  });

  /* ---------- 6. تحديث السنة في الفوتر تلقائيًا ---------- */
  document.querySelectorAll('.current-year').forEach(el=> el.textContent = new Date().getFullYear());

  /* ---------- 7. حالة تسجيل الدخول في القائمة (تعمل في كل الصفحات) ---------- */
  refreshAuthUI();
});

/**
 * يقرأ جلسة المستخدم من localStorage (يضبطها js/auth.js) ويحدّث القائمة:
 * - إن كان مسجّل الدخول: يخفي رابط "تسجيل الدخول" ويظهر اسمه + زر خروج.
 * - إن لم يكن: يظهر رابط "تسجيل الدخول" كالمعتاد.
 */
function refreshAuthUI(){
  let session = null;
  try{ session = JSON.parse(localStorage.getItem('hall_current_user')); }catch(e){}

  const loginLink = document.getElementById('navLoginLink');
  const userChip  = document.getElementById('navUserChip');
  const userNameEl = document.getElementById('navUserName');
  const logoutBtn  = document.getElementById('navLogoutBtn');
  if(!loginLink || !userChip) return;

  if(session && session.name){
    loginLink.style.display = 'none';
    userChip.style.display = 'flex';
    if(userNameEl) userNameEl.textContent = '👤 ' + session.name.split(' ')[0];
  }else{
    loginLink.style.display = '';
    userChip.style.display = 'none';
  }

  if(logoutBtn && !logoutBtn.dataset.bound){
    logoutBtn.dataset.bound = '1';
    logoutBtn.addEventListener('click', ()=>{
      localStorage.removeItem('hall_current_user');
      window.location.href = 'index.html';
    });
  }
}

/* ---------- 7. أدوات التحقق من صحة النماذج (تستخدم في كل الصفحات) ---------- */
const Validators = {
  required(value){ return value !== null && value.trim().length > 0; },
  email(value){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); },
  phone(value){ return /^[0-9+\s-]{8,15}$/.test(value); },
  minLen(value, len){ return value.length >= len; },
};

/**
 * يتحقق من حقل واحد ويعرض/يخفي رسالة الخطأ المرتبطة به
 * field: عنصر .field الأب، input: عنصر الإدخال، rule: دالة تعيد true/false
 */
function validateField(field, input, isValid){
  if(isValid){
    field.classList.remove('invalid');
  }else{
    field.classList.add('invalid');
  }
  return isValid;
}

function showMessage(el, type, text){
  el.textContent = text;
  el.className = 'form-msg show ' + type;
}
