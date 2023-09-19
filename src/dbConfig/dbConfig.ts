const mongoose = require('mongoose');

import React from 'react'

const connect = async () => {
  try {
    await  mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on('connected',()=>{
        console.log('Mongodb connected successfully');
    })
    connection.on('error',(err: string)=>{
        console.log('Mongodb connection error' +err);
    })
  } catch (error) {
    console.log('Something went wrong');
    console.log(error);
  }
}

export default connect
