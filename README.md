# AWSCDK-learnings
AWSCDK-learnings

created three stacks 
1) for api gateway 
2) for lambda 
3) for dynamo db and s3 bucket

entry point is api gateway which hits the lambda and the lambda has a javascript files which prints out the dynamodb table name and the s3 bucket name 

and also for creating the names of dynamodb and s3 bucket used a custom methon which is in util.ts 
