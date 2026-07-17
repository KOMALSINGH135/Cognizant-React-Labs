public class SearchUtility {

    // Linear Search
    public static Item linearSearch(Item[] items, int id) {

        for (Item item : items) {
            if (item.itemId == id) {
                return item;
            }
        }
        return null;
    }

    // Binary Search
    public static Item binarySearch(Item[] items, int id) {

        int left = 0;
        int right = items.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            if (items[mid].itemId == id)
                return items[mid];

            if (items[mid].itemId < id)
                left = mid + 1;
            else
                right = mid - 1;
        }

        return null;
    }
}