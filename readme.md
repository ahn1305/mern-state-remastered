# For running this project I'm using 

**Node version** - v18.17.1

**Npm version** - 9.6.7



# Client and API running:

**Pre-Setup**

npm install 

npm run dev in both API and Client folder

mongosh - to create mongo db env

1. create a firebase project
2. in then app
3. create firebase storage for uploads



4. then for mongo db - https://www.linode.com/docs/guides/install-mongodb-on-ubuntu-20-04/

   **Note: Mongo error fix :** https://stackoverflow.com/questions/50375979/getting-error-while-installing-mongodb-in-linux

    ![image-20240607234754242](/home/ashwin/.config/Typora/typora-user-images/image-20240607234754242.png)

   

   

5. create .env file and add 2 variables:

   ```
   MONGO_URI=mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.6
   JWT_SECRET='sercet123'
   secretOrPrivateKey="123"
   ```

   

6. "" + process.env.JWT_SECRET); in /mern-estate/api/controllers/auth.controller.js