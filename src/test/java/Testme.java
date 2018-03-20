import com.google.protobuf.InvalidProtocolBufferException;
import org.junit.jupiter.api.Test;
import pl.clockworkjava.UserData;

import java.io.UnsupportedEncodingException;
import java.util.Base64;

import static org.junit.jupiter.api.Assertions.*;

public class Testme {

   private UserData.User javaDoe = UserData.User.newBuilder()
            .setId(5)
            .setFirstName("John")
            .setLastName("Doe")
            .addPhone(UserData.User.PhoneNumber.newBuilder()
                    .setNumber("23223")
                    .setType(UserData.User.PhoneType.LANDLINE).build())
            .addAddr("Under").build();

    @Test
    public void testme() throws InvalidProtocolBufferException {

        UserData.User newOne = UserData.User.parseFrom(javaDoe.toByteArray());

        assertFalse(newOne==javaDoe);
        assertTrue(newOne.equals(javaDoe));

    }


    @Test
    public void joeFromJS() throws UnsupportedEncodingException, InvalidProtocolBufferException {

        String encodedDoe = "CAUSBEpvaG4aA0RvZSoJCgUyMzIyMxABQgVVbmRlcg==";

        byte[] decodedDoe = Base64.getDecoder().decode(encodedDoe.getBytes("UTF-8"));

        UserData.User doeFromJS = UserData.User.parseFrom(decodedDoe);

        System.out.println(doeFromJS);

        assertEquals(javaDoe,doeFromJS);
    }

    @Test
    public void janeFromJS() throws UnsupportedEncodingException, InvalidProtocolBufferException {

        String encodedJane = "CAUSBEphbmUaA0RvZSoJCgUyMzIyMxABQgVVbmRlcg==";

        byte[] decodedJane = Base64.getDecoder().decode(encodedJane.getBytes("UTF-8"));

        UserData.User janeFromJS = UserData.User.parseFrom(decodedJane);

        System.out.println(janeFromJS);

        assertNotEquals(javaDoe,janeFromJS);

    }

}
