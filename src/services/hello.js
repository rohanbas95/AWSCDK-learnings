
exports.main = async function(event, context){
    return {
        statusCode: 200,
        body: JSON.stringify(`hellow world from lambda! dynamo db is  ${process.env.TABLE_NAME} 
        and bucket is ${process.env.BUCKET_NAME}`)
    }
}