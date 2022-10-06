**Morning**

 - Quiz (10/11)

- Joseph Trodden
    - Cognitive diversity

    [pdf]
    [pdf]
    [pdf]

    - Strength in diversity


- Workshop navigating data

- Presentation: Map and Set

    Map and Set are two new data structures in ES6. They are very similar to objects and arrays, but have some important differences. In this presentation, we will look at the differences between Map and Set, and when you should use each one.

    **Diferences between set and maps**

    The main difference between a set and a map is that a set only has keys, while a map has both keys and values. This means that a set can only contain unique values, while a map can contain multiple values for the same key.

    Another difference is that a set is iterable, while a map is not. This means that you can use a for...of loop to iterate over a set, but not a map.


    **When to use a set**

    A set is a good choice when you want to store unique values. For example, if you want to store a list of users who have visited your website, you can use a set to store the email addresses of those users. This way, you can easily check if a user has visited your website before, without having to loop through the entire list of users.

    **When to use a map**
    
    A Map is a collection of key/value pairs that can use any data type as a key and can maintain the order of its entries. Maps have elements of both Objects (a unique key/value pair collection) and Arrays (an ordered collection), but are more similar to Objects conceptually. This is because, although the size and order of entries is preserved like an Array, the entries themselves are key/value pairs like Objects.

    A map is a good choice when you want to store key-value pairs. For example, if you want to store the names and ages of your users, you can use a map to store the name and age of each user. This way, you can easily look up a user's age by name.

    **How to create a set**

    You can create a set by using the new keyword and passing an iterable object to the constructor. For example, you can create a set that contains the numbers 1, 2, and 3 by using the following code:

    const set = new Set([1, 2, 3]);
    console.log(set); // Set {1, 2, 3}

    **How to create a map**

    You can create a map by using the new keyword and passing an iterable object to the constructor. For example, you can create a map that contains the names and ages of three users by using the following code:

    const map = new Map([
      ['Alice', 20],
      ['Bob', 21],
      ['Charlie', 22]
    ]);
    console.log(map); // Map { 'Alice' => 20, 'Bob' => 21, 'Charlie' => 22 }

    **How to add items to a set**

    You can add items to a set by using the add method. For example, you can add the number 4 to the set that we created in the previous example by using the following code:

    set.add(4);
    console.log(set); // Set {1, 2, 3, 4}

    **how to add items to a map**

    You can add items to a map by using the set method. For example, you can add the name and age of a new user to the map that we created in the previous example by using the following code:

    map.set('David', 23);
    console.log(map); // Map { 'Alice' => 20, 'Bob' => 21, 'Charlie' => 22, 'David' => 23 }

    **How to remove items from a set**

    You can remove items from a set by using the delete method. For example, you can remove the number 4 from the set that we created in the previous example by using the following code:

    set.delete(4);
    console.log(set); // Set {1, 2, 3}

    **How to remove items from a map**

    You can remove items from a map by using the delete method. For example, you can remove the name and age of the user named David from the map that we created in the previous example by using the following code:

    map.delete('David');
    console.log(map); // Map { 'Alice' => 20, 'Bob' => 21, 'Charlie' => 22 }

