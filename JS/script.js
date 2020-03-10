var activeList = document.querySelector( 'ul' );
var completedList = document.querySelector( 'ul:last-of-type' );
var newTask = document.querySelector( '[name="new-task"]' );
var form = document.querySelector( 'form' );

form.addEventListener( 'submit', function ( event ) {
    event.preventDefault();

    var startDateString = formatDateString();

    activeList.innerHTML += `
        <li>
            <input type="checkbox">
            ` + newTask.value + `
            <time><strong>Start:</strong> ` + startDateString + `</time>
            <button>Delete</button>
        </li>
    `;

    var newCheckboxes = document.querySelectorAll( 'ul [type="checkbox"]' );
    for ( var i = 0; i < newCheckboxes.length; i++ ) {
        var newCheckbox = newCheckboxes[i];
        var li = newCheckbox.parentNode;
        var button = li.children[2]; 

        button.addEventListener( 'click', function (event) {
    
            var isInActiveList = false;
            for ( var i = 0; i < activeList.children.length; i++ ) {
                if ( li === activeList.children[i] ) {
                    isInActiveList = true; 
            }

            if ( isInActiveList ) {
                activeList.removeChild( li );
            } else {
                completedList.removeChild( li );
            }
        }
        } );

        newCheckbox.addEventListener( 'click', function ( event ) {
        
            li.removeChild( newCheckbox );

            var endTime = document.createElement( 'TIME' );
            endTime.innerHTML += '<strong>End:</strong> ' + formatDateString();

            li.appendChild( endTime );
            completedList.appendChild( li );
        } );
    }
} );

function formatDateString () {
    var date = new Date();
    var dateString =
      date.getDate() +
      '-' +
      ( Number( date.getMonth() ) + 1 ) + 
      '-' +
      date.getFullYear() +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes() +
      ':' +
      date.getSeconds();
    return dateString;
}
