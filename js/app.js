var slidingPuzzle = {};

(function(){
    function Initialise() {
        if (document.contains(document.getElementsByClassName("sliding-row")[0])) {
            document.getElementsByClassName("sliding-row")[0].remove();
            
        } 
        
        this.baseRect = createElement('sliding-row');
        document.getElementsByTagName('body')[0].appendChild(this.baseRect);
        this.elements = document.getElementsByClassName('innerelems');
        this.elemArray = [];
        
        this.numberOfRows = parseInt(document.getElementById('numRows').value);
        this.numberOfColumns = parseInt(document.getElementById('numCols').value);
    
        createGrid(this.numberOfRows,this.numberOfColumns);
        this.numberOfElements = this.numberOfRows * this.numberOfColumns;
    
        this.elemPos = this.elements.length-1;
        this.empty = this.elements[this.elemPos]; 
    
    
        let i=0;
        while(i<this.elements.length-1){
            let rand = Math.floor(Math.random()* (this.numberOfElements - 1)+1);
            if(this.elemArray.indexOf(rand) == -1){
                this.elemArray.push(rand);
                this.elements[i].innerHTML = rand;
                i++;
            }            
        }
        this.elemArray[this.elemPos] = 0;
      }
      
        Initialise();
        document.getElementById('submit').addEventListener('click',function(){
            Initialise();
        })
        window.addEventListener('keyup', function(event){
            let keycode = event.which || event.keycode;
            let empty = this.empty;
            let elemPos = this.elemPos;
            let elements = this.elements;
            let elemArray = this.elemArray;
            let numberOfColumns = this.numberOfColumns;
            if(keycode == 37){
                if(elemPos % numberOfColumns !=0){
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
                if(elemPos >= numberOfColumns){
                    let element1 = empty.cloneNode(true);
                    let element2 = elements[elemPos-numberOfColumns].cloneNode(true);
                    elements[elemPos-numberOfColumns].parentNode.replaceChild(element1,elements[elemPos-numberOfColumns]);
                    empty.parentNode.replaceChild(element2,empty);
                    swapElements(elemArray,elemPos,elemPos-numberOfColumns);
                    elemPos = elemPos-numberOfColumns;
                    empty=elements[elemPos];
                }
            }
            if(keycode == 39){
                if((elemPos+1) %numberOfColumns !=0){
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
                if(elements.length-numberOfColumns > elemPos){
                    let element1 = empty.cloneNode(true);
                    let element2 = elements[elemPos+numberOfColumns].cloneNode(true);
                    elements[elemPos+numberOfColumns].parentNode.replaceChild(element1,elements[elemPos+numberOfColumns]);
                    empty.parentNode.replaceChild(element2,empty);
                    swapElements(elemArray,elemPos,elemPos+numberOfColumns);
                    elemPos = elemPos+numberOfColumns;
                    empty=elements[elemPos];
                }
            }
             this.empty = empty;
             this.elemPos = elemPos;
             this.elements = elements;
             this.elemArray = elemArray;
        });      
    
      
      function createElement(className){
        let element = document.createElement('div');
        element.setAttribute('class',className);
        return element;
      }
     
    
    
      function createGrid(numberOfRows,numberOfColumns){
        let slidingRow = document.getElementsByClassName('sliding-row')[0];
        slidingRow.style.height = (numberOfRows * 75) + 'px';
        for(let index = 0;index<numberOfRows;index++){
            let element = createElement('rows');
            slidingRow.appendChild(element);
        }
        let rows = document.getElementsByClassName('rows');
        let width =  100/numberOfColumns;
        width = width + '%';
        for(let rowIndex = 0;rowIndex<rows.length;rowIndex++){
            for(let index = 0;index < numberOfColumns;index++){
                let element = createElement('innerelems');
                element.style.flexBasis = width;
                rows[rowIndex].appendChild(element);
            }
        }   
      } 
    
      
      
      function swapElements(arr,first,second){
          let temp = arr[first];
          arr[first] = arr[second];
          arr[second] = temp;
      }
}).call(slidingPuzzle)
