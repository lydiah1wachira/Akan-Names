//collect form data
//collect data from  text boxes
 let birthday = document.getElementById('date').value;

const {gender, date} = document.forms.birthday_form.elements;

const submitButton = document.getElementById('submit_form')

submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  if(!!gender.value  || !!date.value){
    alert("Please provide both gender and date")
    return;
  }
  const genderValue = gender.value

  const day = new Date(date.value).toLocaleString('en-us', {weekday:'long'}).toLocaleLowerCase()
  
  const dateWithGender = datesOfBirth[day]

  console.log(dateWithGender[genderValue])
})


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

let days = ["Sunday", "Monday", "Tuesday", "Wesdnesday", "Thursday", 'Friday', 'Saturday']
let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
let femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
