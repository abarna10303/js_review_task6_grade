let tamil_mark=parseInt(prompt("Enter the Tamil Mark"))
let english_mark=parseInt(prompt("Enter the English Mark"));
let maths_mark=parseInt(prompt("Enter the Maths Mark"));
let science_mark=parseInt(prompt("Enter the Science Mark"));
let social_mark=parseInt(prompt("Enter the Social Mark"));

let ans=document.getElementById("para");

let num=tamil_mark+english_mark+maths_mark+science_mark+social_mark/500;
if(num>=90){
    
    ans.innerText=("Grade : A+");
    ans.style.color="green";
}
else if(num<90 && num>=80)
{
    ans.innerText=("Grade : A");
    ans.style.color="green";
}
else if(num<80 && num>=70)
{
    ans.innerText=("Grade : B");
    ans.style.color="yellow";
}
else if(num<70 && num>=60)
{
    ans.innerText=("Grade : B");
    ans.style.color="yellow";
}
else if(num<60 && num>=40)
{
    ans.innerText=("Grade : D");
    ans.style.color="red";
}
else
{
    ans.innerText=("Grade : F");
    ans.style.color="red";
}