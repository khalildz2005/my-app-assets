// نصوص وروابط الصور، قابل للتعديل بسهولة
const TEXTS = {
  "empty.title":"لا توجد مباريات حالية",
  "empty.message":"لم يتم العثور على مباريات. الرجاء المحاولة لاحقًا.",
  "badge.live":"مباشر",
  "status.live":"مباشر",
  "status.soon":"قريبًا",
  "status.finished":"منتهية",
  "button.watch":"مشاهدة الآن",
  "button.live":"▶ مشاهدة مباشرة",
  "button.alert":"🔔 تفعيل التنبيه",
  "button.summary":"📺 مشاهدة الملخص",
  "alert.live":"جاري فتح بث مباشر لمباراة {{home}} ضد {{away}}",
  "alert.soon":"تم تفعيل التنبيه لمباراة {{home}} ضد {{away}} في الساعة {{time}}",
  "alert.summary":"جاري تحميل ملخص مباراة {{home}} ضد {{away}}"
};

// مباراة واحدة فقط لتجربة
const MATCHES = [
  {
    id:1,
    home:"المغرب",
    away:"السعودية",
    time:"الآن",
    status:"LIVE",
    homeFlag:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
    awayFlag:"https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
    bg:"https://images.unsplash.com/photo-1521412644187-4f58a6821f40?fit=crop&w=600&h=300",
    score:"1 - 0"
  }
];