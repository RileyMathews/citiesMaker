//app to print out cities database to dom

//obtain ref to article element
const article = document.querySelector("#article")

/*
    Structure of city components...
    <div class="continent">
        <h3>CITY</h3>
        <img src=database.cities[i].image>
        <p>YEAR VISISTED</p>
        <ul>
            <li>attraction 1</li>
            ...
        </ul>
    </div>
*/

database.cities.forEach(city => {
    console.log(city.name)
    let div = document.createElement('div')

    //create heading
    let heading = document.createElement('h3')
    heading.textContent = city.name
    div.appendChild(heading)

    //create image
    let img = document.createElement('img')
    img.setAttribute('src', city.image)
    img.setAttribute('height', '200')
    div.appendChild(img)

    //create year visited element
    let p = document.createElement('p')
    p.textContent = 'Visited in: ' + city.visited
    div.appendChild(p)

    //create list element
    let list = document.createElement('ul')
    city.attractions.forEach(element => {
        let item = document.createElement('li')
        item.textContent = element
        list.appendChild(item)
    });
    div.appendChild(list)





    //add finished city component to article
    article.appendChild(div)
});