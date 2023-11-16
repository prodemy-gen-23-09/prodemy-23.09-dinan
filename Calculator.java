import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner userInput = new Scanner(System.in);

        System.out.print("masukan angka 1 : ");
        int angka1 = userInput.nextInt();

        System.out.print("masukan angka 2 : ");
        int angka2 = userInput.nextInt();

        System.out.print("masukan angka operasi : ");
        String operasi = userInput.next();

        int hasil = 0;
        
        if (operasi.equals("+")){
            hasil += angka1 + angka2;
        } else if (operasi.equals("-")) {
            hasil += angka1 - angka2;
        } else if (operasi.equals("*")) {
            hasil += angka1 * angka2;
        }
        System.out.println("hasil penjumlahan " + hasil);
    }
}
