
public class Main {

    public static void main(String[] args) {

        Creator text = new TextCreator();
        FileDocument doc1 = text.createDocument();
        doc1.open();

        Creator pdf = new PdfCreator();
        FileDocument doc2 = pdf.createDocument();
        doc2.open();

        Creator sheet = new SheetCreator();
        FileDocument doc3 = sheet.createDocument();
        doc3.open();
    }
}