/* ==========================================================================
   lang.js — تبديل اللغة (عربي / إنجليزي) لكل صفحات الموقع
   يعمل عبر السمة data-i18n="key" وقاموس ترجمة موحّد لكل الصفحات
   ========================================================================== */

const I18N = {
  ar: {
    /* شريط علوي */
    topbar_phone: "📞 اتصل بنا: 966500000000+",
    topbar_hours: "🕒 يوميًا من 9 صباحًا حتى 11 مساءً",
    topbar_addr: "📍 الرياض، المملكة العربية السعودية",

    /* التنقل */
    nav_home: "الرئيسية",
    nav_halls: "قاعاتنا",
    nav_booking: "احجز الآن",
    nav_contact: "تواصل معنا",
    nav_login: "تسجيل الدخول",
    nav_cta: "احجز قاعتك",

    /* الهيرو */
    hero_eyebrow: "قاعة مناسبات فاخرة منذ 2008",
    hero_title: "حيث تُكتب أجمل لحظاتكم في قاعة تليق بها",
    hero_desc: "قاعة أفراح ومناسبات متكاملة بسعة تصل إلى 1200 ضيف، خدمات ضيافة راقية، وتنظيم احترافي من أول استشارة حتى آخر لحظة في حفلكم.",
    hero_btn_book: "احجز قاعتك الآن",
    hero_btn_halls: "استعرض القاعات",
    stat1_num:"+1200", stat1_lbl:"مناسبة ناجحة",
    stat2_num:"4", stat2_lbl:"قاعات فاخرة",
    stat3_num:"98%", stat3_lbl:"رضا العملاء",
    stat4_num:"15+", stat4_lbl:"سنة خبرة",

    /* المميزات */
    feat_eyebrow: "لماذا نحن",
    feat_title: "تجربة حجز متكاملة بلا تعقيد",
    feat_desc: "نوفر لك كل ما تحتاجه لتنظيم مناسبة استثنائية تحت سقف واحد.",
    feat1_t:"حجز إلكتروني فوري", feat1_d:"احجز قاعتك وتابع حالة طلبك أونلاين خطوة بخطوة دون الحاجة لزيارة مكتبنا.",
    feat2_t:"تنسيق وديكور احترافي", feat2_d:"فريق تصميم داخلي يحوّل القاعة لتعكس هوية مناسبتكم الخاصة.",
    feat3_t:"ضيافة وتموين فاخر", feat3_d:"قوائم طعام متنوعة تناسب جميع الأذواق مع إشراف شيف مختص.",
    feat4_t:"مواقف وخدمة صف سيارات", feat4_d:"مواقف واسعة وخدمة صف السيارات لراحة ضيوفكم من أول لحظة.",
    feat5_t:"نظام صوتي وإضاءة متطور", feat5_d:"أنظمة صوت وإضاءة حديثة قابلة للتخصيص حسب طبيعة الحفل.",
    feat6_t:"دعم على مدار الحفل", feat6_d:"منسق مناسبات مرافق طوال فعالياتكم لضمان سير كل التفاصيل بسلاسة.",

    /* القاعات (الصفحة الرئيسية) */
    halls_eyebrow:"قاعاتنا",
    halls_title:"اختر القاعة الأنسب لمناسبتك",
    halls_desc:"أربع قاعات بمساحات وتصاميم مختلفة لتناسب كل حجم مناسبة وميزانية.",
    hall1_name:"القاعة الملكية", hall1_desc:"الأفخم والأوسع، مثالية لحفلات الزفاف الكبرى.",
    hall2_name:"قاعة اللؤلؤة", hall2_desc:"تصميم عصري أنيق يناسب الحفلات المتوسطة والخطوبات.",
    hall3_name:"قاعة الياسمين", hall3_desc:"أجواء دافئة تناسب المناسبات العائلية الخاصة.",
    hall4_name:"القاعة الذهبية", hall4_desc:"مساحة مرنة تصلح لحفلات التخرج والمؤتمرات الخاصة.",
    hall_capacity:"السعة", hall_area:"المساحة", hall_guests:"ضيف",
    hall_from:"يبدأ من", hall_book_btn:"احجز هذه القاعة", hall_details_btn:"التفاصيل",
    view_all_halls:"عرض جميع القاعات",

    /* الآراء */
    test_eyebrow:"آراء عملائنا", test_title:"قصص نجاح تشرفنا بها",
    test1:"تنظيم استثنائي وفريق متعاون منذ أول اتصال حتى نهاية الحفل، كل شيء كان مثاليًا.",
    test2:"القاعة فخمة والديكور فاق توقعاتنا، أنصح بها بشدة لكل عروس تبحث عن التميز.",
    test3:"الحجز الإلكتروني سهّل علينا كل شيء، تابعنا الحجز خطوة بخطوة دون أي عناء.",
    test1_name:"سارة العتيبي", test2_name:"محمد القحطاني", test3_name:"نورة الشمري",
    test4:"فريق الضيافة كان في قمة الاحترافية، وضيوفنا أشادوا بجودة الطعام وسرعة التقديم طوال الحفل.",
    test5:"من أول جولة داخل القاعة قررنا الحجز فورًا، الإضاءة والديكور خلقوا أجواء لا تُنسى في حفل خطوبتنا.",
    test4_name:"فهد الحربي", test5_name:"لمى المطيري",

    /* الأسئلة الشائعة */
    faq_eyebrow:"الأسئلة الشائعة", faq_title:"كل ما تحتاج معرفته",
    faq1_q:"كم يجب أن أحجز مسبقًا؟", faq1_a:"ننصح بالحجز قبل 3 إلى 6 أشهر من موعد المناسبة لضمان توفر القاعة والتاريخ المطلوب، خصوصًا في مواسم الأعياد والصيف.",
    faq2_q:"هل يمكن إلغاء أو تعديل الحجز؟", faq2_a:"نعم، يمكن تعديل موعد الحجز مجانًا مرة واحدة قبل 14 يومًا من الموعد، ويخضع الإلغاء لسياسة استرجاع حسب مدة الإشعار.",
    faq3_q:"هل تشمل الأسعار الضيافة والديكور؟", faq3_a:"توجد باقات تشمل الضيافة والديكور الأساسي، ويمكن إضافة خدمات مخصصة حسب رغبتكم عند الحجز.",
    faq4_q:"ما وسائل الدفع المتاحة؟", faq4_a:"نقبل الدفع عبر التحويل البنكي، بطاقات مدى وفيزا وماستركارد، مع إمكانية الدفع على دفعتين.",

    /* الفوتر */
    footer_about_t:"عن القاعة",
    footer_about_d:"قاعة مناسبات رائدة في تنظيم الأفراح والمناسبات الخاصة بأعلى مستوى من الفخامة والاحترافية منذ عام 2008.",
    footer_links_t:"روابط سريعة",
    footer_services_t:"خدماتنا",
    footer_service1:"تنظيم حفلات الزفاف", footer_service2:"حفلات الخطوبة", footer_service3:"المناسبات الخاصة", footer_service4:"المؤتمرات والفعاليات",
    footer_contact_t:"تواصل معنا",
    footer_rights:"جميع الحقوق محفوظة",
    footer_made:"تصميم وتطوير فريق التقنية",
    footer_privacy:"سياسة الخصوصية", footer_terms:"الشروط والأحكام",

    /* صفحة تسجيل الدخول */
    login_hero_title:"مرحبًا بعودتك",
    login_hero_desc:"سجّل الدخول لمتابعة حجوزاتك أو أنشئ حسابًا جديدًا لبدء رحلتك معنا.",
    tab_login:"تسجيل الدخول", tab_register:"حساب جديد",
    label_email:"البريد الإلكتروني", label_password:"كلمة المرور",
    label_name:"الاسم الكامل", label_phone:"رقم الجوال",
    label_confirm:"تأكيد كلمة المرور",
    remember_me:"تذكرني", forgot_pass:"نسيت كلمة المرور؟",
    btn_login:"تسجيل الدخول", btn_register:"إنشاء الحساب",
    or_divider:"أو",
    have_account:"لديك حساب بالفعل؟", no_account:"ليس لديك حساب؟",
    err_required:"هذا الحقل مطلوب", err_email:"يرجى إدخال بريد إلكتروني صحيح",
    err_phone:"يرجى إدخال رقم جوال صحيح", err_pass_len:"كلمة المرور يجب أن تكون 8 أحرف على الأقل",
    err_pass_match:"كلمتا المرور غير متطابقتين",

    /* صفحة التواصل */
    contact_hero_title:"نحن هنا لخدمتكم",
    contact_hero_desc:"لأي استفسار أو لطلب زيارة ميدانية للقاعة، تواصلوا معنا وسنرد خلال 24 ساعة.",
    contact_info_t:"معلومات التواصل",
    contact_info_d:"يسعدنا استقبال استفساراتكم عبر أي من الوسائل التالية أو زيارتنا مباشرة في مقر القاعة.",
    ci_addr_t:"العنوان", ci_addr_d:"طريق الملك فهد، حي العليا، الرياض",
    ci_phone_t:"الهاتف", ci_phone_d:"966500000000+",
    ci_email_t:"البريد الإلكتروني", ci_email_d:"info@royal-hall.example.com",
    ci_hours_t:"أوقات العمل", ci_hours_d:"يوميًا من 9 صباحًا حتى 11 مساءً",
    contact_form_t:"أرسل لنا رسالة",
    label_subject:"الموضوع", label_message:"الرسالة",
    contact_form_send:"إرسال الرسالة",
    contact_success:"تم إرسال رسالتك بنجاح! سنتواصل معكم قريبًا.",

    /* صفحة القاعات */
    hallspage_hero_t:"قاعاتنا الفاخرة",
    hallspage_hero_d:"تعرف على تفاصيل كل قاعة ومواصفاتها لاختيار الأنسب لمناسبتك.",
    compare_t:"مقارنة سريعة بين القاعات",
    th_hall:"القاعة", th_capacity:"السعة", th_area:"المساحة (م²)", th_price:"السعر يبدأ من", th_parking:"مواقف السيارات",

    /* صفحة الحجز */
    booking_hero_t:"احجز قاعتك في دقائق",
    booking_hero_d:"عبّئ البيانات التالية وسيتواصل معك فريقنا لتأكيد الحجز خلال 24 ساعة.",
    step1_t:"بيانات المناسبة", step2_t:"بيانات التواصل", step3_t:"المراجعة والتأكيد",
    label_hall:"اختر القاعة", label_event_type:"نوع المناسبة",
    label_date:"تاريخ المناسبة", label_guests:"عدد الضيوف المتوقع",
    label_time:"الفترة", time_morning:"صباحية", time_evening:"مسائية",
    event_wedding:"حفل زفاف", event_engagement:"خطوبة", event_grad:"حفل تخرج", event_corporate:"فعالية شركات", event_other:"أخرى",
    label_notes:"ملاحظات إضافية",
    booking_summary_t:"ملخص الحجز",
    sum_hall:"القاعة المختارة", sum_date:"التاريخ", sum_guests:"عدد الضيوف", sum_total:"الإجمالي التقديري",
    btn_next:"التالي", btn_prev:"السابق", btn_confirm:"تأكيد الحجز",
    booking_success_t:"تم استلام طلب الحجز بنجاح!",
    booking_success_d:"سيتواصل معك أحد ممثلي خدمة العملاء خلال 24 ساعة لتأكيد كافة التفاصيل.",
    agree_terms:"أوافق على الشروط والأحكام وسياسة الحجز والإلغاء",

    /* حالة تسجيل الدخول */
    btn_logout:"خروج",

    /* خدمات إضافية وميزانية في نموذج الحجز */
    label_services:"خدمات إضافية ترغب بإضافتها",
    service_catering:"ضيافة وتموين (بوفيه مفتوح)",
    service_decor:"تنسيق وديكور مخصص للمناسبة",
    service_photo:"تصوير فوتوغرافي وفيديو احترافي",
    service_music:"فرقة موسيقية / دي جي وإضاءة حية",
    service_transport:"نقل الضيوف (باصات خاصة)",
    service_cake:"تورتة وحلويات مخصصة",
    label_budget:"الميزانية التقريبية للمناسبة",
    budget_low:"أقل من 20,000 ر.س",
    budget_mid:"من 20,000 إلى 50,000 ر.س",
    budget_high:"من 50,000 إلى 100,000 ر.س",
    budget_vip:"أكثر من 100,000 ر.س",
    label_contact_pref:"طريقة التواصل المفضلة",
    contact_pref_phone:"مكالمة هاتفية",
    contact_pref_whatsapp:"واتساب",
    contact_pref_email:"البريد الإلكتروني",
    sum_services:"الخدمات المختارة", sum_budget:"الميزانية", sum_none:"لا يوجد",

    /* أسئلة شائعة إضافية */
    faq5_q:"هل يمكن إحضار مصور خارجي خاص بنا؟",
    faq5_a:"نعم، يمكن إحضار مصور خاص بكم مع إخطارنا مسبقًا، أو الاستعانة بفريق التصوير المعتمد لدينا للحصول على خصم إضافي.",
    faq6_q:"هل تتوفر غرفة خاصة للعروسين أو الاستقبال؟",
    faq6_a:"جميع قاعاتنا مزودة بغرف استقبال خاصة مجهزة بالكامل لراحة العروسين أو صاحب المناسبة وضيوفهم الخاصين.",

    /* خدمات تفصيلية إضافية في الصفحة الرئيسية */
    feat7_t:"تصوير فوتوغرافي وفيديو", feat7_d:"فريق تصوير محترف يوثّق كل لحظة من مناسبتكم بجودة سينمائية عالية.",
    feat8_t:"تنظيف وتجهيز شامل", feat8_d:"خدمة تنظيف وتجهيز كاملة قبل وبعد الحفل دون أي عبء إضافي عليكم.",

    /* عام */
    page_home_crumb:"الرئيسية",
  },
  en: {
    topbar_phone: "📞 Call us: +966500000000",
    topbar_hours: "🕒 Daily 9:00 AM – 11:00 PM",
    topbar_addr: "📍 Riyadh, Saudi Arabia",

    nav_home: "Home",
    nav_halls: "Our Halls",
    nav_booking: "Book Now",
    nav_contact: "Contact Us",
    nav_login: "Login",
    nav_cta: "Book Your Hall",

    hero_eyebrow: "A luxury event hall since 2008",
    hero_title: "Where your most beautiful moments deserve the perfect hall",
    hero_desc: "A fully-equipped wedding & event hall hosting up to 1200 guests, refined hospitality, and professional planning from the first consultation to the final moment of your celebration.",
    hero_btn_book: "Book Your Hall Now",
    hero_btn_halls: "Browse Halls",
    stat1_num:"1200+", stat1_lbl:"Successful Events",
    stat2_num:"4", stat2_lbl:"Luxury Halls",
    stat3_num:"98%", stat3_lbl:"Client Satisfaction",
    stat4_num:"15+", stat4_lbl:"Years of Experience",

    feat_eyebrow: "Why Us",
    feat_title: "A seamless, all-in-one booking experience",
    feat_desc: "Everything you need to plan an exceptional event, under one roof.",
    feat1_t:"Instant Online Booking", feat1_d:"Book your hall and track your request status online, step by step, with no office visit needed.",
    feat2_t:"Professional Styling & Décor", feat2_d:"An in-house design team transforms the hall to reflect your event's unique identity.",
    feat3_t:"Premium Catering", feat3_d:"Diverse menus for every taste, prepared under the supervision of a specialized chef.",
    feat4_t:"Parking & Valet Service", feat4_d:"Spacious parking and valet service for your guests' comfort from the first moment.",
    feat5_t:"Advanced Sound & Lighting", feat5_d:"Modern, fully customizable sound and lighting systems tailored to your event.",
    feat6_t:"On-Event Support", feat6_d:"A dedicated event coordinator stays with you throughout to ensure everything runs smoothly.",

    halls_eyebrow:"Our Halls",
    halls_title:"Choose the perfect hall for your event",
    halls_desc:"Four halls with different sizes and designs to fit any event size and budget.",
    hall1_name:"The Royal Hall", hall1_desc:"Our grandest and largest hall, ideal for major weddings.",
    hall2_name:"Pearl Hall", hall2_desc:"A modern, elegant design suited for medium events and engagements.",
    hall3_name:"Jasmine Hall", hall3_desc:"A warm atmosphere perfect for private family occasions.",
    hall4_name:"The Golden Hall", hall4_desc:"A flexible space suited for graduations and private conferences.",
    hall_capacity:"Capacity", hall_area:"Area", hall_guests:"guests",
    hall_from:"Starting from", hall_book_btn:"Book This Hall", hall_details_btn:"Details",
    view_all_halls:"View All Halls",

    test_eyebrow:"Client Reviews", test_title:"Success stories we're proud of",
    test1:"Exceptional organization and a cooperative team from the first call to the last moment — everything was perfect.",
    test2:"The hall is stunning and the décor exceeded our expectations. Highly recommended for any bride seeking excellence.",
    test3:"Online booking made everything easy — we tracked our reservation step by step with no hassle at all.",
    test1_name:"Sarah Al-Otaibi", test2_name:"Mohammed Al-Qahtani", test3_name:"Noura Al-Shammari",
    test4:"The hospitality team was extremely professional, and our guests praised the food quality and quick service throughout the event.",
    test5:"From the first tour of the hall we knew we had to book — the lighting and décor created an unforgettable atmosphere for our engagement.",
    test4_name:"Fahad Al-Harbi", test5_name:"Lama Al-Mutairi",

    faq_eyebrow:"FAQ", faq_title:"Everything you need to know",
    faq1_q:"How far in advance should I book?", faq1_a:"We recommend booking 3 to 6 months ahead to secure your preferred hall and date, especially during holidays and summer.",
    faq2_q:"Can I cancel or reschedule my booking?", faq2_a:"Yes, you may reschedule once for free up to 14 days before the event. Cancellations follow a refund policy based on notice period.",
    faq3_q:"Do prices include catering and décor?", faq3_a:"We offer packages that include catering and basic décor, and you can add custom services when booking.",
    faq4_q:"What payment methods are accepted?", faq4_a:"We accept bank transfer, Mada, Visa and Mastercard, with the option to split payment into two installments.",

    footer_about_t:"About the Hall",
    footer_about_d:"A leading event hall specialized in weddings and private celebrations, delivering the highest level of luxury and professionalism since 2008.",
    footer_links_t:"Quick Links",
    footer_services_t:"Our Services",
    footer_service1:"Wedding Planning", footer_service2:"Engagement Parties", footer_service3:"Private Events", footer_service4:"Conferences & Corporate Events",
    footer_contact_t:"Contact Us",
    footer_rights:"All Rights Reserved",
    footer_made:"Designed & developed by the tech team",
    footer_privacy:"Privacy Policy", footer_terms:"Terms & Conditions",

    login_hero_title:"Welcome Back",
    login_hero_desc:"Sign in to manage your bookings, or create a new account to get started.",
    tab_login:"Login", tab_register:"New Account",
    label_email:"Email Address", label_password:"Password",
    label_name:"Full Name", label_phone:"Phone Number",
    label_confirm:"Confirm Password",
    remember_me:"Remember me", forgot_pass:"Forgot password?",
    btn_login:"Login", btn_register:"Create Account",
    or_divider:"or",
    have_account:"Already have an account?", no_account:"Don't have an account?",
    err_required:"This field is required", err_email:"Please enter a valid email address",
    err_phone:"Please enter a valid phone number", err_pass_len:"Password must be at least 8 characters",
    err_pass_match:"Passwords do not match",

    contact_hero_title:"We're Here For You",
    contact_hero_desc:"For any inquiry or to schedule a hall tour, reach out and we'll respond within 24 hours.",
    contact_info_t:"Contact Information",
    contact_info_d:"We're happy to receive your inquiries through any of the following, or visit us at the hall directly.",
    ci_addr_t:"Address", ci_addr_d:"King Fahd Road, Al Olaya District, Riyadh",
    ci_phone_t:"Phone", ci_phone_d:"+966500000000",
    ci_email_t:"Email", ci_email_d:"info@royal-hall.example.com",
    ci_hours_t:"Working Hours", ci_hours_d:"Daily 9:00 AM – 11:00 PM",
    contact_form_t:"Send Us a Message",
    label_subject:"Subject", label_message:"Message",
    contact_form_send:"Send Message",
    contact_success:"Your message was sent successfully! We'll be in touch soon.",

    hallspage_hero_t:"Our Luxury Halls",
    hallspage_hero_d:"Explore the details and specifications of each hall to pick the best fit for your event.",
    compare_t:"Quick Hall Comparison",
    th_hall:"Hall", th_capacity:"Capacity", th_area:"Area (sqm)", th_price:"Starting Price", th_parking:"Parking",

    booking_hero_t:"Book Your Hall in Minutes",
    booking_hero_d:"Fill in the details below and our team will contact you to confirm your booking within 24 hours.",
    step1_t:"Event Details", step2_t:"Contact Details", step3_t:"Review & Confirm",
    label_hall:"Choose a Hall", label_event_type:"Event Type",
    label_date:"Event Date", label_guests:"Expected Number of Guests",
    label_time:"Time Slot", time_morning:"Morning", time_evening:"Evening",
    event_wedding:"Wedding", event_engagement:"Engagement", event_grad:"Graduation", event_corporate:"Corporate Event", event_other:"Other",
    label_notes:"Additional Notes",
    booking_summary_t:"Booking Summary",
    sum_hall:"Selected Hall", sum_date:"Date", sum_guests:"Guests", sum_total:"Estimated Total",
    btn_next:"Next", btn_prev:"Previous", btn_confirm:"Confirm Booking",
    booking_success_t:"Booking Request Received!",
    booking_success_d:"A member of our team will contact you within 24 hours to confirm all details.",
    agree_terms:"I agree to the terms, conditions and cancellation policy",

    btn_logout:"Logout",

    label_services:"Additional services you'd like to add",
    service_catering:"Catering (open buffet)",
    service_decor:"Custom event styling & décor",
    service_photo:"Professional photography & video",
    service_music:"Live band / DJ & lighting",
    service_transport:"Guest transport (private buses)",
    service_cake:"Custom cake & desserts",
    label_budget:"Approximate event budget",
    budget_low:"Under SAR 20,000",
    budget_mid:"SAR 20,000 – 50,000",
    budget_high:"SAR 50,000 – 100,000",
    budget_vip:"Over SAR 100,000",
    label_contact_pref:"Preferred contact method",
    contact_pref_phone:"Phone call",
    contact_pref_whatsapp:"WhatsApp",
    contact_pref_email:"Email",
    sum_services:"Selected Services", sum_budget:"Budget", sum_none:"None",

    faq5_q:"Can we bring our own external photographer?",
    faq5_a:"Yes, you may bring your own photographer with prior notice, or use our in-house certified photography team for an added discount.",
    faq6_q:"Is there a private room for the couple or host?",
    faq6_a:"All our halls include a fully-equipped private reception room for the couple or event host and their close guests.",

    feat7_t:"Photography & Video", feat7_d:"A professional photography team captures every moment of your event in cinematic quality.",
    feat8_t:"Full Cleaning & Setup", feat8_d:"Complete cleaning and setup service before and after the event, with zero extra burden on you.",

    page_home_crumb:"Home",
  }
};

function getCurrentLang(){
  return localStorage.getItem('site_lang') || 'ar';
}

function applyLanguage(lang){
  const dict = I18N[lang] || I18N.ar;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined){
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    if(dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  localStorage.setItem('site_lang', lang);

  const langBtnLabel = document.getElementById('langBtnLabel');
  if(langBtnLabel) langBtnLabel.textContent = lang === 'ar' ? 'EN' : 'AR';
}

function toggleLanguage(){
  const current = getCurrentLang();
  const next = current === 'ar' ? 'en' : 'ar';
  applyLanguage(next);
}

document.addEventListener('DOMContentLoaded', ()=>{
  applyLanguage(getCurrentLang());
  const langBtn = document.getElementById('langBtn');
  if(langBtn) langBtn.addEventListener('click', toggleLanguage);
});
