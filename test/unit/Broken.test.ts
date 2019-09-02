import { describe } from "mocha";
import { expect } from "chai";

import Broken from "../../lib/Broken";

describe("Broken", () => {

    it("breaks horribly", () => {
        const b = new Broken();
        expect(b.broken(1)).to.equal(1);
    });
});
