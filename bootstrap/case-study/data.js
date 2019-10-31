Date.prototype.firstDayOfTheMonth = function () {
    return new Date(this.getFullYear(), this.getMonth(), 1);
}

Date.prototype.lastDayOfTheMonth = function () {
    const d = this.firstDayOfTheMonth();
    d.setMonth(d.getMonth() + 1);
    d.setDate(d.getDate() - 1)
    return d;
}

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

        while(current <= end) {
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

        while(current <= today) {
            this.dates.push(new Date(current));
            current.setMilliseconds(current.getMilliseconds() + milliseconds);
        }
    }
}
