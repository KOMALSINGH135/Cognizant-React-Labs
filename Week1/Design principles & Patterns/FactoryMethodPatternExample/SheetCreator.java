public class SheetCreator extends Creator {

    @Override
    public FileDocument createDocument() {
        return new SheetFile();
    }
}