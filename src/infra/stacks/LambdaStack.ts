import {Stack, StackProps } from 'aws-cdk-lib'
import { LambdaIntegration } from 'aws-cdk-lib/aws-apigateway'
import { ITable } from 'aws-cdk-lib/aws-dynamodb'
import { Code, Function as LambdaFunction, Runtime} from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs'
import { join } from 'path'


interface LambdaStackProps extends StackProps{
    spacestable: ITable
    bucketname: string
}


export class LambdaStack extends Stack {


    public readonly helloLambdaIntegration: LambdaIntegration

    constructor(scope: Construct, id: string, props: LambdaStackProps){
        super(scope, id, props)

    const hellowlambda = new LambdaFunction(this,'hellowlambda',{
         runtime: Runtime.NODEJS_18_X,
         handler: 'hello.main',
         code: Code.fromAsset(join(__dirname,'..','..','services')),
         environment: {
            TABLE_NAME: props.spacestable.tableName,
            BUCKET_NAME: props.bucketname
         }
        })

        this.helloLambdaIntegration = new LambdaIntegration(hellowlambda)
    }

}