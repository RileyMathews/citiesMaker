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
});