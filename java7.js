
//forEach
const forEachObj ={

    arrays : [[2, 3, 4, 5, 9, 23, 56, 0],
              [89, 2, 6, 8, 5, 63, 45, 9, 3],
              [53, 8, 33, 0, 75, 48, 1, 18, 92]],

    teste : function testeForEach(){
        

        console.assert(
            this.forEach(this.arrays[0], this.callback) === '4, 6, 8, 10, 18, 46, 112, 0',{
                'funcao' : 'forEach0',
                'expected' : '4, 6, 8, 10, 18, 46, 112, 0',
                'result' : this.arrays[0]
            }
        )

        console.assert(
            this.forEach(this.arrays[1], this.callback) === [178, 4, 12, 16, 10, 126, 90, 18, 6],{
                'funcao' : 'forEach1',
                'expected' : [178, 4, 12, 16, 10, 126, 90, 18, 6],
                'result' : this.arrays[1] 
            }
        )

        console.assert(
            this.forEach(this.arrays[2], this.callback) === [106, 16, 66, 0, 150, 96, 2, 36, 184],{
                'funcao' : 'forEach2',
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
        let result = array.toString()
        return result
    }
}
forEachObj.teste()

//MAP
const mapObj ={

    arrays : [[45, 25, 9, 55, 74, 13, 12, 64, 90],
              [57, 16, 24, 98, 35, 201, 65, 34, 2],
              [8, 30, 5, 35, 68, 96, 241, 342]],

    teste : function testeMap(){
        
        console.assert(
            this.map(this.arrays[0], this.callback) === [50, 30, 14, 60, 79, 18, 17, 69, 95],{
                'funcao' : 'map0',
                'expected' : [50, 30, 14, 60, 79, 18, 17, 69, 95],
                'result' : this.map(this.arrays[0], this.callback)
            }
        )

        console.assert(
            this.map(this.arrays[1], this.callback) === [62, 21, 29, 103, 40, 206, 70, 39, 7],{
                'funcao' : 'map1',
                'expected' : [62, 21, 29, 103, 40, 206, 70, 39, 7],
                'result' : this.map(this.arrays[1], this.callback) 
            }
        )

        console.assert(
            this.map(this.arrays[2], this.callback) === [13, 35, 10, 40, 73, 101, 246, 347],{
                'funcao' : 'map2',
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
                'funcao' : 'filter0',
                'expected' : [56,852,254],
                'result' : this.filter(this.arrays[0], this.callback)
            }
        )

        console.assert(
            this.filter(this.arrays[1], this.callback) === [8,64,4,50,64],{
                'funcao' : 'filter1',
                'expected' : [8,64,4,50,64],
                'result' : this.filter(this.arrays[1], this.callback) 
            }
        )

        console.assert(
            this.filter(this.arrays[2], this.callback) === [4],{
                'funcao' : 'filter2',
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
                'funcao' : 'find0',
                'expected' : [56],
                'result' : this.find(this.arrays[0], this.callback)
            }
        )

        console.assert(
            this.find(this.arrays[1], this.callback) === [8],{
                'funcao' : 'find1',
                'expected' : [8],
                'result' : this.find(this.arrays[1], this.callback) 
            }
        )

        console.assert(
            this.find(this.arrays[2], this.callback) === [4],{
                'funcao' : 'find2',
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
            this.findIndex(this.arrays[0], this.callback) === 1,{
                'funcao' : 'findIndex0',
                'expected' : 1,
                'result' : this.findIndex(this.arrays[0], this.callback)
            }
        )

        console.assert(
            this.findIndex(this.arrays[1], this.callback) === 1,{
                'funcao' : 'findIndex1',
                'expected' : 1,
                'result' : this.findIndex(this.arrays[1], this.callback) 
            }
        )

        console.assert(
            this.findIndex(this.arrays[2], this.callback) === 6,{
                'funcao' : 'findIndex2',
                'expected' :6,
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

    findIndex : function indexFirstEven(array, callBackFunction){
            let index = 0;
            let result = -1;
            
            while(result < 0){

                let numero = array[index];
                
                if(callBackFunction(numero)){
                    result = index;
                }

                index++
            }

        return result
    }
}
findIndexObj.teste()


//REDUCWER


const reduceObj ={

    arrays : [[1, 56, 23, 17, 852, 61, 254, 545, 235],
              [3,8,7,15,64,4,29,50, 64],
              [351,65,67,89,3,41,4,13]],

    teste : function testeReduce(){
        
        console.assert(
            this.reduce(this.arrays[0], this.callback) === 2044,{
                'funcao' : 'reduce0',
                'expected' : 2044,
                'result' : this.reduce(this.arrays[0], this.callback)
            }
        )

        console.assert(
            this.reduce(this.arrays[1], this.callback) === 244 ,{
                'funcao' : 'reduce1',
                'expected' : 244,
                'result' : this.reduce(this.arrays[1], this.callback) 
            }
        )

        console.assert(
            this.reduce(this.arrays[2], this.callback) === 633,{
                'funcao' : 'reduce2',
                'expected' :633,
                'result' : this.reduce(this.arrays[2], this.callback)
            }
        )
    },
        
    callback: function somNumbers(accumulated, numero){
        return accumulated + numero;
    },

    reduce : function getSomAllNumbers(array, callBackFunction, accumulated){
        let start = 1;
        let acc ;

        if(accumulated){
            start = 0; 
            acc = accumulated
        }else{
            acc = array[0];
        }

        for(let i = start; i < array.length; i++){
            let number = array[i];
            
            acc  = callBackFunction(acc ,number)

            
        }


        return acc
    }
}
reduceObj.teste()

//SOME

const someObj ={

    arrays : [[86,26,54,714,16,94,324,9,46,71],
              [2,44,26,54,58,92,742],
              [3,7,15,29,57,21,9,643]],

    teste : function testeSome(){
        
        console.assert(
            this.some(this.arrays[0], this.callback) === true,{
                'funcao' : 'some0',
                'expected' : true,
                'result' : this.some(this.arrays[0], this.callback)
            }
        )

        console.assert(
            this.some(this.arrays[1], this.callback) === false ,{
                'funcao' : 'some1',
                'expected' : false,
                'result' : this.some(this.arrays[1], this.callback) 
            }
        )

        console.assert(
            this.some(this.arrays[2], this.callback) === true,{
                'funcao' : 'some2',
                'expected' :true,
                'result' : this.some(this.arrays[2], this.callback)
            }
        )
    },
        
    callback: function isItOdd( numero){
        if(numero % 2 !== 0){
            return true
        }else{
            return false
        }
    },

    some : function getSomAllNumbers(array, callBackFunction, accumulated){

        let index = 0;
        let result = false;
        
        while(result === false && index < array.length){

            let numero = array[index];
            
            result =callBackFunction(numero);

            index++
        }
        return result
        
        }
    }

someObj.teste()

//EVERY


const everyObj ={

    arrays : [[87,413,65,99,27,311,2,5,97,77],
              [2,44,26,54,58,92,742],
              [3,7,15,29,57,21,9,643]],

    teste : function testeEvery(){
        
        console.assert(
            this.every(this.arrays[0], this.callback) === false,{
                'funcao' : ' every0',
                'expected' : false,
                'result' : this.every(this.arrays[0], this.callback)
            }
        )

        console.assert(
            this.every(this.arrays[1], this.callback) === false ,{
                'funcao' : ' every1',
                'expected' : false,
                'result' : this.every(this.arrays[1], this.callback) 
            }
        )

        console.assert(
            this.every(this.arrays[2], this.callback) === true,{
                'funcao' : ' every2',
                'expected' :true,
                'result' : this.every(this.arrays[2], this.callback)
            }
        )
    },
        
    callback: function isItOdd( numero){
        if(numero % 2 !== 0){
            return true
        }else{
            return false
        }
    },

    every : function allOddNumbers(array, callBackFunction, accumulated){

        let index = 0;
        let result = true;
        
        while(result && index < array.length){

            let numero = array[index];
            
            result =callBackFunction(numero);

            index++
        }
        return result
        
        }
    }

    everyObj.teste()

    //FILL
//valor para preencher a array
//indice de inicio
//indice final

    const fillObj ={

        arrays : [[87,413,65,99,27],
                  [2,44,26,54,58,92],
                  [3,7,15,29,57,21]],
    
        teste : function testeFill(){
            
            console.assert(
                JSON.stringify(this.fill(this.arrays[0], NaN, NaN,2)) === JSON.stringify([87,413,65,99,27]),{
                    'funcao' : 'fill0',
                    'expected' : [87,413,65,99,27],
                    'result' : this.fill(this.arrays[0],2, NaN, NaN)
                }
            )
    
            console.assert(
                JSON.stringify(this.fill(this.arrays[1], 1, 3, 3)) ===  JSON.stringify([2,3,3,3,58,92]) ,{
                    'funcao' : 'fill1',
                    'expected' : [2,3,3,3,58,92],
                    'result' : this.fill(this.arrays[1], 1, 3, 3) 
                }
            )
    
            console.assert(
                JSON.stringify(this.fill(this.arrays[2], 2, 5, 1)) ===  JSON.stringify([3,7,1,1,1,1]),{
                    'funcao' : 'fill2',
                    'expected' :[3,7,1,1,1,1],
                    'result' : this.fill(this.arrays[2],2, 5, 1)
                }
            )
        },
    
        fill : function replacement(obj,initial, final,value){

            let start = 0;
            let end = obj.length - 1;


            if(final === undefined || initial === undefined || final.toString() === NaN.toString() || initial.toString() === NaN.toString()){
                return obj
            }else{
                if(initial){
                    if(initial < 0){
                        initial = obj.length + initial
                     }
    
                     start = initial
                }
    
    
                if(final){
                    if(final < 0){
                        final = obj.length + final
                    }
    
                    end = final
                }
    
                
                for(let i = start; i <= end; i++){
                    obj[i] = value
                }
                return obj
            }
            

        }
    }
        fillObj.teste()

//INCLUDES

const includesObj ={

    arrays : [[87,413,65,99,27],
              [2,44,26,54,58,92],
              [3,7,15,29,57,21]],

    teste : function testeIncludes(){
        
        console.assert(
            this.includes(this.arrays[0], 99) === true ,{
                'funcao' : 'includes0',
                'expected' : true,
                'result' : this.includes(this.arrays[0], 99)
            }
        )

        console.assert(
            this.includes(this.arrays[1], 3) === false ,{
                'funcao' : 'includes1',
                'expected' : false,
                'result' : this.includes(this.arrays[1],3) 
            }
        )

        console.assert(
            this.includes(this.arrays[2], 3) === true ,{
                'funcao'  : 'includes2',
                'expected':  true,
                'result'  : this.includes(this.arrays[2], 3)
            }
        )
    },


    includes : function replacement(array,value){
        result = false;

        for(let i = 0; i < array.length; i++){
            if(value === array[i]){
                    result = true;
            }
        }
        return result
    }
}
    includesObj.teste()


//INDEXOF

const includesObj ={

    arrays : [[87,413,65,99,27],
              [2,44,26,54,58,92],
              [3,7,15,29,57,21]],

    teste : function testeIncludes(){
        
        console.assert(
            this.includes(this.arrays[0], 99) === 3,{
                'funcao' : 'includes0',
                'expected' : 3,
                'result' : this.includes(this.arrays[0], 99)
            }
        )

        console.assert(
            this.includes(this.arrays[1], 3) === -1 ,{
                'funcao' : 'includes1',
                'expected' : -1,
                'result' : this.includes(this.arrays[1],3) 
            }
        )

        console.assert(
            this.includes(this.arrays[2], 3) === 0 ,{
                'funcao'  : 'includes2',
                'expected':  0,
                'result'  : this.includes(this.arrays[2], 3)
            }
        )
    },


    includes : function replacement(array,value){
        result = -1;

        for(let i = 0; i < array.length; i++){
            if(value === array[i]){
                    result = true;
            }
        }
        return result
    }
}
    includesObj.teste()