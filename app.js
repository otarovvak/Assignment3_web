const inputTask=document.querySelector('.inputTask')
const addTask = document.querySelector('.addTask')
const tasks = document.querySelector('.tasks')


if(addTask){
  addTask.addEventListener("click", ()=>{
    //creating elements when add button was clicked
    const block =document.createElement('div')

    const checkInput= document.createElement('input')
    checkInput.type="checkbox"

    const inputTaskNew= document.createElement('input')
    inputTaskNew.type= "text"
    // inputTaskNew.readOnly = true
    inputTaskNew.setAttribute("readonly", "readonly") //setting an attribute so it wasnt be editable until edit button will not be clicked

    const editBtn= document.createElement('button')
    editBtn.innerText="edit"

    const removeBtn= document.createElement('button')
    removeBtn.innerText="remove"
    inputTaskNew.value=inputTask.value
    if(inputTaskNew.value==false){
        alert('error') //error message if value is empty
    }
    else{
        block.append(checkInput)
        block.append(inputTaskNew)
        block.append(editBtn)
        block.append(removeBtn)
        tasks.append(block)
    }
    inputTask.value=""      
    checkInput.addEventListener("click",()=>{
        inputTaskNew.classList.toggle('checked')  //to mark and unmark task as completed
    })
    editBtn.addEventListener("click", ()=>{
        if(editBtn.innerText=="edit"){
            editBtn.innerText="save"
            inputTaskNew.removeAttribute("readonly") //editing
        }
        else{
            editBtn.innerText="edit"
            inputTaskNew.setAttribute("readonly", "readonly")
        }
    })
    removeBtn.addEventListener("click",()=>{
        if(removeBtn.innerText=="remove"){
            block.remove()
        }
    })
})   
}

// form validation in main page index.html
const submitBtn=document.getElementById('submitBtn')
const email=document.querySelector('.form-control-js')
const text=document.querySelector('.textarea-js')
const res=document.querySelector('.result')

//adding event to button
if(submitBtn){
   submitBtn.addEventListener('click', Validate)
 
}

//creating an function that checks if data valid or not
function Validate(){

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email.value) && (text.value)) //for email checking
  {
    res.style.color='blue'
    return document.querySelector('.result').innerText='Thank for providing the information. Your data is valid'

  }
else{
    res.style.color='red'
    return res.innerText='The email or text you provided invalid, the recommendation text can not be empty'

}}



// countdown timer
const timeInput = document.getElementById('timerTime');
const submitBtnTimer = document.getElementById('submitBtnTimer');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const blockTime = document.querySelector('.countdown');
let countdown;

submitBtnTimer.addEventListener('click', () => {
    if (timeInput.value) {
        if (countdown) {
            clearInterval(countdown); // Clear the previous countdown 
        }
        startCounting();
        blockTime.style.display = 'flex';
        document.querySelector('.textError').innerText = '';
    } else {
        document.querySelector('.textError').innerText = 'You should put the data first';
        clearInterval(countdown);
        blockTime.style.display = 'none';
        
    }
});

function startCounting() {
    const time = timeInput.value;
    // Splitting the time into hours, minutes because the input has only two :
    const [hours, minutes] = time.split(':');

    // calculating the seconds
    let totalSeconds = hours * 3600 + minutes * 60;

    // starting the countdown timer
    countdown = setInterval(() => {
        totalSeconds--;
        hoursDisplay.innerText = Math.floor(totalSeconds / 3600);
        minutesDisplay.innerText = Math.floor((totalSeconds % 3600) / 60);
        secondsDisplay.innerText = totalSeconds % 60;

        if (totalSeconds === 0) {
            clearInterval(countdown); // to stop the counting
        }
    }, 1000); // to update every second
}


//adding event to concultation button on main page
    document.querySelector('.consultBtn').addEventListener('click',()=>{
        alert('Thank you for sending the request. Our managers will contact you in minutes');
    });
        
        
        
//modal window for the promocode

// to open the modal window 
document.querySelector('.btnModal').addEventListener('click', () => {
    document.querySelector('.modalWindow').style.display = 'block';
})
  
  // to close the modal window
  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.modalWindow').style.display = 'none';
})
  