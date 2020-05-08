fetch('assets/json/musicData.json')
    .then(response => response.json())

    //then once converted
    .then(data => {
        data.recentlyPlayed.forEach(item => {
        // console.log(item);
        recentPlaylist = document.querySelector(".recent-playlist");
        recentPlaylist.innerHTML +=   `<ul class="recent-ul"> 
                                            <li="recent-li">
                                                <span>  
                                                    <img class="albumImage"
                                                        src="${item["image"]}" alt="album cover">
                                                    </img>
                                                </span>

                                                <span class="span-songName">${item["songName"]}</span>
                                                <span class="span-artist">${item["artist"]}</span>   
                                                <span class="span-listens">${item["lastListened"]}</span>
                                            </li>
                                        </ul>` 
    })
});

    
fetch('assets/json/musicData.json')
    .then(response => response.json())   
    .then(data => {
        data.OverallTracks.forEach(item => {
        // console.log(item);
        overallPlaylist = document.querySelector(".overall-playlist");
        overallPlaylist.innerHTML +=   `<ul class="recent-ul">  
                                            <li class="recent-li">
                                                <span class="span-songName"> ${item["songName"]}</span>
                                                <span class="span-artist"> ${item["artist"]}</span>
                                                <span class="span-listens"> ${item["totalListens"]}</span>
                                            </li>
                                        </ul>` 
    })
});
      
    fetch('assets/json/musicData.json')
    .then(response => response.json())   
    .then(data => {
        data.topArtists.forEach(item => {
        // console.log(item);
        overallplaylist = document.querySelector(".top-artists");
        overallplaylist.innerHTML +=   `<div class ="grid-container"
                                        <ul class="recent-ul">
                                            <li class="recent-li">
                                                <span>
                                                    <img class="albumImage"
                                                        src="${item["artistImage"]}" alt="artist photo">
                                                    </img>
                                                </span>
                                            <span class="span-artist"> ${item["artistName"]}</span>
                                            <span class="span-listens"> ${item["artistListens"]}</span>
                                            <span class="span-songName">
                                            <span><button class="love-button" onclick="toggleClass(this)">❤</button></span>
                                            </span>  
                                            </li> 
                                        </ul>
                                        </div>` 
    })
});

document.querySelector(".contact-button").addEventListener('click', function(){
    let name = document.querySelector(".name").value;
    alert(`Thank you for your message ${name}`);
})

document.querySelector(".comment-button").addEventListener('click', function(event){
    event.preventDefault();
    let name = document.querySelector(".comment-name").value;
    let text = document.querySelector(".text-area").value;
    let time = Date();
    console.log(time);
    console.log(document.querySelector(".comment-output").innerHTML += `${name}\n${text}\n${time}\n`);
})

function toggleClass(element){
    if(element.className == "love-button"){
        element.className = "full-heart";
    }
    else{
        element.className = "love-button";
    }
}







    









// let jsonfile = ('./json/musicData.json');
// fetch(jsonfile)
//     .then(function(response){
//         return response.json();
//         }

//     .then(function(data){
//         document.querySelectorAll("json-Ul") = output;
//         output += `<li>` + data
//                   `</li>`;
//         return output;
//     })
    
    
    



//basic foreach query selector//

// let text = "hello!";

// document.querySelectorAll(".articlelist").forEach(item => {
//     item.innerHTML = `<p>${text}</p>`;
// } )

