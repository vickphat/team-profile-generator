const engineer = require("../lib/engineer");

describe("Engineer", () => {

    it("Should create an engineer object", () => {

        const test = new engineer("Vick", "3", "vickphat@gmail.com", "github" );

        expect(test.name).toBe("Vick");
        expect(test.id).toBe("3");
        expect(test.email).toBe("vickphat@gmail.com");
        expect(test.title).toBe("Engineer");
        expect(test.github).toBe("github");
    });

    it("Should obtain role via getRole()", () => {
        const roleTest = "Engineer"
        const test = new engineer("Vick", "3", "vickphat@gmail.com", roleTest);

        expect(test.getRole()).toBe(roleTest);
    })

    it("Should obtain GitHub", () => {
        const gitTest = "https://github.com/vickphat"
        const test = new engineer("Vick", "3", "vickphat@gmail.com", gitTest);

        expect(test.github).toBe(gitTest);
    })

    it("Should obtain GitHub via getGitHub()", () => {
        const gitTest = "https://github.com/vickphat"
        const test = new engineer("Vick", "3", "vickphat@gmail.com", gitTest);

        expect(test.getGitHub()).toBe(gitTest);
    })
});