/*
AppSancochoFest
David Gomez - Enero 2016
*/

window.onload = function() {

  var canvas = new fabric.StaticCanvas('c');
  canvas.setHeight(480);
  canvas.setWidth(480);
  var img = new Image();
  var button = document.getElementById('post');
  var friendCache = {};
  var kit;


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
      addSticker('../img/sticker.png');
    },{ crossOrigin: 'anonymous' });
  }
 

  function addSticker(url)
  {
    fabric.Image.fromURL( url, function(oImg) {
      canvas.add(oImg.set({ top: 350,}).scale(0.6));
       canvasToImage();
    },{ crossOrigin: 'anonymous' });
  }

  function saveImage(data, name)
  {
    minAjax({
      url:"php/saveImg.php",//request URL
      type:"POST",//Request type GET/POST
      //Send Data in form of GET/POST
      data:{
        data:data,
        name:name
      },
      //CALLBACK FUNCTION with RESPONSE as argument
      success: function(data){
        alert(data);
        
        FB.api('/me/photos', 'post', {
            message:'photo description',
            url:'https://i.imgur.com/1zjnIAh.jpg'       
        }, function(response){

            if (!response || response.error) {
                alert('Error occured');
            } else {
                alert('Post ID: ' + response.id);
            }

        });

      }

    });
  }



  function canvasToImage()
  {
    var dataURL = document.getElementById('c').toDataURL();
    var img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = dataURL;
    document.getElementById('imgContainer').appendChild(img);    
    
    saveImage(dataURL, friendCache.me.name.toLowerCase() + friendCache.me.id); 
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
      top.location.href = 'https://www.facebook.com/appcenter/pruebotamia';
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
    FB.api("/me?fields=name,picture.width(360)", function(response){
      if( !response.error )
      {

        friendCache.me = response;
        console.log(response);
        callback(); 
        addProfilePicture(response.picture.data.url);

      } else 
      {
        console.error('/me', response);
      }
    });
  }



  FB.Event.subscribe('auth.authResponseChange', onAuthResponseChange);
  FB.Event.subscribe('auth.statusChange', onStatusChange);

}
