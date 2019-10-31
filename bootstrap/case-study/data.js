Date.prototype.firstDayOfTheMonth = function () {
    return new Date(this.getFullYear(), this.getMonth(), 1);
}

Date.prototype.lastDayOfTheMonth = function () {
    const d = this.firstDayOfTheMonth();
    d.setMonth(d.getMonth() + 1);
    d.setDate(d.getDate() - 1)
    return d;
}

const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
];

const shortMonthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
];

const dateFormats = [
    "dd MMMM yyyy",
    "dd MMM yyyy",
    "MMM yyyy",
    "MMM yy"
];

class DateBreakdown {
    constructor(label, start, end) {
        this.label = label;
        this.start = start;
        this.end = end;
    }
}

class Breakdown {
    constructor(dateLabel, sales, expences, start, end) {
        this.dateBreakdown = new DateBreakdown(dateLabel, start, end);
        this.sales = sales;
        this.expences = expences;
    }
}

class MonthlyBreakdown {
    constructor(start) {
        this.dates = [];

        const end = new Date();
        const current = new Date(start);

        while (current <= end) {
            this.dates.push(new Date(current));
            current.setMonth(current.getMonth() + 1);
        }

    }
}

class AnnualBreakdown {
    constructor(start) {
        this.dates = [];

        const end = new Date();
        const current = new Date(start);

        while (current <= end) {
            this.dates.push(new Date(current));
            current.setFullYear(current.getFullYear() + 1);
        }
    }
}

class CustomBreakdown {
    constructor(start, end) {
        this.dates = [];

        const milliseconds = end - start;
        const today = new Date();
        const current = new Date(start);

        while (current <= today) {
            this.dates.push(new Date(current));
            current.setMilliseconds(current.getMilliseconds() + milliseconds);
        }
    }
}
