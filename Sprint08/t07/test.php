<?php

function autoload($pClassName) { include(__DIR__. '/' . $pClassName. '.php'); }
spl_autoload_register("autoload");

$heroes = new Heroes();

$heroes->find(10);

$heroes->id = 11;
$heroes->delete();

$heroes->id = 11;
$heroes->name = "Overwolf";
$heroes->description = "Like wolf but stupid";
$heroes->race = "human";
$heroes->class_role = "dd";
$heroes->save();

?>