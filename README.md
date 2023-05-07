# Shopping cart project

 I used React hooks for building it such as *useContext* and *useReducer*.
 
 In this project I created a shopping cart using **JavaScript, HTML, CSS and React Js**.

 For the list of products, I created a mock folder that contains the products in a JSON format, I render the JSON to display the products in the DOM later on with an empty array that then maps each object.
 I built the shopping cart feature creating a new empty array that filtered the products that were selected and also a filter that made posible to erase products from your shopping cart if you clicked the button a second time.

  This project also had a filter feature that enables the user to filter the products by minimum price and category. For this, I created a context in which I defined an initial state where I defined the minimum price to zero and category *All*. I called this states on a custom hook that I used inside a function.
When calling the custome hook, I setted the initial state with a filter the category and minimum price.

