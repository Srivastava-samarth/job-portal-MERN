import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import AppliedJobsTable from './AppliedJobsTable'
import UpdateProfile from './UpdateProfile'

const skills = ["C++","GO","NodeJs","ExpressJs"]

const isResume = true;
const Profile = () => {
  const [open,setOpen] = useState(false);
  return (
    <div>
      <Navbar/>
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
        <Avatar className='h-24 w-24'>
          <AvatarImage src='https://imgs.search.brave.com/dkZ18lo742IM19jY4my0sf1XytKeaf3SDRsQhH57drw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NzE1Mjg1NS92ZWN0/b3IvbG9nby13aXRo/LXRoZS1sZXR0ZXIt/Yy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9XzZuSE9ReTNn/VjE2ZENIeGpUUUhM/b25JZWdWQU9YSm43/a012ZXJHdEZ3OD0'/>
        </Avatar>
        <div>
          <h1 className='font-medium text-xl'>Full Name</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, odio. Quis consequuntur odio impedit neque beatae aliquid dicta accusamus aperiam.</p>
        </div>
        </div>
        <Button onClick={()=>setOpen(true)} className='text-right' variant='outline'><Pen/></Button>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-3 my-2'>
          <Mail/>
          <span>sam123@gmail.com</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
          <Contact/>
          <span>9456678123</span>
          </div>
        </div>
        <div className='my-5'>
          <h1>Skills</h1>
          <div className='flex items-center gap-1 my-2'>
          {
            skills.length !== 0 ? skills.map((item,index)=><Badge key={index}>{item}</Badge>) : <span>NA</span>
          }
          </div>
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <label className='text-md font-bold'>Resume</label>
          {
            isResume ? <a target='blank' href='https://www.linkedin.com/in/samarth-srivastava-21229422a/' className='text-blue-500 w-full hover:underline cursor-pointer'>Samarth Srivastava</a> : <span>NA</span>
          }
        </div>
      </div>
        <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
          <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
          <AppliedJobsTable/>
        </div>
        <UpdateProfile open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Profile