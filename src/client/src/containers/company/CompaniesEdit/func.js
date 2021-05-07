import {GetCompanyWorkplace} from '../../../services/firestoreCompany'

export function onGetCompanyWorkplace({companyId,workplaceId,cnpj,setData,setLoadContent,notification,setLoaderDash}) {
    function checkSuccess(response) {
        setLoadContent(false)
        setData({...response})
        setLoaderDash(false)
        console.log('data',{...response});
      }

      function checkError(error) {
        setLoadContent(false)
        setTimeout(() => {
          notification.error({message:error,modal:false})
        }, 600);
      }

      GetCompanyWorkplace(companyId,cnpj,workplaceId,checkSuccess,checkError)
}
