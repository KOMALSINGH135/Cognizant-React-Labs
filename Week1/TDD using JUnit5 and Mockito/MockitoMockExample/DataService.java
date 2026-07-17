public class DataService {

    private DataProvider provider;

    public DataService(DataProvider provider) {
        this.provider = provider;
    }

    public String fetchInfo() {
        return provider.getInfo();
    }
}