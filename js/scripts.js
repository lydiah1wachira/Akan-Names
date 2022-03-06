
 
const {gender, date} = document.forms.birthday_form.elements;

const submitButton = document.getElementById('submit_form')

let modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
let paragraph = document.getElementById("modal_content_p")


submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  if(!gender.value  || !date.value){
    alert("Please provide both gender and date")
    return;
  }
  const genderValue = gender.value.toLocaleLowerCase()

  const day = new Date(date.value).toLocaleString('en-us', {weekday:'long'}).toLocaleLowerCase()

  showNames(genderValue, day)
})

function showNames(gender, date){
    
  const dateWithGender = datesOfBirth[date]

  modal.style.display = "block";
  paragraph.innerHTML = `Your Akan Name is ${dateWithGender[gender]}`
}


const datesOfBirth = {
  sunday:{
    male:"Kwasi",
    female:"Akosua"
  },
  monday:{
    male:"Kwadwo",
    female:"Adwoa"
  },
  tuesday:{
    male:"Kwabena",
    female:"Abenaa"
  },
  wednesday:{
    male:"Kwaku",
    female:"Akua"
  },
  thursday:{
    male:"Yaw",
    female:"Yaa"
  },
  friday:{
    male:"Kofi",
    female:"Afua"
  },
  saturday:{
    male:"Kwame",
    female:"Ama"
  }

}


// Get the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
