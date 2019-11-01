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
    "December"
];

const shortMonthNames = [
    "Jan", 
    "Feb", 
    "Mar",
    "Apr", 
    "May", 
    "Jun", 
    "Jul",
    "Aug", 
    "Sep", 
    "Oct",
    "Nov", 
    "Dec"
];

Date.prototype.formatDate = function(format) {
    const dateFormats = {
        "dd MMMM yyyy": () => {},
        "dd MMM yyyy": () => {},
        "MMM yyyy": () => {},
        "MMM yy": () => {}
    };

    const selectedFormat = dateFormats[format];

    if (!selectedFormat) {
        throw Error(`Unsupported date format ${format}`);
    }

    return selectedFormat(this);
} 

class DateBreakdown {
    constructor(label, start, end) {
        this.label = label;
        this.start = start;
        this.end = end;
    }
}

class Breakdown {
    constructor(dateLabelFormat, sales, expences, start, end) {
        const dateLabelFormats = {
            "custom": () => {
                const endShortMonthName = shortMonthNames[end.getMonth()];
                const startShortMonthName = shortMonthNames[start.getMonth()];
                return `${start.getDate()}/${startShortMonthName}/${start.getFullYear()} - ${end.getDate()}/${endShortMonthName}/${end.getFullYear()} `;
            },
            "full-month": () => {
                const startShortMonthName = shortMonthNames[start.getMonth()];
                return `${startShortMonthName}/${start.getFullYear()}`;
            },
            "full-annual": () => {
                return `${start.getFullYear()}`;
            }
        };
        const selectedLabelFormat = dateLabelFormats[dateLabelFormat];

        if (!selectedLabelFormat) {
            const supportedFormats = [];
            for(let supportedFormat in dateLabelFormat) {
                supportedFormats.push(supportedFormat);
            }
            throw Error(`date label format selected is not supported ${dateLabelFormat} \n supported formats are ${supportedFormats}`);
        }

        const dateLabel = selectedLabelFormat();
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
