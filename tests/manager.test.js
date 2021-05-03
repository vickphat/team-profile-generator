const manager = require("../lib/manager");

describe("Manager", () => {
  it("Should create an manager object", () => {
    const test = new manager("Vick", "3", "vickphat@gmail.com", "100");

    expect(test.name).toBe("Vick");
    expect(test.id).toBe("3");
    expect(test.email).toBe("vickphat@gmail.com");
    expect(test.title).toBe("Manager");
    expect(test.officeNumber).toBe("100");
  });

  it("Should obtain role via getRole()", () => {
    const roleTest = "Manager";
    const test = new manager("Vick", "3", "vickphat@gmail.com", roleTest);

    expect(test.getRole()).toBe(roleTest);
  });

  it("Should obtain office number via getOfficeNumber()", () => {
    const officeTest = "100";
    const test = new manager("Vick", "3", "vickphat@gmail.com", officeTest);

    expect(test.getOfficeNumber()).toBe(officeTest);
  });
});
