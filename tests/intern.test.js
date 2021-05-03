const intern = require("../lib/intern");

describe("Intern", () => {

    it("Should create an intern object", () => {

        const test = new intern("Vick", "3", "vickphat@gmail.com", "CWRU");

        expect(test.name).toBe("Vick");
        expect(test.id).toBe("3");
        expect(test.email).toBe("vickphat@gmail.com");
        expect(test.title).toBe("Intern");
        expect(test.school).toBe("CWRU");
    });

    it("Should obtain role via getRole()", () => {
        const roleTest = "Intern"
        const test = new intern("Vick", "3", "vickphat@gmail.com", roleTest);

        expect(test.getRole()).toBe(roleTest);
    });

    it("Should obtain school via getSchool()", () => {
        const school = "CWRU"
        const test = new intern("Vick", "3", "vickphat@gmail.com", school);

        expect(test.getSchool()).toBe(school);
    });
});