import {UserData} from './messages';
import PhoneType = UserData.User.PhoneType;
import User = UserData.User;

const joeData : UserData.IUser = {
    id: 5,
    firstName: "John",
    lastName: "Doe",
    phone: [{ number: "23223", type: PhoneType.LANDLINE }],
    addr: ["Under"]

};

const johnDoe : User = User.create(joeData);

let buffer : Uint8Array = User.encode(johnDoe).finish();

const anotherDoe :  User = User.decode(buffer);

let decoder = new TextDecoder('utf8');

console.log("John");
console.log(btoa(decoder.decode(buffer)));

const janeData : UserData.IUser = {
    id: 5,
    firstName: "Jane",
    lastName: "Doe",
    phone: [{ number: "23223", type: PhoneType.LANDLINE }],
    addr: ["Under"]

};

console.log("Jane");
console.log(btoa(decoder.decode(User.encode(User.create(janeData)).finish())));
