import * as $protobuf from "protobufjs";

/** Namespace UserData. */
export namespace UserData {

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (number|null);

        /** User firstName */
        firstName?: (string|null);

        /** User lastName */
        lastName?: (string|null);

        /** User phone */
        phone?: (UserData.User.IPhoneNumber[]|null);

        /** User addr */
        addr?: (string[]|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserData.IUser);

        /** User id. */
        public id: number;

        /** User firstName. */
        public firstName: string;

        /** User lastName. */
        public lastName: string;

        /** User phone. */
        public phone: UserData.User.IPhoneNumber[];

        /** User addr. */
        public addr: string[];

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: UserData.IUser): UserData.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link UserData.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserData.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link UserData.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserData.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserData.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserData.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): UserData.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserData.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace User {

        /** Properties of a PhoneNumber. */
        interface IPhoneNumber {

            /** PhoneNumber number */
            number?: (string|null);

            /** PhoneNumber type */
            type?: (UserData.User.PhoneType|null);
        }

        /** Represents a PhoneNumber. */
        class PhoneNumber implements IPhoneNumber {

            /**
             * Constructs a new PhoneNumber.
             * @param [properties] Properties to set
             */
            constructor(properties?: UserData.User.IPhoneNumber);

            /** PhoneNumber number. */
            public number: string;

            /** PhoneNumber type. */
            public type: UserData.User.PhoneType;

            /**
             * Creates a new PhoneNumber instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhoneNumber instance
             */
            public static create(properties?: UserData.User.IPhoneNumber): UserData.User.PhoneNumber;

            /**
             * Encodes the specified PhoneNumber message. Does not implicitly {@link UserData.User.PhoneNumber.verify|verify} messages.
             * @param message PhoneNumber message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: UserData.User.IPhoneNumber, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhoneNumber message, length delimited. Does not implicitly {@link UserData.User.PhoneNumber.verify|verify} messages.
             * @param message PhoneNumber message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: UserData.User.IPhoneNumber, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhoneNumber message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhoneNumber
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserData.User.PhoneNumber;

            /**
             * Decodes a PhoneNumber message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhoneNumber
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserData.User.PhoneNumber;

            /**
             * Verifies a PhoneNumber message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhoneNumber message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhoneNumber
             */
            public static fromObject(object: { [k: string]: any }): UserData.User.PhoneNumber;

            /**
             * Creates a plain object from a PhoneNumber message. Also converts values to other types if specified.
             * @param message PhoneNumber
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: UserData.User.PhoneNumber, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhoneNumber to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** PhoneType enum. */
        enum PhoneType {
            MOBILE = 0,
            LANDLINE = 1
        }
    }
}
