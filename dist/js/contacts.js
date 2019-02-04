
$(function(){
    $(window).load(function(){
        function map(initmap) {
            const coordinates = {lat: 50.4364686, lng: 30.5339964},
            markerImage = 'img/contacts/map-marker.png',
            zoom = 17,
            
           
            map = new google.maps.Map(document.getElementById('map'), {
                center: coordinates,
                zoom: zoom,
                disableDefaultUI: true
                
            });
        
          var  marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                icon: markerImage,
                position: {lat: 50.4373686, lng: 30.5339964}
            });
        
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function(){ marker.setAnimation(null); }, 666666);
        }
              
        map('initmap');
        
    });
 });