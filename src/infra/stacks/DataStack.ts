import {Stack, StackProps } from 'aws-cdk-lib'
import { AttributeType, ITable, Table as dynamodb } from 'aws-cdk-lib/aws-dynamodb'
import { Construct } from 'constructs'
import { getSuffixFromStack } from '../utils'
import { Bucket } from 'aws-cdk-lib/aws-s3'

export class DataStack extends Stack {

    public readonly spacesTable : ITable
    public readonly bucketname : string

    constructor(scope: Construct, id: string, props?: StackProps){
        super(scope, id, props)

        const suffix = getSuffixFromStack(this)

      this.spacesTable =   new dynamodb(this,'spacestable',{
            partitionKey :{
                name:'id',
                type: AttributeType.STRING
            },
            tableName: `SpaceStack-${suffix}`
        })


        const mybucket =  new Bucket(this, 'photosbucket23',{
            bucketName:`photosbucket-${suffix}`
        });
        this.bucketname = mybucket.bucketName

    }

}