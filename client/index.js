const button = document.getElementById("btn");
const namee = document.getElementById("name");
const price = document.getElementById("price");
const amount = document.getElementById("amount");
const description = document.getElementById("description");
const sector = document.getElementById("sector");
const getall = document.getElementById("all");
const deleteall = document.getElementById("deleteall");
const list = document.getElementById("ulist");
const tbody = document.getElementById("tbody");


//add a todo

button.addEventListener("click", async () => {
    try {

        const body = {
            name: namee.value,
            price: price.value,
            amount: amount.value,
            description: description.value,
            sector: sector.value
        }

        const response = await fetch("http:localhost:5000/crypto",
            {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            });

        namee.value = "",
            price.value = "",
            amount.value = "",
            description.value = "",
            sector.value = ""

        alert("yea you good")

        console.log("success")
    } catch (error) {
        console.log(error.message)
    }
})

//getting all the data
getall.addEventListener("click", async () => {

    try {
        tbody.innerHTML = ""
        const response = await fetch("http://localhost:5000/crypto");
        const allinfo = await response.json()// adding the await here give diffrence


        console.log(allinfo.map((data) => {
            const row = document.createElement("tr");
            const id = document.createElement("th");
            const td = document.createElement("td");
            const p = document.createElement("td");
            const amt = document.createElement("td");
            const description = document.createElement("td");
            const sector = document.createElement("td");

            description.classList.add("width")

            id.setAttribute("scope", "row")//this is to match the ids to get them on the left

            id.innerHTML = data.id,
                row.appendChild(id);
            td.innerHTML = data.name,
                p.innerHTML = data.price,
                amt.innerHTML = data.amount,
                description.innerHTML = data.description,
                sector.innerHTML = data.sector

            // we got to append multiple times 
            row.appendChild(td)
            row.appendChild(p)
            row.appendChild(amt)
            row.appendChild(description)
            row.appendChild(sector)

            tbody.appendChild(row)
        }))

    } catch (error) {
        console.log(error)
    }
})

deleteall.addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:5000/crypto",
            {
                method: "DELETE"
            })
        console.log("wow")
    } catch (error) {
        console.log(error)
    }
})


