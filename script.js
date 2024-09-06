

function citysubmit() {
    //let cityname = document.getElementById('mycity').value;
	//let tab="<tr><th>Product Title</th><th>Product Image</th><th>Product Lowest Price</th><th>Is Available</th></tr>"
	let productname=document.getElementById('mycity').value;
	console.log(productname);
    // let cityname = "jabalpur";
    //let url = `http://api.weatherapi.com/v1/current.json?key=5a69b276be6949168c755846232001&q=${cityname}`
	let url=`https://price-api.datayuge.com/api/v1/compare/search?api_key=9mN7jJ1rfxLog1meVI4b36Z6rbwVDxYyxKN&product=${productname}`
    // console.log(url);
    //document.getElementById('dis').innerHTML = cityname;
    fetch(url).then((response) => {
        return response.json();
    }).then((dat) => {
		if(productname!==''){
        document.getElementById('city-error').style.display = 'none'
        console.log(dat);
		let placeholder=document.querySelector("#data-output");
		let out="";
		for(let product of dat.data)  //value='${product.product_link}+api_key=9mN7jJ1rfxLog1meVI4b36Z6rbwVDxYyxKN'
		{
			
			
			let paramString = `${product.product_link}`.split('?')[1];
			console.log(paramString);
			var ava=`${product.is_available}`;
			if(ava==="true")
			{
				var av="Yes";
			}
			else
			{
				var av="NO";
			}
			
			out+=`
			 <tr>
			 <td> ${product.product_title}</td>
			 <td> <img src='${product.product_image}'></td>
			 <td> &#8377;${product.product_lowest_price}</td>
			<td> ${av}</td>
			 <td> <button id="bt" type="button" value='${product.product_link}'><a href="compare.html?${paramString}">Compare</a></button></td>
			 </tr>
			`;
			//tab+="<tr><td>data[i].product_title</td><td>data[i].product_image</td><td>data[i].product_lowest_price</td><td>data[i].is_available</td></tr>";
		}
		console.log(out);
		//table.innerHTML=tab;
		document.getElementById('data-output').innerHTML=out;
		document.getElementById('weathercard').style.display = 'flex';	  
		}
		else{
			alert("Please, Enter the value");
		}
    })
        .catch((dat) => {
            document.getElementById('city-error').style.display = 'flex'
            document.getElementById('weathercard').style.display = 'none'
        })
}