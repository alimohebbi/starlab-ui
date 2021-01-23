import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
    months = [
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

    previous = {
        year: 0,
        month: 0
    };

    constructor() {}

    sortByDateDesc = (arrInput) => {
        var arrOutput = [];

        arrInput.forEach((el) => {
            var dateInputEl = new Date(el.pub_date || el.date || el.start_date || el.date_added);

            if (arrOutput.length === 0) {
                arrOutput.push(el);
            } else {
                var idx = 0;
                var flag = false;

                while (!flag && idx < arrOutput.length) {
                    var currentOutputEl = arrOutput[idx];
                    var dateOutputEl = new Date(currentOutputEl.pub_date || currentOutputEl.date || currentOutputEl.start_date || currentOutputEl.date_added);

                    if (dateInputEl > dateOutputEl) {
                        arrOutput.splice(idx,0,el);
                        flag = true;
                    }

                    idx++;
                }

                if (!flag) {
                    arrOutput.push(el);
                }
            }
        });

        return arrOutput;
    }

    sortByDateAsc = (arrInput) => {
        var arrOutput = [];

        arrInput.forEach((el) => {
            var dateInputEl = new Date(el.pub_date || el.date || el.start_date || el.date_added);

            if (arrOutput.length === 0) {
                arrOutput.push(el);
            } else {
                var idx = 0;
                var flag = false;

                while (!flag && idx < arrOutput.length) {
                    var currentOutputEl = arrOutput[idx];
                    var dateOutputEl = new Date(currentOutputEl.pub_date || currentOutputEl.date || currentOutputEl.start_date || currentOutputEl.date_added);

                    if (dateInputEl < dateOutputEl) {
                        arrOutput.splice(idx,0,el);
                        flag = true;
                    }

                    idx++;
                }

                if (!flag) {
                    arrOutput.push(el);
                }
            }
        });

        return arrOutput;
    }

    strToHtml = (str) => {
        var template = document.createElement('template');
        template.innerHTML = str;
        return template.content.childNodes[0];
    }
    
    cleanPrevious = () => {
        this.previous = {
            year: 0,
            month: 0
        }
    }

}
