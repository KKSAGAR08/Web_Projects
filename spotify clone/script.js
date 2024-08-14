async function getsongs(){
    let song= await fetch("http://127.0.0.1:5500/playlist_songs/");
    let response = await song.text();
    let div=document.createElement("div");
    div.innerHTML=response;
    let as=div.getElementsByTagName('a');

    let songs=[];

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith('.mp3')){
            songs.push(element.href);
        }      
    }
    return songs;
}


async function getsongs_Name(){
    let song= await fetch("http://127.0.0.1:5500/playlist_songs/");
    let response = await song.text();
    let div=document.createElement("div");
    div.innerHTML=response;
    let as=div.getElementsByTagName('a');

    let songs=[];

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith('.mp3')){
            let x=element.href.split("/playlist_songs/")[1];
            songs.push(x.split(".mp3")[0]);
        }      
    }
    return songs;
}


async function main(){
    let songs_Name = await getsongs_Name();

    let songUL=document.querySelector('.songlist').getElementsByTagName('ul')[0];
    for (const song of songs_Name) {
        songUL.innerHTML = songUL.innerHTML+`<li>${song.replaceAll('%20'," ")}</li>`;
    }

    let song = await getsongs();

    // let audio = new Audio(song[0]);
    // console.log(audio)
    // audio.play();

}
main();