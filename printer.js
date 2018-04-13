//app to print out cities database to dom

//obtain ref to article element
const article = document.querySelector("#article")

/*
    Structure of city components...
    <section class="continent">
        <h3>CITY</h3>
        <img src=database.cities[i].image>
        <p>YEAR VISISTED</p>
        <ul>
            <li>attraction 1</li>
            ...
        </ul>
    </section>
*/

database.cities.forEach(city => {
    console.log(city.name)
    let section = document.createElement('section')

    //create heading
    let heading = document.createElement('h3')
    heading.textContent = city.name
    section.appendChild(heading)

    //create image
    let img = document.createElement('img')
    img.setAttribute('src', city.image)
    img.setAttribute('height', '200')
    section.appendChild(img)

    //create year visited element
    let p = document.createElement('p')
    p.textContent = 'Visited in: ' + city.visited
    section.appendChild(p)

    //create list element
    let list = document.createElement('ul')
    city.attractions.forEach(element => {
        let item = document.createElement('li')
        item.textContent = element
        list.appendChild(item)
    });
    section.appendChild(list)





    //add finished city component to article
    article.appendChild(section)
});