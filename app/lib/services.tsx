import { ReactNode } from 'react'
import { Lang } from './translations'

/* ──────────────────────────────────────────────────────────────
   Service detail content — bilingual (EN / AR), self-contained.
   The homepage Services grid maps its cards to these entries by
   order, and each `/services/[slug]` page is rendered from here.
   ────────────────────────────────────────────────────────────── */

export type GalleryImg = { file: string; dir?: string }
export type Capability = { title: string; desc: string }
export type Stat = { value: string; label: string }

export interface ServiceContent {
  title: string
  tagline: string
  /* Short lead paragraph shown in the page hero */
  intro: string
  /* Longer overview paragraph(s) */
  overview: string
  /* "What we deliver" — scope of work */
  capabilities: Capability[]
  /* "How we work" — execution steps */
  process: string[]
  /* "Deliverables & standards" — what the client receives */
  deliverables: string[]
  /* Field-relevant metrics */
  stats: Stat[]
}

export interface Service {
  slug: string
  /* Solid accent (badges, icon chip) */
  badgeClass: string
  /* Soft accent chip background + text */
  chipClass: string
  icon: ReactNode
  gallery: GalleryImg[]
  en: ServiceContent
  ar: ServiceContent
}

/* ── Shared icons (match the homepage Services grid) ──────────── */
const SolarIcon = (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)
const ElectricalIcon = (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)
const GeneratorIcon = (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
  </svg>
)
const FacilityIcon = (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)
const MaintenanceIcon = (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)
const ProcurementIcon = (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
)

/* ── Services (order matches translations.services.items) ─────── */
export const services: Service[] = [
  /* 1 ── Solar Energy Systems ─────────────────────────────────── */
  {
    slug: 'solar-energy',
    badgeClass: 'bg-amber-500',
    chipClass: 'bg-amber-500/10 text-amber-600',
    icon: SolarIcon,
    gallery: [
      { file: 'solar-rooftop-array.jpeg' },
      { file: 'solar-carport-02.jpeg' },
      { file: 'solar-farm-01.jpeg' },
      { file: 'solar-desert-01.jpeg' },
      { file: 'solar-aerial-school-01.jpeg' },
      { file: 'solar-rooftop-carpark.jpeg' },
    ],
    en: {
      title: 'Solar Energy Systems',
      tagline: 'Grid-tied & hybrid PV plants built for industrial-grade performance.',
      intro:
        'We design, install, and commission solar PV systems for industrial, commercial, and utility-scale sites — from rooftop and carport arrays to ground-mounted desert farms.',
      overview:
        'Makani delivers turnkey solar energy projects that hold up to the demands of real industrial operation. Our crews handle the full lifecycle — structural mounting, DC/AC cabling, inverter integration, protection, and grid synchronisation — and hand the system over fully tested with as-built documentation ready for consultant and utility approval. Every plant is engineered around the site: its load profile, available roof or land, shading, and the harsh thermal and dust conditions of the Egyptian and Gulf climate.',
      capabilities: [
        { title: 'Rooftop & Carport PV', desc: 'Ballasted and penetrative mounting on industrial roofs, warehouses, and shaded carport structures.' },
        { title: 'Ground-Mounted Solar Farms', desc: 'Pile and foundation works, tracker/fixed-tilt structures, and string layout for desert-scale arrays.' },
        { title: 'Inverter & Power Conversion', desc: 'String and central inverter integration, sizing, configuration, and monitoring setup.' },
        { title: 'DC/AC Cabling & Protection', desc: 'Combiner boxes, DC isolators, surge and earthing protection, and AC interconnection.' },
        { title: 'Grid-Tie & Net Metering', desc: 'Synchronisation, protection coordination, and utility-compliant interconnection.' },
        { title: 'Solar Water Pumping', desc: 'PV-driven pump systems for agricultural and remote off-grid applications.' },
      ],
      process: [
        'Site Survey & Energy Assessment',
        'System Design & Yield Modeling',
        'Structural & Electrical Engineering',
        'Mounting & Module Installation',
        'Inverter & Cabling Works',
        'Testing, Commissioning & Handover',
      ],
      deliverables: [
        'IEC-aligned design and string layout drawings',
        'Earthing, surge, and protection scheme',
        'Commissioning test reports and inverter configuration sheets',
        'As-built documentation and O&M manual',
        'Consultant- and utility-ready submittal package',
      ],
      stats: [
        { value: 'kWp–MWp', label: 'Project scale range' },
        { value: '100%', label: 'Tested before handover' },
        { value: '25 yr', label: 'Design service life' },
      ],
    },
    ar: {
      title: 'أنظمة الطاقة الشمسية',
      tagline: 'محطات طاقة شمسية مربوطة بالشبكة وهجينة بأداء صناعي موثوق.',
      intro:
        'نصمم ونركّب ونشغّل أنظمة الطاقة الشمسية الكهروضوئية للمواقع الصناعية والتجارية والمحطات الكبيرة — من أسطح المباني ومظلات السيارات إلى المزارع الأرضية في الصحراء.',
      overview:
        'تقدّم مكاني مشاريع طاقة شمسية متكاملة قادرة على تحمّل متطلبات التشغيل الصناعي الفعلي. تتولّى فرقنا دورة العمل الكاملة — التركيب الإنشائي، وتمديدات التيار المستمر والمتردد، وتكامل العاكس، والحماية، والمزامنة مع الشبكة — ويتم تسليم النظام مختبراً بالكامل مع مستندات «كما نُفّذ» جاهزة لاعتماد الاستشاري وشركة الكهرباء. تُصمَّم كل محطة وفق طبيعة الموقع: منحنى الأحمال، والمساحة المتاحة، والتظليل، وظروف الحرارة والأتربة القاسية في مناخ مصر والخليج.',
      capabilities: [
        { title: 'أسطح ومظلات السيارات', desc: 'تركيب على الأسطح الصناعية والمستودعات ومظلات السيارات بأنظمة تثبيت مناسبة.' },
        { title: 'مزارع شمسية أرضية', desc: 'أعمال الأساسات والركائز وهياكل التثبيت وتوزيع السلاسل للمحطات الصحراوية الكبيرة.' },
        { title: 'العاكس وتحويل الطاقة', desc: 'تكامل العواكس السلسلية والمركزية وتحديد المقاسات والإعداد وضبط المراقبة.' },
        { title: 'تمديدات وحماية', desc: 'صناديق التجميع وعوازل التيار المستمر وحماية الصواعق والتأريض والربط الكهربائي.' },
        { title: 'الربط بالشبكة', desc: 'المزامنة وتنسيق الحماية والربط المتوافق مع متطلبات شركة الكهرباء.' },
        { title: 'ضخ المياه بالطاقة الشمسية', desc: 'أنظمة ضخ تعمل بالطاقة الشمسية للتطبيقات الزراعية والمواقع النائية.' },
      ],
      process: [
        'المسح الميداني وتقييم الطاقة',
        'تصميم النظام ونمذجة الإنتاج',
        'الهندسة الإنشائية والكهربائية',
        'تركيب الهياكل والألواح',
        'أعمال العاكس والتمديدات',
        'الاختبار والتشغيل والتسليم',
      ],
      deliverables: [
        'مخططات تصميم وتوزيع سلاسل متوافقة مع IEC',
        'منظومة تأريض وحماية من الصواعق',
        'تقارير اختبار التشغيل وأوراق ضبط العاكس',
        'مستندات «كما نُفّذ» ودليل التشغيل والصيانة',
        'حزمة تقديم جاهزة للاستشاري وشركة الكهرباء',
      ],
      stats: [
        { value: 'كيلو–ميجا واط', label: 'نطاق حجم المشروع' },
        { value: '100%', label: 'اختبار قبل التسليم' },
        { value: '25 سنة', label: 'العمر التصميمي' },
      ],
    },
  },

  /* 2 ── Electrical Works ─────────────────────────────────────── */
  {
    slug: 'electrical-works',
    badgeClass: 'bg-blue-600',
    chipClass: 'bg-blue-600/10 text-blue-600',
    icon: ElectricalIcon,
    gallery: [
      { file: 'WhatsApp Image 2026-06-14 at 5.56.56 PM.jpeg' },
      { file: 'WhatsApp Image 2026-06-14 at 5.56.58 PM.jpeg' },
      { file: 'WhatsApp Image 2026-06-14 at 5.57.01 PM.jpeg' },
      { file: 'WhatsApp Image 2026-06-14 at 5.57.03 PM.jpeg' },
      { file: 'WhatsApp Image 2026-06-19 at 12.12.43 AM.jpeg', dir: 'generators' },
      { file: 'WhatsApp Image 2026-06-19 at 12.12.44 AM.jpeg', dir: 'generators' },
    ],
    en: {
      title: 'Electrical Works',
      tagline: 'Power distribution, control panels, and wiring executed to code.',
      intro:
        'We build and install low-voltage distribution systems — main and sub-main boards, control panels, cable management, and field wiring — for industrial and commercial facilities.',
      overview:
        'From the incoming supply to the final connection, Makani delivers electrical installations that are safe, traceable, and inspection-ready. We assemble and wire MDB, SMDB, and control panels, run containment and cabling, terminate and label circuits, and verify the system through insulation, continuity, and functional testing. Our work is coordinated with mechanical and civil trades on site so distribution boards, cable routes, and earthing are delivered clean, documented, and approved.',
      capabilities: [
        { title: 'MDB / SMDB Boards', desc: 'Main and sub-main distribution board supply, assembly, installation, and termination.' },
        { title: 'Control & Automation Panels', desc: 'Control panel build, PLC/relay wiring, and motor control centre installation.' },
        { title: 'Power & Lighting Distribution', desc: 'Circuit design, containment, wiring, and final connection for power and lighting.' },
        { title: 'Cable Management', desc: 'Tray, trunking, conduit, and ladder systems with proper segregation and support.' },
        { title: 'Earthing & Lightning Protection', desc: 'Equipotential bonding, earth pits, and lightning protection systems.' },
        { title: 'Testing & Commissioning', desc: 'Insulation resistance, continuity, polarity, and functional acceptance testing.' },
      ],
      process: [
        'Load Schedule & Single-Line Review',
        'Board & Panel Specification',
        'Containment & Cable Installation',
        'Board Mounting & Termination',
        'Testing & Inspection',
        'Energisation & Handover',
      ],
      deliverables: [
        'Single-line diagrams and panel schedules',
        'Cable schedules and circuit labeling',
        'Insulation and continuity test certificates',
        'Earthing test results',
        'As-built drawings and inspection sign-off',
      ],
      stats: [
        { value: 'LV', label: 'Low-voltage distribution' },
        { value: '100%', label: 'Circuits tested & labeled' },
        { value: 'IEC', label: 'Standards alignment' },
      ],
    },
    ar: {
      title: 'الأعمال الكهربائية',
      tagline: 'توزيع الطاقة ولوحات التحكم والتمديدات وفق الكود.',
      intro:
        'ننفّذ ونركّب أنظمة التوزيع منخفض الجهد — اللوحات الرئيسية والفرعية، ولوحات التحكم، وأنظمة حمل الكابلات، والتمديدات الميدانية — للمنشآت الصناعية والتجارية.',
      overview:
        'من نقطة التغذية وحتى التوصيل النهائي، تقدّم مكاني تركيبات كهربائية آمنة وقابلة للتتبّع وجاهزة للتفتيش. نقوم بتجميع وتوصيل لوحات MDB وSMDB ولوحات التحكم، ومدّ مسارات الكابلات والتمديدات، وترقيم الدوائر، والتحقق من النظام عبر اختبارات العزل والاستمرارية والتشغيل. تُنسَّق أعمالنا مع الأعمال الميكانيكية والمدنية في الموقع لتسليم اللوحات ومسارات الكابلات والتأريض نظيفة وموثّقة ومعتمدة.',
      capabilities: [
        { title: 'لوحات MDB / SMDB', desc: 'توريد وتجميع وتركيب وتوصيل اللوحات الرئيسية والفرعية.' },
        { title: 'لوحات التحكم والأتمتة', desc: 'تصنيع لوحات التحكم وتوصيل PLC/المرحّلات وتركيب مراكز التحكم بالمحركات.' },
        { title: 'توزيع القوى والإنارة', desc: 'تصميم الدوائر وأنظمة الحمل والتمديدات والتوصيل النهائي للقوى والإنارة.' },
        { title: 'أنظمة حمل الكابلات', desc: 'أحواض ومجاري وأنابيب وسلالم الكابلات مع الفصل والتثبيت السليم.' },
        { title: 'التأريض والحماية من الصواعق', desc: 'ربط الجهد المتساوي وآبار التأريض وأنظمة الحماية من الصواعق.' },
        { title: 'الاختبار والتشغيل', desc: 'اختبارات مقاومة العزل والاستمرارية والقطبية والقبول الوظيفي.' },
      ],
      process: [
        'مراجعة جدول الأحمال والمخطط الأحادي',
        'تحديد مواصفات اللوحات',
        'تركيب مسارات وكابلات',
        'تركيب اللوحات والتوصيل',
        'الاختبار والتفتيش',
        'التشغيل والتسليم',
      ],
      deliverables: [
        'مخططات أحادية الخط وجداول اللوحات',
        'جداول الكابلات وترقيم الدوائر',
        'شهادات اختبار العزل والاستمرارية',
        'نتائج اختبار التأريض',
        'مخططات «كما نُفّذ» واعتماد التفتيش',
      ],
      stats: [
        { value: 'جهد منخفض', label: 'توزيع منخفض الجهد' },
        { value: '100%', label: 'اختبار وترقيم الدوائر' },
        { value: 'IEC', label: 'مطابقة المعايير' },
      ],
    },
  },

  /* 3 ── Generator Systems ────────────────────────────────────── */
  {
    slug: 'generator-systems',
    badgeClass: 'bg-emerald-600',
    chipClass: 'bg-emerald-600/10 text-emerald-600',
    icon: GeneratorIcon,
    gallery: [
      { file: 'generators-engine-01.jpeg' },
      { file: 'WhatsApp Image 2026-06-19 at 12.11.26 AM.jpeg', dir: 'generators' },
      { file: 'WhatsApp Image 2026-06-19 at 12.11.27 AM.jpeg', dir: 'generators' },
      { file: 'WhatsApp Image 2026-06-19 at 12.11.28 AM.jpeg', dir: 'generators' },
      { file: 'WhatsApp Image 2026-06-14 at 5.56.55 PM.jpeg' },
      { file: 'WhatsApp Image 2026-06-19 at 12.11.27 AM (2).jpeg', dir: 'generators' },
    ],
    en: {
      title: 'Generator Systems',
      tagline: 'Reliable backup power — supplied, installed, and load-tested.',
      intro:
        'We supply, install, and commission diesel generator sets with automatic transfer, fuel systems, and load testing for dependable standby and prime power.',
      overview:
        'When the grid drops, the generator has to start, take load, and run clean — every time. Makani handles the complete generator scope: set placement and anti-vibration mounting, fuel and exhaust systems, ATS connection and synchronisation, control wiring, and full load-bank testing. We size the system to the facility’s critical load and prove it under real conditions before handover, so operations teams get backup power they can trust through outages and peak demand.',
      capabilities: [
        { title: 'Generator Supply & Sizing', desc: 'Selection and supply of diesel gensets matched to critical and standby load.' },
        { title: 'Installation & Foundation', desc: 'Set placement, anti-vibration mounting, and exhaust/silencer routing.' },
        { title: 'ATS & Changeover', desc: 'Automatic transfer switch connection, mains/genset changeover, and interlocks.' },
        { title: 'Fuel & Cooling Systems', desc: 'Day tanks, fuel lines, ventilation, and cooling arrangement.' },
        { title: 'Synchronisation & Paralleling', desc: 'Multi-set synchronisation and control for larger or redundant plants.' },
        { title: 'Load Testing & Commissioning', desc: 'Load-bank testing, step-load verification, and protection checks.' },
      ],
      process: [
        'Load Study & Genset Selection',
        'Civil & Foundation Preparation',
        'Set Installation & Connection',
        'ATS & Control Wiring',
        'Load-Bank & Functional Testing',
        'Commissioning & Handover',
      ],
      deliverables: [
        'Genset sizing calculation and datasheet',
        'ATS schematic and control wiring drawings',
        'Load-test report with step-load results',
        'Fuel and exhaust system layout',
        'Operation, maintenance, and start-up manual',
      ],
      stats: [
        { value: 'Standby', label: 'Prime & backup duty' },
        { value: 'ATS', label: 'Automatic transfer' },
        { value: '100%', label: 'Load-tested on site' },
      ],
    },
    ar: {
      title: 'أنظمة المولدات',
      tagline: 'طاقة احتياطية موثوقة — توريد وتركيب واختبار تحميل.',
      intro:
        'نوفّر ونركّب ونشغّل مجموعات المولدات الديزل مع التحويل التلقائي وأنظمة الوقود واختبار التحميل لطاقة احتياطية وأساسية يُعتمد عليها.',
      overview:
        'عند انقطاع الشبكة، يجب أن يبدأ المولّد ويتحمّل الأحمال ويعمل بكفاءة — في كل مرة. تتولّى مكاني نطاق المولّدات الكامل: وضع المجموعة وتركيبها المانع للاهتزاز، وأنظمة الوقود والعادم، وتوصيل مفتاح التحويل التلقائي والمزامنة، وتمديدات التحكم، واختبار التحميل الكامل. نحدّد حجم النظام وفق الحمل الحرج للمنشأة ونثبت أداءه في ظروف فعلية قبل التسليم، ليحصل فريق التشغيل على طاقة احتياطية موثوقة خلال الانقطاعات وذروة الطلب.',
      capabilities: [
        { title: 'توريد المولّدات وتحديد الحجم', desc: 'اختيار وتوريد مجموعات الديزل المناسبة للحمل الحرج والاحتياطي.' },
        { title: 'التركيب والأساسات', desc: 'وضع المجموعة والتركيب المانع للاهتزاز ومسارات العادم وكاتم الصوت.' },
        { title: 'مفتاح التحويل التلقائي', desc: 'توصيل ATS والتحويل بين الشبكة والمولّد ومنظومات التعشيق.' },
        { title: 'أنظمة الوقود والتبريد', desc: 'خزانات يومية وخطوط وقود وتهوية وترتيب التبريد.' },
        { title: 'المزامنة والتوازي', desc: 'مزامنة عدة مجموعات والتحكم بها للمحطات الكبيرة أو الاحتياطية.' },
        { title: 'اختبار التحميل والتشغيل', desc: 'اختبار بنك الأحمال والتحميل المتدرّج وفحوصات الحماية.' },
      ],
      process: [
        'دراسة الأحمال واختيار المولّد',
        'تجهيز الأعمال المدنية والأساسات',
        'تركيب المجموعة والتوصيل',
        'توصيل ATS وتمديدات التحكم',
        'اختبار بنك الأحمال والتشغيل',
        'التشغيل والتسليم',
      ],
      deliverables: [
        'حساب تحديد حجم المولّد وورقة المواصفات',
        'مخطط ATS ورسومات تمديدات التحكم',
        'تقرير اختبار التحميل مع نتائج التحميل المتدرّج',
        'مخطط أنظمة الوقود والعادم',
        'دليل التشغيل والصيانة وبدء التشغيل',
      ],
      stats: [
        { value: 'احتياطي', label: 'تشغيل أساسي واحتياطي' },
        { value: 'ATS', label: 'تحويل تلقائي' },
        { value: '100%', label: 'اختبار تحميل في الموقع' },
      ],
    },
  },

  /* 4 ── Facility Management ──────────────────────────────────── */
  {
    slug: 'facility-management',
    badgeClass: 'bg-indigo-600',
    chipClass: 'bg-indigo-600/10 text-indigo-600',
    icon: FacilityIcon,
    gallery: [
      { file: 'WhatsApp Image 2026-06-14 at 5.56.57 PM.jpeg' },
      { file: 'solar-rooftop-foundations.jpeg' },
      { file: 'WhatsApp Image 2026-06-14 at 5.57.08 PM.jpeg' },
      { file: 'WhatsApp Image 2026-06-19 at 12.11.28 AM (2).jpeg', dir: 'generators' },
      { file: 'WhatsApp Image 2026-06-14 at 5.56.59 PM.jpeg' },
      { file: 'solar-carport-03.jpeg' },
    ],
    en: {
      title: 'Facility Management',
      tagline: 'Integrated hard-services operation that keeps facilities running.',
      intro:
        'We provide integrated facility management covering electrical, mechanical, and HVAC systems — keeping industrial and commercial buildings safe, efficient, and continuously operational.',
      overview:
        'Makani operates facilities the way an engineering contractor would — with planned maintenance schedules, fast fault response, and clear documentation behind every visit. Our teams manage the building’s hard services end to end: electrical distribution, HVAC and mechanical plant, pumps, generators, and supporting utilities. We combine preventive routines with on-call corrective support to reduce downtime, extend asset life, and keep operations and safety compliance on track across single sites and multi-building portfolios.',
      capabilities: [
        { title: 'Electrical Operations', desc: 'Distribution boards, lighting, power, and standby systems upkeep and inspection.' },
        { title: 'HVAC & Mechanical', desc: 'Air-conditioning, ventilation, pumps, and mechanical plant maintenance.' },
        { title: 'Planned Preventive Maintenance', desc: 'Scheduled service routines with checklists and asset history records.' },
        { title: 'Reactive & On-Call Support', desc: 'Rapid fault response and corrective works to minimise downtime.' },
        { title: 'Asset & Utility Management', desc: 'Asset registers, condition tracking, and utility/energy monitoring.' },
        { title: 'Safety & Compliance', desc: 'Statutory checks, safety routines, and inspection-ready documentation.' },
      ],
      process: [
        'Facility Survey & Asset Register',
        'Maintenance Plan & SLA Setup',
        'Preventive Service Schedule',
        'Reactive Response & Repairs',
        'Performance & Condition Reporting',
        'Continuous Improvement Review',
      ],
      deliverables: [
        'Asset register and maintenance plan',
        'Preventive maintenance checklists and schedules',
        'Service visit reports and fault logs',
        'Spare-parts and consumables tracking',
        'Periodic performance and compliance reports',
      ],
      stats: [
        { value: '98%+', label: 'PM compliance' },
        { value: '4–8 hrs', label: 'Emergency response' },
        { value: '24/7', label: 'On-call coverage' },
      ],
    },
    ar: {
      title: 'إدارة المرافق',
      tagline: 'تشغيل متكامل للخدمات الفنية يحافظ على استمرارية المنشآت.',
      intro:
        'نقدّم إدارة مرافق متكاملة تشمل الأنظمة الكهربائية والميكانيكية والتكييف — للحفاظ على أمان وكفاءة واستمرارية المباني الصناعية والتجارية.',
      overview:
        'تدير مكاني المرافق بعقلية مقاول هندسي — بجداول صيانة مخطّطة، واستجابة سريعة للأعطال، وتوثيق واضح خلف كل زيارة. تدير فرقنا الخدمات الفنية للمبنى من البداية إلى النهاية: التوزيع الكهربائي، وأنظمة التكييف والميكانيكا، والمضخات، والمولّدات، والمرافق المساندة. نجمع بين الصيانة الوقائية المجدولة والدعم التصحيحي عند الطلب لتقليل التوقّف، وإطالة عمر الأصول، والحفاظ على الامتثال التشغيلي والسلامة عبر المواقع المفردة والمجمّعات متعددة المباني.',
      capabilities: [
        { title: 'التشغيل الكهربائي', desc: 'صيانة وتفتيش لوحات التوزيع والإنارة والقوى والأنظمة الاحتياطية.' },
        { title: 'التكييف والميكانيكا', desc: 'صيانة أنظمة التكييف والتهوية والمضخات والمعدات الميكانيكية.' },
        { title: 'الصيانة الوقائية المخطّطة', desc: 'روتين خدمة مجدول مع قوائم فحص وسجلات تاريخ الأصول.' },
        { title: 'الدعم التصحيحي عند الطلب', desc: 'استجابة سريعة للأعطال وأعمال تصحيحية لتقليل التوقّف.' },
        { title: 'إدارة الأصول والمرافق', desc: 'سجلات الأصول وتتبّع الحالة ومراقبة استهلاك الطاقة.' },
        { title: 'السلامة والامتثال', desc: 'الفحوصات النظامية وروتين السلامة والتوثيق الجاهز للتفتيش.' },
      ],
      process: [
        'مسح المنشأة وسجل الأصول',
        'خطة الصيانة واتفاقية مستوى الخدمة',
        'جدول الصيانة الوقائية',
        'الاستجابة والإصلاحات',
        'تقارير الأداء والحالة',
        'مراجعة التحسين المستمر',
      ],
      deliverables: [
        'سجل الأصول وخطة الصيانة',
        'قوائم وجداول الصيانة الوقائية',
        'تقارير زيارات الخدمة وسجلات الأعطال',
        'تتبّع قطع الغيار والمستهلكات',
        'تقارير دورية للأداء والامتثال',
      ],
      stats: [
        { value: '98%+', label: 'الالتزام بالصيانة الوقائية' },
        { value: '4–8 ساعات', label: 'الاستجابة الطارئة' },
        { value: '24/7', label: 'تغطية عند الطلب' },
      ],
    },
  },

  /* 5 ── Maintenance Services ─────────────────────────────────── */
  {
    slug: 'maintenance-services',
    badgeClass: 'bg-violet-600',
    chipClass: 'bg-violet-600/10 text-violet-600',
    icon: MaintenanceIcon,
    gallery: [
      { file: 'maintenance-coating-qa.jpeg' },
      { file: 'WhatsApp Image 2026-06-19 at 12.12.43 AM (2).jpeg', dir: 'generators' },
      { file: 'WhatsApp Image 2026-06-14 at 5.57.05 PM.jpeg' },
      { file: 'generators-engine-01.jpeg' },
      { file: 'WhatsApp Image 2026-06-14 at 5.57.04 PM.jpeg' },
      { file: 'WhatsApp Image 2026-06-19 at 12.11.27 AM (4).jpeg', dir: 'generators' },
    ],
    en: {
      title: 'Maintenance Services',
      tagline: 'Preventive & corrective maintenance for industrial uptime.',
      intro:
        'We deliver preventive and corrective maintenance for industrial and commercial environments — keeping equipment reliable, safe, and available when production depends on it.',
      overview:
        'Built on a strong maintenance background, Makani helps facilities move from reactive firefighting to planned, data-backed upkeep. We run scheduled preventive routines, condition checks, and rapid corrective interventions across electrical, mechanical, and power equipment. Every job is documented — findings, parts used, and recommendations — so reliability improves over time and unplanned downtime keeps falling. Our crews mobilise fast and are comfortable working inside live industrial environments under strict safety control.',
      capabilities: [
        { title: 'Preventive Maintenance', desc: 'Scheduled inspection, servicing, and calibration to prevent failures before they happen.' },
        { title: 'Corrective Repairs', desc: 'Diagnosis and repair of electrical, mechanical, and power equipment faults.' },
        { title: 'Condition Monitoring', desc: 'Thermal, vibration, and load checks to catch early signs of wear.' },
        { title: 'Emergency Breakdown Response', desc: 'Fast mobilisation to restore critical equipment and minimise losses.' },
        { title: 'Shutdown & Overhaul Support', desc: 'Planned shutdown works, overhauls, and equipment refurbishment.' },
        { title: 'Maintenance Records', desc: 'Full job documentation, asset history, and improvement recommendations.' },
      ],
      process: [
        'Equipment Assessment & Baseline',
        'Maintenance Schedule Design',
        'Preventive Service Execution',
        'Fault Diagnosis & Repair',
        'Testing & Verification',
        'Reporting & Recommendations',
      ],
      deliverables: [
        'Preventive maintenance schedule and checklists',
        'Inspection and condition-monitoring reports',
        'Repair records with root-cause notes',
        'Spare-parts usage and recommendations',
        'Reliability improvement summary',
      ],
      stats: [
        { value: '<3%', label: 'Rework rate' },
        { value: '4–8 hrs', label: 'Emergency response' },
        { value: '100%', label: 'Documented jobs' },
      ],
    },
    ar: {
      title: 'خدمات الصيانة',
      tagline: 'صيانة وقائية وتصحيحية لاستمرارية التشغيل الصناعي.',
      intro:
        'نقدّم الصيانة الوقائية والتصحيحية للبيئات الصناعية والتجارية — للحفاظ على موثوقية المعدات وسلامتها وجاهزيتها عندما يعتمد عليها الإنتاج.',
      overview:
        'بالاعتماد على خلفية قوية في الصيانة، تساعد مكاني المنشآت على الانتقال من ردّ الفعل الطارئ إلى صيانة مخطّطة مدعومة بالبيانات. نطبّق روتيناً وقائياً مجدولاً، وفحوصات حالة، وتدخّلات تصحيحية سريعة عبر المعدات الكهربائية والميكانيكية وأنظمة القوى. يُوثَّق كل عمل — الملاحظات، والقطع المستخدمة، والتوصيات — لتتحسّن الموثوقية مع الوقت ويستمر انخفاض التوقّف غير المخطّط. تتحرّك فرقنا بسرعة وتعمل بكفاءة داخل البيئات الصناعية الحيّة تحت ضوابط سلامة صارمة.',
      capabilities: [
        { title: 'الصيانة الوقائية', desc: 'فحص وخدمة ومعايرة مجدولة لمنع الأعطال قبل حدوثها.' },
        { title: 'الإصلاحات التصحيحية', desc: 'تشخيص وإصلاح أعطال المعدات الكهربائية والميكانيكية وأنظمة القوى.' },
        { title: 'مراقبة الحالة', desc: 'فحوصات حرارية واهتزازية والأحمال لاكتشاف علامات التآكل المبكرة.' },
        { title: 'الاستجابة للأعطال الطارئة', desc: 'تحرّك سريع لإعادة تشغيل المعدات الحرجة وتقليل الخسائر.' },
        { title: 'دعم الإيقاف والعمرة', desc: 'أعمال الإيقاف المخطّط والعمرات وتجديد المعدات.' },
        { title: 'سجلات الصيانة', desc: 'توثيق كامل للأعمال وتاريخ الأصول وتوصيات التحسين.' },
      ],
      process: [
        'تقييم المعدات وخط الأساس',
        'تصميم جدول الصيانة',
        'تنفيذ الصيانة الوقائية',
        'تشخيص الأعطال والإصلاح',
        'الاختبار والتحقق',
        'التقارير والتوصيات',
      ],
      deliverables: [
        'جدول وقوائم الصيانة الوقائية',
        'تقارير الفحص ومراقبة الحالة',
        'سجلات الإصلاح مع ملاحظات السبب الجذري',
        'استهلاك قطع الغيار والتوصيات',
        'ملخص تحسين الموثوقية',
      ],
      stats: [
        { value: '<3%', label: 'معدل إعادة العمل' },
        { value: '4–8 ساعات', label: 'الاستجابة الطارئة' },
        { value: '100%', label: 'أعمال موثّقة' },
      ],
    },
  },

  /* 6 ── Technical Procurement ────────────────────────────────── */
  {
    slug: 'technical-procurement',
    badgeClass: 'bg-rose-600',
    chipClass: 'bg-rose-600/10 text-rose-600',
    icon: ProcurementIcon,
    gallery: [
      { file: 'WhatsApp Image 2026-06-14 at 5.57.09 PM.jpeg' },
      { file: 'WhatsApp Image 2026-06-19 at 12.12.44 AM (2).jpeg', dir: 'generators' },
      { file: 'solar-farm-03.jpeg' },
      { file: 'WhatsApp Image 2026-06-14 at 5.57.02 PM.jpeg' },
      { file: 'WhatsApp Image 2026-06-19 at 12.11.28 AM (3).jpeg', dir: 'generators' },
      { file: 'WhatsApp Image 2026-06-14 at 5.57.07 PM.jpeg' },
    ],
    en: {
      title: 'Technical Procurement',
      tagline: 'Industrial supply chain, spare parts, and material sourcing.',
      intro:
        'We support projects and operations with technical procurement — sourcing industrial materials, spare parts, and equipment to the right specification, on time, at the right cost.',
      overview:
        'Material availability makes or breaks a schedule. Makani brings procurement capability that understands the engineering behind the order — so what arrives on site matches the specification, the standard, and the application. We manage sourcing from qualified suppliers, technical comparison and approval, expediting, and delivery coordination for electrical, solar, generator, and mechanical materials. The result is fewer site delays, compatible parts, and a documented supply chain that holds up to consultant and client review.',
      capabilities: [
        { title: 'Material Sourcing', desc: 'Sourcing electrical, solar, mechanical, and general industrial materials to spec.' },
        { title: 'Spare Parts Supply', desc: 'OEM and equivalent spare parts for generators, panels, and plant equipment.' },
        { title: 'Technical Evaluation', desc: 'Specification compliance checks, comparisons, and submittal preparation.' },
        { title: 'Supplier Management', desc: 'Qualified vendor selection, quotation handling, and order placement.' },
        { title: 'Expediting & Logistics', desc: 'Delivery follow-up, scheduling, and site coordination to protect timelines.' },
        { title: 'Quality & Documentation', desc: 'Material certificates, inspection on receipt, and full procurement records.' },
      ],
      process: [
        'Requirement & Specification Review',
        'Supplier Sourcing & RFQ',
        'Technical & Commercial Evaluation',
        'Approval & Order Placement',
        'Expediting & Inspection',
        'Delivery & Documentation',
      ],
      deliverables: [
        'Specification-compliant material submittals',
        'Supplier comparison and selection records',
        'Purchase orders and delivery schedules',
        'Material test/quality certificates',
        'Goods-received and inspection documentation',
      ],
      stats: [
        { value: 'Spec', label: 'Compliance-first sourcing' },
        { value: 'On-time', label: 'Delivery focus' },
        { value: '100%', label: 'Documented orders' },
      ],
    },
    ar: {
      title: 'المشتريات التقنية',
      tagline: 'سلسلة توريد صناعية وقطع غيار وتوريد مواد.',
      intro:
        'ندعم المشاريع والتشغيل بالمشتريات التقنية — توريد المواد الصناعية وقطع الغيار والمعدات بالمواصفة الصحيحة، في الوقت المناسب، وبالتكلفة المناسبة.',
      overview:
        'توافر المواد يصنع الجدول الزمني أو يكسره. تقدّم مكاني قدرة مشتريات تفهم الهندسة خلف الطلب — بحيث يطابق ما يصل إلى الموقع المواصفة والمعيار والتطبيق. ندير التوريد من موردين مؤهّلين، والمقارنة الفنية والاعتماد، والمتابعة، وتنسيق التسليم للمواد الكهربائية والشمسية والمولّدات والميكانيكية. والنتيجة تأخيرات أقل في الموقع، وقطع متوافقة، وسلسلة توريد موثّقة تصمد أمام مراجعة الاستشاري والعميل.',
      capabilities: [
        { title: 'توريد المواد', desc: 'توريد المواد الكهربائية والشمسية والميكانيكية والصناعية وفق المواصفة.' },
        { title: 'توريد قطع الغيار', desc: 'قطع غيار أصلية ومكافئة للمولّدات واللوحات ومعدات المنشأة.' },
        { title: 'التقييم الفني', desc: 'فحص مطابقة المواصفات والمقارنات وإعداد ملفات التقديم.' },
        { title: 'إدارة الموردين', desc: 'اختيار موردين مؤهّلين ومعالجة عروض الأسعار وإصدار الطلبات.' },
        { title: 'المتابعة والخدمات اللوجستية', desc: 'متابعة التسليم والجدولة والتنسيق الميداني لحماية الجداول الزمنية.' },
        { title: 'الجودة والتوثيق', desc: 'شهادات المواد والفحص عند الاستلام وسجلات مشتريات كاملة.' },
      ],
      process: [
        'مراجعة المتطلبات والمواصفات',
        'توريد الموردين وطلب عروض الأسعار',
        'التقييم الفني والتجاري',
        'الاعتماد وإصدار الطلب',
        'المتابعة والفحص',
        'التسليم والتوثيق',
      ],
      deliverables: [
        'ملفات تقديم مواد مطابقة للمواصفات',
        'سجلات مقارنة واختيار الموردين',
        'أوامر الشراء وجداول التسليم',
        'شهادات اختبار/جودة المواد',
        'مستندات استلام البضائع والفحص',
      ],
      stats: [
        { value: 'مواصفة', label: 'توريد يلتزم بالمواصفة' },
        { value: 'في الموعد', label: 'تركيز على التسليم' },
        { value: '100%', label: 'طلبات موثّقة' },
      ],
    },
  },
]

export const serviceSlugs = services.map((s) => s.slug)

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

/* ── Shared UI labels for the detail pages (bilingual) ────────── */
export const detailUI: Record<Lang, {
  back: string
  servicesCrumb: string
  homeCrumb: string
  overview: string
  whatWeDeliver: string
  whatWeDeliverSub: string
  howWeWork: string
  howWeWorkSub: string
  deliverables: string
  deliverablesSub: string
  gallery: string
  gallerySub: string
  ctaTitle: string
  ctaBody: string
  ctaButton: string
  ctaWhatsapp: string
  otherServices: string
  learnMore: string
}> = {
  en: {
    back: 'Back to Services',
    servicesCrumb: 'Services',
    homeCrumb: 'Home',
    overview: 'Overview',
    whatWeDeliver: 'What We Deliver',
    whatWeDeliverSub: 'Scope of Work',
    howWeWork: 'How We Work',
    howWeWorkSub: 'Our Execution Process',
    deliverables: 'Deliverables & Standards',
    deliverablesSub: 'What You Receive',
    gallery: 'Project Gallery',
    gallerySub: 'Selected Work',
    ctaTitle: 'Have a project in this field?',
    ctaBody: 'Tell us about your site and requirements — our team will get back to you with a practical, consultant-ready approach.',
    ctaButton: 'Request a Consultation',
    ctaWhatsapp: 'WhatsApp Us',
    otherServices: 'Explore Other Services',
    learnMore: 'Learn more',
  },
  ar: {
    back: 'العودة إلى الخدمات',
    servicesCrumb: 'الخدمات',
    homeCrumb: 'الرئيسية',
    overview: 'نظرة عامة',
    whatWeDeliver: 'ما نقدمه',
    whatWeDeliverSub: 'نطاق العمل',
    howWeWork: 'كيف نعمل',
    howWeWorkSub: 'منهجية التنفيذ',
    deliverables: 'المخرجات والمعايير',
    deliverablesSub: 'ما تحصل عليه',
    gallery: 'معرض الأعمال',
    gallerySub: 'أعمال مختارة',
    ctaTitle: 'لديك مشروع في هذا المجال؟',
    ctaBody: 'أخبرنا عن موقعك ومتطلباتك — وسيتواصل معك فريقنا بنهج عملي جاهز للاعتماد من الاستشاري.',
    ctaButton: 'اطلب استشارة',
    ctaWhatsapp: 'تواصل عبر واتساب',
    otherServices: 'استكشف خدمات أخرى',
    learnMore: 'اعرف المزيد',
  },
}
