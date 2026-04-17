import { useMemo, useState } from "react";
import Header from "../../components/Header/Header";
import "./PaymentCalendar.css";
import addIcon from "../../assets/Icons/Add-Icon.png";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const samplePayments = [
  { id: 1, day: 1, employee: "Sajjer_1", amount: 5000, status: "received" },
  {
    id: 2,
    day: 1,
    employee: "Supplier_2",
    amount: 2500,
    status: "not-received",
  },
  {
    id: 3,
    day: 5,
    employee: "Supplier_2",
    amount: 1800,
    status: "not-received",
  },
  { id: 4, day: 9, employee: "Supplier_2", amount: 2200, status: "on-hold" },
  { id: 5, day: 10, employee: "Sajjer_1", amount: 4200, status: "received" },
  { id: 6, day: 10, employee: "Supplier_1", amount: 1700, status: "received" },
  {
    id: 7,
    day: 18,
    employee: "Supplier_2",
    amount: 3000,
    status: "not-received",
  },
  { id: 8, day: 20, employee: "Supplier_1", amount: 2600, status: "received" },
  { id: 9, day: 20, employee: "Supplier_1", amount: 2600, status: "pending" },
  {
    id: 10,
    day: 23,
    employee: "Supplier_2",
    amount: 1500,
    status: "not-received",
  },
];

const statusClassMap = {
  received: "received",
  "not-received": "not-received",
  "on-hold": "on-hold",
  pending: "pending",
};

const PaymentCalendar = () => {
  const currentDate = new Date();

  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [searchTerm, setSearchTerm] = useState("");

  const years = Array.from(
    { length: 7 },
    (_, index) => currentDate.getFullYear() - 3 + index,
  );

  const filteredPayments = useMemo(() => {
    return samplePayments.filter((item) =>
      item.employee.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();
  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();

  const calendarCells = [];

  for (let i = 0; i < firstDayOfMonth; i += 1) {
    calendarCells.push(null);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    calendarCells.push(day);
  }

  const handlePrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear((prev) => prev - 1);
    } else {
      setSelectedMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear((prev) => prev + 1);
    } else {
      setSelectedMonth((prev) => prev + 1);
    }
  };

  const getPaymentsForDay = (day) => {
    return filteredPayments.filter((item) => item.day === day);
  };

  return (
    <div className="payment-calendar-page">
      <Header title="Payment Calender" />

      <div className="payment-calendar-toolbar">
        <div className="payment-calendar-toolbar-left">
          <select
            className="payment-calendar-year-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="payment-calendar-toolbar-right">
          <div className="payment-calendar-search-box">
            <input
              type="text"
              placeholder="Search employee..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            className="payment-calendar-add-btn"
            onClick={() => alert("Open Add Employee / Add Expense modal here")}
          >
            Add Expense
            <img src={addIcon} alt="add" className="add-icon-img" />
          </button>
        </div>
      </div>

      <div className="payment-calendar-card">
        <div className="payment-calendar-topbar">
          <div className="payment-calendar-month-nav">
            <button onClick={handlePrevMonth} className="month-nav-btn">
              ‹
            </button>

            <h3>
              {monthNames[selectedMonth]} {selectedYear}
            </h3>

            <button onClick={handleNextMonth} className="month-nav-btn">
              ›
            </button>
          </div>

          <div className="payment-calendar-legend">
            <div className="legend-item">
              <span className="legend-dot received"></span>
              <p>received</p>
            </div>
            <div className="legend-item">
              <span className="legend-dot not-received"></span>
              <p>not received</p>
            </div>
            <div className="legend-item">
              <span className="legend-dot on-hold"></span>
              <p>on hold</p>
            </div>
            <div className="legend-item">
              <span className="legend-dot pending"></span>
              <p>pending</p>
            </div>
          </div>
        </div>

        <div className="payment-calendar-weekdays">
          {weekDays.map((day) => (
            <div key={day} className="weekday-cell">
              {day}
            </div>
          ))}
        </div>

        <div className="payment-calendar-grid">
          {calendarCells.map((day, index) => (
            <div
              key={index}
              className={`calendar-day-cell ${day ? "" : "empty-cell"}`}
            >
              {day && (
                <>
                  <div className="calendar-day-number">{day}</div>

                  <div className="calendar-day-events">
                    {getPaymentsForDay(day).map((item) => (
                      <div
                        key={item.id}
                        className={`calendar-event ${statusClassMap[item.status]}`}
                      >
                        <span>{item.employee}</span>
                      </div>
                    ))}

                    {getPaymentsForDay(day).length > 0 && day === 1 && (
                      <p className="calendar-total-text">
                        Total ${getPaymentsForDay(day)[0].amount}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentCalendar;
