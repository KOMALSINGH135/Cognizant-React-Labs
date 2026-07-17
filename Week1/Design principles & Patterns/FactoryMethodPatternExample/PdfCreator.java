public class PdfCreator extends Creator {

    @Override
    public FileDocument createDocument() {
        return new PdfFile();
    }
}