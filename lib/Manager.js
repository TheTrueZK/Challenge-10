class Manager extends Employee {
    constructor (name, id, email, managerNumber) {
    super (name, id, email);
    this.managerNumber = managerNumber;
}

getManagerNum() {
    return this.managerNumber;
}

getRole() {
    return 'Manager';
}
};

module.exports = Manager;