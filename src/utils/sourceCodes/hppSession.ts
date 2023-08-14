const hppSession = 
`import express from 'express';
import HppSdk from '@hpp/javascript-sdk';

const config = {
    orgId: '<your_ord_id>',
    dbsPublicKeyPath: '<path_to_file>',
    privateKeyPath: '<path_to_file>'
};
const hppSession = new HppSdk(config);

const app = express();

app.use(express.json());

app.post('/init-payment-session', async (req, res) => {
    const { paymentInfo } = req.body;
    const { sessionId } = await hppSession.create(paymentInfo);

    res.send({
        hppSessionId: sessionId
    });
});

app.listen(4000, () => {
    console.log('Server listening at http://localhost:4000');
});`;

export default hppSession;
