
        let div = document.createElement('div');
            div.className = 'copy-link-text';

        let button = document.createElement('button');
            button.className = 'copy'
            button.innerHTML =  'copy';

        let checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "name";
            checkbox.value = "value";
            checkbox.id = "input-id";

        let label = document.createElement('label')
            label.htmlFor = "id";
            label.appendChild(document.createTextNode('select All'));

            div.appendChild(checkbox);
            div.appendChild(label);
            div.appendChild(button);

        document.querySelector('.mw').prepend(div);

       const allDiv =  $('.LC20lb');
       let input = document.createElement('input');
       input.type = "checkbox";
       input.className = "prepend-div";
       allDiv.prepend(input);
       $('#input-id').click(function() {
       $('input:checkbox').not(this).prop('checked', this.checked);
      });

      
      $('.copy').click(function() {
        button.innerHTML = 'copied';
        setTimeout(() => {
        button.innerHTML = 'copy';
        }, 750);
        
        
      
        const inp = $("<input>");
        $("body").append(inp);
        let string = ""

        $('a').filter(':has(:checkbox:checked)').each(function() {                     
           string += $(this).attr('href')
        }) 
        inp.val(string).select();
        document.execCommand("copy");
        inp.remove();
    
        });
         
 