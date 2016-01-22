<html>
	<head>
		<meta charset="utf-8">
		 <script src="js/jquery.min.js"></script>
		<style>
		h2
		{
			color: turquoise;

		}
		*
		{
		font-family: helvetica, arial, sans-serif;
		
		font-weight: 500;
		}
		.center
		{
			display: block;
			margin: 50px auto !important;
			text-align: center;
			max-width: 30%;
		}
		@media only screen and (max-width: 700px) 
		{
			.center
		{
		
			max-width: 80%;
		}
		}
		button:disabled
		{
			background: gray;
			color: #eee;
			cursor: not-allowed;

		}
		button
		{
			width: 100%;
			margin: 5px 0px;
			padding: 12px;
			font-size: 12px;
			background:#3a5795;
			border:1px #2196f3 solid;
			color:#fff;
			border-radius: 5px;
			cursor: pointer;
			font-weight: bold;
		}
		img
		{
			max-width: 100%;
			transition:2s all;	
		}
		#name
		{
			color: #344;
		}
		h5{
			color:#616161;
		}
		#img-container
		{
			overflow: hidden;
		}
		</style>
	</head>

	<body>
		<div class="center">
			<h2>¡¡ Vamos Pa'l Sancocho 2016 !!</h2>
			
			
			<div id="img-container">
			</div>

			<h5><span id="name"></span>, Ahora invita a tus amigos a que adorner su foto de perfil con
			el sancocho, Que nos vamos pal <strong>Sancocho Fest 2016 !!!!</strong>
			</h5>

			<button id="upload" disabled>Publicar en mi perfil</button>
			
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

