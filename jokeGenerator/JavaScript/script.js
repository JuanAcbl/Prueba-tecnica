
const chuck =document.getElementsByClassName("button")[0];

chuck.addEventListener('click', joke);

async function joke(){
    try{
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const json= await response.json();
    alert(json.value);
    }catch(e){
        console.error(e);
    }
}
