'use client';
import React, { useEffect, useState } from 'react';
import { Flex, Container, TextField, Heading, Card, Button, Text } from '@radix-ui/themes';
import { EnvelopeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {useDispatch} from 'react-redux';
import { AppDispatch } from '@/state/store';
import { login } from '@/state/features/auth-slice';


const LoginPage = () => {
  const router = useRouter();
  const dispatcher = useDispatch<AppDispatch>();
  const [credentials, setCredentials] = useState({email:"", password:""});

  const onChange=(event:any)=>{
    setCredentials({...credentials,[event.target.name]:event.target.value})
  }

  const [buttonDisabled, setButtonDisabled] = useState(true)
 
  const submitLogin = async() =>{
    try {
      const response = await axios.post('/api/users/login',credentials);
      toast.success('login Successfull');
      
      const responseData =  response.data;
      dispatcher(login({
        username: responseData.user.username,
        email: responseData.user.email,
        isVerfied: responseData.user.isVerfied,
        isAdmin: responseData.user.isAdmin,
      }));

      router.push("/");
    } catch (error:any) {
      console.log('Signup Failed '+error.message);
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    if(credentials.email.length>0 && credentials.password.length>0 ){
      setButtonDisabled(false);
    }else
    setButtonDisabled(true);
  },[credentials])
  
  return (
    <Container size="1" py="8">
      <Flex direction="column" gap="3">
        <Card>
        <Flex direction="column" gap="5">
        <Flex justify="center" width="auto">
        <Heading size="6">
          Login Page
        </Heading>
        </Flex>

        <TextField.Root>
          <TextField.Slot>
            <EnvelopeOpenIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input size="3" placeholder="Enter your email" name="email" onChange={onChange}/>
        </TextField.Root>

        <TextField.Root>
          <TextField.Slot>
            <EyeClosedIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input size="3" type="password" name="password" placeholder="Enter your password" onChange={onChange}/>
        </TextField.Root>
        </Flex>
        <Flex justify="center" py="6">
          <Button variant="solid" radius="full" color="gray" disabled={buttonDisabled} onClick={submitLogin}>Login</Button>
        </Flex>
        <Text>Don't have an account <span><Link href="/signup">Signup</Link></span></Text>
        </Card>
        
      </Flex>
    </Container>
  )
}

export default LoginPage
