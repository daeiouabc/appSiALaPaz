/*
AppSancochoFest
David Gomez - Enero 2016
*/

window.onload = function() {

  var canvas = new fabric.StaticCanvas('c');
  canvas.setHeight(480);
  canvas.setWidth(480);
  var kit;
  var button = document.getElementById('upload');
  var name = document.getElementById('name');
  var friendCache = {};
  var clientId = 'a6248b72f7f554d';


  FB.init({
    appId: 1472309483073934,
    frictionlessRequests: true,
    status: true,
    version: 'v2.5'
  });


  function addProfilePicture(url)
  {
    fabric.Image.fromURL( url, function(oImg) {
      canvas.add(oImg);
      addSticker('img/sticker.png', {scale:0.6});
    },{ crossOrigin: 'anonymous' });
  }
 

  function addSticker(url)
  {
    fabric.Image.fromURL( url, function(oImg) {
      canvas.add(oImg.set({top: 365}).scale(1));
       canvasToImage();
    },{ crossOrigin: 'anonymous' });
  }

  function saveImage(data)
  {
  
      /*console.log(data);*/
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
        /*console.log(result);
        console.log(result.data.link);
        */
        friendCache.savedImage = result.data.link;
        friendCache.idSavedImage = result.data.deletehash;
        button.disabled = false;
        }
    });



  }

  function deleteImage(deletehash)
  {
    $.ajax({
      url: 'https://api.imgur.com/3/image/'+deletehash,
      type: 'DELETE',
      headers: {
        Authorization: 'Client-ID ' + clientId,
        Accept: 'application/json'
      },
    success: function(result) {
        console.log('borrada con exito')
      }
    });

  }


  function canvasToImage()
  {
    try {
      dataURL = document.getElementById('c').toDataURL('image/jpeg', 0.9).split(',')[1];
      } catch(e) {
      dataURL = document.getElementById('c').toDataURL().split(',')[1];
      }
    saveImage(dataURL); 
    
    img = new Image();
    
    img.src = document.getElementById('c').toDataURL();
    document.getElementById('img-container').appendChild(img);   
    
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
        callback(); 
        addProfilePicture(response.picture.data.url);
        name.innerHTML = response.name;

      } else 
      {
        console.error('/me', response);
      }
    });
  }

  function postImage()
  {
       
        console.log(friendCache.savedImage);
           FB.api('/me/photos', 'post', {
            message:'#VamosPalSancocho #SancochoFest2016 debug ,creado con https://apps.facebook.com/vamospalsancocho/',
            //url:'http://appsancocho.herokuapp.com'+friendCache.savedImage       
            url:friendCache.savedImage
        }, function(response){

            if (!response || response.error) {
                alert('Error occured');
                console.log(response);
            } else {
                alert('Post ID: ' + response.id);
                alert('todo bien , regresa al index');
                deleteImage(friendCache.idSavedImage);
            }

        });
  }


  button.addEventListener('click',postImage);
  FB.Event.subscribe('auth.authResponseChange', onAuthResponseChange);
  FB.Event.subscribe('auth.statusChange', onStatusChange);

}
