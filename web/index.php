<html>
	<head>
		<meta charset="utf-8">
		
		<style>
		*
		{
		font-family: helvetica, arial, sans-serif;
		
		font-weight: 500;
		}
		canvas, .center
		{
			display: block;
			margin: 0 auto !important;
			text-align: center;
			
		}

		button
		{
			width: 48%;
			margin:12px;
			padding: 12px;
			font-size: 12px;
			background:#3a5795;
			border:1px #2196f3 solid;
			color:#fff;
			border-radius: 5px;
			cursor: pointer;
			transition:1s all;
			font-weight: bold;
		}
		img
		{
			max-width: 100%;	
		}
		#name
		{
			color: #344;
		}
		h5{
			color:#616161;
		}
	
		</style>
	</head>

	<body>
		<div class="center">
			<h2>¡¡ Vamos Pa'l Sancocho 2016 !!</h2>
			<h5><span id="name"></span>, Adorna tu Foto de perfil e invita a tus amigos, 
			Que nos vamos pal Sancocho Fest 2016 !!!!
			</h5>
			
			<div id="img-container">
			</div>
			
			<button id="upload">Publicar en mi perfil</button>
			
			<div hidden>
				<canvas id="c"></canvas>
			</div>	
		
		</div>

	<script type="text/javascript" src="lib/minAjax.js"></script>
	<script type="text/javascript" src="lib/fabricjs.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
	<script>
		  (function(d, s, id){
		     var js, fjs = d.getElementsByTagName(s)[0];
		     if (d.getElementById(id)) {return;}
		     js = d.createElement(s); js.id = id;
		     js.src = "//connect.facebook.net/en_US/sdk.js";
		     fjs.parentNode.insertBefore(js, fjs);
		   }(document, 'script', 'facebook-jssdk'));
	</script>

	</body>




</html>

