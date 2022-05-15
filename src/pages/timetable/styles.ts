  function isSelected(day: any, value: any) {
    return value.isSame(day, 'day');
  }
  function beforeToday(day: any) {
    return day.isBefore(new Date(), 'day');
  }
  function isToday(day: any) {
    return day.isSame(new Date(), 'day');
  }
  export default function dayStyles(day: any, value: any) {
    if (beforeToday(day)) return 'before';
    if (isSelected(day, value)) return 'selected';
    if (isToday(day)) return 'today';
    return '';
  }