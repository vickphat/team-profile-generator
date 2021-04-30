const employee = require("./employee")


class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
        this.title = "Manager"
    }

    getRole() {
        return this.title;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }


}

module.exports = manager