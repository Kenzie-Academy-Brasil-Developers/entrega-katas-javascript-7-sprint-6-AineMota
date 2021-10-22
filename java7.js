
//forEach
const forEachObj ={

    arrays : [[2, 3, 4, 5, 9, 23, 56, 0],
              [89, 2, 6, 8, 5, 63, 45, 9, 3],
              [53, 8, 33, 0, 75, 48, 1, 18, 92]],

    teste : function testeForEach(){
        

        console.assert(
            this.forEach(this.arrays[0], this.callback) === [4,6,8,10,18,46,112,0],{
                'funcao' : 'iteracao0',
                'expected' : [4, 6, 8, 10, 18, 46, 112, 0],
                'result' : this.arrays[0]
            }
        )

        console.assert(
            this.forEach(this.arrays[1], this.callback) === [178, 4, 12, 16, 10, 126, 90, 18, 6],{
                'funcao' : 'iteracao1',
                'expected' : [178, 4, 12, 16, 10, 126, 90, 18, 6],
                'result' : this.arrays[1] 
            }
        )

        console.assert(
            this.forEach(this.arrays[2], this.callback) === [106, 16, 66, 0, 150, 96, 2, 36, 184],{
                'funcao' : 'iteracao2',
                'expected' :[106, 16, 66, 0, 150, 96, 2, 36, 184],
                'result' : this.arrays[2]
            }
        )
    },
        
    callback: function getDouble(numero, index, array ){
        array[index] = numero * 2
    },

    forEach : function double(array, callBackFunction){
            

        for(let index = 0; index < array.length; index++){
            
            let numero = array[index]

            callBackFunction(numero, index, array );
            
        }
        return array
    }
}
forEachObj.teste(   )

//MAP
const mapObj ={

    arrays : [[45, 25, 9, 55, 74, 13, 12, 64, 90],
              [57, 16, 24, 98, 35, 201, 65, 34, 2],
              [8, 30, 5, 35, 68, 96, 241, 342]],

    teste : function testeMap(){
        
        console.assert(
            this.map(this.arrays[0], this.callback) === [50, 30, 14, 60, 79, 18, 17, 69, 95],{
                'funcao' : 'iteracao0',
                'expected' : [50, 30, 14, 60, 79, 18, 17, 69, 95],
                'result' : this.map(this.arrays[0], this.callback)
            }
        )

        console.assert(
            this.map(this.arrays[1], this.callback) === [62, 21, 29, 103, 40, 206, 70, 39, 7],{
                'funcao' : 'iteracao1',
                'expected' : [62, 21, 29, 103, 40, 206, 70, 39, 7],
                'result' : this.map(this.arrays[1], this.callback) 
            }
        )

        console.assert(
            this.map(this.arrays[2], this.callback) === [13, 35, 10, 40, 73, 101, 246, 347],{
                'funcao' : 'iteracao2',
                'expected' :[13, 35, 10, 40, 73, 101, 246, 347],
                'result' : this.map(this.arrays[2], this.callback)
            }
        )
    },
        
    callback: function add5(numero){
        return numero + 5
    },

    map : function newArrayAdd5(array, callBackFunction){
            let finalArray =[];

        for(let index = 0; index < array.length; index++){
            
            let numero = array[index];

            let result = callBackFunction(numero );
            finalArray.push(result)
            
        }
        return finalArray
    }
}
mapObj.teste()

//FILTER 

const filterObj ={

    arrays : [[1, 56, 23, 17, 852, 61, 254, 545, 235],
              [3,8,7,15,64,4,29,50, 64],
              [351,65,67,89,3,41,4,13]],

    teste : function testeFilter(){
        
        console.assert(
            this.filter(this.arrays[0], this.callback) === [56,852,254],{
                'funcao' : 'iteracao0',
                'expected' : [56,852,254],
                'result' : this.filter(this.arrays[0], this.callback)
            }
        )

        console.assert(
            this.filter(this.arrays[1], this.callback) === [8,64,4,50,64],{
                'funcao' : 'iteracao1',
                'expected' : [8,64,4,50,64],
                'result' : this.filter(this.arrays[1], this.callback) 
            }
        )

        console.assert(
            this.filter(this.arrays[2], this.callback) === [4],{
                'funcao' : 'iteracao2',
                'expected' :[4],
                'result' : this.filter(this.arrays[2], this.callback)
            }
        )
    },
        
    callback: function getEvens(numero){
        if(numero % 2 === 0){
            return true
        }else{
            return false
        }
    },

    filter : function filterEvens(array, callBackFunction){
            let finalArray =[];

        for(let index = 0; index < array.length; index++){
            
            let numero = array[index];

            let result = callBackFunction(numero);
            if(result){
                finalArray.push(numero)
            }
            
        }
        return finalArray
    }
}
filterObj.teste()

//FIND

const findObj ={

    arrays : [[1, 56, 23, 17, 852, 61, 254, 545, 235],
              [3,8,7,15,64,4,29,50, 64],
              [351,65,67,89,3,41,4,13]],

    teste : function testeFind(){
        
        console.assert(
            this.find(this.arrays[0], this.callback) === [56],{
                'funcao' : 'iteracao0',
                'expected' : [56],
                'result' : this.find(this.arrays[0], this.callback)
            }
        )

        console.assert(
            this.find(this.arrays[1], this.callback) === [8],{
                'funcao' : 'iteracao1',
                'expected' : [8],
                'result' : this.find(this.arrays[1], this.callback) 
            }
        )

        console.assert(
            this.find(this.arrays[2], this.callback) === [4],{
                'funcao' : 'iteracao2',
                'expected' :[4],
                'result' : this.find(this.arrays[2], this.callback)
            }
        )
    },
        
    callback: function getFirstEven(numero){
        if(numero % 2 === 0){
            return true
        }else{
            return false
        }
    },

    find : function findFirstEven(array, callBackFunction){
            let finalArray =[];
            let index = 0;
            
            
            while(finalArray.length === 0){

                let numero = array[index];
                let result = callBackFunction(numero);


                if(result){
                    finalArray.push(numero)
                }

                index++
            }

        return finalArray
    }
}
findObj.teste()

//FINDINDEX
//COLOCAR NOME EM TODAS AS CALLBACKS


const findIndexObj ={

    arrays : [[1, 56, 23, 17, 852, 61, 254, 545, 235],
              [3,8,7,15,64,4,29,50, 64],
              [351,65,67,89,3,41,4,13]],

    teste : function testeFindIndex(){
        
        console.assert(
            this.findIndex(this.arrays[0], this.callback) === [56],{
                'funcao' : 'iteracao0',
                'expected' : [56],
                'result' : this.findIndex(this.arrays[0], this.callback)
            }
        )

        console.assert(
            this.findIndex(this.arrays[1], this.callback) === [8],{
                'funcao' : 'iteracao1',
                'expected' : [8],
                'result' : this.findIndex(this.arrays[1], this.callback) 
            }
        )

        console.assert(
            this.findIndex(this.arrays[2], this.callback) === [4],{
                'funcao' : 'iteracao2',
                'expected' :[4],
                'result' : this.findIndex(this.arrays[2], this.callback)
            }
        )
    },
        
    callback: function getIndexFirstEven(numero){
        if(numero % 2 === 0){
            return true
        }else{
            return false
        }
    },

    find : function indexFirstEven(array, callBackFunction){
            let finalArray =[];
            let index = 0;
            
            
            while(result < 0){

                let numero = array[index];
                let result = callBackFunction(numero);


                if(result >= 0){
                    finalArray.push(result)
                }

                index++
            }

        return finalArray
    }
}
findIndexObj.teste()