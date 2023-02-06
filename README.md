# SuperTestFramework

This test framework is created as a part of assignment given by HR of KoinX.com - Software Tester Interview Task as mentioned below.![AddTransactionRecord1](https://user-images.githubusercontent.com/124510296/216885524-a6a5eaab-3b3c-4879-acea-58d6666524cd.PNG)
![AddTransactionRecord2](https://user-images.githubusercontent.com/124510296/216885528-9543e478-3d0d-4082-8e65-1c2ddabbbea5.PNG)
![AddUser1](https://user-images.githubusercontent.com/124510296/216885532-502121b1-1268-4ba4-9814-da27703a5313.PNG)
![GetTransactionIDRecord](https://user-images.githubusercontent.com/124510296/216885536-0478b7bb-5bd2-41bc-8859-e770d63ead25.PNG)
![GetUserID_1](https://user-images.githubusercontent.com/124510296/216885540-65c85901-983f-4f96-a586-a61197bc2a9c.PNG)
![id_created_at_match](https://user-images.githubusercontent.com/124510296/216885542-050c7730-94d9-4773-972e-de5aa177df67.PNG)
![random_Coin1 2Amount](https://user-images.githubusercontent.com/124510296/216885545-22ad56ba-e6c2-48d7-a362-d0e2ae4f786e.PNG)
![receivedCoinMarketPrice_verify](https://user-images.githubusercontent.com/124510296/216885555-bc26439d-9e67-48ec-a131-abf52ec082d2.PNG)

Your goal is to make requests to a REST Endpoints and test that the endpoints are
working correctly.
API Base URL: https://x8ki-letl-twmt.n7.xano.io/api:gHPd8le5
Tasks:-
Task 1: Test the /transaction `POST` route
1. Make a `POST` request to the `/transaction` route with the following body:
{
"coin1": "INR",
"coin2": "USDT",
"coin1Amount": 300,
"coin2Amount": 2
}
Note: Use random numbers for `coin1Amount` and `coin2Amount`.
2. Test that the response from this request is as follows:
{
"id": 6,
"created_at": 1675270470670,
"sentCoin": "INR",
"receivedCoin": "USDT",
"sentCoinAmount": 300,
"receivedCoinAmount": 2
}
Notes:
1. The response values you receive might be different according to the request parameters passed.
2. The “id” will always be different.
Task 2: Test the /transaction `GET` route
1. After creating a transaction, you need to make a request to the `/transaction/{id}`
route with the “id” you received above as the path parameter.
2. Test that the response is as follows:
{
"id": 6,
"created_at": 1675270470670,
"sentCoin": "INR",
"receivedCoin": "USDT",
"sentCoinAmount": 300,
"receivedCoinAmount": 2,
"receivedCoinMarketPrice": 150
}
Notes:
1. The response values you receive might be different according to the request parameters passed.
2. The “id” should be the same as the one you passed in the path parameter.
3. You should receive a new variable called `receivedCoinMarketPrice` which should be equal to
`sentCoinAmount` divided by `receivedCoinAmount`.

4. The `created_at` field should lie within a 10 second interval after the time that the API request was
made.
Please host your code on GitHub.
Notes:-
1. Think of this assignment as a production grade project. Using best practices, writing
clean code etc. will fetch you additional points.
2. We care about the usage of version control and the way you structure(and name)
your commits!
3. The preferred language is Javascript and preferred frameworks are Mocha, Chai,
and Supertest, but feel free to use a language/tool/framework of your choice in case
you’re not comfortable with the above tools.
Once you’re done with the task, please send over the GitHub to hr@koinx.com with the
subject `Software Tester Interview Task - <Your Name>`.

Some Test result screenshots added below for reference.

![AddTransactionRecord1](https://user-images.githubusercontent.com/124510296/216885622-a5cd5d1d-836e-4079-b153-d24b6cc6a831.PNG)

![AddTransactionRecord2](https://user-images.githubusercontent.com/124510296/216885764-6839a88a-1cc5-417b-bcbd-3736335b516d.PNG)

![GetTransactionIDRecord](https://user-images.githubusercontent.com/124510296/216885795-c4621b37-a33e-446d-a157-90c29d6df8bc.PNG)

![id_created_at_match](https://user-images.githubusercontent.com/124510296/216885847-2b83c306-5cd6-44ea-a33f-d66d42c03667.PNG)

![random_Coin1 2Amount](https://user-images.githubusercontent.com/124510296/216885880-39cbc71e-1a91-48c0-b5c1-e2285cefa79f.PNG)

![receivedCoinMarketPrice_verify](https://user-images.githubusercontent.com/124510296/216885906-5d4dd458-4cc7-43e2-85c3-053484a2a4a2.PNG)







