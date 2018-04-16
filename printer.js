//app to print out cities database to dom

//obtain ref to article element
const article = document.querySelector("#article")
const fragment = document.createDocumentFragment()

/*
    Structure of city components...
    <section class="continent">
        <h3>CITY</h3>
        <img src=database.cities[i].image>
        <p>YEAR VISISTED</p>
        <h5>attractions</h5>
        <ul>
            <li>attraction 1</li>
            ...
        </ul>
    </section>
*/
const printCities = year => {
    //for each city in the array
    database.cities.forEach(city => {
        //if year visited matches filtered year, or if no year is given
        if (year === city.visited || typeof year === 'undefined') {
            let section = document.createElement('section')
        
            //assign class based on continent
            if (city.continent === "north america") {
                section.classList = "na"
            } else if (city.continent === "south america") {
                section.classList = "sa"
            } else if (city.continent === "asia") {
                section.classList = "asia"
            } else if (city.continent === "antarctica") {
                section.classList = "antarctica"
            } else if (city.continent === "europe") {
                section.classList = "europe"
            } else if (city.continent === "africa") {
                section.classList = "africa"
            } else if (city.continent === "australia") {
                section.classList = "australia"
            }    
        
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
        
            //list header element
            let listHeading = document.createElement('h5')
            listHeading.textContent = 'Attractions:'
            section.appendChild(listHeading)
        
            //create list element
            let list = document.createElement('ul')
            city.attractions.forEach(element => {
                let item = document.createElement('li')
                item.textContent = element
                list.appendChild(item)
            });
            section.appendChild(list)
        
            //add finished city component to fragment
            fragment.appendChild(section)
        }
    });
    article.appendChild(fragment)
}

printCities()