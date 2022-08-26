require('dotenv').config();
const auth = require('basic-auth');

const mwBasicAuth = async (req: any, res: any, next: any) => {
    console.log('Middlewate: Basic Auth')

    const user = await auth(req);
    const username = 'user'
    const password = 'fMm!4BEF4BfDJD@k'

    if (user.name == username && user.pass == password) {
        console.log("Basic auth: Success!")
        next()
    } else {
        console.log("Basic auth: Failure!")
        res.statusCode = 401
        res.end("Access denied!")
    }

    
}

export default mwBasicAuth