import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MessageServiceTest {

    @Test
    public void testVerifyMethodCall() {

        MessageProvider mockProvider = Mockito.mock(MessageProvider.class);

        MessageService service = new MessageService(mockProvider);

        service.displayMessage();

        verify(mockProvider).getMessage();
    }
}