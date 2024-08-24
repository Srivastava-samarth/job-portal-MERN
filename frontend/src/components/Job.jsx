import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    const navigate = useNavigate();

    const daysAgoFunction = (mongoDbTime) =>{
        const createdAt = new Date(mongoDbTime);
        const currentTime = new Date();
        const timeDiff = currentTime - createdAt;
        return Math.floor(timeDiff/(1000*24*60*60));
    }
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
        <div className='flex items-center justify-between'>
        <p className='flex-sm text-gray-500'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
        <Button variant='outline' classname='rounded-full' size='icon'><Bookmark/></Button>
        </div>
        <div className='flex items-center gap-2 my-2'>
        <Button classname='p-6' variant='outline' size='icon'>
            <Avatar>
                <AvatarImage src='https://imgs.search.brave.com/dkZ18lo742IM19jY4my0sf1XytKeaf3SDRsQhH57drw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NzE1Mjg1NS92ZWN0/b3IvbG9nby13aXRo/LXRoZS1sZXR0ZXIt/Yy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9XzZuSE9ReTNn/VjE2ZENIeGpUUUhM/b25JZWdWQU9YSm43/a012ZXJHdEZ3OD0'/>
            </Avatar>
        </Button>
        <div>
            <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
            <p className='text-sm text-gray-500'>{job?.loaction}</p>
        </div>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
            <p className='text-sm text-gray-600'>{job?.description}</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{job?.salary}LPA</Badge>
        </div>
        <div className='flex items-center gap-4 mt-4'> 
            <Button onClick={()=>navigate(`/description/${job?._id}`)} variant='outline'>Details</Button>
            <Button className='bg-[#7209b7]'>Save for later</Button>
        </div>
    </div>
  )
}

export default Job