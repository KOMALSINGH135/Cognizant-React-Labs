public class Main {

    public static void main(String[] args) {

        Item[] items = {
                new Item(101, "Laptop", "Electronics"),
                new Item(102, "Shoes", "Fashion"),
                new Item(103, "Watch", "Accessories"),
                new Item(104, "Phone", "Electronics"),
                new Item(105, "Book", "Education")
        };

        System.out.println("Linear Search:");

        Item result1 = SearchUtility.linearSearch(items, 104);

        if (result1 != null)
            result1.display();
        else
            System.out.println("Item not found");

        System.out.println();

        System.out.println("Binary Search:");

        Item result2 = SearchUtility.binarySearch(items, 104);

        if (result2 != null)
            result2.display();
        else
            System.out.println("Item not found");
    }
}