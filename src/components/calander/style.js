const style = document.createElement('template');
style.innerHTML = `
  <style>
    :host {
      flex: 1;
      // max-width: 0%;
    }

    ul,
    .days {
      margin: 0;
      padding: 0;
      display: flex;
    }

    li {
      list-style: none;
    }
    
    .days .day {
      cursor: auto;
    }

    li,
    .day {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
    }

    li {
      width: calc(100% / 12);
      font-weight: 600;
      opacity: .2;
      transition: opacity .25s ease-out;
    }

    li:hover,
    li.selected {
      opacity: 1;
    }

    .dates .disabled {
      cursor: not-allowed;
      opacity: .3;
    }

    header {
      display: flex;
      margin-bottom: 1rem;
      justify-content: space-between;
      padding: 2rem 2rem 1rem;
      align-items: center;
    }

    .display-year {
      font-weight: 600;
      font-size: 2rem;
    }

    .nav {
      font-weight: 700;
      font-size: 1rem;
      opacity: .5;
      cursor: pointer;
      user-select: none;
    }

    .dates .day {
      background-color: #fff;
      transition: background-color .25s ease;
    }

    .dates .day:not(.disabled):hover {
      color: lightgreen;
    }

    .dates .day:not(.disabled):hover,
    .dates .day:not(.disabled).selected,
    .dates .day.selected {
      background-color: tomato;
      color: #fff;
    }

    .dates .day.today {
      position: relative;
      background-color: #ececec;
    }

    .today:after {
      position: absolute;
      top: .2rem;
      right: .2rem;
      content: 'today';
      font-size: .8rem;
      color: tomato;
    }

    .nav:hover {
      opacity: 1;
      transition: opacity .25s ease-out;
    }

    li:active,
    .nav:active {
      transform: translateY(.05rem);
    }

    .months {
      margin-bottom: 3rem;
    }
    
    .dates {
      display: flex;
      flex-flow: wrap;
    }

    .dates .day{
      aspect-ratio: 1 / .8;
    }

    .days {
      padding-bottom: 1.2rem;
      border-bottom: 1px solid #333;
    }

    .day {
      width: calc(100% / 7);
      font-weight: 500;
    }

    .text-blue {
      color: lightblue;
    }

    .text-red {
      color: lightcoral;
    }
  </style>
`;

export default style;