import { App } from "aws-cdk-lib"
import { DataStack } from "./stacks/DataStack"
import { LambdaStack } from "./stacks/LambdaStack"
import { ApiStack } from "./stacks/ApiStack"

const app = new App()
const datastack = new DataStack(app, 'DataStack')
const lambda = new LambdaStack(app, 'LambdaStack', {
    spacestable:  datastack.spacesTable,
    bucketname: datastack.bucketname
})
new ApiStack(app, 'ApiStack',{
   hellolambdaintegration: lambda.helloLambdaIntegration
})