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

  function saveImage(data, name)
  {
    minAjax({
      url:"php/saveImg.php",
      type:"POST",
 
      data:{
        data:data,
        name:name
      },
  
      success: function(data){
        
        friendCache.savedImage = data;
      }

    });
  }



  function canvasToImage()
  {
    var dataURL = document.getElementById('c').toDataURL();
    img = new Image();
    
    img.src = dataURL;
    document.getElementById('img-container').appendChild(img);   
    
    temp = friendCache.me.name.toLowerCase() + friendCache.me.id;
    code = temp.replace(/\s/g, '');//concateno y normalizo la cadena, 
    //nombre de archivo temporal
    
    saveImage(dataURL, code); 
    return dataURL;
        
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
        console.log(kit);
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
       
        console.log('http://appsancocho.herokuapp.com'+friendCache.savedImage);
           FB.api('/me/photos', 'post', {
            message:'#VamosPalSancocho #SancochoFest2016 debug , :cry: :zzz: creado con https://apps.facebook.com/vamospalsancocho/',
            url:'http://appsancocho.herokuapp.com'+friendCache.savedImage       
        
        }, function(response){

            if (!response || response.error) {
                alert('Error occured');
                console.log(response);
            } else {
                alert('Post ID: ' + response.id);
                alert('todo bien , regresa al index');
            }

        });
  }


  button.addEventListener('click',postImage);
  FB.Event.subscribe('auth.authResponseChange', onAuthResponseChange);
  FB.Event.subscribe('auth.statusChange', onStatusChange);

}
