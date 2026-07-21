/* ==========================================================================
   auth.js — منطق صفحة تسجيل الدخول / إنشاء حساب
   يعمل بالكامل من طرف المتصفح (localStorage) دون الحاجة لخادم PHP،
   حتى تجهيز الاستضافة. عند توفر الاستضافة يمكن استبدال هذا المنطق
   بالطلبات الحقيقية الموجودة أصلًا في php/login.php و php/register.php
   (راجع التعليقات "TODO للاستضافة" أدناه).
   ========================================================================== */

const LocalAuth = {
  USERS_KEY: 'hall_users',
  SESSION_KEY: 'hall_current_user',

  getUsers(){
    try{ return JSON.parse(localStorage.getItem(this.USERS_KEY)) || []; }
    catch(e){ return []; }
  },
  saveUsers(users){ localStorage.setItem(this.USERS_KEY, JSON.stringify(users)); },

  findByEmail(email){
    return this.getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
  },

  /* تجزئة بسيطة جدًا لغرض العرض التجريبي فقط — ليست بديلًا عن تشفير حقيقي على السيرفر */
  hash(str){
    let h = 0;
    for(let i=0; i<str.length; i++){ h = (Math.imul(31, h) + str.charCodeAt(i)) | 0; }
    return 'h_' + h.toString(16) + '_' + str.length;
  },

  register(fullName, email, phone, password){
    if(this.findByEmail(email)) return { success:false, message:'هذا البريد الإلكتروني مسجّل بالفعل، يرجى تسجيل الدخول.' };
    const users = this.getUsers();
    const user = { id: Date.now(), full_name: fullName, email, phone, password_hash: this.hash(password), created_at: new Date().toISOString() };
    users.push(user);
    this.saveUsers(users);
    this.setSession(user);
    return { success:true, message:'تم إنشاء الحساب بنجاح، مرحبًا بك معنا!', user };
  },

  login(email, password){
    const user = this.findByEmail(email);
    if(!user || user.password_hash !== this.hash(password)){
      return { success:false, message:'البريد الإلكتروني أو كلمة المرور غير صحيحة.' };
    }
    this.setSession(user);
    return { success:true, message:'تم تسجيل الدخول بنجاح.', user };
  },

  setSession(user){
    localStorage.setItem(this.SESSION_KEY, JSON.stringify({ name:user.full_name, email:user.email, phone:user.phone }));
  },
  getSession(){
    try{ return JSON.parse(localStorage.getItem(this.SESSION_KEY)); }
    catch(e){ return null; }
  },
  logout(){ localStorage.removeItem(this.SESSION_KEY); },
};

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.auth-tab');
  const panels = document.querySelectorAll('.auth-panel');
  const switchLink = document.getElementById('switchAuthLink');
  const switchLines = document.querySelectorAll('.switch-line');
  const formMsg = document.getElementById('formMsg');

  function activatePanel(name){
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
    panels.forEach(p => p.classList.toggle('active', p.dataset.panel === name));
    switchLines.forEach(s => s.style.display = s.dataset.panel === name ? 'inline' : 'none');
    switchLink.textContent = name === 'login' ? I18N[getCurrentLang()].tab_register : I18N[getCurrentLang()].tab_login;
    formMsg.classList.remove('show');
  }

  tabs.forEach(tab => tab.addEventListener('click', () => activatePanel(tab.dataset.tab)));
  switchLink.addEventListener('click', (e) => {
    e.preventDefault();
    const activePanel = document.querySelector('.auth-panel.active').dataset.panel;
    activatePanel(activePanel === 'login' ? 'register' : 'login');
  });

  /* ---------- تحقق عام من حقل مطلوب ---------- */
  function validateRequiredField(fieldEl, checkFn){
    const input = fieldEl.querySelector('input');
    const ok = checkFn(input.value.trim());
    fieldEl.classList.toggle('invalid', !ok);
    return ok;
  }

  /* ---------- نموذج تسجيل الدخول ---------- */
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailField = loginForm.querySelector('[data-field="email"]');
    const passField  = loginForm.querySelector('[data-field="password"]');

    const emailOk = validateRequiredField(emailField, Validators.email);
    const passOk  = validateRequiredField(passField, v => Validators.minLen(v, 8));

    if(!emailOk || !passOk) return;

    // ---------- يعمل محليًا الآن عبر localStorage ----------
    const email = loginForm.querySelector('[name="email"]').value.trim();
    const password = loginForm.querySelector('[name="password"]').value;
    const result = LocalAuth.login(email, password);

    // ---------- TODO للاستضافة: عند رفع الموقع على استضافة حقيقية، فعّل الكود التالي بدلاً مما فوق ----------
    // const formData = new FormData(loginForm);
    // const res = await fetch('php/login.php', { method:'POST', body: formData });
    // const result = await res.json();

    showMessage(formMsg, result.success ? 'success' : 'error', result.message);
    if(result.success){
      setTimeout(()=> window.location.href = 'index.html', 1000);
    }
  });

  /* ---------- نموذج إنشاء حساب ---------- */
  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameField    = registerForm.querySelector('[data-field="full_name"]');
    const emailField   = registerForm.querySelector('[data-field="email"]');
    const phoneField   = registerForm.querySelector('[data-field="phone"]');
    const passField    = registerForm.querySelector('[data-field="password"]');
    const confirmField = registerForm.querySelector('[data-field="confirm_password"]');

    const nameOk    = validateRequiredField(nameField, v => Validators.minLen(v, 3));
    const emailOk   = validateRequiredField(emailField, Validators.email);
    const phoneOk   = validateRequiredField(phoneField, Validators.phone);
    const passOk    = validateRequiredField(passField, v => Validators.minLen(v, 8));
    const password  = passField.querySelector('input').value;
    const confirm   = confirmField.querySelector('input').value;
    const confirmOk = validateRequiredField(confirmField, () => confirm === password && confirm.length >= 8);

    if(!nameOk || !emailOk || !phoneOk || !passOk || !confirmOk) return;

    // ---------- يعمل محليًا الآن عبر localStorage ----------
    const result = LocalAuth.register(
      nameField.querySelector('input').value.trim(),
      emailField.querySelector('input').value.trim(),
      phoneField.querySelector('input').value.trim(),
      password
    );

    // ---------- TODO للاستضافة: عند رفع الموقع على استضافة حقيقية، فعّل الكود التالي بدلاً مما فوق ----------
    // const formData = new FormData(registerForm);
    // const res = await fetch('php/register.php', { method:'POST', body: formData });
    // const result = await res.json();

    showMessage(formMsg, result.success ? 'success' : 'error', result.message);
    if(result.success){
      setTimeout(()=> window.location.href = 'index.html', 1000);
    }
  });
});
