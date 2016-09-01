/*
AppSancochoFest
David Gomez - Enero 2016
*/

window.onload = function() {

  var canvas = new fabric.StaticCanvas('c1');
  var _canvas = new fabric.StaticCanvas('c2');
  canvas.setHeight(480);
  canvas.setWidth(480);
  _canvas.setHeight(480);
  _canvas.setWidth(480);
  var kit;
  var button = document.getElementById('upload');
  var name = document.getElementById('name');
  var img1 = document.getElementById('img-container1');
  var img2 = document.getElementById('img-container2');
  var friendCache = {};
  var clientId = 'a6248b72f7f554d';


  FB.init({
    appId: 1585144288446378,
    frictionlessRequests: true,
    status: true,
    version: 'v2.5'
  });


  function addProfilePicture(url)
  {
    fabric.Image.fromURL( url, function(oImg) {
      canvas.add(oImg);
      _canvas.add(oImg);

      fabric.Image.fromURL('img/gradiente.png', function(oImg) {
       
        _canvas.add(oImg.set({top: 310}).scale(1));
        canvas.add(oImg.set({top: 310}).scale(1));
      
      },{ crossOrigin: 'anonymous' });
      
      addStickers();
      
    },{ crossOrigin: 'anonymous' });
  }
 

  function addStickers()
  {
    
    fabric.Image.fromURL( 'img/stick1.png', function(oImg) {
      
      canvas.add(oImg.set({top: 310, left:50}).scale(0.5));
      
      fabric.Image.fromURL('img/stick2.png', function(oImg) {
       
        _canvas.add(oImg.set({top: 310, left:50}).scale(0.65));
        canvasToImage();
      
      },{ crossOrigin: 'anonymous' });


    },{ crossOrigin: 'anonymous' });
  }



  function saveImage(data,callback)
  {

     $.ajax({
      url: 'https://api.imgur.com/3/image',
      type: 'POST',
      headers: {
        Authorization: 'Client-ID ' + clientId,
        Accept: 'application/json'
      },
      data: {
        image: data,
        type: 'base64'
      },
      success: function(result) {
        console.log(result);
        //console.log(result.data.link);

        friendCache.savedImage = result.data.link;
        friendCache.idSavedImage = result.data.deletehash;
        callback(); 
      }
      
    });

    
  

  }

  function deleteImage(deletehash, callback)
  {
    $.ajax({
      url: 'https://api.imgur.com/3/image/'+deletehash,
      type: 'DELETE',
      headers: {
        Authorization: 'Client-ID ' + clientId,
        Accept: 'application/json'
      },
    success: function(result) {
        console.log('borrada con exito');
        callback();
      }
    });

  }


  function canvasToImage()
  {
     
    img1 = new Image();
    img2 = new Image();
    
    img1.src = document.getElementById('c1').toDataURL();
    document.getElementById('img-container1').appendChild(img1);   
    
    img2.src = document.getElementById('c2').toDataURL();
    document.getElementById('img-container2').appendChild(img2);   
    
  }


  function login(callback)
  {
    FB.login(callback,{scope: 'publish_actions'});
  }


  function loginCallback(response)
  {
    console.log('loginCallback',response);
    if(response.status != 'connected') {
      top.location.href = 'https://www.facebook.com/appcenter/vamospalsancocho';
    }
  }


  function onStatusChange(response)
  {
    if( response.status != 'connected' )
    {
      login(loginCallback);
    } else 
    {
      getMe(function(){
        //console.log(kit);
      });
    }
  }


  function onAuthResponseChange(response)
  {
    console.log('onAuthResponseChange', response);
  }

  function getMe(callback)
  {
    FB.api("/me?fields=name,picture.width(480)", function(response){
      if( !response.error )
      {
        friendCache.me = response;
        console.log(response);
        //callback(); 
        addProfilePicture(response.picture.data.url);
        name.innerHTML = response.name;

      } else {

        console.error('/me', response);
      }
    });
  }

  function selectImage(event)
  {
      
      if(button.disabled == true) button.disabled = false;
      

      id_canvas = event.target.parentElement.dataset.canvas;
      friendCache.idCanvas = id_canvas;

      if (id_canvas == 'c1') {

        img2.className = "item"
        img1.className = "item selected";

      } else {

        img1.className = "item"
        img2.className = "item selected";

      }
  }


  function postImage()
  {

    //console.log(friendCache.savedImage);  
    try {
      dataURL = document.getElementById(friendCache.idCanvas).toDataURL('image/jpeg', 0.9).split(',')[1];
    } catch(e) {
      dataURL = document.getElementById(friendCache.idCanvas).toDataURL().split(',')[1];
    }  
    button.innerHTML = "Publicando .....";
    saveImage( dataURL, function(){ 

      console.log(friendCache.savedImage);
      console.log(friendCache.savedImage);
      FB.api('/me/photos', 'post', {
          message:'#SiALaPaz #mensajes,creado con https://apps.facebook.com/SiALaPaz/',
          //url:'http://appsancocho.herokuapp.com'+friendCache.savedImage       
          url:friendCache.savedImage
      }, function(response){

          if (!response || response.error) {
              alert('Error occured');
              console.log(response);
          } else {
              alert('Post ID: ' + response.id);
              deleteImage(friendCache.idSavedImage, function() {
                location.href = "https://facebook.com/"+response.id;
              });
              
          }

      });
    });
  }


  img1.addEventListener('click', selectImage);
  img2.addEventListener('click', selectImage);

  button.addEventListener('click',postImage);
  FB.Event.subscribe('auth.authResponseChange', onAuthResponseChange);
  FB.Event.subscribe('auth.statusChange', onStatusChange);

}
