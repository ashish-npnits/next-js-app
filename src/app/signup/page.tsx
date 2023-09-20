'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Axios } from 'axios';
import { Flex, Container, TextField, Heading, Card, Button, Text } from '@radix-ui/themes';
import { EnvelopeOpenIcon, PersonIcon, EyeClosedIcon } from '@radix-ui/react-icons';
const SignUp = () => {
  const [signUpData, setSignUpData] = useState({name:"",email:"", password:"",cpassword:""});

  const onChange=(event:any)=>{
    setSignUpData({...signUpData,[event.target.name]:event.target.value})
  }

  const submitSignup = () =>{
    
  }

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
          <TextField.Input size="3" name="name" placeholder="Enter your Name" onChange={onChange}/>
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
          <Button variant="solid" radius="full" color="gray" onClick={submitSignup}>Signup</Button>
        </Flex>
        <Text>Already have an account <span><Link href="/login">Login</Link></span></Text>
        </Card>
        
      </Flex>
    </Container>
  );
};

export default SignUp;
