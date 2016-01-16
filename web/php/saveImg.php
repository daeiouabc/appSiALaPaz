<?php

	if( isset( $_POST['data']) && isset( $_POST['name']) )
	{
		

		$data = $_POST['data'];
		$name = $_POST['name'];

		list($type, $data) = explode(';', $data);
		list(, $data)      = explode(',', $data);

		$data = base64_decode($data);
		$filename = sys_get_temp_dir().'/'.$name.'.png';
		file_put_contents('..'.$filename, $data);
		
		echo "    ";
		echo $filename;
	}
	else
	{
		echo 'Error';
	}


?>