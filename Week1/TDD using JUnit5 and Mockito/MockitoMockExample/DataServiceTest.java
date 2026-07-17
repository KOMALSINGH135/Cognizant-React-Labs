import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class DataServiceTest {

    @Test
    public void testFetchInfo() {

        DataProvider mockProvider = Mockito.mock(DataProvider.class);

        when(mockProvider.getInfo()).thenReturn("Sample Mock Data");

        DataService service = new DataService(mockProvider);

        String result = service.fetchInfo();

        assertEquals("Sample Mock Data", result);
    }
}