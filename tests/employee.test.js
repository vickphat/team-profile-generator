const employee = require("../lib/employee");

describe("employee", () => {

    it("Obtain a name", () => {

        const test = new employee("Vick");

        expect(test.name).toEqual("Vick");
    });

    it("Obtain an ID", () => {
        const test = new employee("Vick", "003");

        expect(test.id).toEqual("003");
    });

    it("Obtain an email", () => {
        const test = new employee("Vick", "003", "vickphat@gmail.com");

        expect(test.email).toEqual("vickphat@gmail.com");
    });

    it("Obtain employee title", () => {
        const test = new employee("Vick", "003", "vickphat@gmail.com");

        expect(test.title).toEqual("Employee");
    });


});