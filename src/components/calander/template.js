const template = document.createElement('template');
template.innerHTML = `
  <header>
    <div class="nav left" data-action="change-year" data-value="prev-year">작년</div>
    <div class="display-year">2022</div>
    <div class="nav right" data-action="change-year" data-value="next-year">내년</div>
  </header>
  <section>
    <nav class="months">
      <ul>
        <li class="month" data-action="change-month" data-value="0">JAN</li>
        <li class="month" data-action="change-month" data-value="1">FEB</li>
        <li class="month" data-action="change-month" data-value="2">MAR</li>
        <li class="month" data-action="change-month" data-value="3">APR</li>
        <li class="month" data-action="change-month" data-value="4">MAY</li>
        <li class="month" data-action="change-month" data-value="5">JUN</li>
        <li class="month" data-action="change-month" data-value="6">JUL</li>
        <li class="month" data-action="change-month" data-value="7">AUG</li>
        <li class="month" data-action="change-month" data-value="8">SEP</li>
        <li class="month" data-action="change-month" data-value="9">OCT</li>
        <li class="month" data-action="change-month" data-value="10">NOV</li>
        <li class="month" data-action="change-month" data-value="11">DEC</li>
      </ul>
    </nav>
    <section class="days">
      <div class="day">MON</div>
      <div class="day">TUE</div>
      <div class="day">WED</div>
      <div class="day">THU</div>
      <div class="day">FRI</div>
      <div class="day text-blue">SAT</div>
      <div class="day text-red">SUN</div>
    </section>
    <section class="dates">
    </section>
  </section>
`;

export default template;
