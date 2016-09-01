<!DOCTYPE html>
	<head>
		<meta charset="utf-8">
		 <script src="js/jquery.min.js"></script>
		<style>
		h1
		{
			color: turquoise;
			font-weight: bolder;
			margin: 20px 0;
		}
		*
		{
		font-family: helvetica, arial, sans-serif;
		/*font-weight: 500;*/
		}
		.center
		{
			display: block;
			margin: 50px auto !important;
			text-align: center;
			max-width: 40%;
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
		.container
		{
			display: -webkit-box;
			display: -moz-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
		}
		.item
		{
			cursor: pointer;
			margin: 0 1.2em;
		}
		</style>
	</head>

	<body>
		<div class="center">
			<h1>¡¡ Yo digo SI a la PAZ !!</h1>
			
			<div class="container">

				<div data-canvas="c1" class="item" id="img-container1">
					
				</div>

				<div data-canvas="c2" class="item" id="img-container2">
					
				</div>

			</div>

			<h5>
				<span id="name"></span>, Ahora invita a tus amigos apoyen el SI añadiendolo en su foto de perfil 
				<strong>#SIALaPaz</strong>
			</h5>


			<button id="upload" disabled>Publicar en mi perfil</button>
			
			<div hidden>
				<canvas id="c1"></canvas>
			</div>

			<div hidden>
				<canvas id="c2"></canvas>
			</div>	
		
		</div>

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

