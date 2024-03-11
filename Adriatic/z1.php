<?php
//Zadatak #1
//Napraviti metodu koja će na najoptimalniji način u zadanom nizu pronaći brojeve najbliže traženom broju.
//---------------------------------------------------------------
function getClosestNumbers($options, $number) {
    //sortitamo array
    sort($options);

    //inicijaliziramo varijable za praćenje najbližih brojeva
    $closestNumbers = [];
    $closestDifference = PHP_INT_MAX;

    //iteriramo kroz array
    foreach ($options as $option) {
        //izračunajemo apsolutnu razliku između traženog broja i trenutnog broja
        $difference = abs($number - $option);

        //ažuriramo najbliže brojeve ako je trenutni broj bliži
        if ($difference < $closestDifference) {
            $closestNumbers = [$option];
            $closestDifference = $difference;
        } elseif ($difference == $closestDifference) {
            //dodamo broj u array ako ima istu razliku kao trenutni najbliži broj
            $closestNumbers[] = $option;
        }
    }

    return $closestNumbers;
}

//primjer korištenja
$options = [-908, -852, -475, -355, -102, -100, -55, -25, -18, -7, -6, -5, 0, 1, 7, 8, 99, 101, 122, 147, 5025, 5334, 7410];

$number1 = 90;
$result1 = getClosestNumbers($options, $number1);
echo nl2br("Za number = $number1 => funkcija vraća array: [" . implode(", ", $result1) . "] \n");

$number2 = 100;
$result2 = getClosestNumbers($options, $number2);
echo  nl2br( "Za number = $number2 => funkcija vraća array: [" . implode(", ", $result2) . "]\n");

$number2 = 3;
$result2 = getClosestNumbers($options, $number2);
echo  nl2br( "Za number = $number2 => funkcija vraća array: [" . implode(", ", $result2) . "]\n");

