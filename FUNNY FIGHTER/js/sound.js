/*var bgSound = new buzz.sound("sounds/rythme_africain", {
    formats: [ "ogg", "mp3", "aac", "wav" ],
    preload: true,
    autoplay: true,
    loop: false
});
bgSound.loop().play();
bgSound.bind("error", function(e) {
    alert("Error: " + this.getNetworkStateMessage());
});
function mute(){
    bgSound.toggleMute();
    if ( bgSound.isMuted() ) {
    //alert("The sound is muted!");
    }
};*/

function playSound(url){
	var Sound = new buzz.sound(url, {
	    formats: [ "ogg", "mp3", "aac", "wav" ],
	    preload: true,
	    autoplay: false,
	    loop: false
	});
    Sound.play();
}