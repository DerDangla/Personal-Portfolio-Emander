/*
'---------------------------------------------------------------'
'   Filename: scripts.app.js                                    '
'   Created by: Emander D. Dangla                               '
'   Student ID: 301245113                                       '
'   Date Created: 29/09/2022                                    '
'   Description: Javascript file Emander Dangla Personal        '
'                portfolio                                      '
'---------------------------------------------------------------'
'   Modification History                                        '
'---------------------------------------------------------------'
'   Date            Developer           Modification            '
'   29/09/2022      Emander Dangla      Initial Creation        '
'---------------------------------------------------------------'*/

(function(){

    function Start()
    {
        console.log("Application Started...");
    }

    window.addEventListener("load",Start)

})();

(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();