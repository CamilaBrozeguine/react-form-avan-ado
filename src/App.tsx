
import { useForm } from 'react-hook-form';
import { useState } from 'react';

//import {useform} 
export function App() {

   const {output,setOutput} = useState('');
   const { register,handleSubmit} =useForm();
    
   function createuser(data:any){
    setOutput(JSON.stringify(data,null, 2));
   }



   //hingh-order function 
  return (
   <main className='h-screen bg-zinc-950 text-zinc-300 flex items-center justify-center'>
    <form className='flex flex-col gap-4 max-w-xs'
    onSubmit={handleSubmit(createuser)}
    >

      <div className='flex flex-col gap-1'>
      <label htmlFor="email">E-mail</label>
      <input 
      type="email" 
      id="email" 
      className='border border-b-blue-400 shadow-2xl rounded h-10'
      {...register('email')}
      />
      </div>

      <div className='flex flex-col gap-1'>
      <label htmlFor="password">Senha</label>
      <input 
      type="password" 
      id="password" 
      className='border border-b-blue-400 shadow-2xl rounded h-10'
      {...register('password')}
      />
      </div>

    <button type="submit" 
    className='bg-green-500 text-white rounded px-4 py-2 mt-4'
    >Salvar</button>
     </form>

     <pre>{output}</pre>
   </main>
  );
}

export default App;