class Employee {
    constructor(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary) {
        this.employeeNumber = employeeNumber;
        this.name = name;
        this.address = address;
        this.contactNumber = contactNumber;
        this.nicNumber = nicNumber;
        this.joinedDate = joinedDate;
        this.designation = designation;
        this.salary = salary;
        this.arrivalTime;
        this.leaveTime;
        this.lunch;
        this.leaveDate;
        this.leaveNumberOfDays;
        this.leaveReason;
    }

    reportToDuty(time) {
        this.arrivalTime = time;
        console.log("Arrives at " + this.arrivalTime);
    }

    leaveDuty(time) {
        this.leaveTime = time;
        console.log("Leaves at " + this.leaveTime);
    }

    requestLeave(leaveDate, numberOfDays, reason) {
        this.leaveDate = leaveDate;
        this.leaveNumberOfDays = numberOfDays;
        this.leaveReason = reason;
        console.log("Leave requested for " + this.leaveNumberOfDays + " days starting from " + this.leaveDate + ". Reason: " + this.leaveReason);
    }

    requestLunch(food) {
        this.lunch = food;
        console.log("Requested " + this.lunch + " for Lunch.");
    }
}
  
class PermanentEmployee extends Employee {
    constructor(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary) {
        super(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary);
    }
}
  
class ContractBasedEmployee extends Employee {
    constructor(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary, contractDuration) {
        super(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary);
        this.contractDuration = contractDuration;
    }
  
    requestDutyExtension(extensionMonths) {
        this.contractDuration = this.contractDuration + extensionMonths
        console.log("Requested duty extension for " + extensionMonths + " months.");
    }
}
  
class TemporaryEmployee extends Employee {
    constructor(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary, duration) {
        super(employeeNumber, name, address, contactNumber, nicNumber, joinedDate, designation, salary);
        this.duration = duration;
    }
  
    requestDutyExtension(extensionMonths) {
        this.duration = this.duration + extensionMonths
        console.log("Requested duty extension for " + extensionMonths + " months.");
    }
}

  
const permanentEmp = new PermanentEmployee(123, "John Doe", "123 Main St", "123456789", "ABC123", "2022-01-01", "Manager", 5000);
permanentEmp.reportToDuty("09:00 AM");
permanentEmp.requestLunch("Chicken")
permanentEmp.leaveDuty("06:00 PM");
permanentEmp.requestLeave("2023-07-15", 3, "Vacation");

const contractEmp = new ContractBasedEmployee(456, "Jane Smith", "456 Elm St", "987654321", "DEF456", "2021-07-01", "Developer", 4000, 12);
contractEmp.reportToDuty("08:30 AM");
contractEmp.leaveDuty("05:30 PM");
contractEmp.requestLeave("2023-07-20", 5, "Personal reasons");
contractEmp.requestDutyExtension(2);

const temporaryEmp = new TemporaryEmployee(789, "Alice Johnson", "789 Oak St", "654321987", "GHI789", "2023-01-01", "Assistant", 3000, 6);
temporaryEmp.reportToDuty("10:00 AM");
temporaryEmp.leaveDuty("07:00 PM");
temporaryEmp.requestLeave("2023-07-25", 2, "Sick leave");
temporaryEmp.requestDutyExtension(1);
  