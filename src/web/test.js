"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("./messages");
var PhoneType = messages_1.UserData.User.PhoneType;
var User = messages_1.UserData.User;
const joeData = {
    id: 5,
    firstName: "John",
    lastName: "Doe",
    phone: [{ number: "23223", type: PhoneType.LANDLINE }],
    addr: ["Under"]
};
const johnDoe = User.create(joeData);
let buffer = User.encode(johnDoe).finish();
const anotherDoe = User.decode(buffer);
let decoder = new TextDecoder('utf8');
console.log("John");
console.log(btoa(decoder.decode(buffer)));
const janeData = {
    id: 5,
    firstName: "Jane",
    lastName: "Doe",
    phone: [{ number: "23223", type: PhoneType.LANDLINE }],
    addr: ["Under"]
};
console.log("Jane");
console.log(btoa(decoder.decode(User.encode(User.create(janeData)).finish())));
