import java.util.Scanner;

public class PangramCheck {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
    
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();
        
        if (isPangram(sentence)) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is not a pangram.");
        }
        
        scanner.close();
    }

    public static boolean isPangram(String sentence) {
        boolean[] alphabet = new boolean[26];
        
        for (int i = 0; i < sentence.length(); i++) {
            char ch = sentence.charAt(i);
            
            if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
                if (ch >= 'A' && ch <= 'Z') {
                    ch = (char) (ch + 32); 
                }
                
                alphabet[ch - 'a'] = true;
            }
        }
        
        for (boolean b : alphabet) {
            if (!b) return false;
        }
        return true;
    }
}
