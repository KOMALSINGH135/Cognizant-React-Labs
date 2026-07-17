public class TextCreator extends Creator {

    @Override
    public FileDocument createDocument() {
        return new TextFile();
    }
}