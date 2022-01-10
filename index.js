const wages = new Map()

function createEmployeeRecord(array) {
    let employeeObject = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return employeeObject;
}

function createEmployeeRecords(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(createEmployeeRecord(array[i]))
    }
    return newArray
}

function createTimeInEvent(array, dateStamp) {
    let timeInObject = {
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(11)),
        date: dateStamp.slice(0, 10)
    }
    array.timeInEvents.push(timeInObject)
    return array
}

function createTimeOutEvent(array, dateStamp) {
    let timeOutObject = {
        type: "TimeOut",
        hour: parseInt(dateStamp.slice(11)),
        date: dateStamp.slice(0, 10)
    }
    array.timeOutEvents.push(timeOutObject)
    return array
}

function hoursWorkedOnDate(array, total) {
    let hoursWorked = 0;
    for (let i = 0; i < array.timeInEvents.length; i++)
        if (array.timeInEvents[i].date === array.timeOutEvents[i].date) {
            hoursWorked = (array.timeOutEvents[i].hour - array.timeInEvents[i].hour);
            total = hoursWorked / 100;
        }
    return total
}

function wagesEarnedOnDate(array, total) {
    for (let i = 0; i < array.timeInEvents.length; i++)
        total = (((array.timeOutEvents[i].hour - array.timeInEvents[i].hour) * array.payPerHour) / 100)
    return total
}

function allWagesFor(array) {
    let totalArray = [];
    let total = 0;
    for (let i = 0; i < array.timeOutEvents.length; i++) {
        totalArray.push(((array.timeOutEvents[i].hour - array.timeInEvents[i].hour) * array.payPerHour) / 100);
    }
    total = totalArray[0] + totalArray[1]
    return total

}

function calculatePayroll(array) {
    let total = [];
    for (let i = 0; i < array[0].timeOutEvents.length; i++) {
        total.push(((array[i].timeOutEvents[i].hour - array[i].timeInEvents[i].hour) * array[i].payPerHour) / 100)
        console.log(total)
    }
}