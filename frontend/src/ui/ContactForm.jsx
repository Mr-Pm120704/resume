import React,{useState} from 'react'; import axios from 'axios';
export default function ContactForm(){
    const [form,setForm]=useState({firstName:'',lastName:'',email:'',country:'India',phone:'',budget:'',message:''}); 
    const [status,setStatus]=useState(null);
    const handle=e=>setForm({...form,[e.target.name]:e.target.value});
    const submit=async e=>{ e.preventDefault(); try{ await axios.post('/api/leads',form); setStatus('ok'); setForm({firstName:'',lastName:'',email:'',country:'India',phone:'',budget:'',message:''}); }catch(e){ setStatus('err'); } };
    return (
    <form className='space-y-4' onSubmit={submit}>
        <div className='flex gap-2'>
            <input name='firstName' value={form.firstName} onChange={handle} placeholder='First name*' className='flex-1 p-3 rounded border border-white/10 bg-white/10' required/>
            <input name='lastName' value={form.lastName} onChange={handle} placeholder='Last name*' className='flex-1 p-3 rounded border border-white/10 bg-white/10'/>
        </div>
        <input name='email' value={form.email} onChange={handle} placeholder='Business Email*' className='w-full p-3 rounded border border-white/10 bg-white/10' required/>
        <div className='flex gap-2'>
            <select name='country' value={form.country} onChange={handle} className='p-3 rounded border border-white/10 bg-white/10'>
            <option>India (भारत)</option>
            <option>United States</option>
            </select>
            <input name='phone' value={form.phone} onChange={handle} placeholder='+91' className='flex-1 p-3 rounded border border-white/10 bg-white/10'/>
        </div>
        <select name='budget' value={form.budget} onChange={handle} className='w-full p-3 rounded border border-white/10 bg-white/10'>
        <option value=''>Estimated project budget*</option>
        <option value='$0-1k'>$0-1k</option>
        </select>
        <textarea name='message' value={form.message} onChange={handle} placeholder='Message (optional)' className='w-full p-3 rounded border border-white/10 bg-white/10'/> 
        <button className='px-6 py-3 rounded bg-gradient-to-r from-blue-500 to-cyan-400 font-semibold'>Continue</button>
        {status==='ok' && <div className='text-green-400'>Thanks</div>}{status==='err' && <div className='text-red-400'>Error</div>}
    </form>
    );
}
