<?php
$links = array(

"https://dl.dropbox.com/s/lnns70ids5yokn4/299_teenlicious_720p_4000.mp4?dl=0",

);

$randomRedirection = $links[array_rand($links)];
header("Location: $randomRedirection");
?>