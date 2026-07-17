package Week1.Design principles & Patterns.SingletonPatternExample;
public class Logger {

    // Create a single instance of Logger
    private static Logger instance;

    // Private constructor
    private Logger() {
        System.out.println("Logger Instance Created");
    }

    // Public method to return the single instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // Logging method
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}