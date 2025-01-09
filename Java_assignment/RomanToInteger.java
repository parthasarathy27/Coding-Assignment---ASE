import java.util.Scanner;

public class RomanToInteger {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter a Roman numeral: ");
        String roman = scanner.nextLine();
        
        int result = romanToInt(roman);
        System.out.println("Roman numeral " + roman + " is " + result);
        
        scanner.close();
    }

    public static int romanToInt(String s) {
        int total = 0;
        
        for (int i = 0; i < s.length(); i++) {
            char current = s.charAt(i);
            int currentValue = getRomanValue(current);
            
            if (i + 1 < s.length()) {
                char next = s.charAt(i + 1);
                int nextValue = getRomanValue(next);
                if (currentValue < nextValue) {
                    total -= currentValue;
                } else {
                    total += currentValue;
                }
            } else {
                total += currentValue;
            }
        }
        
        return total;
    }

    public static int getRomanValue(char roman) {
        if (roman == 'I') return 1;
        if (roman == 'V') return 5;
        if (roman == 'X') return 10;
        if (roman == 'L') return 50;
        if (roman == 'C') return 100;
        if (roman == 'D') return 500;
        if (roman == 'M') return 1000;
        return 0; 
    }
}
