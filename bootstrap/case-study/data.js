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
        const endDate = new Date();

    }
}

class AnnualBreakdown {
    constructor(start) {
        const end = new Date();
        let currentYear = start.getFullYear();
        this.dates = [];
        while (currentYear <= end.getFullYear()) {
            this.dates.push(currentYear);
            currentYear += 1;
        }
    }
} 