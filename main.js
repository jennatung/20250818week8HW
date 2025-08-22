import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log('Hello world');

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },  

});

// 月曆
// 語系資料
const zh = {
  days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
  daysShort: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
  daysMin: ["日", "一", "二", "三", "四", "五", "六"],
  months: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ],
  monthsShort: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ],
  today: "今天",
  clear: "清除",
  format: "yyyy/mm/dd",
  timeFormat: "hh:mm aa",
  firstDay: 0,
};

// 設定停用日期
const disabledDate = ["2025-08-01", "2025-08-02","2025-08-03","2025-08-04","2025-08-05","2025-08-06","2025-08-07","2025-08-09","2025-08-10","2025-08-11","2025-08-14","2025-08-16","2025-08-17","2025-08-18","2025-08-19","2025-08-22","2025-08-23","2025-08-24","2025-08-25","2025-08-26","2025-08-27","2025-08-28","2025-08-29","2025-08-30","2025-08-31"];

// 加入月曆-1
const dp1 = new AirDatepicker("#airDatepicker1", {
  inline: true,
  locale: zh,
  navTitles: {
    days: `
        <div class="custom-nav-title">
          <span class="nav-year">yyyy 年</span>
          <span class="nav-month">M 月</span>
        </div>
      `,
  },
  showOtherMonths: false,
});
dp1.disableDate(disabledDate);

// 加入月曆-2
const dp2 = new AirDatepicker("#airDatepicker2", {
  inline: true,
  locale: zh,
  navTitles: {
    days: `
        <div class="custom-nav-title">
          <span class="nav-year">yyyy 年</span>
          <span class="nav-month">M 月</span>
        </div>
      `,
  },
  showOtherMonths: false,
});
dp2.disableDate(disabledDate);

// 加入月曆-3
const dp3 = new AirDatepicker("#airDatepicker3", {
  inline: true,
  locale: zh,
  navTitles: {
    days: `
        <div class="custom-nav-title">
          <span class="nav-year">yyyy 年</span>
          <span class="nav-month">M 月</span>
        </div>
      `,
  },
  showOtherMonths: false,
});
dp3.disableDate(disabledDate);