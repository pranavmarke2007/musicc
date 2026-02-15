let obj = [
    {
        song: "Gal_sun",
        scr: "media/Gal_Sun.mp3",
        photo:"media/Screenshot 2026-02-13 110222.png"
    },
    {
        song: "Judas",
        scr: "media/Lady Gaga - Judas - GOJO VS SUKUNA.mp3"
    },
    {
        song: "Love me not ",
        scr: "media/ptmusic.co.za - Ravyn Lenae - Love Me Not (Official Music Video) (320 KBps).mp3"
    },
    {
        song: "Starboy",
        scr: "media/SpotiDown.App - Starboy - The Weeknd.mp3"
    },
    {
        song: "blinding lights",
        scr: "media/Blinding Lights - The Weeknd.mp3"
    }
]
let buttons = []
let songs = document.querySelector(".songs")
let player = document.querySelector(".player");
let btn=document.querySelector(".btn")


for (let i = 0; i < obj.length; i++) {
    let button1 = document.createElement("button")
    songs.appendChild(button1)
    button1.innerText = `${i + 1}.${obj[i].song}`

    buttons.push(button1)
}
let div2=[]
let audd=[]
buttons.forEach((button,i) => {
    button.addEventListener("click", () => {
        songs.style.display = "none"
        let div1 = document.createElement("div")
        div1.style.height = "40vh"
        div1.style.width = "60vh"
        // div1.style.backgroundColor = "red"
        div2.push(div1)
        let aud = document.createElement("audio")
        aud.controls=true
        let img= document.createElement("img")
        img.style.borderRadius="100%"
        img.src=obj[i].photo
        div1.append(img)
        div1.style.display="flex"
        div1.style.justifyContent="center"
        div1.style.alignItems="center"
        div1.style.flexDirection="column"
        div1.style.gap="20px"
        player.appendChild(div1)  
        div1.appendChild(aud)
        aud.src=obj[i].scr
        aud.play()
        audd.push(aud)
      btn.style.display="block"
      })
});
btn.addEventListener("click",()=>{
        
        div2.forEach(element => {
            element.style.display="none"
        });
        audd.forEach(element => {
            element.pause()
        });

         songs.style.display="flex"
}
)