// import './style.css'
fetch('https://leonardoapi.onrender.com/music')
.then ((res) => res.json())
.then ((resJSON) =>  {
    
    let tracklist = document.getElementById('track-list')
    resJSON.map ((song) => {

        console.log(song)

        let div = document.createElement('div')
        div.classList.add(
            'hover:bg-red-700',
            'delay-50',
            'duration-100',
            'bg-white-800',
            'p-5',
            'rounded-lg' ,
            'w-60',
            'group'
        )

        div.innerHTML += `
        
            <img class="w-full rounded shadow" src="${song.path.front}" >
            <h4 class="textred-250 font-bold mt-5">${song.title}</h4>
            <h5  class="text-red-20 font-light mt-2 text-xs">${song.author}</h5>
            

        `
        div.addEventListener ("click",() => {
            document.getElementById("audio").setAttribute("src",song.path.audio)
            document.getElementById("front").setAttribute("src",song.path.front)

        })
        
        tracklist.appendChild(div)

    })


})