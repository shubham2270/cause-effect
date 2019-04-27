const people = [
    {  
        id: '0',
        name: 'Mario Speedwagon',
        street: '4905 Bernardo Street',
        city: 'Tampa',
        state: 'Florida',
        country: 'India',
        telephone: '860-366-2658',
        birthday: '02/05/1988'
    },
    {
        id: '1',
        name: 'Petey Cruiser',
        street: '4440 Lochmere Lane',
        city: 'Hartford',
        state: 'Connecticut',
        country: 'China',
        telephone: '860-366-5175',
        birthday: '16/09/1985'
    },
    {
        id: '2',
        name: 'Anna Sthesia',
        street: '3871 Briercliff Road',
        city: 'Bronx',
        state: 'New York',
        country: 'USA',
        telephone: '718-655-7067',
        birthday: '19/02/1995'
    },
    {
        id: '3',
        name: 'Gail Forcewind',
        street: '5698 PatanaheKon Road',
        city: 'KhudJanlo',
        state: 'Huhulale',
        country: 'Kabhisunanahe',
        telephone: '725-654-1257',
        birthday: '28/11/1959',
    },
]


//Renders the list of names in aside pane
const namesList = document.getElementById('namesList');
namesList.innerHTML = people.map(el => `<li><a>${el.name}</a></li>`).join('');


const details = document.getElementById('details');
//Displays the details on clicking name
const displayDetails = (e) => {
    //add remove active class from name list
const li = document.querySelectorAll('#namesList > li a')
    let toggle = true;
    people.find((el) => {
       if(el.name === e.target.innerHTML) {
           li.forEach(el => {
            el.classList.remove('currentActive');
           })
           e.target.classList.add('currentActive');
       
           //render details template
        details.innerHTML = 
        `<li><strong>Full Name:</strong>${el.name}</li>
        <li><strong>Address: </strong>${el.street}, ${el.city}, ${el.state}, ${el.country}</li>
        <li><strong>Telephone: </strong>${el.telephone}</li>
        <li><strong>Birthday: </strong>${el.birthday}</li>`
       }  
     })
}

namesList.addEventListener('click', displayDetails)


