--ID 11294254--

# React Native App

This is a react application that badically demonstates AsyncStorage in react native. When a users adds an item to the cart, the item(which is an object) is saved into local storage using Asyncstorage.

## How I went about it

I chose to use aysnc storage because it works perfectly for small sums of data like these. As usual, I set up the page navigation in the ```App.js``` . Initially the products are rendered on the homescreen. When an items is clicked at the add button. it updates the cartlist and renders the UI respectively.

<p>
  <img src="./assets/ph2.png" alt="App Screenshot 1" height='450vh' width="25%"/>
  <img src="./assets/ph1.png" alt="App Screenshot 2" height='450vh' width="25%"/>
</p>




## How to Run

1. **Install Dependencies**:
    ```bash
    npm install
    ```

2. **Start the App**:
    ```bash
    expo start
    ```

3. **Run on Emulator or Device**:
    - Press `a` to open on an Android emulator.
    - Press `i` to open on an iOS simulator.