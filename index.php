<!-- header -->
	<?php
	session_start();
	include("./includes/header.php");
	?>
<!-- /header -->

	<?php
	$pages_dir = 'pages';

		if(!empty($_GET['p'])){

			$pages = scandir ($pages_dir, 0);
			unset ($pages[0], $pages[1]);
			$p = $_GET['p'];

			if (in_array($p.'.inc.php', $pages)){
				include ($pages_dir.'/'.$p.'.inc.php');
			}else{
				echo '<section><div class="block"><center><p>Sorry, the page does not exist.</p></center></div></section>';
			}
		} else {
			include($pages_dir.'/home.inc.php');
		}
	?>

<!-- footer -->
	<?php include("./includes/footer.php"); ?>
<!-- /footer -->















