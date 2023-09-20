'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Flex, Container, TextField, Heading, Card, Button, Text } from '@radix-ui/themes';
import { EnvelopeOpenIcon, PersonIcon, EyeClosedIcon } from '@radix-ui/react-icons';
import toast from 'react-hot-toast';
const SignUp = () => {
  const router = useRouter();
  const [signUpData, setSignUpData] = useState({username:"",email:"", password:"",cpassword:""});
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const onChange=(event:any)=>{
    setSignUpData({...signUpData,[event.target.name]:event.target.value})
  }

  const submitSignup = async() =>{
    try {
      const response = await axios.post('/api/users/signup',signUpData);
      toast.success('Signup Successfull');
      router.push("/login");
    } catch (error:any) {
      console.log('Signup Failed '+error.message);
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    if(signUpData.email.length>0 && signUpData.username.length>0 && signUpData.password.length>0 && signUpData.cpassword.length>0 && signUpData.password==signUpData.cpassword){
      setButtonDisabled(false);
    }else
    setButtonDisabled(true);
  },[signUpData])

  return (
    <Container size="1" py="8">
      <Flex direction="column" gap="3">
        <Card>
        <Flex direction="column" gap="5">
        <Flex justify="center" width="auto">
        <Heading size="6">
          Signup Page
        </Heading>
        </Flex>

        <TextField.Root>
          <TextField.Slot>
            <PersonIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input size="3" name="username" placeholder="Enter your Name" onChange={onChange}/>
        </TextField.Root>

        <TextField.Root>
          <TextField.Slot>
            <EnvelopeOpenIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input size="3" name="email" placeholder="Enter your email" onChange={onChange}/>
        </TextField.Root>

        <TextField.Root>
          <TextField.Slot>
            <EyeClosedIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input size="3" name="password" type="password" placeholder="Enter your password" onChange={onChange}/>
        </TextField.Root>

        <TextField.Root>
          <TextField.Slot>
            <EyeClosedIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input size="3" name="cpassword" type="password" placeholder="Enter your password again" onChange={onChange}/>
        </TextField.Root>

        </Flex>
        <Flex justify="center" py="6">
          <Button variant="solid" radius="full" color="gray" disabled={buttonDisabled} onClick={submitSignup}>Signup</Button>
        </Flex>
        <Text>Already have an account <span><Link href="/login">Login</Link></span></Text>
        </Card>
        
      </Flex>
    </Container>
  );
};

export default SignUp;
