import * as Yup from 'yup'

export default function ConfigurarValidaciones(){
    Yup.addMethod(Yup.string,'PrimeraLetraMayuscula', function(){
        return this.test('primeraLetraMayuscula','La primera letra debe ir en mayúscula',
        function (valor){
            if(valor && valor.length>0){
                const primeraLetra = valor.substring(0,1);
                return primeraLetra===primeraLetra.toLocaleUpperCase();
            }
            return true
        })
    })
}