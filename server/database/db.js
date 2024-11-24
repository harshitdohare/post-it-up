import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster23nov.7qxrz.mongodb.net/?retryWrites=true&w=majority&appName=cluster23nov`;
    
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully - Post It Up (Cluster23nov)');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;