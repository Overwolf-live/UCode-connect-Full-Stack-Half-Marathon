<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data to XML</title>
</head>
<body>
<style>
table {
    border: 2px double gray;
    width: 100%;
}
table td {
    border: 1px double black;
}
</style>
<h1>Avenger Quote to XML</h1>
<?php
    function autoload($pClassName) { include(__DIR__. '/' . $pClassName. '.php'); }
    spl_autoload_register("autoload");

    $avengerQuote1 = new AvengerQuote(1, "Tony Stark", "I am Iron man", [ "tony.jpg" ]);
    $avengerQuote1->addComment("I know i said no more surprises");
    $avengerQuote1->addComment("but i gotta say, I was really hoping to pull ofee one last one");

    $avengerQuote2 = new AvengerQuote(2, "Bruce Banner", "HULK CRASH", [ "hulk.jpg" ]);
    $avengerQuote2->addComment("That`s my secret, captain: i`m always angry.");
    
    $avengerQuote4 = new AvengerQuote(3, "Werewolf", "Whof", [ "Whof-whof", "Awooo" ]);
    $avengerQuote4->addComment("Grrrr");
    $avengerQuote4->addComment("Grawr");
    $avengerQuote4->addComment("Nya");

    $listAvengerQuote = new ListAvengerQuotes();
    $listAvengerQuote->addAvengerQuote($avengerQuote1);
    $listAvengerQuote->addAvengerQuote($avengerQuote2);
    $listAvengerQuote->addAvengerQuote($avengerQuote4);
    $listAvengerQuote->toXML("file.xml");

    echo '<table><tr><td><pre>';
    print_r($listAvengerQuote); 
    echo '</pre></td><td><pre>';
    print_r($listAvengerQuote->fromXML("file.xml"));
    echo '</pre></td></tr></table>';
?>