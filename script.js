function setLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-ar]').forEach(el => {
        el.textContent = (lang === 'ar') ? el.dataset.ar : el.dataset.en;
    });
    
    // حفظ اللغة في الذاكرة
    window.currentLang = lang;
}

// ===== القائمة المتجاوبة =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== بيانات الوظائف =====
const jobsData = [
    {
        id: 32,
        name: 'نظام اختيار المهنة',
        category: 'system',
        icon: 'fa-briefcase',
        shortDesc: 'نظام اختيار المهنة الأساسي',
        fullDesc: 'نظام شامل يتيح لك اختيار المهنة المناسبة من بين 60+ وظيفة متنوعة. يمكنك استكشاف الوظائف المختلفة ومعرفة متطلبات كل وظيفة قبل الاختيار.',
        requirements: ['المستوى 1 فما فوق', 'لا توجد مهنة حالية'],
        benefits: ['الوصول إلى أنظمة الوظيفة', 'إمكانية الترقي الوظيفي', 'كسب الرواتب']
    },
    {
        id: 33,
        name: 'نظام تغيير المهنة',
        category: 'system',
        icon: 'fa-sync-alt',
        shortDesc: 'تغيير المهنة في أي وقت',
        fullDesc: 'يتيح لك هذا النظام تغيير مهنتك الحالية إلى مهنة أخرى. قد يتطلب التغيير دفع رسوم أو فترة انتظار حسب القوانين.',
        requirements: ['امتلاك مهنة حالية', 'دفع رسوم التغيير'],
        benefits: ['تجربة وظائف مختلفة', 'المرونة في اختيار المسار']
    },
    {
        id: 34,
        name: 'نظام التدرج الوظيفي',
        category: 'system',
        icon: 'fa-chart-line',
        shortDesc: 'نظام الترقيات والتقدم المهني',
        fullDesc: 'نظام متقدم للترقي في الوظيفة من خلال إتمام المهام وتحقيق الإنجازات. كل ترقية تأتي مع مزايا إضافية وراتب أعلى.',
        requirements: ['الأداء الجيد', 'إتمام المهام المطلوبة', 'الوقت في المهنة'],
        benefits: ['زيادة الراتب', 'مهام متقدمة', 'مكانة اجتماعية']
    },
    {
        id: 35,
        name: 'نظام الرواتب',
        category: 'system',
        icon: 'fa-dollar-sign',
        shortDesc: 'نظام دفع الرواتب الأوتوماتيكي',
        fullDesc: 'نظام آلي لدفع الرواتب حسب الوظيفة والدرجة الوظيفية. يتم الدفع بشكل دوري وفقاً لجدول زمني محدد.',
        requirements: ['امتلاك وظيفة نشطة', 'العمل بانتظام'],
        benefits: ['دخل ثابت', 'مكافآت إضافية', 'حوافز الأداء']
    },
    {
        id: 36,
        name: 'مزارع',
        category: 'agriculture',
        icon: 'fa-tractor',
        shortDesc: 'زراعة المحاصيل وبيعها',
        fullDesc: 'كن مزارعاً محترفاً! قم بزراعة مختلف المحاصيل مثل القمح والذرة والخضروات. اعتنِ بمزرعتك وحصد المحاصيل وبعها في السوق.',
        requirements: ['شراء أرض زراعية', 'أدوات الزراعة الأساسية'],
        benefits: ['دخل مستقر', 'إمكانية التوسع', 'منتجات للبيع'],
        tasks: ['حرث الأرض', 'زراعة البذور', 'الري والعناية', 'الحصاد', 'البيع في السوق']
    },
    {
        id: 37,
        name: 'راعي ماشية',
        category: 'agriculture',
        icon: 'fa-horse',
        shortDesc: 'تربية الماشية والخيول',
        fullDesc: 'قم بتربية الماشية والخيول والأغنام. اعتنِ بالحيوانات، قدم لها الطعام والماء، وبع المنتجات الحيوانية.',
        requirements: ['مزرعة أو مرعى', 'علف للحيوانات'],
        benefits: ['منتجات متنوعة', 'دخل جيد', 'تجارة الحيوانات'],
        tasks: ['إطعام الماشية', 'تنظيف الحظائر', 'جمع المنتجات', 'بيع الحيوانات']
    },
    {
        id: 38,
        name: 'صائد',
        category: 'agriculture',
        icon: 'fa-crosshairs',
        shortDesc: 'صيد الحيوانات البرية',
        fullDesc: 'امتهن الصيد في البراري الشاسعة. اصطد الحيوانات البرية وبع جلودها ولحومها في السوق.',
        requirements: ['بندقية صيد', 'رخصة صيد'],
        benefits: ['حرية التنقل', 'دخل متغير', 'مواد نادرة'],
        tasks: ['تتبع الحيوانات', 'الصيد', 'السلخ', 'بيع المنتجات']
    },
    {
        id: 39,
        name: 'تاجر',
        category: 'trade',
        icon: 'fa-store',
        shortDesc: 'شراء وبيع البضائع',
        fullDesc: 'كن تاجراً ناجحاً! اشترِ البضائع بسعر منخفض وبعها بربح. سافر بين المدن لإيجاد أفضل الصفقات.',
        requirements: ['رأس مال أولي', 'عربة نقل'],
        benefits: ['أرباح عالية', 'مرونة في العمل', 'شبكة علاقات'],
        tasks: ['شراء البضائع', 'النقل بين المدن', 'البيع بربح', 'إدارة المخزون']
    },
    {
        id: 40,
        name: 'حداد',
        category: 'craft',
        icon: 'fa-hammer',
        shortDesc: 'صناعة الأدوات المعدنية',
        fullDesc: 'احترف الحدادة وصنع الأدوات والأسلحة. صمم قطع معدنية مخصصة للزبائن.',
        requirements: ['ورشة حدادة', 'معدات الحدادة', 'خام الحديد'],
        benefits: ['حرفة مربحة', 'طلب مستمر', 'زبائن دائمون'],
        tasks: ['تسخين المعدن', 'الطرق والتشكيل', 'صناعة الأدوات', 'الإصلاح']
    },
    {
        id: 41,
        name: 'نجار',
        category: 'craft',
        icon: 'fa-tools',
        shortDesc: 'صناعة الأثاث الخشبي',
        fullDesc: 'صنع الأثاث والهياكل الخشبية. من الطاولات إلى المنازل الكاملة!',
        requirements: ['ورشة نجارة', 'أدوات النجارة', 'خشب'],
        benefits: ['إبداع فني', 'مشاريع متنوعة', 'دخل جيد'],
        tasks: ['قطع الخشب', 'التشكيل', 'التجميع', 'التلميع']
    },
    {
        id: 42,
        name: 'سائق عربات',
        category: 'service',
        icon: 'fa-carriage',
        shortDesc: 'نقل الركاب والبضائع',
        fullDesc: 'قدم خدمات النقل للمواطنين. انقل الركاب والبضائع بين المدن والمواقع.',
        requirements: ['عربة خاصة', 'رخصة قيادة'],
        benefits: ['نصائح إضافية', 'مرونة في المواعيد', 'التعرف على الناس'],
        tasks: ['انتظار الزبائن', 'نقل الركاب', 'نقل البضائع', 'صيانة العربة']
    },
    {
        id: 43,
        name: 'عامل مناجم',
        category: 'agriculture',
        icon: 'fa-gem',
        shortDesc: 'التنقيب عن المعادن',
        fullDesc: 'اعمل في المناجم واستخرج المعادن الثمينة. ذهب، فضة، أحجار كريمة!',
        requirements: ['معدات التعدين', 'رخصة التعدين'],
        benefits: ['إمكانية ثروة سريعة', 'معادن ثمينة', 'مغامرة'],
        tasks: ['الحفر', 'الاستخراج', 'الفرز', 'البيع']
    },
    {
        id: 44,
        name: 'طبيب',
        category: 'medical',
        icon: 'fa-user-md',
        shortDesc: 'علاج المرضى والجرحى',
        fullDesc: 'كن طبيباً محترفاً! عالج المرضى والجرحى، أجرِ العمليات، ووفر الرعاية الصحية.',
        requirements: ['شهادة طبية', 'عيادة أو مستشفى', 'أدوات طبية'],
        benefits: ['راتب مرتفع', 'احترام المجتمع', 'إنقاذ الأرواح'],
        tasks: ['فحص المرضى', 'التشخيص', 'العلاج', 'الجراحة', 'وصف الأدوية']
    },
    {
        id: 45,
        name: 'ممرض',
        category: 'medical',
        icon: 'fa-notes-medical',
        shortDesc: 'مساعدة الأطباء ورعاية المرضى',
        fullDesc: 'ساعد الأطباء في رعاية المرضى. قدم الإسعافات الأولية والعناية الطبية الأساسية.',
        requirements: ['دورة تمريض', 'مستشفى أو عيادة'],
        benefits: ['وظيفة مطلوبة', 'عمل إنساني', 'تعلم مستمر'],
        tasks: ['قياس العلامات الحيوية', 'تقديم الأدوية', 'تضميد الجروح', 'مساعدة الطبيب']
    },
    {
        id: 46,
        name: 'صيدلي',
        category: 'medical',
        icon: 'fa-pills',
        shortDesc: 'بيع الأدوية والعلاجات',
        fullDesc: 'افتح صيدلية وبع الأدوية والعلاجات الطبية. حضّر الوصفات الطبية للمرضى.',
        requirements: ['رخصة صيدلية', 'محل تجاري', 'مخزون أدوية'],
        benefits: ['دخل ثابت', 'خدمة المجتمع', 'عمل آمن'],
        tasks: ['تحضير الأدوية', 'بيع المنتجات', 'استشارات طبية', 'إدارة المخزون']
    },
    {
        id: 47,
        name: 'صاحب حانة',
        category: 'service',
        icon: 'fa-beer',
        shortDesc: 'إدارة حانة وتقديم المشروبات',
        fullDesc: 'امتلك وأدر حانتك الخاصة! قدم المشروبات، استضف الزبائن، ونظم الفعاليات.',
        requirements: ['شراء أو استئجار حانة', 'رخصة تجارية', 'مخزون مشروبات'],
        benefits: ['أرباح جيدة', 'مركز اجتماعي', 'فعاليات خاصة'],
        tasks: ['تقديم المشروبات', 'استقبال الزبائن', 'إدارة الحانة', 'حل النزاعات']
    },
    {
        id: 48,
        name: 'عازف حانة',
        category: 'service',
        icon: 'fa-music',
        shortDesc: 'الترفيه الموسيقي في الحانات',
        fullDesc: 'كن عازفاً موسيقياً محترفاً! قدم العروض الموسيقية في الحانات وأسعد الزبائن.',
        requirements: ['آلة موسيقية', 'موهبة فنية'],
        benefits: ['إبداع فني', 'نصائح سخية', 'شهرة محلية'],
        tasks: ['العزف والغناء', 'التفاعل مع الجمهور', 'تقديم العروض']
    },
    {
        id: 49,
        name: 'مقامر محترف',
        category: 'service',
        icon: 'fa-dice',
        shortDesc: 'المقامرة والألعاب',
        fullDesc: 'احترف المقامرة! شارك في ألعاب الورق والنرد في الحانات والكازينوهات.',
        requirements: ['رأس مال للمقامرة', 'مهارات اللعب'],
        benefits: ['أرباح محتملة كبيرة', 'إثارة ومغامرة', 'مسابقات'],
        tasks: ['لعب البوكر', 'ألعاب النرد', 'المراهنات', 'البطولات']
    },
    {
        id: 50,
        name: 'حارس بنك',
        category: 'security',
        icon: 'fa-shield-alt',
        shortDesc: 'حماية البنك والأموال',
        fullDesc: 'احمِ البنك وأموال المواطنين من اللصوص والمجرمين. كن خط الدفاع الأول!',
        requirements: ['خبرة أمنية', 'سلاح', 'ترخيص أمني'],
        benefits: ['راتب ثابت', 'احترام', 'تأمين صحي'],
        tasks: ['حراسة المبنى', 'مراقبة الزوار', 'منع السرقات', 'الاستجابة للطوارئ']
    },
    {
        id: 51,
        name: 'حارس قطار',
        category: 'security',
        icon: 'fa-train',
        shortDesc: 'حماية القطارات والركاب',
        fullDesc: 'احمِ القطارات من قطاع الطرق واللصوص. تأكد من سلامة الركاب والبضائع.',
        requirements: ['خبرة عسكرية أو أمنية', 'سلاح', 'رخصة'],
        benefits: ['سفر مجاني', 'راتب جيد', 'إثارة'],
        tasks: ['حراسة القطار', 'حماية الركاب', 'صد الهجمات', 'التفتيش']
    },
    {
        id: 52,
        name: 'مراسل صحفي',
        category: 'service',
        icon: 'fa-newspaper',
        shortDesc: 'تغطية الأخبار والأحداث',
        fullDesc: 'كن صحفياً! غطِ الأحداث المهمة، اكتب المقالات، وانشر الأخبار للمجتمع.',
        requirements: ['دفتر ملاحظات', 'مهارات الكتابة'],
        benefits: ['حرية التنقل', 'معلومات حصرية', 'تأثير اجتماعي'],
        tasks: ['تغطية الأحداث', 'إجراء المقابلات', 'كتابة المقالات', 'النشر']
    },
    {
        id: 53,
        name: 'مصور',
        category: 'service',
        icon: 'fa-camera',
        shortDesc: 'التصوير الفوتوغرافي',
        fullDesc: 'التقط الصور المذهلة! صوّر المناظر الطبيعية، الأحداث، والأشخاص.',
        requirements: ['كاميرا', 'موهبة فنية'],
        benefits: ['إبداع فني', 'ذكريات خالدة', 'معارض فنية'],
        tasks: ['التصوير', 'تحميض الصور', 'بيع الصور', 'المعارض']
    },
    {
        id: 54,
        name: 'دليل صحراوي',
        category: 'service',
        icon: 'fa-compass',
        shortDesc: 'إرشاد المسافرين',
        fullDesc: 'كن دليلاً للمسافرين في البراري والصحاري. ساعدهم في الوصول لوجهاتهم بأمان.',
        requirements: ['معرفة بالمنطقة', 'خبرة في البقاء', 'حصان'],
        benefits: ['مغامرات', 'نصائح سخية', 'معرفة الأسرار'],
        tasks: ['إرشاد المسافرين', 'التخييم', 'الحماية من المخاطر', 'إيجاد الطرق']
    },
    {
        id: 55,
        name: 'صياد جوائز',
        category: 'security',
        icon: 'fa-user-secret',
        shortDesc: 'القبض على المطلوبين',
        fullDesc: 'اقبض على المجرمين الهاربين مقابل مكافآت. وظيفة خطرة لكنها مربحة!',
        requirements: ['مهارات قتالية', 'سلاح', 'رخصة صيد الجوائز'],
        benefits: ['مكافآت عالية', 'حرية العمل', 'سمعة قوية'],
        tasks: ['تتبع المطلوبين', 'القبض عليهم', 'تسليمهم للسلطات', 'جمع المكافآت']
    },
    {
        id: 56,
        name: 'حارس مدينة',
        category: 'security',
        icon: 'fa-user-shield',
        shortDesc: 'حماية النظام والأمن',
        fullDesc: 'حافظ على الأمن والنظام في المدينة. اقبض على المجرمين وحمِ المواطنين.',
        requirements: ['تدريب أمني', 'سلاح', 'شارة حارس'],
        benefits: ['احترام المجتمع', 'راتب حكومي', 'سلطة قانونية'],
        tasks: ['الدوريات', 'القبض على المجرمين', 'حل النزاعات', 'حماية المواطنين']
    },
    {
        id: 57,
        name: 'ساعي بريد',
        category: 'service',
        icon: 'fa-envelope',
        shortDesc: 'توصيل الرسائل والطرود',
        fullDesc: 'وصّل الرسائل والطرود بين المدن والمواطنين. خدمة بريدية موثوقة!',
        requirements: ['حصان أو عربة', 'رخصة بريد'],
        benefits: ['سفر مستمر', 'راتب ثابت', 'خدمة المجتمع'],
        tasks: ['جمع البريد', 'التوصيل', 'التوقيعات', 'الرحلات بين المدن']
    },
    {
        id: 58,
        name: 'عامل سكك حديد',
        category: 'service',
        icon: 'fa-subway',
        shortDesc: 'بناء وصيانة السكك الحديدية',
        fullDesc: 'ساهم في بناء وصيانة خطوط القطارات. وظيفة شاقة لكنها مهمة!',
        requirements: ['لياقة بدنية', 'أدوات البناء'],
        benefits: ['راتب جيد', 'عمل جماعي', 'بناء البنية التحتية'],
        tasks: ['وضع القضبان', 'الصيانة', 'الإصلاح', 'التفتيش']
    },
    {
        id: 59,
        name: 'بحار نهري',
        category: 'service',
        icon: 'fa-ship',
        shortDesc: 'نقل البضائع نهرياً',
        fullDesc: 'قد القوارب على الأنهار. انقل البضائع والركاب عبر الممرات المائية.',
        requirements: ['قارب', 'خبرة في الإبحار'],
        benefits: ['مناظر طبيعية', 'دخل جيد', 'حرية'],
        tasks: ['قيادة القارب', 'نقل البضائع', 'نقل الركاب', 'صيانة القارب']
    },
    {
        id: 60,
        name: 'تاجر خيول',
        category: 'trade',
        icon: 'fa-horse-head',
        shortDesc: 'شراء وبيع الخيول',
        fullDesc: 'اتجر في الخيول الأصيلة! اشترِ، دَرّب، وبع الخيول بأرباح عالية.',
        requirements: ['إسطبل', 'معرفة بالخيول', 'رأس مال'],
        benefits: ['أرباح ممتازة', 'خيول نادرة', 'سمعة تجارية'],
        tasks: ['شراء الخيول', 'التدريب', 'العناية', 'البيع']
    }
];

// ===== عرض الوظائف =====
const jobsGrid = document.getElementById('jobsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
let currentCategory = 'all';

function displayJobs(category = 'all') {
    const filteredJobs = category === 'all' 
        ? jobsData 
        : jobsData.filter(job => job.category === category);
    
    jobsGrid.innerHTML = filteredJobs.map(job => `
        <div class="job-card" onclick="showJobDetails(${job.id})">
            <div class="job-icon">
                <i class="fas ${job.icon}"></i>
            </div>
            <h3>${job.name}</h3>
            <span class="job-category">${getCategoryName(job.category)}</span>
            <p>${job.shortDesc}</p>
        </div>
    `).join('');
}

function getCategoryName(category) {
    const categories = {
        'system': 'نظام',
        'agriculture': 'زراعة ورعي',
        'trade': 'تجارة',
        'craft': 'حرف',
        'medical': 'طب',
        'service': 'خدمات',
        'security': 'أمن'
    };
    return categories[category] || category;
}

// فلترة الوظائف
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.dataset.category;
        currentCategory = category;
        displayJobs(category);
    });
});

// عرض تفاصيل الوظيفة
function showJobDetails(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    if (!job) return;
    
    const modal = document.getElementById('jobModal');
    const modalContent = document.getElementById('jobModalContent');
    
    modalContent.innerHTML = `
        <div class="job-details">
            <div class="job-icon" style="margin: 0 auto 1.5rem;">
                <i class="fas ${job.icon}"></i>
            </div>
            <h2 style="text-align: center; margin-bottom: 0.5rem;">${job.name}</h2>
            <p style="text-align: center; color: var(--text-secondary); margin-bottom: 2rem;">
                ${getCategoryName(job.category)}
            </p>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                    <i class="fas fa-info-circle"></i> الوصف
                </h3>
                <p style="color: var(--text-secondary); line-height: 1.8;">
                    ${job.fullDesc}
                </p>
            </div>
            
            ${job.requirements ? `
                <div style="margin-bottom: 2rem;">
                    <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                        <i class="fas fa-clipboard-check"></i> المتطلبات
                    </h3>
                    <ul style="list-style: none; padding: 0;">
                        ${job.requirements.map(req => `
                            <li style="padding: 0.5rem 0; color: var(--text-secondary); display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fas fa-check" style="color: var(--primary-color);"></i>
                                ${req}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
            
            ${job.benefits ? `
                <div style="margin-bottom: 2rem;">
                    <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                        <i class="fas fa-star"></i> المزايا
                    </h3>
                    <ul style="list-style: none; padding:
