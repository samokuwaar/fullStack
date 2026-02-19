import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

function TodoForm() {
  return (
    <div className='w-[512px]'> 
        <div className="grid gap-2 ">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            </div>
  )
}

export default TodoForm