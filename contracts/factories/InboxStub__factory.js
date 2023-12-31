"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InboxStub__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "messageNum",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "InboxMessageDelivered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "messageNum",
                type: "uint256",
            },
        ],
        name: "InboxMessageDeliveredFromOrigin",
        type: "event",
    },
    {
        inputs: [],
        name: "bridge",
        outputs: [
            {
                internalType: "contract IBridge",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "calculateRetryableSubmissionFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "createRetryableTicket",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "depositEth",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IBridge",
                name: "_bridge",
                type: "address",
            },
            {
                internalType: "contract ISequencerInbox",
                name: "",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "pause",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IBridge",
                name: "_bridge",
                type: "address",
            },
        ],
        name: "postUpgradeInit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "sendContractTransaction",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "sendL1FundedContractTransaction",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "sendL1FundedUnsignedTransaction",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "sendL1FundedUnsignedTransactionToFork",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "messageData",
                type: "bytes",
            },
        ],
        name: "sendL2Message",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "messageData",
                type: "bytes",
            },
        ],
        name: "sendL2MessageFromOrigin",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "sendUnsignedTransaction",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "sendUnsignedTransactionToFork",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "sendWithdrawEthToFork",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "sequencerInbox",
        outputs: [
            {
                internalType: "contract ISequencerInbox",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "unpause",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "unsafeCreateRetryableTicket",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506109b4806100206000396000f3fe60806040526004361061011e5760003560e01c80636e6e8a6a116100a0578063b75436bb11610064578063b75436bb14610261578063c474d2c514610281578063e6bd12cf14610202578063e78cea921461029f578063ee35f327146102d757600080fd5b80636e6e8a6a146101f457806370665f14146102105780638456cb59146101765780638a631aa61461022b578063a66b327d1461024657600080fd5b80635075788b116100e75780635075788b146101235780635c975abb146101b55780635e916758146101e6578063679b6ded146101f457806367ef3ab81461020257600080fd5b8062f72382146101235780631fe927cf146101565780633f4ba83a14610176578063439370b11461018d578063485cc95514610195575b600080fd5b34801561012f57600080fd5b5061014361013e3660046105ca565b6102f7565b6040519081526020015b60405180910390f35b34801561016257600080fd5b50610143610171366004610646565b610339565b34801561018257600080fd5b5061018b6103d2565b005b6101436102f7565b3480156101a157600080fd5b5061018b6101b0366004610687565b61040c565b3480156101c157600080fd5b506001546101d690600160a01b900460ff1681565b604051901515815260200161014d565b61014361013e3660046106c0565b61014361013e366004610729565b61014361013e3660046107cd565b34801561021c57600080fd5b5061014361013e36600461083f565b34801561023757600080fd5b5061014361013e36600461088c565b34801561025257600080fd5b5061014361013e3660046108e0565b34801561026d57600080fd5b5061014361027c366004610646565b610477565b34801561028d57600080fd5b5061018b61029c366004610902565b50565b3480156102ab57600080fd5b506000546102bf906001600160a01b031681565b6040516001600160a01b03909116815260200161014d565b3480156102e357600080fd5b506001546102bf906001600160a01b031681565b60405162461bcd60e51b815260206004820152600f60248201526e1393d517d253541311535153951151608a1b60448201526000906064015b60405180910390fd5b60003332146103785760405162461bcd60e51b815260206004820152600b60248201526a6f726967696e206f6e6c7960a81b6044820152606401610330565b600061039d6003338686604051610390929190610926565b60405180910390206104d3565b60405190915081907fab532385be8f1005a4b6ba8fa20a2245facb346134ac739fe9a5198dc1580b9c90600090a29392505050565b60405162461bcd60e51b815260206004820152600f60248201526e1393d5081253541311535153951151608a1b6044820152606401610330565b6000546001600160a01b0316156104545760405162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b6044820152606401610330565b50600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000806104906003338686604051610390929190610926565b9050807fff64905f73a67fb594e0f940a8075a860db489ad991e032f48c81123eb52d60b85856040516104c4929190610936565b60405180910390a29392505050565b60008054604051638db5993b60e01b815260ff861660048201526001600160a01b0385811660248301526044820185905290911690638db5993b9034906064016020604051808303818588803b15801561052c57600080fd5b505af1158015610540573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906105659190610965565b949350505050565b6001600160a01b038116811461029c57600080fd5b60008083601f84011261059457600080fd5b5081356001600160401b038111156105ab57600080fd5b6020830191508360208285010111156105c357600080fd5b9250929050565b600080600080600080600060c0888a0312156105e557600080fd5b87359650602088013595506040880135945060608801356106058161056d565b93506080880135925060a08801356001600160401b0381111561062757600080fd5b6106338a828b01610582565b989b979a50959850939692959293505050565b6000806020838503121561065957600080fd5b82356001600160401b0381111561066f57600080fd5b61067b85828601610582565b90969095509350505050565b6000806040838503121561069a57600080fd5b82356106a58161056d565b915060208301356106b58161056d565b809150509250929050565b6000806000806000608086880312156106d857600080fd5b853594506020860135935060408601356106f18161056d565b925060608601356001600160401b0381111561070c57600080fd5b61071888828901610582565b969995985093965092949392505050565b60008060008060008060008060006101008a8c03121561074857600080fd5b89356107538161056d565b985060208a0135975060408a0135965060608a01356107718161056d565b955060808a01356107818161056d565b945060a08a0135935060c08a0135925060e08a01356001600160401b038111156107aa57600080fd5b6107b68c828d01610582565b915080935050809150509295985092959850929598565b60008060008060008060a087890312156107e657600080fd5b86359550602087013594506040870135935060608701356108068161056d565b925060808701356001600160401b0381111561082157600080fd5b61082d89828a01610582565b979a9699509497509295939492505050565b600080600080600060a0868803121561085757600080fd5b85359450602086013593506040860135925060608601359150608086013561087e8161056d565b809150509295509295909350565b60008060008060008060a087890312156108a557600080fd5b863595506020870135945060408701356108be8161056d565b93506060870135925060808701356001600160401b0381111561082157600080fd5b600080604083850312156108f357600080fd5b50508035926020909101359150565b60006020828403121561091457600080fd5b813561091f8161056d565b9392505050565b8183823760009101908152919050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60006020828403121561097757600080fd5b505191905056fea264697066735822122012835a3180e4b55d2ba4ed55d1cc270eb5ae0bfa252394bb49d8df30a236b5ef64736f6c63430008090033";
const isSuperArgs = (xs) => xs.length > 1;
class InboxStub__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "InboxStub";
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.InboxStub__factory = InboxStub__factory;
InboxStub__factory.bytecode = _bytecode;
InboxStub__factory.abi = _abi;
