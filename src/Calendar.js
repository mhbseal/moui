import React from 'react';
import classNames from 'classnames';
import { date } from './mo-0.2.0.min.js';

const Calendar = React.createClass({
  propTypes: {
    weekDays: React.PropTypes.array,
    displayMonthNum: React.PropTypes.number,
    startTime: React.PropTypes.object,
    MonthFormat: React.PropTypes.string,
    selected: React.PropTypes.object,
    specialDates: React.PropTypes.array,
  },
  getDefaultProps() {
    return {
      weekDays: ['日', '一', '二', '三', '四', '五', '六'],
      displayMonthNum: 3,
      startTime: null,
      MonthFormat: 'YYYY年M月',
      selected: null,
      specialDates: []
    };
  },
  getInitialState() {
    return {
      selected: this.props.selected
    };
  },
  getDay(dayComponent, year, month, day) {
    this.props.specialDates.forEach(dates => {
      for (let key in dates.date) {
        let ret = dates.handler(key, dates.date[key]);

        if (ret.year && ret.year != year || ret.month && ret.month - 1 != month || ret.day && ret.day != day) {
          continue;
        }

        dayComponent = ret.render(dayComponent);
        break;
      }
    })
    return dayComponent;
  },
  render() {
    let
      props = this.props,
      monthComponent = [],
      startTime = props.startTime || new Date(),
      year = startTime.getFullYear(),
      weekComponent = props.weekDays.map(weekDay => {
        return (
          <li key={weekDay}>{weekDay}</li>
        )
      });

    for (let i = 0; i < props.displayMonthNum; i++) {
      let
        key = 0,
        changedTime = date.add(startTime, 'Month', i),
        changedYear = changedTime.getFullYear(),
        changedMonth = changedTime.getMonth(),
        daysComponent = [],
        dayOfWeekOnFirst = (new Date(changedYear, changedMonth, 1)).getDay(),
        days = [31, (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][changedMonth];

      for(let j = 0; j < dayOfWeekOnFirst; j++) {
        daysComponent.push(
          <li key={key++} className="cui_invalid"></li>
        )
      }
      for(let j = 0; j < days; j++) {
        let
          actionDate = new Date(changedYear, changedMonth, j + 1),
          actionClass = +this.state.selected == +actionDate ? 'selected-departdate' : '';

        daysComponent.push(
          <li ref="day" key={key++} onClick={this.itemAction.bind(this, actionDate)} className={"cui_calendar_item cui_cld_day_havetxt " + actionClass}>{this.getDay(<em>{j + 1}</em>, changedYear, changedMonth, j + 1)}</li>
        )
      }
      monthComponent.push(
        <div key={i}>
          <h1 className="cui_cldmonth">
            {date.format(changedTime, props.MonthFormat)}
          </h1>
          <ul className="cui_cld_daybox">{daysComponent}</ul>
        </div>
      );
    };

    return (
      <div>
        <ul className="cui_cldweek" style={{position: 'static'}}>
          {weekComponent}
        </ul>
        <section className="cui_cldunit">
          {monthComponent}
        </section>
      </div>
    );
  },
  itemAction(actionDate) {
    this.props.itemAction(actionDate, date.format) !== false && this.setState({selected: actionDate});
  }
});

export default Calendar;