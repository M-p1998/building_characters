
// var djangoAPI = "https://buildingCharacters.com/characters/"
// var djangoAPI = "https://dojo.navyladyveteran.com/characters/"
var characterAPI = "http://localhost:8080/api/bulding/characters"
var squishAPI  = "http://localhost:8080/api/"
// var squishAPI  = "https://octodex.github.com/"
var carAPI  = "http://localhost:8080/api/cars"

async function characterTunes(){
    var response = await fetch(`${characterAPI}`)
    var data = await response.json()
    // console.log("django api data:", data)
    // console.log("Just Bugs Bunny:", data[0])
    // console.log("Just Bug's name:", data[0].name)
    // for(var i=0; i<data.length; i++){
    //     console.log("all the names", data[i].name)
    //     var node = document.createElement('div')

    //     node.classList.add('character-img');

    //     var h1= document.createElement('h1')
    //     var h2= document.createElement('h2')
    //     var img = document.createElement('img')
    //     var h1label = document.createTextNode("Tune name: ")
    //     // var h2label = document.createTextNode("Tunes Spouse: ")
    //     var name =document.createTextNode(data[i].name)
    //     // var spouse = document.createTextNode(data[i].spouse)
    //     h1.appendChild(h1label)
    //     h1.appendChild(name)
        
    //     img.src = data[i].img
    //     img.alt = data[i].name

    //     img.style.width = "200px";
    //     img.style.height = "300px";
    //     // h2.appendChild(h2label)
    //     // h2.appendChild(spouse)
    //     node.appendChild(img)
    //     node.appendChild(h1)
    //     node.appendChild(h2)

    //     document.getElementById('bugs').appendChild(node)

    //     // document.getElementById('image-container').appendChild(node)
    // }


    for(var i=0; i<data.length; i++){
        var node = document.createElement('div');
        node.classList.add('character-img');
        var h1= document.createElement('h1');
        var h2= document.createElement('h2');
        var img = document.createElement('img');
        var h1label = document.createTextNode("")
        var name = document.createTextNode(data[i].name)
        h1.appendChild(h1label)
        h1.appendChild(name)
        img.src = data[i].img
        img.alt = data[i].name

        img.style.width = "200px";
        img.style.height = "350px";
        node.appendChild(img)
        node.appendChild(h1)
        node.appendChild(h2)
        document.getElementById('bugs').appendChild(node)
    
        // Add a new row every 3 images
        if ((i + 1) % 3 == 0) {
            var row = document.createElement('div');
            row.classList.add('character-row');
            document.getElementById('bugs').appendChild(row);
        }
    }
    
    
}

async function squishies(){
    var response = await fetch(`${squishAPI}`)
    // console.log("the squish response", response)
    var data = await response.json()
    console.log("squishie data: ", data[0].name)
    console.log("just a name", data[0].name)
    for(var i=0; i<data.length;i++){
        console.log("just a name", data[i].name)
        var node =document.createElement('div')
        node.classList.add('character-img');
        var h2= document.createElement('h2')
        var img = document.createElement('img')
        var h2label = document.createTextNode("")
        var h2name = document.createTextNode(data[i].name)
        img.src = data[i].img
        img.alt = data[i].name

        img.style.width = "200px";
        img.style.height = "200px";
        // var styleImage = document.getElementById("img")
        h2.appendChild(h2label)
        h2.appendChild(h2name)
        node.appendChild(img)
        node.appendChild(h2)
        document.getElementById('squish').appendChild(node)

        if ((i + 1) % 3 == 0) {
            var row = document.createElement('div');
            row.classList.add('character-row');
            document.getElementById('squish').appendChild(row);
        }

    }
}

async function cars(){
    var response = await fetch(`${carAPI}`)
    // console.log("the squish response", response)
    var data = await response.json()
    console.log("cars: ", data[0].name)

    for(var i=0; i<data.length;i++){
        console.log("just a name", data[i].name)
        var node =document.createElement('div')
        node.classList.add('character-images');
        var h2= document.createElement('h2')
        var h3= document.createElement('h3')
        var img = document.createElement('img')
        var h2label = document.createTextNode(" ")
        var h2name = document.createTextNode(data[i].name)
        // var h3label = document.createTextNode("Year: ")
        var h3name = document.createTextNode(data[i].year)
        img.src = data[i].img
        img.alt = data[i].name

        img.style.width = "200px";
        img.style.height = "200px";

        h2.appendChild(h2label)
        h2.appendChild(h2name)
        // h3.appendChild(h3name)
        node.appendChild(img)
        node.appendChild(h2)
        document.getElementById('car').appendChild(node)

        if ((i + 1) % 3 == 0) {
            var row = document.createElement('div');
            row.classList.add('character-row');
            document.getElementById('car').appendChild(row);
        }

    }

   

}

