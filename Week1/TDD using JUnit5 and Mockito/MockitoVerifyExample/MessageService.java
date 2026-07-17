public class MessageService {

    private MessageProvider provider;

    public MessageService(MessageProvider provider) {
        this.provider = provider;
    }

    public String displayMessage() {
        return provider.getMessage();
    }
}