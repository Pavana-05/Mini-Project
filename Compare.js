function execute()
{
   	const queryString = window.location.search;
	//console.log(queryString);
	const urlParams = new URLSearchParams(queryString);
	const product_id = urlParams.get('id');
	//console.log(product_id);
	let url2=`https://price-api.datayuge.com/api/v1/compare/detail?api_key=9mN7jJ1rfxLog1meVI4b36Z6rbwVDxYyxKN&id=${product_id}`;
	fetch(url2).then((response) => {
        return response.json();
    }).then((content) => {
		console.log(content);
		// Images insertion
		document.getElementById('amazonimg').src=`${content.data.product_images[0]}`
		document.getElementById('flipkartimg').src=`${content.data.product_images[0]}`
		document.getElementById('cromaimg').src=`${content.data.product_images[0]}`
		document.getElementById('snapdealimg').src=`${content.data.product_images[0]}`
		document.getElementById('tataclickimg').src=`${content.data.product_images[0]}`
		document.getElementById('shopcluesimg').src=`${content.data.product_images[0]}`
		document.getElementById('infibeamimg').src=`${content.data.product_images[0]}`
		document.getElementById('paytmimg').src=`${content.data.product_images[0]}`
		document.getElementById('yebhiimg').src=`${content.data.product_images[0]}`
		document.getElementById('naaptolimg').src=`${content.data.product_images[0]}`
		document.getElementById('indiatimesimg').src=`${content.data.product_images[0]}`
		document.getElementById('ebayimg').src=`${content.data.product_images[0]}`
		document.getElementById('gadgets360img').src=`${content.data.product_images[0]}`
		document.getElementById('miimg').src=`${content.data.product_images[0]}`
		document.getElementById('homeshop18img').src=`${content.data.product_images[0]}`
		
		//title insertion
		document.getElementById('amazonname').innerHTML=`${content.data.product_name}`;
		document.getElementById('flipkartname').innerHTML=`${content.data.product_name}`;
		document.getElementById('cromaname').innerHTML=`${content.data.product_name}`;
		document.getElementById('snapdealname').innerHTML=`${content.data.product_name}`;
		document.getElementById('tataclickname').innerHTML=`${content.data.product_name}`;
		document.getElementById('shopcluesname').innerHTML=`${content.data.product_name}`;
		document.getElementById('infibeamname').innerHTML=`${content.data.product_name}`;
		document.getElementById('paytmname').innerHTML=`${content.data.product_name}`;
		document.getElementById('yebhiname').innerHTML=`${content.data.product_name}`;
		document.getElementById('naaptolname').innerHTML=`${content.data.product_name}`;
		document.getElementById('indiatimesname').innerHTML=`${content.data.product_name}`;
		document.getElementById('ebayname').innerHTML=`${content.data.product_name}`;
		document.getElementById('gadgets360name').innerHTML=`${content.data.product_name}`;
		document.getElementById('miname').innerHTML=`${content.data.product_name}`;
		document.getElementById('homeshop18name').innerHTML=`${content.data.product_name}`;
		
		
		//price insertion
		try{
		if(typeof content.data.stores[0].amazon.product_price !== "undefined"){
			document.getElementById('amazonprice').innerHTML=`&#8377;${content.data.stores[0].amazon.product_price}`;
			document.getElementById('amazonbuy').innerHTML=`<a href="${content.data.stores[0].amazon.product_store_url}">Buy Now!</a>`;
			document.getElementById('amazonspec').innerHTML=`<ul><li>Product Color :${content.data.stores[0].amazon.product_color}</li><li>Return Time :${content.data.stores[0].amazon.return_time}</li></ul>`;
		}
		else
		{
			document.getElementById('amazonprice').innerHTML="Not Available";
			document.getElementById('amazonbuy').innerHTML="Not Available";
		}
		}
		catch(error)
		{
			document.getElementById('amazonprice').innerHTML="Not Available";
			document.getElementById('amazonbuy').innerHTML="Not Available";
		}
		try{ 
		if(typeof content.data.stores[1].flipkart.product_price !== "undefined"){
		document.getElementById('flipkartprice').innerHTML=`&#8377;${content.data.stores[1].flipkart.product_price}`;
		document.getElementById('flipkartbuy').innerHTML=`<a href="${content.data.stores[1].flipkart.product_store_url}">Buy Now!</a>`;
		document.getElementById('flipkartspec').innerHTML=`<ul><li>Product Color :${content.data.stores[1].flipkart.product_color}</li><li>Return Time :${content.data.stores[1].flipkart.return_time}</li></ul>`;
		}
		else
		{
			document.getElementById('flipkartprice').innerHTML="Not Available";
			document.getElementById('flipkartbuy').innerHTML="Not Available";
		}
		}
		catch(error)
		{
			document.getElementById('flipkartprice').innerHTML="Not Available";
			document.getElementById('flipkartbuy').innerHTML="Not Available";
		}
		try{
		if(typeof content.data.stores[5].croma.product_price !== "undefined"){
		document.getElementById('cromaprice').innerHTML=`&#8377;${content.data.stores[5].croma.product_price}`;
		document.getElementById('cromabuy').innerHTML=`<a href="${content.data.stores[5].croma.product_store_url}">Buy Now!</a>`;
		document.getElementById('cromaspec').innerHTML=`<ul><li>Product Color :${content.data.stores[5].croma.product_color}</li><li>Return Time :${content.data.stores[5].croma.return_time}</li></ul>`;
		}
		else{
			document.getElementById('cromaprice').innerHTML="Not Available";
			document.getElementById('cromabuy').innerHTML="Not Available";
		}
		}
		catch(error)
		{
			document.getElementById('cromaprice').innerHTML="Not Available";
			document.getElementById('cromabuy').innerHTML="Not Available";
		}
		try{
			if(typeof content.data.stores[2].snapdeal.product_price !== "undefined"){
			document.getElementById('snapdealprice').innerHTML=`&#8377;${content.data.stores[2].snapdeal.product_price}`;
			document.getElementById('snapdealbuy').innerHTML=`<a href="${content.data.stores[2].snapdeal.product_store_url}">Buy Now!</a>`;
			document.getElementById('snapdealspec').innerHTML=`<ul><li>Product Color :${content.data.stores[2].snapdeal.product_color}</li><li>Return Time :${content.data.stores[2].snapdeal.return_time}</li></ul>`;
			}
			else{
				document.getElementById('snapdealprice').innerHTML="Not Available";
				document.getElementById('snapdealbuy').innerHTML="Not Available";
			}
		}
		catch(error)
		{
			document.getElementById('snapdealprice').innerHTML="Not Available";
			document.getElementById('snapdealbuy').innerHTML="Not Available";
		}
		try{
			if(typeof content.data.stores[11].tataclick.product_price !== "undefined"){
			document.getElementById('tataclickprice').innerHTML=`&#8377;${content.data.stores[11].tataclick.product_price}`;
			document.getElementById('tataclickbuy').innerHTML=`<a href="${content.data.stores[11].tataclick.product_store_url}">Buy Now!</a>`;
			document.getElementById('tataclickspec').innerHTML=`<ul><li>Product Color :${content.data.stores[11].tataclick.product_color}</li><li>Return Time :${content.data.stores[11].tataclick.return_time}</li></ul>`;
			}
			else{
				document.getElementById('tataclickprice').innerHTML="Not Available";
				document.getElementById('tataclickbuy').innerHTML="Not Available";
			}
		}
		catch(error)
		{
			document.getElementById('tataclickprice').innerHTML="Not Available";
			document.getElementById('tataclickbuy').innerHTML="Not Available";
		}
		try{
			if(typeof content.data.stores[12].shopclues.product_price !== "undefined"){
			document.getElementById('shopcluesprice').innerHTML=`&#8377;${content.data.stores[12].shopclues.product_price}`;
			document.getElementById('shopcluesbuy').innerHTML=`<a href="${content.data.stores[12].shopclues.product_store_url}">Buy Now!</a>`;
			document.getElementById('shopcluesspec').innerHTML=`<ul><li>Product Color :${content.data.stores[12].shopclues.product_color}</li><li>Return Time :${content.data.stores[12].shopclues.return_time}</li></ul>`;
			}
			else{
				document.getElementById('shopcluesprice').innerHTML="Not Available";
				document.getElementById('shopcluesbuy').innerHTML="Not Available";
			}
		}
		catch(error)
		{
			document.getElementById('shopcluesprice').innerHTML="Not Available";
			document.getElementById('shopcluesbuy').innerHTML="Not Available";
		}
		try{
			if(typeof content.data.stores[10].infibeam.product_price !== "undefined"){
			document.getElementById('infibeamprice').innerHTML=`&#8377;${content.data.stores[10].infibeam.product_price}`;
			document.getElementById('infibeambuy').innerHTML=`<a href="${content.data.stores[10].infibeam.product_store_url}">Buy Now!</a>`;
			document.getElementById('infibeamspec').innerHTML=`<ul><li>Product Color :${content.data.stores[10].infibeam.product_color}</li><li>Return Time :${content.data.stores[10].infibeam.return_time}</li></ul>`;
			}
			else{
				document.getElementById('infibeamprice').innerHTML="Not Available";
				document.getElementById('infibeambuy').innerHTML="Not Available";
			}
		}
		catch(error)
		{
			document.getElementById('infibeamprice').innerHTML="Not Available";
			document.getElementById('infibeambuy').innerHTML="Not Available";
		}
		try{
			if(typeof content.data.stores[4].paytm.product_price !== "undefined"){
			document.getElementById('paytmprice').innerHTML=`&#8377;${content.data.stores[4].paytm.product_price}`;
			document.getElementById('paytmbuy').innerHTML=`<a href="${content.data.stores[4].paytm.product_store_url}">Buy Now!</a>`;
			document.getElementById('paytmspec').innerHTML=`<ul><li>Product Color :${content.data.stores[4].paytm.product_color}</li><li>Return Time :${content.data.stores[4].paytm.return_time}</li></ul>`;
			}
			else{
				document.getElementById('paytmprice').innerHTML="Not Available";
				document.getElementById('paytmbuy').innerHTML="Not Available";
			}
		}
		catch(error)
		{
			document.getElementById('paytmprice').innerHTML="Not Available";
			document.getElementById('paytmbuy').innerHTML="Not Available";
		}
		try{
			if(typeof content.data.stores[6].yebhi.product_price !== "undefined"){
			document.getElementById('yebhiprice').innerHTML=`&#8377;${content.data.stores[6].yebhi.product_price}`;
			document.getElementById('yebhibuy').innerHTML=`<a href="${content.data.stores[6].yebhi.product_store_url}">Buy Now!</a>`;
			document.getElementById('yebhispec').innerHTML=`<ul><li>Product Color :${content.data.stores[6].yebhi.product_color}</li><li>Return Time :${content.data.stores[6].yebhi.return_time}</li></ul>`;
			}
			else{
				document.getElementById('yebhiprice').innerHTML="Not Available";
				document.getElementById('yebhibuy').innerHTML="Not Available";
			}
		}
		catch(error)
		{
			document.getElementById('yebhiprice').innerHTML="Not Available";
			document.getElementById('yebhibuy').innerHTML="Not Available";
		}
		try{
			if(typeof content.data.stores[8].homeshop18.product_price !== "undefined"){
			document.getElementById('homeshop18price').innerHTML=`&#8377;${content.data.stores[8].homeshop18.product_price}`;
			document.getElementById('homeshop18buy').innerHTML=`<a href="${content.data.stores[8].homeshop18.product_store_url}">Buy Now!</a>`;
			document.getElementById('homeshop18spec').innerHTML=`<ul><li>Product Color :${content.data.stores[8].homeshop18.product_color}</li><li>Return Time :${content.data.stores[8].homeshop18.return_time}</li></ul>`;
		}
		else{
			document.getElementById('homeshop18price').innerHTML="Not Available";
			document.getElementById('homeshop18buy').innerHTML="Not Available";
		}
		}
		catch(error)
		{
			document.getElementById('homeshop18price').innerHTML="Not Available";
			document.getElementById('homeshop18buy').innerHTML="Not Available";
		}
		try{
			if(typeof content.data.stores[14].gadgets360.product_price !== "undefined"){
			document.getElementById('gadgets360price').innerHTML=`&#8377;${content.data.stores[14].gadgets360.product_price}`;
			document.getElementById('gadgets360buy').innerHTML=`<a href="${content.data.stores[14].gadgets360.product_store_url}">Buy Now!</a>`;
			document.getElementById('gadgets360spec').innerHTML=`<ul><li>Product Color :${content.data.stores[14].gadgets360.product_color}</li><li>Return Time :${content.data.stores[14].gadgets360.return_time}</li></ul>`;
			}
			else{
				document.getElementById('gadgets360price').innerHTML="Not Available";
				document.getElementById('gadgets360buy').innerHTML="Not Available";
			}
		}
		catch(error)
		{
			document.getElementById('gadgets360price').innerHTML="Not Available";
			document.getElementById('gadgets360buy').innerHTML="Not Available";
		}
		try{
			if(typeof content.data.stores[15].mi.product_price !== "undefined"){
			document.getElementById('miprice').innerHTML=`&#8377;${content.data.stores[15].mi.product_price}`;
			document.getElementById('mibuy').innerHTML=`<a href="${content.data.stores[15].mi.product_store_url}">Buy Now!</a>`;
			document.getElementById('mispec').innerHTML=`<ul><li>Product Color :${content.data.stores[15].mi.product_color}</li><li>Return Time :${content.data.stores[15].mi.return_time}</li></ul>`;
			}
			else{
				document.getElementById('miprice').innerHTML="Not Available";
				document.getElementById('mibuy').innerHTML="Not Available";
			}
		}
		catch(error)
		{
			document.getElementById('miprice').innerHTML="Not Available";
			document.getElementById('mibuy').innerHTML="Not Available";
		}
		try{
			if(typeof content.data.stores[3].ebay.product_price !== "undefined"){
			document.getElementById('ebayprice').innerHTML=`&#8377;${content.data.stores[3].ebay.product_price}`;
			document.getElementById('ebaybuy').innerHTML=`<a href="${content.data.stores[3].ebay.product_store_url}">Buy Now!</a>`;
			document.getElementById('ebayspec').innerHTML=`<ul><li>Product Color :${content.data.stores[3].ebay.product_color}</li><li>Return Time :${content.data.stores[3].ebay.return_time}</li></ul>`;
			}
			else{
				document.getElementById('ebayprice').innerHTML="Not Available";
				document.getElementById('ebaybuy').innerHTML="Not Available";
			}
		}
		catch(error)
		{
			document.getElementById('ebayprice').innerHTML="Not Available";
			document.getElementById('ebaybuy').innerHTML="Not Available";
		}
		try{
			if(typeof content.data.stores[7].indiatimes.product_price !== "undefined"){
			document.getElementById('indiatimesprice').innerHTML=`&#8377;${content.data.stores[7].indiatimes.product_price}`;
			document.getElementById('indiatimesbuy').innerHTML=`<a href="${content.data.stores[7].indiatimes.product_store_url}">Buy Now!</a>`;
			document.getElementById('indiatimesspec').innerHTML=`<ul><li>Product Color :${content.data.stores[7].indiatimes.product_color}</li><li>Return Time :${content.data.stores[7].indiatimes.return_time}</li></ul>`;
			}
			else{
				document.getElementById('indiatimesprice').innerHTML="Not Available";
				document.getElementById('indiatimesbuy').innerHTML="Not Available";
			}
		}
		catch(error)
		{
			document.getElementById('indiatimesprice').innerHTML="Not Available";
			document.getElementById('indiatimesbuy').innerHTML="Not Available";
		}
		
		try{
			if(content.data.stores[9].naaptol.length !== 0){
			document.getElementById('naaptolprice').innerHTML=`&#8377;${content.data.stores[9].naaptol.product_price}`;
			document.getElementById('naaptolbuy').innerHTML=`<a href="${content.data.stores[9].naaptol.product_store_url}">Buy Now!</a>`;
			document.getElementById('naaptolspec').innerHTML=`<ul><li>Product Color :${content.data.stores[9].naaptol.product_color}</li><li>Return Time :${content.data.stores[9].naaptol.return_time}</li></ul>`;
			}
			else{
				document.getElementById('naaptolprice').innerHTML="Not Available";
				document.getElementById('naaptolbuy').innerHTML="Not Available";
			}
		}
		catch(error)
		{
			document.getElementById('indiatimesprice').innerHTML="Not Available";
			document.getElementById('indiatimebuy').innerHTML="Not Available";
		}
		
	
		console.log(content.data.stores);
		for(let product of content.data.stores)
		{
			console.log(product);
			
		}    
    })
        .catch((content) => {
            //document.getElementById('city-error').style.display = 'flex'
        })
	document.getElementById('body').style.display = 'grid';
}