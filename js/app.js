window.onload = function() {
    let elements = document.getElementsByClassName('innerelems');
    let elemArray = [];
    let i=0;
    let elemPos = elements.length-1
    var empty = elements[elemPos]
    while(i<elements.length-1){
        let rand = Math.floor(Math.random()* Math.floor(15));
        if(elemArray.indexOf(rand) == -1){
            elemArray.push(rand);
            elements[i].innerHTML = rand;
            i++;
        }            
    }
    window.addEventListener('keyup',function(event){
        let keycode = event.which || event.keycode;
        if(keycode == 37){
            if(elemPos %4 !=0){
                let element1 = empty.cloneNode(true);
                let element2 = elements[elemPos-1].cloneNode(true);
                elements[elemPos-1].parentNode.replaceChild(element1,elements[elemPos-1]);
                empty.parentNode.replaceChild(element2,empty);
                swapElements(elemArray,elemPos,elemPos-1);
                elemPos = elemPos-1;
                empty=elements[elemPos];
                
            }
            
        }
        if(keycode == 38){
            if(elemPos >= 4){
                let element1 = empty.cloneNode(true);
                let element2 = elements[elemPos-4].cloneNode(true);
                elements[elemPos-4].parentNode.replaceChild(element1,elements[elemPos-4]);
                empty.parentNode.replaceChild(element2,empty);
                swapElements(elemArray,elemPos-1,elemPos-4);
                elemPos = elemPos-4;
                empty=elements[elemPos];
            }
        }
        if(keycode == 39){
            if((elemPos+1) %4 !=0){
                let element1 = empty.cloneNode(true);
                let element2 = elements[elemPos+1].cloneNode(true);
                elements[elemPos+1].parentNode.replaceChild(element1,elements[elemPos+1]);
                empty.parentNode.replaceChild(element2,empty);
                swapElements(elemArray,elemPos,elemPos+1);
                elemPos = elemPos+1;
                empty=elements[elemPos];
            }
        }
        if(keycode == 40){
            if(elements.length-4 > elemPos){
                let element1 = empty.cloneNode(true);
                let element2 = elements[elemPos+4].cloneNode(true);
                elements[elemPos+4].parentNode.replaceChild(element1,elements[elemPos+4]);
                empty.parentNode.replaceChild(element2,empty);
                swapElements(elemArray,elemPos,elemPos+4);
                elemPos = elemPos+4;
                empty=elements[elemPos];
            }
        }
    });
  };

  

  
  
  function swapElements(arr,first,second){
      let temp = arr[first];
      arr[first] = arr[second];
      arr[second] = temp;
  }

  