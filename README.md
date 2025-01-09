# Coding Assignment – Associate Software Engineer

This repository contains the solutions to the coding assignment for the position of **Associate Software Engineer** at **Cloud Vandana**. The assignment aims to evaluate problem-solving skills, understanding of algorithms, and the ability to write clean and efficient code.

## Table of Contents

1. [Java Solutions](#java-solutions)
   - [Shuffle an Array](#shuffle-an-array)
   - [Convert Roman Numerals to Integer](#convert-roman-numerals-to-integer)
   - [Pangram Checker](#pangram-checker)
2. [JavaScript Solutions](#javascript-solutions)
   - [Reverse Words in a Sentence](#reverse-words-in-a-sentence)
   - [Sort Array in Descending Order](#sort-array-in-descending-order)
3. [HTML Solutions](#html-solutions)
   - [Basic Calculator](#basic-calculator)
   - [Survey Form](#survey-form)

## Java Solutions

### Shuffle an Array
- **Description**: 
    - Implemented a custom method to shuffle an array of numbers `[1, 2, 3, 4, 5, 6, 7]` without using built-in methods like `Collections.shuffle()`. 
    - The approach uses a simple random swapping technique.
  
- **Implementation**: 
    - The `shuffleArray()` method randomly swaps elements of the array to achieve a shuffled state.
  
---

### Convert Roman Numerals to Integer
- **Description**: 
    - Created a function that takes a Roman numeral string as input (e.g., `IX`) and returns its corresponding integer value (e.g., `9`).
    - The conversion follows the Roman numeral rules (e.g., `IV = 4`, `IX = 9`).
  
- **Implementation**: 
    - Used a dictionary to map Roman numeral characters to their integer values and applied the conversion logic by iterating through the string.

---

### Pangram Checker
- **Description**: 
    - Created a function to check if a given sentence is a **pangram**, meaning it contains all the letters of the alphabet at least once.
    - The check is case-insensitive and ensures that all letters are accounted for.

- **Implementation**: 
    - The input string is converted to lowercase, and a set is used to track unique characters. If the set size equals 26 (the number of letters in the alphabet), the string is a pangram.

---

## JavaScript Solutions

### Reverse Words in a Sentence
- **Description**: 
    - A function that takes a sentence as input and reverses each word individually, without reversing the order of the words.
    - Example: `"This is a sunny day"` becomes `"shiT si a ynnus yad"`.
  
- **Implementation**: 
    - The sentence is split into individual words, and each word is reversed using the `split()` and `reverse()` methods, then joined back into a sentence.

---

### Sort Array in Descending Order
- **Description**: 
    - Implemented a custom sorting algorithm to sort an array in descending order without relying on JavaScript’s built-in `sort()` method.
  
- **Implementation**: 
    - A simple bubble sort or selection sort algorithm is used to sort the array in descending order.

---

## HTML Solutions

### Basic Calculator
- **Description**: 
    - Created a simple calculator using HTML, CSS, and JavaScript that performs basic arithmetic operations: add, subtract, multiply, and divide.
    - The layout and styling are done using HTML and CSS, with JavaScript used to handle the logic of the operations.

- **Implementation**: 
    - The calculator features buttons for digits and operations. The user can enter numbers, choose an operation, and click “Equals” to get the result.

---

### Survey Form
- **Description**: 
    - Designed a survey form with the following fields: **First Name**, **Last Name**, **Date of Birth**, **Country**, **Gender**, **Profession**, **Email**, and **Mobile Number**.
    - Added validation to ensure all fields are filled before submission. After submitting, the form displays a popup with the entered values, and the form is reset afterward.

- **Implementation**: 
    - The form uses HTML for structure and JavaScript for validation and form handling. The popup displays the form’s entered data with labels and allows resetting the form on closing.

---

## How to Run the Code

### Java:
1. Download or clone the repository.
2. Navigate to the Java files (`ShuffleArray.java`, `RomanToInteger.java`, `PangramChecker.java`).
3. Compile and run each Java file in your preferred IDE or via the terminal.

### JavaScript:
1. Open the `.html` files (e.g., `reverseWords.html`, `sortArray.html`) in any modern web browser.
2. The JavaScript logic is embedded within the HTML files, so the functionality will work directly when you open the file.

### HTML:
1. Open `basicCalculator.html` or `surveyForm.html` in a web browser to interact with the calculator and survey form.

---
