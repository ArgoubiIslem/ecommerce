import React from 'react'

function Info() {
  return (
    <div>
      <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-black-400 text-sm flex-col md:flex-row max-w-6xl"></div>
      <div className="flex md:flex-row flex-col max-w-6xl m-auto my-10">

   <div className="md:w-1/3 p-4 flex justify-center items-center bg-[#ffffff] mx-2 rounded">
      <div className="w-16 h-16 p-2">
      <a className="block w-16 h-16 ">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://cdn.w600.comps.canstockphoto.fr/livraison-logo-informatique-illustration_csp63587720.jpg"/>
        </a>
      </div>
      <div className=" ml-5">
         <div className="text-xl  leading-8">Livraison</div>
         <div>a domicile</div>
      </div>
   </div>
   <div className="flex justify-center items-center bg-[#ffffff] mx-2 rounded">
      <div className="w-16 h-16 p-2">
     
      </div>
      <div className="ml-5">
         <div className="text-xl  leading-8"></div>
         <div></div>
      </div>
   </div>
   <div className="md:w-1/3 p-4 flex justify-center items-center bg-[#ffffff] mx-2 rounded">
      <div className="w-18 h-16 p-2">
      <a className="block w-16 h-16">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://www.alioze.com/wp-content/uploads/2017/12/retour-remboursement-e-commerce.jpg"/>
        </a>
      </div>
      <div className="ml-5">
         <div className="text-xl  leading-8">Politique retours</div>
         
      </div>
   </div>
   <div className="md:w-1/3 p-4 flex justify-center items-center bg-[#ffffff] mx-2 rounded">
      <div className="w-16 h-16 p-2">
     
      </div>
      <div className="ml-5">
         <div className="text-xl  leading-8"></div>
         <div></div>
      </div>
   </div>
   <div className="md:w-1/3 p-4 flex justify-center items-center bg-[#ffffff] mx-2 rounded">
      <div className="w-16 h-16 p-2">
      <a className="block w-16 h-16">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://mon-guide-bancaire.com/wp-content/uploads/2020/04/meilleure-carte-bancaire-pour-voyager8.png"/>
        </a>
      </div>
      <div className="ml-5">
         <div className="text-xl  leading-8">Paiement</div>
         <div>Sécurisé</div>
      </div>
   </div>
</div>
    </div>
    
  )
}

export default Info