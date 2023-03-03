const add = document.getElementById("btn");
const get = document.getElementById("get");
const namee = document.getElementById("name");
const price = document.getElementById("price");
const amount = document.getElementById("amount");
const sector = document.getElementById("sector");
const thmnth = document.getElementById("thmnth");
const smonth = document.getElementById("smonth");
const trade = document.getElementById("trade");
const tbody = document.querySelector(".tbody");




// now we make the events when you click either button 

//add
    add.addEventListener("click", async()=>{
       try {
    const body = {
            name:namee.value,
            price:price.value,
            amount:amount.value,
            sector:sector.value,
            thmnth:thmnth.checked,
            smonth:smonth.checked,
            trade:trade.checked
        }

        const response = await fetch("https://crypto-ieum.onrender.com",
            {
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(body)
            }

        )

            namee.value = ""
            price.value = "",
            amount.value= "",
            sector.value = ""
           alert("yea you good") 
        console.log("success")
    }catch (error) {
    console.log(error)
}});

get.addEventListener("click", async()=>{
    try {
        tbody.innerHTML = "" // this is to wipe away the other ones 
       

         const response = await fetch("https://crypto-ieum.onrender.com") // we might can just try crypto depends on how it set up 
    const allinfo = await response.json() // so to get all the info we await so it can go if it works we fetch the data and then
       //since allinfo is an array we can map through it 

       // then we map through all the data an make the rows and data to go init
       allinfo.map((data)=>{
        const header= document.createElement("td")
        const row = document.createElement("tr") // td gets appended to the row 
        const name = document.createElement("td")
         const price = document.createElement("td")
        const amount = document.createElement("td")
         const sector = document.createElement("td")
         const thmnth = document.createElement("td")
            const smonth = document.createElement("td");
            const trade = document.createElement("td");

         header.setAttribute("scope","row")
            //now we populate the td with infp from thw response.json() which comes from the fetch both with awaiut promise
            header.innerHTML = data.id // this data is comming friom the awit fetch and the when we called that with json()
             price.innerHTML = data.price
             name.innerHTML = data.name
             amount.innerHTML = data.amount
            sector.innerHTML = data.sector
            thmnth.innerHTML = data.thmnth
            smonth.innerHTML = data.smonth
            trade.innerHTML = data.trade

            //then we aappend the info to the row
         
            row.appendChild(header) 
            row.appendChild(name)
            row.appendChild(price)
            row.appendChild(amount)
            row.appendChild(sector)
            row.appendChild(thmnth)
            row.appendChild(smonth)
            row.appendChild(trade)

            // then fianlly we append the row with everything to teh tbidy
            tbody.appendChild(row) /// only happens once button pressed once


            
       })

    } catch (error) {
        console.log(error)
    }
   
})

        
