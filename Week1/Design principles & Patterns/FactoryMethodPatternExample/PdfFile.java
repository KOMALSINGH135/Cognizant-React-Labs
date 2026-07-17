public class PdfFile implements FileDocument {

    @Override
    public void open() {
        System.out.println("PDF Document Opened");
    }
}