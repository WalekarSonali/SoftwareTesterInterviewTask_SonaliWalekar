import supertest from 'supertest';
const request = supertest('https://x8ki-letl-twmt.n7.xano.io/api:gHPd8le5/');//base_URL
console.log(" Base_URL : ",request);
import {expect} from 'chai';


describe('Transaction Record', () => {
    //POST Request to add transaction record
    let transaction_id;
    let add_transaction_response;
    describe('POST',() => {
    it('/transaction', () => {
        const payload = {
            "coin1": "INR",
            "coin2": "USDT",
            "coin1Amount": Math.random(),
            "coin2Amount": Math.random()
            };
        return request.post('transaction').send(payload).then((res)=>{
            console.log("Request body to Add Transaction Record : ",payload);
            console.log("Response body of Add Transaction Record : ",res.body);
            transaction_id = res.body.id;
            console.log(transaction_id);
            add_transaction_response = res.body;
            // expect(payload.coin1).to.deep.include(res.body.sentCoin);
            // expect(payload.coin2).to.deep.include(res.body.receivedCoin);
            expect(payload.coin1Amount).to.be.eq(res.body.sentCoinAmount);
            expect(payload.coin2Amount).to.be.eq(res.body.receivedCoinAmount);
            console.log("==============================================");
        });

    });

});


describe('GET', () => {

    it('/transaction/{transaction_id}', () => {
        //GET Request with transaction_id received above in the POST request
        return request.get('transaction/'+transaction_id)
        .set("Content-Type","application/json")
        .set("Accept","application/json")
        .then((res)=>{
            console.log("Get Transaction Record with /transaction/transaction_id route using GET Request");
            //validating response with add_transaction response
            expect(res.body.id).to.be.eq(transaction_id);
            expect(res.body.created_at).to.be.eq(add_transaction_response.created_at);
            expect(res.body.sentCoin).to.be.eq(add_transaction_response.sentCoin);
            expect(res.body.receivedCoin).to.be.eq(add_transaction_response.receivedCoin);
            expect(res.body.sentCoinAmount).to.be.eq(add_transaction_response.sentCoinAmount);
            expect(res.body.receivedCoinAmount).to.be.eq(add_transaction_response.receivedCoinAmount);
            expect(res.body.receivedCoinMarketPrice).to.be.eq((res.body.sentCoinAmount)/(res.body.receivedCoinAmount));
            console.log(res.body);
        });
    });
});

    
});