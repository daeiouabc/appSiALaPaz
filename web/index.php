<html>
	<head>
		<meta charset="utf-8">
		<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
		<style>
		*
		{
		font-family: 'Open Sans', sans-serif;
		color:#333;	
		}
		canvas, .center
		{
			display: block;
			margin: 0 auto !important;
			text-align: center;
		}

		button
		{
			
			margin:12px;
			padding: 12px;
			font-size: 15px;
			background: transparent;
			border:1px #2196f3 solid;
			color:#2196f3;
			border-radius: 8px;
			cursor: pointer;
			transition:1s all;
			font-weight: bold;
		}
		button:hover
		{
			background: #2196f3;
			color:#fff;
		}
		h1
		{
			color:#3f51b5
		}
	
		</style>
	</head>

	<body>
		<div class="center">
			<h1>¡¡ Vamos Pa'l Sancocho 2016 !!</h1>
			<h3>Adorna tu Foto de perfil en invita a tus amigos</h3>
			<canvas id="c"></canvas>
			<button id="subir">Publicar en mi perfil</button>
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

