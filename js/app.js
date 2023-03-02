const breakingNews=()=>{
    const url='https://openapi.programming-hero.com/api/news/categories'
    fetch(url)
	.then(response => response.json())
	.then(data =>showNewsHeader(data.data.news_category))
	.catch(err => console.error(err));
}
const showNewsHeader=(data)=>{
    // console.log(data)
    const ul =document.getElementById('breaking-news');
    data.forEach(datas => {
        // console.log(datas)
        const li = document.createElement('p')
        li.innerHTML=`
        <a href="#" class="text-decoration-none fw-bold active text-secondary" onclick="categoryNews('${datas.category_id}','${datas.category_name}')">${datas.category_name}</a>
        `
        
        ul.appendChild(li)  
    });
    
}
const categoryNews=(id, category_name) =>{
    const url=`
    https://openapi.programming-hero.com/api/news/category/${id}
    `
    fetch(url)
    .then(res=>res.json())
    .then(data=>categoryCard(data.data, category_name))
    .catch(error=>console.log(error))
}
const categoryCard=(data , category_name)=>{
    console.log(data,category_name)
    document.getElementById('allNews').innerText=`${data.length}`
    document.getElementById('catagoryName').innerText=`${category_name}`
 data.forEach( singledata=> {
    console.log(singledata.author)
const {name,published_date,img}= singledata.author


 }); 
}


 breakingNews()