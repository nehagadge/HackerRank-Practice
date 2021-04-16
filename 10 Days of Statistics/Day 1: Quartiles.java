//Problem: https://www.hackerrank.com/challenges/s10-quartiles/problem

//Solution:

import java.util.Scanner;
import java.util.Arrays;

public class Solution {
    public static void main(String[] args) {
        int [] arr = getValues();
        Arrays.sort(arr);
        
        int q1 = findMedian(arr, 0, arr.length / 2 - 1);
        int q2 = findMedian(arr, 0, arr.length - 1);
        int q3 = findMedian(arr, (arr.length + 1) / 2, arr.length - 1);
        
        System.out.println(q1);
        System.out.println(q2);
        System.out.println(q3);
    }

    /* Creates array from input */
    private static int [] getValues() {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int [] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }
        scanner.close();
        return arr;
    }
    
    /* Treats elements from "start" to "end" (inclusive) as an array and calculates its median */
    private static int findMedian(int [] arr, int start, int end) {
        if ((end - start) % 2 == 0) { // odd number of elements
            return (arr[(end + start) / 2]);
        } else { // even number of elements
            int value1 = arr[(end + start) / 2];
            int value2 = arr[(end + start) / 2 + 1];
            return Math.round((value1 + value2) / 2); 
        }
    }
}
