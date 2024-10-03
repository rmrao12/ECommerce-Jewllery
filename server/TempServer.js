import express from 'express'; 
import fs from 'fs';

let value = "Ghulam Mustafa Rao";


fs.writeFile('fileName.txt',value,err =>{
    if(err)
    {
        console.log(err);
        return;
    }

    console.log("File created successfully");
});

const app = express();




const port = 4000; // Port to listen on
app.listen(port,() => {
    console.log('Server is running on port 5000');
});