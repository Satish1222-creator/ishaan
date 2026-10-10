
/* Newsletter interaction */

document.querySelectorAll('.ii-newsletter form').forEach(function(form){

  form.addEventListener('submit',function(event){
    event.preventDefault();

    const input = form.querySelector('input');
    const button = form.querySelector('button');

    if(input.value.trim() !== ''){

      button.innerHTML = "✓";

      input.value = "";

      setTimeout(function(){

        button.innerHTML = "→";

      },2200);

    }

  });

});
