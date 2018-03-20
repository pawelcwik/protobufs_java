import com.google.protobuf.InvalidProtocolBufferException;
import org.junit.jupiter.api.Test;
import pl.clockworkjava.UserData;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class Testme {


    @Test
    public void testme() throws InvalidProtocolBufferException {

        UserData.User usr = UserData.User.newBuilder()
                .setFirstName("John")
                .setLastName("Doe")
                .addPhone(UserData.User.PhoneNumber.newBuilder()
                        .setNumber("23223")
                        .setType(UserData.User.PhoneType.LANDLINE).build())
                .addAddr("Under").build();

        UserData.User newOne = UserData.User.parseFrom(usr.toByteArray());

        assertFalse(newOne==usr);
        assertTrue(newOne.equals(usr));

    }


}
