<?php

	if( isset( $_POST['data']) && isset( $_POST['name']) )
	{
		

		$data = $_POST['data'];
		$name = $_POST['name'];

		list($type, $data) = explode(';', $data);
		list(, $data)      = explode(',', $data);

		$data = base64_decode($data);
		$filename = '/temp/'.$name.'.png';
		file_put_contents('..'.$filename, $data);
		echo sys_get_temp_dir();
		echo "    ";
		echo $filename;
	}
	else
	{
		echo 'Error';
	}


?>