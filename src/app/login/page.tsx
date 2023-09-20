'use client';
import React, { useState } from 'react'
import { Flex, Container, TextField, Heading, Card, Button, Text } from '@radix-ui/themes';
import { EnvelopeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({email:"", password:""});

  const onChange=(event:any)=>{
    setCredentials({...credentials,[event.target.name]:event.target.value})
  }

  const submitLogin=()=>{

  }
  
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
          <Button variant="solid" radius="full" color="gray" onClick={submitLogin}>Login</Button>
        </Flex>
        <Text>Don't have an account <span><Link href="/signup">Signup</Link></span></Text>
        </Card>
        
      </Flex>
    </Container>
  )
}

export default LoginPage
