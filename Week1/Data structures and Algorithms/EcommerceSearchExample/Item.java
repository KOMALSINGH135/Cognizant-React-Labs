public class Item {

    int itemId;
    String itemName;
    String category;

    public Item(int itemId, String itemName, String category) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.category = category;
    }

    public void display() {
        System.out.println(itemId + " " + itemName + " " + category);
    }
}