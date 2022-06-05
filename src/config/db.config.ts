import  mongoose  from "mongoose";

export class MongoDBConnection {

    connect = async () => {
        const url = process.env.MONGO_CONNECTION_STRING as string;
        const connectOptions : mongoose.ConnectOptions = {
            dbName : 'meesho',
        }
        mongoose.connect(url,connectOptions);
        mongoose.connection.once("open",async () => {
            this._eventLog('Succesfully connected to database');
        });
        mongoose.connection.once("error",async () => {
            this._eventLog('Error Connecting to database');
        });
    }
    
    disconnect = async () => {
        if(!mongoose.connection){
            return;
        }
    
        mongoose.disconnect();
    
        mongoose.connection.once('close',async () => {
            this._eventLog('Database disconnected');
        });
    }
    
    async _eventLog(message: string){
        console.log(message);
    }

}

