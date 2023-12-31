"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArbosTest__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "gasAmount",
                type: "uint256",
            },
        ],
        name: "burnArbGas",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
];
class ArbosTest__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ArbosTest__factory = ArbosTest__factory;
ArbosTest__factory.abi = _abi;
