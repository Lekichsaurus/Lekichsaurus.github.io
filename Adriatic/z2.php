<?php
//Zadatak #2
//Kreirati funkciju koja iz tri zadana niza string podataka pronalazi vrijednosti koje se nalaze u sva tri niza i one koje se nalaze u samo jednom nizu i ispisuje rezultat u obliku izvještaja.
//-------------------------------------------------------------------

function find($arrayA, $arrayB, $arrayC): void {
    //pronađemo vrijednosti koje se nalaze u sva tri niza
    $inAllArrays = array_intersect($arrayA, $arrayB, $arrayC);

    //pronađemo vrijednosti koje se nalaze samo u jednom nizu
    $onlyInArrayA = array_diff($arrayA, $arrayB, $arrayC);
    $onlyInArrayB = array_diff($arrayB, $arrayA, $arrayC);
    $onlyInArrayC = array_diff($arrayC, $arrayA, $arrayB);

    //ispišemo rezultate
    echo nl2br( "U sva tri niza: " . json_encode(array_values($inAllArrays)) . "\n");

    echo nl2br("Samo u nizu arrayA: " . json_encode(array_values($onlyInArrayA)) . "\n");

    echo nl2br("Samo u nizu arrayB: " . json_encode(array_values($onlyInArrayB)) . "\n");

    echo nl2br("Samo u nizu arrayC: " . json_encode(array_values($onlyInArrayC)) . "\n");
}

//primjeri korištenja
$arrayA = ['a', '', 'c', 'dd', '234', '22', 'rc'];
$arrayB = ['a', '62', 'c', 'dad', 'rc', '24', '222'];
$arrayC = ['222', 'a', 'be', 'rc', 'dd', '234', '22', 'pp'];

find($arrayA, $arrayB, $arrayC);