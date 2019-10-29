<?php
$links = array(

"https://fortunedotcom.files.wordpress.com/2015/09/gettyimages-72956826-1.jpg",
"http://www.wallpapers13.com/wp-content/uploads/2016/09/Al-Kaaba-Al-Musharrafah-Holy-Kaaba-is-a-building-in-the-center-of-Islams-holiest-mosque-Al-Masjid-al-Haram-in-Makkah-Al-Hejaz-Saudi-Arabia-Wallpaper-HD-1920x1080.jpg",
"https://pbs.twimg.com/media/DpL2CFQXcAA3r9O.jpg",
"http://turntoislam.com/file/pic/photo/2014/08/badab311b66d5d523dd1a20b780b2c97_1024.jpg",
"http://sydneyprayertimes.com/wallpapers/al-masjid_an-nabawi_mosque_in_medina_saudi_arabia.jpg",
"http://wallpaperping.com/wp-content/uploads/2018/08/sweet-madina-shareef-hd-wallpapers-free-downloaded.jpg",
"http://genchi.info/download.php?id=1008160&name=mecca-hd-wallpaper-25.jpg&width=1080&height=1920",

);

$rr = $links[array_rand($links)];
header("Location: $rr");
?>