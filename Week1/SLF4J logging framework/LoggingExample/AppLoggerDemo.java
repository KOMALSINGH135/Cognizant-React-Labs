import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AppLoggerDemo {

    private static final Logger log =
            LoggerFactory.getLogger(AppLoggerDemo.class);

    public static void main(String[] args) {

        log.error("Application encountered an error.");

        log.warn("Low memory warning.");

    }
}