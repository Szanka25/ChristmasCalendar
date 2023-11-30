const calendarBtn = document.querySelector('.btn');
const calendarContainer = document.querySelector('.container');
const snow = document.querySelector('.snow');
const snow2 = document.querySelector('.snow2');
const myAudio = document.getElementById('myaudio');


calendarContainer.style.display = 'none';
const calendarDays = 24;

let text = ['A. Zsuzsi','Gál Mónika', 'Csipszer Bernadett', 'Ábel Hajnalka', 'Nagy Laura', 'Hoffmann Dia', 'Kocsis-Sné Emese', 'Ungi Niki', 'Máté Zsuzsanna', 'Kovács-Poros Claudia', 'Szakos-Vajda Erika', 'Kovácsné Barbara', 'Nagy-Illés Laura', 'Kántor Viktória', 'Svercsokné Éva', 'Bessy embere', 'Veréb-Török Fanni', 'Dudli Tibi', 'Edi' , 'Andi' , 'Fábián Gergely', 'Farkas Angéla', 'Illés Genonéva', 'Bessy'];




const openDoor = (path, e) => {
    let date = new Date();
    /*if(date.getDate() == e.target.innerHTML){*/
    e.target.parentNode.classList.add('active');
    e.target.parentNode.style.backgroundImage = `url(${path})`;

 
    
    /*e.target.innerHTML = text[`${index}`];*/

    function removeActive(){
        e.target.parentNode.classList.remove('active');
    }

    const myTimeOut = setTimeout(removeActive, 3000);

}; 





function createCalendar() {
    myAudio.play();
    for (let i = 0; i < calendarDays; i++) {
        const calendarDoor = document.createElement('div');
        const calendarDoorText = document.createElement('div');

        calendarDoor.classList.add('image');
        calendarDoor.style.gridArea = 'door' + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add('text');
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        calendarContainer.style.display = 'grid';
        calendarBtn.style.display = 'none';
        snow.style.display = 'none';
        snow2.style.display = 'none';



        oilNumber = i + 1;

        let oilPath = `./oil/oil-${oilNumber}.jpg`;

        calendarDoorText.addEventListener('click', openDoor.bind(null, oilPath));
        
    }
}


calendarBtn.addEventListener('click', createCalendar);
