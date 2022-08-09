const searchBar = document.querySelector(".search-box");
const text = document.querySelector(".text-para");
const button = document.querySelector(".btn");


/// Debouncing 

const debounce = (callback,delay)=> {
	let timeoutId;
	return (...args)=> {
		if(timeoutId){
			clearTimeout(timeoutId)
		}
		timeoutId = setTimeout(()=>{
			callback(...args)
		},delay);
	}
}

searchBar.addEventListener("input",debounce((e)=>{
	text.textContent = e.target.value;
},1000));

//  Throttle

const throttle = (callback,delay)=> {
	let time = 0;
	return (...args)=> {
		const now = new Date().getTime();
		if(now-time<delay){
			return;
		}
		time = now;
		return callback(...args);
	}
}

button.addEventListener("click", throttle(()=>{
	console.log("Someone Clicked Me.")
},3000))

