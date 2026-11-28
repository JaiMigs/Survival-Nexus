
import test from "node:test";
import assert from "node:assert/strict";
import { daysOfSupplies } from "../web/js/domain.js";

// Normal calculation
test("calculates complete days correctly", () => {
    assert.equal(daysOfSupplies(18, 12), 1);
});

// Exact division
test("calculates when units divide exactly", () => {
    assert.equal(daysOfSupplies(20, 5), 4);
});

// Zero supplies
test("returns zero when there are no supplies", () => {
    assert.equal(daysOfSupplies(0, 5), 0);
});

// Invalid daily use
test("rejects zero daily use", () => {
    assert.throws(
        () => daysOfSupplies(10, 0),
        RangeError
    );
});

// Fractional inputs
test("rejects fractional units", () => {
    assert.throws(
        () => daysOfSupplies(10.5, 2),
        RangeError
    );
});

test("rejects fractional daily use", () => {
    assert.throws(
        () => daysOfSupplies(10, 2.5),
        RangeError
    );
});

// String inputs
test("rejects string units", () => {
    assert.throws(
        () => daysOfSupplies("10", 2),
        RangeError
    );
});

test("rejects string daily use", () => {
    assert.throws(
        () => daysOfSupplies(10, "2"),
        RangeError
    );
});

// Maximum supported values
test("accepts the maximum supported units", () => {
    assert.equal(daysOfSupplies(1000000, 1), 1000000);
});

test("accepts the maximum supported daily use", () => {
    assert.equal(daysOfSupplies(1000000, 1000000), 1);
});

// Negative units
test("rejects negative units", () => {
    assert.throws(
        () => daysOfSupplies(-1, 2),
        RangeError
    );
});

// Units above maximum
test("rejects units above the maximum", () => {
    assert.throws(
        () => daysOfSupplies(1000001, 2),
        RangeError
    );
});
