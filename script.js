const NAV_LINKS = [
  ['Services', 'خدماتنا', 'services'],
  ['About', 'من نحن', 'about'],
  ['Results', 'نتائجنا', 'results'],
  ['Testimonials', 'آراء العملاء', 'testimonials'],
  ['Contact', 'تواصل معنا', 'contact']
];

const SERVICES = [
  [
    '01',
    'Advanced Facial Treatments',
    'Medical-grade chemical peels, microneedling with PRP, and oxygen infusion facials — each protocol tailored to your skin type, tone, and concerns.',
    'علاجات الوجه المتقدمة',
    'تقشير كيميائي طبي، إبر دقيقة مع البلازما، وجلسات أكسجين مخصصة لبشرتك.',
    '60 – 90 دقيقة',
    'من 450 ر.س'
  ],
  [
    '02',
    'Laser & Light Therapy',
    'IPL photofacials, fractional CO₂ resurfacing, and vascular lesion removal with Fotona and Syneron-Candela platforms.',
    'علاج الليزر والضوء',
    'جلسات IPL، تجديد البشرة بالليزر، وإزالة الأوعية الدموية بأحدث الأجهزة.',
    '45 – 75 دقيقة',
    'من 650 ر.س'
  ],
  [
    '03',
    'Injectable Aesthetics',
    'Botulinum toxin relaxation and hyaluronic acid dermal fillers administered by our board-certified practitioners for natural, refined results.',
    'حقن التجميل',
    'حقن البوتوكس والفيلر بحمض الهيالورونيك من قِبَل أطباء معتمدين لنتائج طبيعية ومتناسقة.',
    '30 – 60 دقيقة',
    'من 900 ر.س'
  ],
  [
    '04',
    'Body Contouring',
    'Non-surgical fat reduction and skin tightening combining radiofrequency, HIFU, and cryolipolysis for visible, measurable results.',
    'نحت الجسم',
    'تقليل الدهون وشد الجلد بلا جراحة باستخدام الترددات الراديوية وHIFU والتبريد.',
    '60 – 120 دقيقة',
    'من 1,200 ر.س'
  ],
  [
    '05',
    'Brow & Eye Artistry',
    'Microblading, brow lamination, lash lift and tint — precise techniques for perfectly framed eyes that last up to 18 months.',
    'فن الحواجب والعيون',
    'ميكروبليدينج، لاميشن الحواجب، ورفع الرموش — نتائج دقيقة تدوم حتى 18 شهراً.',
    '90 – 120 دقيقة',
    'من 350 ر.س'
  ],
  [
    '06',
    'Holistic Wellness Rituals',
    'Lymphatic drainage, gua sha stone therapy, and deep-tissue massage designed to restore balance and radiance from within.',
    'طقوس العافية الشاملة',
    'تصريف لمفاوي، علاج بحجر الغوا شا، وتدليك عميق لاستعادة التوازن والإشراق من الداخل.',
    '60 – 90 دقيقة',
    'من 280 ر.س'
  ]
];

const RESULTS = [
  [
    'https://images.unsplash.com/photo-1782159981479-0fafb56d3cd6?w=600&h=750&fit=crop&auto=format',
    'Hydration Facial',
    'Skin Renewal',
    'جلسة ترطيب عميق',
    'تجديد البشرة'
  ],
  [
    'https://images.unsplash.com/photo-1785861485926-93a13556d656?w=600&h=750&fit=crop&auto=format',
    'Aesthetic Injection',
    'Injectables',
    'حقن تجميلية',
    'الحقن'
  ],
  [
    'https://images.unsplash.com/photo-1782159981439-b99dfb84f4b8?w=600&h=750&fit=crop&auto=format',
    'Deep Cleanse Ritual',
    'Treatment',
    'طقس التنظيف العميق',
    'علاج'
  ],
  [
    'https://images.unsplash.com/photo-1785860945533-918a531bcdeb?w=600&h=750&fit=crop&auto=format',
    'Brow Definition',
    'Artistry',
    'تحديد الحواجب',
    'فن التجميل'
  ]
];

const TESTIMONIALS = [
  [
    'AM',
    'أمينة م.',
    'Facial Renewal Client',
    'I liked that the practitioner did not rush me into a treatment. She explained what my skin needed and the result looked very natural.',
    'أمينة م.',
    'عميلة تجديد البشرة',
    'أكثر شيء أعجبني أنهم لم يستعجلوا في اقتراح العلاج. شرحت لي المختصة ما تحتاجه بشرتي والنتيجة كانت طبيعية جداً.'
  ],
  [
    'RN',
    'ريم ن.',
    'Laser Client',
    'I had been nervous about laser, but the consultation made a big difference. Everything was explained clearly and my skin looked more even after the sessions.',
    'ريم ن.',
    'عميلة الليزر',
    'كنت متخوفة من الليزر، لكن الاستشارة فرقت معي كثيراً. شرحوا لي كل شيء بوضوح وبعد الجلسات لاحظت أن بشرتي أصبحت أكثر تجانساً.'
  ],
  [
    'LA',
    'لينا ع.',
    'Wellness & Brow Client',
    'The clinic feels calm and professional without feeling too formal. I especially appreciated the small details and the fact that no one pushed me to book extra treatments.',
    'لينا ع.',
    'عميلة العافية والحواجب',
    'العيادة هادئة واحترافية من غير ما تكون رسمية زيادة. أعجبني اهتمامهم بالتفاصيل، والأهم أنهم ما حاولوا يقنعوني بعلاجات إضافية.'
  ]
];

const WHY = [
  [
    '✦',
    'Medical-Grade Only',
    'Every device and product carries peer-reviewed clinical evidence. No trends, no gimmicks — only what works.',
    'معايير طبية فقط',
    'كل جهاز ومنتج نستخدمه مدعوم بأدلة سريرية محكّمة. لا موضة، لا وعود — فقط ما يُثبت فاعليته.'
  ],
  [
    '✦',
    'Bespoke Protocols',
    'Your treatment plan is written for you alone — never from a templated menu or a one-size-fits-all approach.',
    'بروتوكولات مخصصة',
    'خطة علاجك تُكتب لك وحدك — لا قوالب جاهزة، ولا معالجة موحدة للجميع.'
  ],
  [
    '✦',
    'Practitioner-Led',
    'Treatments are performed by our in-house doctors and senior nurses — every session, without exception.',
    'بإشراف أطباء متخصصين',
    'جميع الجلسات تُنفَّذ من قِبَل أطبائنا وممرضاتنا المتخصصات — كل جلسة، دون استثناء.'
  ],
  [
    '✦',
    'Transparent Pricing',
    'Clear, all-inclusive pricing from the first consultation. No hidden fees, no surprise add-ons at checkout.',
    'أسعار شفافة',
    'تسعير واضح وشامل منذ الاستشارة الأولى. لا رسوم خفية، لا إضافات مفاجئة عند الدفع.'
  ]
];

const TEXT = {
  en: {
    bookNow: 'Book Now',
    scroll: 'Scroll to explore',
    heroKicker: ' ',
    heroDescription:
      'Where clinical precision meets spa serenity. Lumière Clinic combines medical-grade treatments with a deeply personal approach to beauty.',
    consultation: 'Book a Consultation',
    explore: 'Explore Services',
    whatOffer: '— What We Offer',
    servicesTitle: 'Treatments designed<br><em>for your skin story.</em>',
    servicesIntro:
      'Every treatment at Lumière begins with a comprehensive skin analysis. No protocol is ever generic.',
    philosophy: '— Our Philosophy',
    aboutTitle: 'Science-led care,<br><em>soulfully delivered.</em>',
    about: [
      `Founded in 2014 by Dr. Camille Laurent, Lumière was built on a single conviction: that aesthetic medicine should feel as restorative as it looks.`,
      `Our team of seven board-certified practitioners bring decades of combined experience in dermatology, plastic surgery, and integrative wellness.`,
      `We invest only in technologies that carry clinical evidence and pass our internal safety standards. If it is not proven, we do not offer it.`
    ],
    quote: '“Beauty is not a standard. It is a language.”',
    author: '— Dr. Camille Laurent, Founder',
    ourWork: '— Our Work',
    resultsTitle: 'Refined results,<br><em>every time.</em>',
    clientVoices: '— Client Voices',
    difference: '— The Lumière Difference',
    whyTitle: 'Four reasons clients<br><em>never leave.</em>',
    bookConsultation: '— Book a Consultation',
    contactTitle: 'Begin your<br><em>skin journey.</em>',
    contactIntro:
      'Your first consultation is a 45-minute skin analysis with one of our senior practitioners. Complimentary and without obligation.',
    contact: [
      ['Address', '14 Rue du Faubourg, Paris 75008'],
      ['Phone', '+33 1 42 60 00 00'],
      ['Email', 'hello@lumiereclinic.fr'],
      ['Hours', 'Mon – Sat · 9:00 – 19:00']
    ],
    copyright: '© 2026 Lumière Clinic. All rights reserved.'
  },

  ar: {
    bookNow: 'احجز الآن',
    scroll: 'مرر للاستكشاف',
    heroKicker: ' ',
    heroDescription:
      'حيث تلتقي الدقة الطبية بهدوء المنتجع الفاخر. تجمع عيادة لوميير بين العلاجات الطبية المتقدمة وأسلوب شخصي عميق في العناية بالجمال.',
    consultation: 'احجز استشارتك',
    explore: 'استكشف خدماتنا',
    whatOffer: '— ما نقدمه',
    servicesTitle: 'علاجات مصمّمة<br><em>لقصة بشرتك.</em>',
    servicesIntro:
      'كل علاج في لوميير يبدأ بتحليل شامل للبشرة. لا بروتوكول عام، لا حل موحد.',
    philosophy: '— فلسفتنا',
    aboutTitle: 'رعاية تقودها العلوم،<br><em>تُقدَّم بروح.</em>',
    about: [
      `تأسست عيادة لوميير عام 2014 على يد الدكتورة كاميل لوران بقناعة واحدة: أن طب التجميل يجب أن يشعرك بالتجدد بقدر ما يُريك نتائج.`,
      `فريقنا المؤلف من سبعة أطباء معتمدين يجمعون عقوداً من الخبرة في الجلدية والجراحة التجميلية والعافية التكاملية.`,
      `نستثمر فقط في تقنيات تحمل دليلاً سريرياً معتمداً وتجتاز معاييرنا الداخلية الصارمة للسلامة.`
    ],
    quote: '“الجمال ليس معياراً. إنه لغة.”',
    author: '— د. كاميل لوران، المؤسسة',
    ourWork: '— أعمالنا',
    resultsTitle: 'نتائج راقية،<br><em>في كل مرة.</em>',
    clientVoices: '— أصوات عملائنا',
    difference: '— ما يميّز لوميير',
    whyTitle: 'أربعة أسباب تجعل عملاءنا<br><em>لا يغادرون أبداً.</em>',
    bookConsultation: '— احجز استشارة',
    contactTitle: 'ابدأ رحلتك<br><em>مع بشرتك.</em>',
    contactIntro:
      'استشارتك الأولى هي تحليل بشرة لمدة 45 دقيقة مع أحد أطبائنا المتخصصين. مجانية وبلا التزام.',
    contact: [
      ['العنوان', 'شارع الفوبور ١٤، باريس ٧٥٠٠٨'],
      ['الهاتف', '+33 1 42 60 00 00'],
      ['البريد', 'hello@lumiereclinic.fr'],
      ['ساعات العمل', 'الاثنين – السبت · ٩:٠٠ – ١٩:٠٠']
    ],
    copyright: '© ٢٠٢٦ عيادة لوميير. جميع الحقوق محفوظة.'
  }
};

let lang = 'en';
let activeTestimonial = 0;
let submitted = false;

let formData = {
  name: '',
  email: '',
  service: '',
  message: ''
};

const $ = selector => document.querySelector(selector);

const $$ = selector => [...document.querySelectorAll(selector)];

function t(key) {
  return TEXT[lang][key];
}

function setLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  $$('[data-i18n]').forEach(element => {
    element.innerHTML = t(element.dataset.i18n);
  });

  render();
}

function scrollToId(id) {
  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: 'smooth'
    });

  $('#mobile-menu')?.classList.remove('open');
  $('#menu-toggle')?.classList.remove('open');
}

function renderNav() {
  const desktopNav = $('#desktop-nav');

  if (desktopNav) {
    desktopNav.innerHTML = NAV_LINKS.map(
      item => `
        <button data-scroll="${item[2]}">
          ${lang === 'ar' ? item[1] : item[0]}
        </button>
      `
    ).join('');
  }

  const mobileMenu = $('#mobile-menu');

  if (mobileMenu) {
    mobileMenu.innerHTML =
      NAV_LINKS.map(
        item => `
          <button data-scroll="${item[2]}">
            ${lang === 'ar' ? item[1] : item[0]}
          </button>
        `
      ).join('') +
      `
        <div class="mobile-actions">
          <button class="lang-btn" id="mobile-lang">
            ${lang === 'ar' ? 'EN' : 'عربي'}
          </button>

          <button class="book-btn" data-scroll="contact">
            ${t('bookNow')}
          </button>
        </div>
      `;
  }

  $$('[data-scroll]').forEach(button => {
    button.onclick = () => {
      scrollToId(button.dataset.scroll);
    };
  });

  const mobileLang = $('#mobile-lang');

  if (mobileLang) {
    mobileLang.onclick = () => {
      lang = lang === 'en' ? 'ar' : 'en';
      setLang();
    };
  }
}

function render() {
  renderNav();

  const heroTitle = $('#hero-title');

  if (heroTitle) {
    heroTitle.innerHTML =
      lang === 'ar'
        ? `
          <span class="word-mask">
            <span class="word-inner">بشرتك،</span>
          </span>

          <span class="word-mask">
            <span
              class="word-inner"
              style="color:var(--pink);transition-delay:.07s"
            >
              مرتقية
            </span>
          </span>

          <br>

          <span class="word-mask">
            <span
              class="word-inner"
              style="transition-delay:.14s"
            >
              فوق
            </span>
          </span>

          <span class="word-mask">
            <span
              class="word-inner"
              style="transition-delay:.21s"
            >
              كل
            </span>
          </span>

          <span class="word-mask">
            <span
              class="word-inner"
              style="transition-delay:.28s"
            >
              توقع.
            </span>
          </span>
        `
        : `
          <span class="word-mask">
            <span class="word-inner">
              Your skin,
            </span>
          </span>

          <span class="word-mask">
            <span
              class="word-inner"
              style="color:var(--pink);font-style:italic;transition-delay:.07s"
            >
              elevated
            </span>
          </span>

          <br>

          <span class="word-mask">
            <span
              class="word-inner"
              style="transition-delay:.14s"
            >
              beyond expectation.
            </span>
          </span>
        `;
  }

  const servicesTitle = $('#services-title');

  if (servicesTitle) {
    servicesTitle.innerHTML = t('servicesTitle');
  }

  const servicesIntro = $('#services-intro');

  if (servicesIntro) {
    servicesIntro.textContent = t('servicesIntro');
  }

  const aboutTitle = $('#about-title');

  if (aboutTitle) {
    aboutTitle.innerHTML = t('aboutTitle');
  }

  const quoteText = $('#quote-text');

  if (quoteText) {
    quoteText.textContent = t('quote');
  }

  const quoteAuthor = $('#quote-author');

  if (quoteAuthor) {
    quoteAuthor.textContent = t('author');
  }

  const aboutCopy = $('#about-copy');

  if (aboutCopy) {
    aboutCopy.innerHTML = t('about')
      .map(
        (paragraph, index) => `
          <p class="reveal" data-delay="${index + 2}">
            ${paragraph}
          </p>
        `
      )
      .join('');
  }

  const resultsTitle = $('#results-title');

  if (resultsTitle) {
    resultsTitle.innerHTML = t('resultsTitle');
  }

  const whyTitle = $('#why-title');

  if (whyTitle) {
    whyTitle.innerHTML = t('whyTitle');
  }

  const contactTitle = $('#contact-title');

  if (contactTitle) {
    contactTitle.innerHTML = t('contactTitle');
  }

  const contactIntro = $('#contact-intro');

  if (contactIntro) {
    contactIntro.textContent = t('contactIntro');
  }

  const contactInfo = $('#contact-info');

  if (contactInfo) {
    contactInfo.innerHTML = t('contact')
      .map(
        item => `
          <div>
            <span class="label">${item[0]}</span>
            <span class="value">${item[1]}</span>
          </div>
        `
      )
      .join('');
  }

  const langToggle = $('#lang-toggle');

  if (langToggle) {
    langToggle.textContent = lang === 'ar' ? 'EN' : 'عربي';
  }

  const footerLinks = $('#footer-links');

  if (footerLinks) {
    footerLinks.innerHTML = NAV_LINKS.map(
      item => `
        <button data-scroll="${item[2]}">
          ${lang === 'ar' ? item[1] : item[0]}
        </button>
      `
    ).join('');
  }

  renderServices();
  renderMarquee();
  renderResults();
  renderTestimonials();
  renderWhy();
  renderForm();

  $$('[data-scroll]').forEach(button => {
    button.onclick = () => {
      scrollToId(button.dataset.scroll);
    };
  });

  observe();
}

function renderServices() {
  const servicesGrid = $('#services-grid');

  if (!servicesGrid) return;

  servicesGrid.innerHTML = SERVICES.map(
    (service, index) => `
      <a
        class="service-card reveal"
        data-delay="${index % 3 + 1}"
        href="service-details.html?id=${index + 1}"
      >
        <div class="service-top">
          <div class="service-line"></div>

          <span class="service-number">
            ${service[0]}
          </span>

          <span class="service-arrow">
            ↗
          </span>
        </div>

        <h3>
          ${lang === 'ar' ? service[3] : service[1]}
        </h3>

        <p>
          ${lang === 'ar' ? service[4] : service[2]}
        </p>

        <span class="service-more">
          ${lang === 'ar' ? 'اكتشف التفاصيل' : 'View treatment details'}
          <span>→</span>
        </span>
      </a>
    `
  ).join('');
}

function renderMarquee() {
  const marquee = $('#marquee');

  if (!marquee) return;

  const items =
    lang === 'ar'
      ? [
          'تجديد الوجه',
          'الليزر',
          'الحقن التجميلية',
          'فن الحواجب',
          'نحت الجسم',
          'طقوس العافية'
        ]
      : [
          'Facial Renewal',
          'Laser Resurfacing',
          'Injectables',
          'Brow Artistry',
          'Body Contouring',
          'Wellness Rituals'
        ];

  marquee.innerHTML = [...items, ...items, ...items, ...items]
    .map(
      item => `
        <span>
          ${item} &nbsp;·
        </span>
      `
    )
    .join('');
}

function renderResults() {
  const resultsGrid = $('#results-grid');

  if (!resultsGrid) return;

  resultsGrid.innerHTML = RESULTS.map(
    (result, index) => `
      <div
        class="result reveal"
        data-delay="${index + 1}"
      >
        <img
          src="${result[0]}"
          alt="${lang === 'ar' ? result[3] : result[1]}"
        >

        <div class="result-overlay">
          <span class="tag">
            ${lang === 'ar' ? result[4] : result[2]}
          </span>

          <span class="label">
            ${lang === 'ar' ? result[3] : result[1]}
          </span>
        </div>
      </div>
    `
  ).join('');
}

function renderTestimonials() {
  const testimonial = TESTIMONIALS[activeTestimonial];

  const testimonialMain = $('#testimonial-main');

  if (testimonialMain) {
    testimonialMain.innerHTML = `
      <p class="quote-big">
        “${lang === 'ar' ? testimonial[6] : testimonial[3]}”
      </p>

      <div class="person">
        <div class="avatar">
          ${testimonial[0]}
        </div>

        <div>
          <div class="person-name">
            ${lang === 'ar' ? testimonial[4] : testimonial[1]}
          </div>

          <div class="person-role">
            ${lang === 'ar' ? testimonial[5] : testimonial[2]}
          </div>
        </div>
      </div>
    `;
  }

  const testimonialDots = $('#testimonial-dots');

  if (testimonialDots) {
    testimonialDots.innerHTML = TESTIMONIALS.map(
      (_, index) => `
        <button
          class="${index === activeTestimonial ? 'active' : ''}"
          style="width:${index === activeTestimonial ? 40 : 20}px"
          data-test="${index}"
        ></button>
      `
    ).join('');
  }

  const testimonialList = $('#testimonial-list');

  if (testimonialList) {
    testimonialList.innerHTML = TESTIMONIALS.map(
      (item, index) => `
        <div
          class="testimonial-item ${
            index === activeTestimonial ? 'active' : ''
          }"
          data-test="${index}"
        >
          <div class="person">
            <div
              class="avatar"
              style="width:28px;height:28px"
            >
              ${item[0]}
            </div>

            <span class="person-name">
              ${lang === 'ar' ? item[4] : item[1]}
            </span>
          </div>

          <p>
            “${lang === 'ar' ? item[6] : item[3]}”
          </p>
        </div>
      `
    ).join('');
  }

  $$('[data-test]').forEach(button => {
    button.onclick = () => {
      activeTestimonial = Number(button.dataset.test);
      renderTestimonials();
    };
  });
}

function renderWhy() {
  const whyGrid = $('#why-grid');

  if (!whyGrid) return;

  whyGrid.innerHTML = WHY.map(
    (item, index) => `
      <div
        class="why-item reveal"
        data-delay="${index + 1}"
      >
        <div class="why-icon">
          ${item[0]}
        </div>

        <h3>
          ${lang === 'ar' ? item[3] : item[1]}
        </h3>

        <p>
          ${lang === 'ar' ? item[4] : item[2]}
        </p>
      </div>
    `
  ).join('');
}

function renderForm() {
  const formArea = $('#form-area');

  if (!formArea) return;

  if (submitted) {
    const firstName = (formData.name || '').split(' ')[0];

    formArea.innerHTML = `
      <div class="success">

        <h3>
          ${
            lang === 'ar'
              ? `شكراً لك، ${firstName}.`
              : `Thank you, ${firstName}.`
          }
        </h3>

        <p>
          ${
            lang === 'ar'
              ? 'تلقّينا طلبك وسنتواصل معك خلال 24 ساعة لتأكيد موعد استشارتك.'
              : 'We have received your request and will be in touch within 24 hours to confirm your consultation.'
          }
        </p>

      </div>
    `;

    return;
  }

  formArea.innerHTML = `
    <form class="form-box">

      <div class="field">

        <label>
          ${lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
        </label>

        <input
          id="name"
          required
          placeholder="${
            lang === 'ar' ? 'سارة الأحمد' : 'Isabelle Laurent'
          }"
          value="${formData.name}"
        >

      </div>


      <div class="field">

        <label>
          ${lang === 'ar'
            ? 'البريد الإلكتروني'
            : 'Email Address'}
        </label>

        <input
          id="email"
          type="email"
          required
          placeholder="${
            lang === 'ar'
              ? 'sara@example.com'
              : 'isabelle@example.com'
          }"
          value="${formData.email}"
        >

      </div>


      <div class="field">

        <label>
          ${
            lang === 'ar'
              ? 'الخدمة المطلوبة'
              : 'Service of Interest'
          }
        </label>

        <select id="service">

          <option value="">
            ${
              lang === 'ar'
                ? 'اختر علاجاً…'
                : 'Select a treatment…'
            }
          </option>

          ${SERVICES.map(
            service => `
              <option
                value="${service[1]}"
                ${
                  formData.service === service[1]
                    ? 'selected'
                    : ''
                }
              >
                ${lang === 'ar' ? service[3] : service[1]}
              </option>
            `
          ).join('')}

        </select>

      </div>


      <div class="field">

        <label>
          ${
            lang === 'ar'
              ? 'رسالتك (اختياري)'
              : 'Message (Optional)'
          }
        </label>

        <textarea
          id="message"
          rows="4"
          placeholder="${
            lang === 'ar'
              ? 'أخبرنا عن مخاوف بشرتك…'
              : 'Tell us about your skin concerns…'
          }"
        >${formData.message}</textarea>

      </div>


      <button
        class="submit-btn"
        type="submit"
      >
        ${
          lang === 'ar'
            ? 'أطلب استشارتي'
            : 'Request My Consultation'
        }
      </button>

    </form>
  `;

  const form = $('#form-area form');

  if (!form) return;

  form.onsubmit = event => {
    event.preventDefault();

    formData = {
      name: $('#name').value,
      email: $('#email').value,
      service: $('#service').value,
      message: $('#message').value
    };

    submitted = true;

    renderForm();
  };
}

function observe() {
  const elements = $$('.reveal, .wipe, .result');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  elements.forEach(element => {
    observer.observe(element);
  });
}


/* =========================================
   LANGUAGE SWITCH
========================================= */

const languageToggle = $('#lang-toggle');

if (languageToggle) {
  languageToggle.onclick = () => {
    lang = lang === 'en' ? 'ar' : 'en';
    setLang();
  };
}


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = $('#menu-toggle');

if (menuToggle) {
  menuToggle.onclick = () => {
    $('#mobile-menu')?.classList.toggle('open');
    $('#menu-toggle')?.classList.toggle('open');
  };
}


/* =========================================
   HERO PARALLAX
========================================= */

window.addEventListener(
  'scroll',
  () => {
    const heroImage = $('#hero-img');

    if (!heroImage) return;

    heroImage.style.transform =
      `scale(1.12) translateY(${window.scrollY * 0.16}px)`;
  },
  {
    passive: true
  }
);


/* =========================================
   PAGE LOADER
========================================= */

setTimeout(() => {
  $('#page-loader')?.classList.add('exit');
}, 1500);

setTimeout(() => {
  $('#page-loader')?.remove();
}, 2700);


/* =========================================
   HERO ENTRANCE
========================================= */

setTimeout(() => {
  $('#nav')?.classList.add('nav-in');

  $$('.hero-fade').forEach(element => {
    element.classList.add('in');
  });

  $('#hero-title')?.classList.add('hero-text-ready');

  document.body.classList.add('site-ready');
}, 1750);


/* =========================================
   INITIAL RENDER
========================================= */

render();