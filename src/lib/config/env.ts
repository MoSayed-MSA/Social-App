import 'dotenv/config';

export const env = {
    db :{
        uri : process.env.DB_URI as string
    }
}