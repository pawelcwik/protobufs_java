/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.UserData = (function() {
    
        /**
         * Namespace UserData.
         * @exports UserData
         * @namespace
         */
        var UserData = {};
    
        UserData.User = (function() {
    
            /**
             * Properties of a User.
             * @memberof UserData
             * @interface IUser
             * @property {number|null} [id] User id
             * @property {string|null} [firstName] User firstName
             * @property {string|null} [lastName] User lastName
             * @property {Array.<UserData.User.IPhoneNumber>|null} [phone] User phone
             * @property {Array.<string>|null} [addr] User addr
             */
    
            /**
             * Constructs a new User.
             * @memberof UserData
             * @classdesc Represents a User.
             * @implements IUser
             * @constructor
             * @param {UserData.IUser=} [properties] Properties to set
             */
            function User(properties) {
                this.phone = [];
                this.addr = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * User id.
             * @member {number} id
             * @memberof UserData.User
             * @instance
             */
            User.prototype.id = 0;
    
            /**
             * User firstName.
             * @member {string} firstName
             * @memberof UserData.User
             * @instance
             */
            User.prototype.firstName = "";
    
            /**
             * User lastName.
             * @member {string} lastName
             * @memberof UserData.User
             * @instance
             */
            User.prototype.lastName = "";
    
            /**
             * User phone.
             * @member {Array.<UserData.User.IPhoneNumber>} phone
             * @memberof UserData.User
             * @instance
             */
            User.prototype.phone = $util.emptyArray;
    
            /**
             * User addr.
             * @member {Array.<string>} addr
             * @memberof UserData.User
             * @instance
             */
            User.prototype.addr = $util.emptyArray;
    
            /**
             * Creates a new User instance using the specified properties.
             * @function create
             * @memberof UserData.User
             * @static
             * @param {UserData.IUser=} [properties] Properties to set
             * @returns {UserData.User} User instance
             */
            User.create = function create(properties) {
                return new User(properties);
            };
    
            /**
             * Encodes the specified User message. Does not implicitly {@link UserData.User.verify|verify} messages.
             * @function encode
             * @memberof UserData.User
             * @static
             * @param {UserData.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                if (message.firstName != null && message.hasOwnProperty("firstName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.firstName);
                if (message.lastName != null && message.hasOwnProperty("lastName"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.lastName);
                if (message.phone != null && message.phone.length)
                    for (var i = 0; i < message.phone.length; ++i)
                        $root.UserData.User.PhoneNumber.encode(message.phone[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.addr != null && message.addr.length)
                    for (var i = 0; i < message.addr.length; ++i)
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.addr[i]);
                return writer;
            };
    
            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link UserData.User.verify|verify} messages.
             * @function encodeDelimited
             * @memberof UserData.User
             * @static
             * @param {UserData.IUser} message User message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            User.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a User message from the specified reader or buffer.
             * @function decode
             * @memberof UserData.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {UserData.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserData.User();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.firstName = reader.string();
                        break;
                    case 3:
                        message.lastName = reader.string();
                        break;
                    case 5:
                        if (!(message.phone && message.phone.length))
                            message.phone = [];
                        message.phone.push($root.UserData.User.PhoneNumber.decode(reader, reader.uint32()));
                        break;
                    case 8:
                        if (!(message.addr && message.addr.length))
                            message.addr = [];
                        message.addr.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof UserData.User
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {UserData.User} User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            User.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a User message.
             * @function verify
             * @memberof UserData.User
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            User.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.firstName != null && message.hasOwnProperty("firstName"))
                    if (!$util.isString(message.firstName))
                        return "firstName: string expected";
                if (message.lastName != null && message.hasOwnProperty("lastName"))
                    if (!$util.isString(message.lastName))
                        return "lastName: string expected";
                if (message.phone != null && message.hasOwnProperty("phone")) {
                    if (!Array.isArray(message.phone))
                        return "phone: array expected";
                    for (var i = 0; i < message.phone.length; ++i) {
                        var error = $root.UserData.User.PhoneNumber.verify(message.phone[i]);
                        if (error)
                            return "phone." + error;
                    }
                }
                if (message.addr != null && message.hasOwnProperty("addr")) {
                    if (!Array.isArray(message.addr))
                        return "addr: array expected";
                    for (var i = 0; i < message.addr.length; ++i)
                        if (!$util.isString(message.addr[i]))
                            return "addr: string[] expected";
                }
                return null;
            };
    
            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof UserData.User
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {UserData.User} User
             */
            User.fromObject = function fromObject(object) {
                if (object instanceof $root.UserData.User)
                    return object;
                var message = new $root.UserData.User();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.firstName != null)
                    message.firstName = String(object.firstName);
                if (object.lastName != null)
                    message.lastName = String(object.lastName);
                if (object.phone) {
                    if (!Array.isArray(object.phone))
                        throw TypeError(".UserData.User.phone: array expected");
                    message.phone = [];
                    for (var i = 0; i < object.phone.length; ++i) {
                        if (typeof object.phone[i] !== "object")
                            throw TypeError(".UserData.User.phone: object expected");
                        message.phone[i] = $root.UserData.User.PhoneNumber.fromObject(object.phone[i]);
                    }
                }
                if (object.addr) {
                    if (!Array.isArray(object.addr))
                        throw TypeError(".UserData.User.addr: array expected");
                    message.addr = [];
                    for (var i = 0; i < object.addr.length; ++i)
                        message.addr[i] = String(object.addr[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @function toObject
             * @memberof UserData.User
             * @static
             * @param {UserData.User} message User
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            User.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.phone = [];
                    object.addr = [];
                }
                if (options.defaults) {
                    object.id = 0;
                    object.firstName = "";
                    object.lastName = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.firstName != null && message.hasOwnProperty("firstName"))
                    object.firstName = message.firstName;
                if (message.lastName != null && message.hasOwnProperty("lastName"))
                    object.lastName = message.lastName;
                if (message.phone && message.phone.length) {
                    object.phone = [];
                    for (var j = 0; j < message.phone.length; ++j)
                        object.phone[j] = $root.UserData.User.PhoneNumber.toObject(message.phone[j], options);
                }
                if (message.addr && message.addr.length) {
                    object.addr = [];
                    for (var j = 0; j < message.addr.length; ++j)
                        object.addr[j] = message.addr[j];
                }
                return object;
            };
    
            /**
             * Converts this User to JSON.
             * @function toJSON
             * @memberof UserData.User
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            User.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            User.PhoneNumber = (function() {
    
                /**
                 * Properties of a PhoneNumber.
                 * @memberof UserData.User
                 * @interface IPhoneNumber
                 * @property {string|null} [number] PhoneNumber number
                 * @property {UserData.User.PhoneType|null} [type] PhoneNumber type
                 */
    
                /**
                 * Constructs a new PhoneNumber.
                 * @memberof UserData.User
                 * @classdesc Represents a PhoneNumber.
                 * @implements IPhoneNumber
                 * @constructor
                 * @param {UserData.User.IPhoneNumber=} [properties] Properties to set
                 */
                function PhoneNumber(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * PhoneNumber number.
                 * @member {string} number
                 * @memberof UserData.User.PhoneNumber
                 * @instance
                 */
                PhoneNumber.prototype.number = "";
    
                /**
                 * PhoneNumber type.
                 * @member {UserData.User.PhoneType} type
                 * @memberof UserData.User.PhoneNumber
                 * @instance
                 */
                PhoneNumber.prototype.type = 0;
    
                /**
                 * Creates a new PhoneNumber instance using the specified properties.
                 * @function create
                 * @memberof UserData.User.PhoneNumber
                 * @static
                 * @param {UserData.User.IPhoneNumber=} [properties] Properties to set
                 * @returns {UserData.User.PhoneNumber} PhoneNumber instance
                 */
                PhoneNumber.create = function create(properties) {
                    return new PhoneNumber(properties);
                };
    
                /**
                 * Encodes the specified PhoneNumber message. Does not implicitly {@link UserData.User.PhoneNumber.verify|verify} messages.
                 * @function encode
                 * @memberof UserData.User.PhoneNumber
                 * @static
                 * @param {UserData.User.IPhoneNumber} message PhoneNumber message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PhoneNumber.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.number != null && message.hasOwnProperty("number"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.number);
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                    return writer;
                };
    
                /**
                 * Encodes the specified PhoneNumber message, length delimited. Does not implicitly {@link UserData.User.PhoneNumber.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof UserData.User.PhoneNumber
                 * @static
                 * @param {UserData.User.IPhoneNumber} message PhoneNumber message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PhoneNumber.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a PhoneNumber message from the specified reader or buffer.
                 * @function decode
                 * @memberof UserData.User.PhoneNumber
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {UserData.User.PhoneNumber} PhoneNumber
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PhoneNumber.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserData.User.PhoneNumber();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.number = reader.string();
                            break;
                        case 2:
                            message.type = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a PhoneNumber message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof UserData.User.PhoneNumber
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {UserData.User.PhoneNumber} PhoneNumber
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PhoneNumber.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a PhoneNumber message.
                 * @function verify
                 * @memberof UserData.User.PhoneNumber
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PhoneNumber.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isString(message.number))
                            return "number: string expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    return null;
                };
    
                /**
                 * Creates a PhoneNumber message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof UserData.User.PhoneNumber
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {UserData.User.PhoneNumber} PhoneNumber
                 */
                PhoneNumber.fromObject = function fromObject(object) {
                    if (object instanceof $root.UserData.User.PhoneNumber)
                        return object;
                    var message = new $root.UserData.User.PhoneNumber();
                    if (object.number != null)
                        message.number = String(object.number);
                    switch (object.type) {
                    case "MOBILE":
                    case 0:
                        message.type = 0;
                        break;
                    case "LANDLINE":
                    case 1:
                        message.type = 1;
                        break;
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a PhoneNumber message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof UserData.User.PhoneNumber
                 * @static
                 * @param {UserData.User.PhoneNumber} message PhoneNumber
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PhoneNumber.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.number = "";
                        object.type = options.enums === String ? "MOBILE" : 0;
                    }
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.UserData.User.PhoneType[message.type] : message.type;
                    return object;
                };
    
                /**
                 * Converts this PhoneNumber to JSON.
                 * @function toJSON
                 * @memberof UserData.User.PhoneNumber
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PhoneNumber.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return PhoneNumber;
            })();
    
            /**
             * PhoneType enum.
             * @name UserData.User.PhoneType
             * @enum {string}
             * @property {number} MOBILE=0 MOBILE value
             * @property {number} LANDLINE=1 LANDLINE value
             */
            User.PhoneType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "MOBILE"] = 0;
                values[valuesById[1] = "LANDLINE"] = 1;
                return values;
            })();
    
            return User;
        })();
    
        return UserData;
    })();

    return $root;
});
