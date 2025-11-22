# First Derivative Calculator

This project is an **interactive web tool** that allows users to
**calculate the first derivative of mathematical functions instantly**.\
It's built with **HTML, Tailwind CSS, and JavaScript**, and provides a
**simple, clean interface** for entering functions and viewing their
derivatives.

------------------------------------------------------------------------

## Live Demo

[Live Demo](https://shorookkhaled559.github.io/Derivative-Calculator/)

------------------------------------------------------------------------

## Features

-   **Instant Derivative Calculation** --- Computes the **first
    derivative** of any mathematical function entered by the user.
-   **Predefined Function Examples** --- Quickly insert common functions
    to test the calculator.
-   **Responsive UI** --- Works smoothly on all screen sizes.
-   **Error Handling** --- Shows clear messages when invalid expressions
    are entered.

------------------------------------------------------------------------

## Technologies Used

-   **HTML5** --- Structure of the web interface.
-   **Tailwind CSS** --- Styling with modern utility‑first classes.
-   **JavaScript (ES6)** --- Logic for parsing the function and
    calculating the derivative.
-   **Math.js** --- Used for symbolic math operations.

------------------------------------------------------------------------

## How It Works

1.  User enters a mathematical function (e.g., `sin(x)`, `x^3 + 2x`).
2.  The tool parses the function using **math.js**.
3.  The derivative is computed using `math.derivative()`.
4.  The result is displayed instantly in the output box.
5.  Users may click predefined examples to auto-fill common functions.

------------------------------------------------------------------------

## Example (JavaScript)

``` js
const expression = "x^3 + 2x";

const derivative = math.derivative(expression, "x").toString();
console.log(derivative); // Output: 3x^2 + 2
```

------------------------------------------------------------------------

## Project Structure

    Derivative-Calculator/
    │
    ├── css/
    │   └── style.css
    │
    ├── js/
    │   └── script.js
    │
    ├── index.html
    └── README.md

------------------------------------------------------------------------

## How to Run Locally

1.  Clone the repository:

``` bash
git clone https://github.com/shorookkhaled559/Derivative-Calculator
```

2.  Navigate to the project folder:

``` bash
cd Derivative-Calculator
```

3.  Open `index.html` in your browser.

------------------------------------------------------------------------

## Future Enhancements

-   Add support for **higher‑order derivatives**.
-   Add a graph to visualize the function and its derivative.
-   Add dark/light mode.

------------------------------------------------------------------------

## 🪪 License

This project is **open‑source** and free for learning and personal use.
Developed by **Shorouk Khaled**.
