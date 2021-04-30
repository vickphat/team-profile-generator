class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.title = "employee";
        this.email = email;
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.title;
    };
}


