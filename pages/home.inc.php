<!-- ============================================== -->
<!-- ONE -->
<!-- ============================================== -->

<section>
	<div class="anchor"></div>
    <div class="block-box-bg rel">
    	<span class="scroll">Scroll</span>
        <!--<picture>
		    <img class="full-img-abs small-d-none" src="./images/hero/hero.png" alt="Imagen de fondo">
		    <img class="full-img-abs d-none small-d-block" src="./images/hero/hero_mobile.png" alt="Imagen de fondo">
		    <img class="full-img-abs" src="./images/body/gif_2_Global.gif" alt="Imagen de fondo">
		</picture>-->

        <div class="w-100 ai-center jc-center dh-100">
            <div class="info t-c mw-1440 small-w-100 p-30 fd-col g-30 ai-center all-m-0">
				<h2 class="h1 h1-special tc-0"><?php echo $Hero_02; ?></h2>
				<p class="tc-30 mw-1080 p-0 h5"><?php echo $Hero_03; ?></p>
				<a href="#form" class="btn c-pri"><?php echo $Btn_know; ?></a>
            </div>
        </div>
        <canvas id="c"></canvas>
    </div>
</section>

<section id="next" class="c-0 media-arriba">
	<div class="anchor"></div>
  <div class="mw-768 w-881">

  <ul class="tabs" data-tabgroup="one-tab">
    <li><a href="#tab1" class="btn active"><?php echo $Btn_Eco; ?></a></li>
    <li><a href="#tab2" class="btn"><?php echo $Btn_Reach; ?></a></li>
  </ul>

  <div id="one-tab" class="tabgroup all-tc-0">
    <div id="tab1">
        <div class="jc-between g-50 small-g-30 small-fd-col ai-center">
            <div class="w-60">
                <img src="./images/body/eco.jpg" class="br-10" alt="<?php echo $Btn_Eco; ?>" />
            </div>
            <div class="w-100">
                <p><?php echo $About_01; ?></p>
            </div>
        </div>
    </div>
    <div id="tab2">
        <div class="jc-between g-50 small-g-30 small-fd-col ai-center fd-row-rev">
            <div class="w-60">
                <img src="./images/body/reach.jpg" class="br-10" alt="<?php echo $Btn_Reach; ?>" />
            </div>
            <div class="w-100">
                <p><?php echo $About_02; ?></p>
            </div>
        </div>
    </div>
  </div>

  </div>
</section>

<section class="c-0 media-abajo">
	<div class="anchor"></div>
	<div class="mw-1440 t-c z-index-2">
		<h2 class="h1 tc-0"><?php echo $Solutions; ?></h2>
	</div>
	<div class="images_wrapper">
	    <ul class="images">
	        <?php
	        $Youtubers_one = array(
	            array('studio'),
	            array('crea'),
	            array('talent'),
	            array('mindz'),
	            array('exchange'),
	            array('corpsyte'),
	            array('payments'),
	            array('logistics')
	        );

	        // Imprimimos la lista dos veces para lograr el efecto de loop infinito
	        for ($i = 0; $i < 2; $i++) {
	            foreach ($Youtubers_one as $item) {
	                echo "<li><img loading='lazy' src='images/vertical/$Ver/{$item[0]}.png' class='img_youtuber' alt='Disruptive {$item[0]}'></li>";
	            }
	        }
	        ?>
	    </ul>
	</div>
	<div class="mw-1440 t-c z-index-2">
		<a href="#form" class="btn c-pri mt-30"><?php echo $Btn_know; ?></a>
	</div>
</section>

<section class="c-10">
	<div class="anchor"></div>
	<div class="mw-1440 jc-between g-60 ai-center small-fd-col">
		<div class="w-100">
			<div class="mano">
				<h1 class="tc-pri h1 fw-700"><?php echo $Question_title; ?></h1>
				<p class='tc-80'><?php echo $Question_text; ?></p>
				<img src="./images/body/mano.png" alt="mano"/>
			</div>
		</div>
		<div class="w-100">
			<?php
			$Trust = array(
			    array(
			    	$Question_title_01,
			    	$Question_text_01
			    ),
			    array(
			    	$Question_title_02,
			    	$Question_text_02
			    ),
			    array(
			    	$Question_title_03,
			    	$Question_text_03
			    ),
			    array(
			    	$Question_title_04,
			    	$Question_text_04
			    )
			);

			$counter = 1; // Inicia el contador en 1

			foreach ($Trust as $item){
			    echo "
			    <div class='trust ai-center'>
			    	<span>{$counter}</span>
			        <div class='info'>
			            <h2 class='h3 tc-50'>{$item[0]}</h2>
			            <p class='tc-50'>{$item[1]}</p>
			        </div>
			    </div>
			    ";
			    $counter++;
			}
			?>
		</div>
	</div>
</section>

<section class="c-0">
	<div class="mw-1440 t-c">
		<h3 class="h1 tc-100"><?php echo $Contact_title; ?></h3>
		<p class='tc-80'><?php echo $Contact_text_01; ?></p>
	</div>
</section>

<section class="c-0 media-abajo">
	<div class="mw-1440 t-c">
		<div class="banner z-index-2">
			<ul>
		        <li><img src='./images/body/01.png' alt="contacto disruptive" /></li>
			    <li><img src='./images/body/02.png' alt="contacto disruptive" /></li>
			</ul>
		</div>
		<a href="#form" class="btn c-pri mt-30 z-index-2"><?php echo $Btn_know; ?></a>
	</div>
</section>

<section>
    <div class="anchor"></div>
    <div class="mw-768">
        <form action="index.php" method="post" class="fd-col mw-480 c-90 p-30 m-center br-20" id="form">
            <?php include("./includes/validar.php"); ?>

            <label class="tc-0"><?php echo $Contact_01; ?></label>
            <input type="text" placeholder="Nombre" name="nombre" class="input" 
                   value="<?php echo isset($_SESSION['nombre']) ? htmlspecialchars($_SESSION['nombre'], ENT_QUOTES, 'UTF-8') : ''; ?>">

            <label class="tc-0"><?php echo $Contact_02; ?></label>
            <input type="text" placeholder="Email" name="email" class="input" 
                   value="<?php echo isset($_SESSION['email']) ? htmlspecialchars($_SESSION['email'], ENT_QUOTES, 'UTF-8') : ''; ?>">

            <label class="tc-0"><?php echo $Contact_03; ?></label>
            <input type="text" placeholder="Teléfono" name="telefono" class="input" 
                   value="<?php echo isset($_SESSION['telefono']) ? htmlspecialchars($_SESSION['telefono'], ENT_QUOTES, 'UTF-8') : ''; ?>">

            <label class="tc-0"><?php echo $Contact_04; ?></label>
            <textarea placeholder="Comentario" id="autosize_client" name="comentario" class="input"><?php 
                echo isset($_SESSION['comentario']) ? htmlspecialchars($_SESSION['comentario'], ENT_QUOTES, 'UTF-8') : ''; 
            ?></textarea>

            <!-- Campo Honeypot (para bloquear bots) -->
            <input type="text" name="honeypot" style="display:none;">

            <button type="submit" name="submit" class="btn send c-pri w-100 mt-30 br-10"><?php echo $Btn_Send; ?></button>
        </form>
    </div>
</section>