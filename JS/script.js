// Retrieve "Active" list.
var activeList = document.querySelector('ul');

// Retrieve "Active" list.
var completedList = document.querySelector('ul:last-of-type');

// Retieve the to-do input.
var newTask = document.querySelector('[name="new-task"]');

//select our form.
var form = document.querySelector('form');
// we listen to our form for a submission.
form.addEventListener('submit', function (event) {
// prevent a page-refresh from a REAL form submission.
event.preventDefault();

activeList.innerHTML += `
<li>
<input type="checkbox">
` + newTask.value + `
</li>
`;

//Grab our brand new chekox! (The last LI will always be the newest one!)
var newCheckboxes = document.querySelectorAll('ul:first-of-type li [type="checkbox"]');
// Loop through all the checkboxes - make sure they ALL have the event each time we submit!
for (var i= 0; i< newCheckboxes.length; i++) {
    var newCheckbox = newCheckboxes[i];
    // Listen for a clickon this checkbox!
newCheckbox.addEventListener('click', function (event) {
    //Grab the associated LI.
    var li = this.parentNode;
    // Delete THIS clicked checkbox.
    li.removeChild( this);

    // Move the LI to our completed UL.
    completedList.appendChild(li);
});
    
}


});


