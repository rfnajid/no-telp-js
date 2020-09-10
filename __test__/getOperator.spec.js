const { getOperator } = require("../dist/noTelp");

describe("Expected Success Scenario", () => {

    // TELKOMSEL

    test("Test kartuHalo", () => {
        const no = "08111888628";
        const expected = {
            valid: true,
            message: "VALID",
            card: "kartuHalo",
            operator: "Telkomsel"
        }
        expect(getOperator(no)).toEqual(expected);
    });

    test("Test simPATI", () => {
        const no = "+6281219992794";
        const expected = {
            valid: true,
            message: "VALID",
            card: "simPATI",
            operator: "Telkomsel"
        }
        expect(getOperator(no)).toEqual(expected);
    });

    test("Test Kartu As", () => {
        const no = "082311992694";
        const expected = {
            valid: true,
            message: "VALID",
            card: "KARTU As",
            operator: "Telkomsel"
        }
        expect(getOperator(no)).toEqual(expected);
    });

    test("Test Loop", () => {
        const no = "082233113030";
        const expected = {
            valid: true,
            message: "VALID",
            card: "LOOP",
            operator: "Telkomsel"
        }
        expect(getOperator(no)).toEqual(expected);
    });

    test("Test by.U", () => {
        const no = "08515 1236799";
        const expected = {
            valid: true,
            message: "VALID",
            card: "by.U",
            operator: "Telkomsel"
        }
        expect(getOperator(no)).toEqual(expected);
    });

    // Indosat Ooredoo

    test("Test IndosatM2", () => {
        const no = "0814 1236799";
        const expected = {
            valid: true,
            message: "VALID",
            card: "IndosatM2",
            operator: "Indosat Ooredoo"
        }
        expect(getOperator(no)).toEqual(expected);
    });

    test("Test Mentari/Matrix", () => {
        const no = "0816 73 73 73";
        const expected = {
            valid: true,
            message: "VALID",
            card: "Mentari/Matrix",
            operator: "Indosat Ooredoo"
        }
        expect(getOperator(no)).toEqual(expected);
    });

    test("Test Matrix", () => {
        const no = "08552 999999";
        const expected = {
            valid: true,
            message: "VALID",
            card: "Matrix",
            operator: "Indosat Ooredoo"
        }
        expect(getOperator(no)).toEqual(expected);
    });

    test("Test Mentari", () => {
        const no = "08585 000 000 2";
        const expected = {
            valid: true,
            message: "VALID",
            card: "Mentari",
            operator: "Indosat Ooredoo"
        }
        expect(getOperator(no)).toEqual(expected);
    });

    test("Test IM3", () => {
        const no = "08572 910 7000";
        const expected = {
            valid: true,
            message: "VALID",
            card: "IM3",
            operator: "Indosat Ooredoo"
        }
        expect(getOperator(no)).toEqual(expected);
    });

    // XL AXIATA

    test("Test XL", () => {
        const no = "08.777.333.777.9";
        const expected = {
            valid: true,
            message: "VALID",
            card: "XL",
            operator: "XL Axiata"
        }
        expect(getOperator(no)).toEqual(expected);
    });

    test("Test Axis", () => {
        const no = "0838 9000 0202";
        const expected = {
            valid: true,
            message: "VALID",
            card: "Axis",
            operator: "XL Axiata"
        }
        expect(getOperator(no)).toEqual(expected);
    });

    // THREE

    test("Test 3", () =>{
        const no = "+62896 18 47 47 47";
        const expected = {
            valid: true,
            message: "VALID",
            card: "3",
            operator: "3"
        }
        expect(getOperator(no)).toEqual(expected);
    });

    // SMARTFREN

    test("Test Smartfren", () => {
        const no = "088 8282 8383";
        const expected = {
            valid: true,
            message: "VALID",
            card: "Smartfren",
            operator: "Smartfren"
        }
        expect(getOperator(no)).toEqual(expected);
    });

    // NET1

    test("Test Net1", () => {
        const no = "628281500888";
        const expected = {
            valid: true,
            message: "VALID",
            card: "Net1",
            operator: "Net1"
        }
        expect(getOperator(no)).toEqual(expected);
    });
});

describe("Test Validation", () => {
    test("Test Invalid", () => {
        const no = "008-SARAS";
        const expected = {
            valid: false,
            message: "INVALID",
        }
        const result = getOperator(no);

        expect(result.valid).toEqual(expected.valid);
        expect(result.message).toEqual(expected.message);
    });

    test("Test Below", () => {
        const no = "088 8282 ";
        const expected = {
            valid: false,
            message: "BELOW MINIMUM LENGTH",
        }
        const result = getOperator(no, true);

        expect(result.valid).toEqual(expected.valid);
        expect(result.message).toEqual(expected.message);
    });

    test("Test Above", () => {
        const no = "088 8282 0812 41284 1241";
        const expected = {
            valid: false,
            message: "ABOVE MAXIMUM LENGTH",
        }
        const result = getOperator(no, true);

        expect(result.valid).toEqual(expected.valid);
        expect(result.message).toEqual(expected.message);
    });

    test("Test 13", () => {
        const no = "0812 3456 7890 0";
        const expected = {
            valid: false,
            message: "ABOVE MAXIMUM LENGTH",
        }
        const result = getOperator(no, true);

        expect(result.valid).toEqual(expected.valid);
        expect(result.message).toEqual(expected.message);
    });

    test("Test 3 13", () => {
        const no = "0899 3456 7890 0";
        const expected = {
            valid: true,
            message: "VALID",
            card: "3",
            operator: "3"
        }
        const result = getOperator(no, true);

        expect(result).toEqual(expected);
    });

    test("Test 3 13 Above", () => {
        const no = "0899 3456 7890 01";
        const expected = {
            valid: false,
            message: "ABOVE MAXIMUM LENGTH"
        }
        const result = getOperator(no, true);

        expect(result.valid).toEqual(expected.valid);
        expect(result.message).toEqual(expected.message);
    });

    test("Test empty", () => {
        const no = '';
        const expected = {
            valid: false,
            message: "INVALID"
        }
        const result = getOperator(no, true);

        expect(result.valid).toEqual(expected.valid);
        expect(result.message).toEqual(expected.message);
    });

    test("Test null", () => {
        const no = null;
        const expected = {
            valid: false,
            message: "INVALID"
        }
        const result = getOperator(no, true);

        expect(result.valid).toEqual(expected.valid);
        expect(result.message).toEqual(expected.message);
    });

    test("Test null", () => {
        const no = null;
        const expected = {
            valid: false,
            message: "INVALID"
        }
        const result = getOperator(no, true);

        expect(result.valid).toEqual(expected.valid);
        expect(result.message).toEqual(expected.message);
    });

    test("Test not found", () => {
        const no = '0866 6666 6666';
        const expected = {
            valid: false,
            message: "NOT FOUND"
        }
        const result = getOperator(no, true);

        expect(result.valid).toEqual(expected.valid);
        expect(result.message).toEqual(expected.message);
    });
});