import { parseDate } from "../../utils/time";
import style from './style';
import template from './template';

class Calander extends HTMLElement {
  clickHandler = this.eventHandler.bind(this);
  constructor() {
    super();
  }

  async connectedCallback() {
    const initialDate = parseDate(
      this.getAttribute('initialDate') ?
        new Date(this.getAttribute('initialDate')) :
        new Date()
    );
    this._initialDate = initialDate;
    this._today = parseDate(new Date());
    await this.setTemplate();
    this.setCurrentDate(initialDate);
    this.shadowRoot.addEventListener('click', this.clickHandler);
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener('click', this.clickHandler);
  }

  async setTemplate() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(style.content.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._dateWrap = this.shadowRoot.querySelector('section.dates');
    this._displayYear = this.shadowRoot.querySelector('header .display-year');
    this._months = this.shadowRoot.querySelectorAll('.months ul .month');
    return;
  }

  eventHandler({ target }) {
    const action = target.dataset.action;
    if (!action) return;
    switch (action) {
      case 'change-year': {
        const { year, month, date, day } = this._currentDate;
        let nextYear = year;
        if (target.dataset.value === 'prev-year') {
          nextYear -= 1;
        }

        if (target.dataset.value === 'next-year') {
          nextYear += 1;
        }
        return this.setCurrentDate(new Date(nextYear, month, date, day));
      }
      case 'change-month': {
        const { year, date, day } = this._currentDate;
        const month = Number(target.dataset.value);
        return this.setCurrentDate(new Date(year, month, date, day));
      }
    }
  }

  setCurrentDate(newDate) {
    this._currentDate = parseDate(newDate?.base ?? newDate);
    this.renderDate();
  }

  getPrevAndNextMonth({ year, month }) {
    const prevMonth = parseDate(new Date(year, month, 0));
    const nextMonth = parseDate(new Date(year, month + 1, 0));
    return { prevMonth, nextMonth };
  }

  createDayElement(day, disable = false) {
    const dateDiv = document.createElement('div');
    if (!disable) {
      dateDiv.className = 'day';
      dateDiv.setAttribute('data-action', 'select-date');
      dateDiv.setAttribute('data-value', day);
    } else {
      dateDiv.className = 'day disabled';
    }
    dateDiv.textContent = day;
    return dateDiv;
  }

  setSelectMonth(month) {
    this._months.forEach((_month, idx) => {
      return idx === month ? _month.classList.add('selected') : _month.classList.remove('selected');
    })
  }

  renderDate() {
    const { prevMonth, nextMonth } = this.getPrevAndNextMonth(this._currentDate);
    const dateFrag = new DocumentFragment();

    this.setSelectMonth(this._currentDate.month);
    this._displayYear.innerText = this._currentDate.year;

    let remainPrevDay = prevMonth.date - prevMonth.day + 1;
    let remainNextDay = 7 - (nextMonth.day === 7 ? 0 : 7 - nextMonth.day);

    for (; remainPrevDay <= prevMonth.date; remainPrevDay++) {
      dateFrag.appendChild(this.createDayElement(remainPrevDay, true));
    }

    for (let i = 1; i <= nextMonth.date; i++) {
      const dayElem = this.createDayElement(i);
      if (nextMonth.month === this._currentDate.month && i === this._currentDate.date) {
        dayElem.classList.add('today');
      }
      dateFrag.appendChild(dayElem);
    }

    for (let i = 1; i <= remainNextDay; i++) {
      dateFrag.appendChild(this.createDayElement(i, true));
    }

    this._dateWrap.innerHTML = '';
    this._dateWrap.appendChild(dateFrag.cloneNode(true));
  }
}

window.customElements.define('n-calander', Calander);

export default Calander;