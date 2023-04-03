
// var djangoAPI = "https://buildingCharacters.com/characters/"
var djangoAPI = "https://dojo.navyladyveteran.com/characters/"
var squishAPI  = "http://localhost:8080/api/"
var carAPI  = "http://localhost:8080/api/cars"

async function djangoTunes(){
    var response = await fetch(`${djangoAPI}`)
    var data = await response.json()
    // console.log("django api data:", data)
    // console.log("Just Bugs Bunny:", data[0])
    // console.log("Just Bug's name:", data[0].name)
    for(var i=0; i<data.length; i++){
        console.log("all the names", data[i].name)

        var node = document.createElement('div')
        var h1= document.createElement('h1')
        var h2= document.createElement('h2')
        var img = document.createElement('img')
        var h1label = document.createTextNode("Tune name: ")
        var h2label = document.createTextNode("Tunes Spouse: ")
        var name =document.createTextNode(data[i].name)
        var spouse = document.createTextNode(data[i].spouse)
        h1.appendChild(h1label)
        h1.appendChild(name)
        img.src = data[i].img
        img.alt = data[i].name
        h2.appendChild(h2label)
        h2.appendChild(spouse)
        node.appendChild(img)
        node.appendChild(h1)
        node.appendChild(h2)
        document.getElementById('bugs').appendChild(node)
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
        var h2= document.createElement('h2')
        var img = document.createElement('img')
        var h2label = document.createTextNode("Squishy Name: ")
        var h2name = document.createTextNode(data[i].name)
        img.src = data[i].img
        img.alt = data[i].name
        h2.appendChild(h2label)
        h2.appendChild(h2name)
        node.appendChild(img)
        node.appendChild(h2)
        document.getElementById('squish').appendChild(node)
    }
}

async function cars(){
    var response = await fetch(`${carAPI}`)
    // console.log("the squish response", response)
    var data = await response.json()
    console.log("car data: ", data[0].name)
    
    for(var i=0; i<data.length;i++){
        console.log("just a name", data[i].name)
        var node =document.createElement('div')
        var h2= document.createElement('h2')
        var h3= document.createElement('h3')
        var img = document.createElement('img')
        var h2label = document.createTextNode("Car Type/Name: ")
        var h2name = document.createTextNode(data[i].name)
        var h3label = document.createTextNode("Year: ")
        var h3name = document.createTextNode(data[i].year)
        img.src = data[i].img
        img.alt = data[i].name
        h2.appendChild(h2label)
        h2.appendChild(h2name)
        h3.appendChild(h3name)
        node.appendChild(img)
        node.appendChild(h2)
        document.getElementById('car').appendChild(node)
    }
}