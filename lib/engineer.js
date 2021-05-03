const employee = require("./employee")

class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
        this.title = "Engineer";
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return this.title;
    }
}

module.exports = engineer;