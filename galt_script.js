var this_pc_logo = "./img/1017.png";
var power_btn = "./img/108.png";
var recycle_bin = "./img/500.png";
var ecplayer = "./img/ec%20play.png";
var windows_wallpaper_default = "./img/win10.png";
var win32 = "./img/win32.png";
var settings = "./img/133.png";
var winphotos = "./img/Photos.png";
var winmail = "./img/Mail.png";
var wincalender = "./img/Calendar.png";
var winmovies = "./img/Movies-and-TV.png";
var winmusic = "./img/Music.png";
var wincalc = "./img/Calc.png";
var winmaps = "./img/Maps.png";
var lvgo = "./img/lv.png";
var ttl = document.getElementById('pag_details').getAttribute('var');
if(ttl == "desktop_32"){
function setwall(){
if(!localStorage.vdolv){
    if(!localStorage.pdolv){
    document.getElementById('wallpaper').innerHTML = "";
    document.getElementById('wallpaper').style="background-color:transparent;background-image: url("+windows_wallpaper_default+");background-repeat: no-repeat;background-size:100% 100%;width: 100%;height: 100%;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background-color: black;";
}else{document.getElementById('wallpaper').innerHTML = "";
document.getElementById('wallpaper').style="background-color:transparent;background-image: url("+localStorage.pdolv+");background-repeat: no-repeat;background-size:100% 100%;width: 100%;height: 100%;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background-color: black;";
document.getElementById('input_of_localv').value = localStorage.vdolv;
document.getElementById('input_of_localw').value = localStorage.pdolv;
}}
else{document.getElementById('wallpaper').style="width: 100%;height: 100%;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background-color: black;";document.getElementById('wallpaper').innerHTML = "<video autoplay id='walvid' muted loop src='"+localStorage.vdolv+"' style='width:100%;height:100%;position:fixed;right: 0;top:0;' ></video><div style='position:fixed;top:0;left:0;width:100%;height:100%;'>";document.getElementById('walvid').playbackRate = 4;}
document.getElementById('input_of_localv').value = localStorage.vdolv;
document.getElementById('input_of_localw').value = localStorage.pdolv;
}setwall();
document.getElementById('clm_1').style = "background-color:transparent;background-image: url("+this_pc_logo+");background-size: 91% 91%;background-repeat:no-repeat;border: none;position: fixed;width: 81px;height: 81px;top: 6px;"
document.getElementById('clm_2').style = "background-color:transparent;background-image: url("+recycle_bin+");background-size: 91% 91%;background-repeat:no-repeat;border: none;position: fixed;width: 81px;height: 81px;top: 102px;"
document.getElementById('clm_3').style = "background-color:transparent;background-image: url("+ecplayer+");background-size: 91% 91%;background-repeat:no-repeat;border: none;position: fixed;width: 81px;height: 81px;top: 198px;"//per 96
document.getElementById('pwr_btn').style = "border-radius: 100px; position: absolute;bottom: 10px;left: 10px; width: 25px;height: 25px;background-color:transparent;background-image: url("+power_btn+");background-size:100% 100%;border: none;"
document.getElementById('settings_btn').style = "border-radius: 100px;position: absolute;bottom: 50px;left: 10px; width: 25px;height: 25px;background-color:transparent;background-image: url("+settings+");background-size:100% 100%;border: none;"
document.getElementById('winbtn').style = "height:40px;width:40px;background-color:transparent;background-image: url("+win32+");border: none;background-size:50% 50%;background-position: center; background-repeat: no-repeat;"
document.getElementById('usrnd').style = "border-radius: 100px;position: absolute;bottom: 90px;left: 10px; width: 25px;height: 25px;background-color:transparent;background-image: url("+localStorage.image_of_win_user32x64_1+");background-size:100% 100%;border: none;";
document.getElementById('windows_photos').style = "width: 103px;height: 103px;position: absolute;right: 460px;top: 50px;background-image:url("+winphotos+");background-position: 50% 50%; background-repeat: no-repeat;background-size: 40% 40%;border: none;";
document.getElementById('windows_calender').style = "width: 103px;height: 103px;position: absolute;right: 40px;top: 50px;background-image:url("+wincalender+");background-position: 50% 50%; background-repeat: no-repeat;background-size: 40% 40%;border: none;"
document.getElementById('windows_mail').style = "width: 207px;height: 103px;position: absolute;right: 145px;top: 50px;background-image:url("+winmail+");background-position: 50% 50%; background-repeat: no-repeat;background-size: 20% 40%;border: none;"
document.getElementById('windows_movies').style = "width: 51px;height: 51px;position: absolute;right: 355px;top: 50px;background-image:url("+winmovies+");background-position: 50% 50%; background-repeat: no-repeat;background-size: 40% 40%;border: none;"
document.getElementById('windows_music').style = "width: 51px;height: 51px;position: absolute;right: 407px;top: 50px;background-image:url("+winmusic+");background-position: 50% 50%; background-repeat: no-repeat;background-size: 40% 40%;border: none;"
document.getElementById('windows_calc').style = "width: 51px;height: 51px;position: absolute;right: 355px;top: 102px;background-image:url("+wincalc+");background-position: 50% 50%; background-repeat: no-repeat;background-size: 40% 40%;border: none;"
document.getElementById('windows_maps').style = "width: 51px;height: 51px;position: absolute;right: 407px;top: 102px;background-image:url("+winmaps+");background-position: 50% 50%; background-repeat: no-repeat;background-size: 40% 40%;border: none;"
document.getElementById('lv_go').style = "width: 207px;height: 207px;position: absolute;right: 40px;top: 155px;background-image:url("+lvgo+");background-position: 50% 50%; background-repeat: no-repeat;background-size: 40% 40%;border: none;"
}
