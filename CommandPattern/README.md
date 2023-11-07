With the Command Pattern, we can decouple objects that execute a certain task from the object that calls the method.

The way which is described in the code is usefull when we want to decouple the functionality of the class .
As suppose we want to change the name of the function (placeOrder) if we put PlaceOrder as a member function then in that
case we have to change the name in the entire code, but this way we can support this name changing functionality.
Also if we want to extend the functionality of a class this is very helpful.