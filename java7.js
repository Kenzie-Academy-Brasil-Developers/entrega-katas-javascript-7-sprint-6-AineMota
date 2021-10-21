
//forEach
const forEachObj ={

    arrays : [[2, 3, 4, 5, 9, 23, 56, 0],
              [89, 2, 6, 8, 5, 63, 45, 9, 3],
              [53, 8, 33, 0, 75, 48, 1, 18, 92]],

    teste : function testeForEach(){
        const result0 = this.iteracao(this.arrays[0]) ;
        const result1 = this.iteracao(this.arrays[1]) ;
        const result2 = this.iteracao(this.arrays[2]) ;
        

        console.assert(
            result0 === [4, 6, 8, 10, 18, 46, 112, 0],{
                'funcao' : 'iteracao(arrays[0])',
                'expected' : [4, 6, 8, 10, 18, 46, 112, 0],
                'result' : result0
            }
        )

        console.assert(
            result1=== [178, 4, 12, 16, 10, 126, 90, 18, 6],{
                'funcao' : 'iteracao(arrays[1])',
                'expected' : [178, 4, 12, 16, 10, 126, 90, 18, 6],
                'result' : result1 
            }
        )

        console.assert(
            result2 === [106, 16, 66, 0, 150, 96, 2, 36, 184],{
                'funcao' : 'iteracao(arrays[2])',
                'expected' :[106, 16, 66, 0, 150, 96, 2, 36, 184],
                'result' : result2
            }
        )
    },
              
    iteracao : function (array){
        

        for(let i = 0; i < array.length; i++){
            
            array[i] = array[i] * 2;
            
        }
        return array
    }
}

forEachObj.teste();

