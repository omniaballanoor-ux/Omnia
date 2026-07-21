/* ==========================================================================
   booking.js — منطق صفحة الحجز متعددة الخطوات
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  const steps = document.querySelectorAll('.step');
  const panels = document.querySelectorAll('.form-step');
  const bookingMsg = document.getElementById('bookingMsg');
  let currentStep = 1;

  function goToStep(n){
    currentStep = n;
    steps.forEach(s => s.classList.toggle('active', parseInt(s.dataset.step) <= n));
    panels.forEach(p => p.style.display = parseInt(p.dataset.stepPanel) === n ? 'block' : 'none');
    if(n === 3) fillSummary();
    window.scrollTo({top: document.querySelector('.steps').offsetTop - 120, behavior:'smooth'});
  }

  function validateStep(panel){
    let valid = true;
    panel.querySelectorAll('.field').forEach(field => {
      const input = field.querySelector('input, select, textarea');
      if(!input || !input.hasAttribute('required')) return;
      let ok = true;
      if(input.type === 'email') ok = Validators.email(input.value);
      else if(input.name === 'phone') ok = Validators.phone(input.value);
      else ok = Validators.required(input.value);
      if(!ok) valid = false;
      field.classList.toggle('invalid', !ok);
    });
    return valid;
  }

  document.querySelectorAll('.next-step').forEach(btn => {
    btn.addEventListener('click', () => {
      const activePanel = document.querySelector(`.form-step[data-step-panel="${currentStep}"]`);
      if(validateStep(activePanel)) goToStep(currentStep + 1);
    });
  });
  document.querySelectorAll('.prev-step').forEach(btn => {
    btn.addEventListener('click', () => goToStep(currentStep - 1));
  });

  function fillSummary(){
    const lang = getCurrentLang();
    const dict = I18N[lang];
    const hallSelect = form.querySelector('[name="hall_id"]');
    const selectedOption = hallSelect.options[hallSelect.selectedIndex];
    const price = parseInt(selectedOption?.dataset.price || 0);

    const checkedServices = Array.from(form.querySelectorAll('[name="services[]"]:checked'))
      .map(cb => cb.nextElementSibling.textContent);
    const servicesText = checkedServices.length ? checkedServices.join('، ') : dict.sum_none;

    const budgetSelect = form.querySelector('[name="budget"]');
    const budgetText = budgetSelect.options[budgetSelect.selectedIndex]?.textContent || '—';

    document.getElementById('sumHall').textContent = selectedOption ? selectedOption.textContent : '—';
    document.getElementById('sumDate').textContent = form.querySelector('[name="event_date"]').value || '—';
    document.getElementById('sumGuests').textContent = form.querySelector('[name="guests_count"]').value || '—';
    document.getElementById('sumServices').textContent = servicesText;
    document.getElementById('sumBudget').textContent = budgetText;
    document.getElementById('sumTotal').textContent = price ? price.toLocaleString() + (lang === 'ar' ? ' ر.س' : ' SAR') : '—';
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const lastPanel = document.querySelector('.form-step[data-step-panel="3"]');
    const agree = form.querySelector('[name="agree"]');
    if(!agree.checked){
      showMessage(bookingMsg, 'error', 'يرجى الموافقة على الشروط والأحكام أولاً.');
      return;
    }

    const formData = new FormData(form);
    try{
      const res = await fetch('php/booking.php', { method:'POST', body: formData });
      const data = await res.json();
      showMessage(bookingMsg, data.success ? 'success' : 'error', data.message);
      if(data.success){
        form.reset();
        setTimeout(()=> goToStep(1), 1500);
      }
    }catch(err){
      showMessage(bookingMsg, 'error', 'تعذر الاتصال بالخادم، تأكد من إعداد PHP وقاعدة البيانات.');
    }
  });

  // الحد الأدنى لتاريخ الحجز هو اليوم التالي
  const dateInput = form.querySelector('[name="event_date"]');
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.min = tomorrow.toISOString().split('T')[0];
});
