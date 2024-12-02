//  implement calculator

import React from "react";

const Calculator = () => {
    const calc = {
        total: 0,
        add(a) {
            this.total += a;
            return this;
        },
        multiply(b) {
            this.total *= b;
            return this;
        },
        subtract(c) {
            this.total -= c;
            return this;
        },
    };
    const result = calc.add(10).multiply(5).subtract(30).add(10);
    console.log({ result });
};

export default Calculator;

function Calculat() {
    const calc = {
        total: 0,
        add(a) {
            this.total += a;
        },
        sub(a) {
            this.total -= a;
        },
        mul(a) {
            this.total *= a;
        },
    };
    console.log(calc().add(10).sub(20).mul(10));
}
