<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossorigin="anonymous"/>
  <style>
    .container-fluid {
      outline: 3px solid rgb(95, 194, 255);
      width: 70%;
      margin: 20px auto;
    }

    .row-1,
    .row-3 {
      background-color: rgb(95, 194, 255);
    }

    .row,
    .title {
      text-align: center;
    }

    .col {
      outline: 1px solid rgb(14, 57, 84);
      padding: 6px;
      min-height: 40px;
    }

    .left {
      text-align: left;
    }

    .bold {
      font-weight: bold;
    }

    .text {
      margin: 10px auto;
      outline: none;
      padding: 0;
    }
  </style>

  <title>Document</title>
</head>
<body>
<?php
echo '<h5 class="title">PREDRAČUN BROJ. 2022-16950-63 ZA USLUGU SMJEŠTAJ</h5>';
?>
<div class="container-fluid">
  <div class="bold row row-1">
    <div class="col col-6">Usluga</div>
    <div class="col col-1">Cijena</div>
    <div class="col col-4">Količina</div>
    <div class="col col-1">Ukupno</div>
  </div>

  <div class="row">
    <div class="bold left col col-3">AS-16950-63-a</div>
    <div class="col col-2">08.08.2022 - 15.08.2022</div>
    <div class="col col-1">2 (osobe)</div>
    <div class="col col-1">104, 00 €</div>
    <div class="col col-4">7 (noćenja)</div>
    <div class="col col-1">728, 00 €</div>
  </div>

  <div class="row">
    <div class="col col-12"></div>
  </div>

  <div class="bold row row-3">
    <div class="left col col-11">Ukupno</div>
    <div class="col col-1">728, 00 €</div>
  </div>
</div>

<div class="container-fluid text">
  <?php
  echo '<p class="left">Uključeno u cijenu (bez dodatne naplate): turistička pristojba.</p>';
  ?>
</div>

<?php
echo '<h5 class="title">DINAMIKA PLAĆANJA</h5>';
?>

<div class="container-fluid">
  <div class="row bold row-1">
    <div class="col col-3">Uplata</div>
    <div class="col col-5">Način plaćanja</div>
    <div class="col col-3">Vrijeme plaćanja</div>
    <div class="col col-1">Iznos</div>
  </div>

  <div class="row">
    <div class="col bold col-3">Akontacija</div>
    <div class="col col-5">Kreditnom karticom (Visa,EC/MC,Maestro)</div>
    <div class="col col-3">Najkasnije 08.08.2022 do 11:00</div>
    <div class="col bold col-1">364, 00 €</div>
  </div>

  <div class="row">
    <div class="col bold col-3">Ostatak iznosa</div>
    <div class="col col-5">Kreditnom karticom (Visa,EC/MC,Maestro)</div>
    <div class="col col-3">Najkasnije 08.08.2022 do 15:00</div>
    <div class="col bold col-1">364, 00 €</div>
  </div>
</div>

<div class="container-fluid text">
  <?php
  echo '<p class="left">Uplatom akontacije gost potvrđuje da je upoznat te se saže sa Općim ujetimapružanja usluge smještaja u privatnim kapacitetima.</p>';
  ?>
</div>

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
  crossorigin="anonymous"></script>
</body>
</html>