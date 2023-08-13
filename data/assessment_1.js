export const assessment_v2_test_1 = {
    "id": "bb347f41-01d8-4ce9-8329-fd2be67f0ce6",
    "title": "AWS Certified Cloud Practitioner - Practice Exam (CLF-C01) - 1",
    "coverImageUrl": "https://acloudguru-content-assets-production.s3-accelerate.amazonaws.com/1647617146604-NoID_Quiz-Exam_Badge_072.png",
    "assessmentEndDate": "2023-08-09T12:37:26.369Z",
    "gradedDate": "2023-08-09T11:15:25.375Z",
    "createdDate": "2023-08-09T11:07:26.369Z",
    "numberOfLabs": 0,
    "grade": {
        "score": 0,
        "questionsCorrect": 0,
        "totalQuestions": 65,
        "totalObjectives": 0,
        "passedObjectives": 0,
        "didPass": false,
        "__typename": "AssessmentsAttemptGrade"
    },
    "domainGradeBreakdown": [
        {
            "__typename": "Assessments_QuestionDomainGrade",
            "domainName": "Cloud Concepts ",
            "domainDescription": "This represents exam questions for the Cloud Computing section.",
            "score": 0,
            "order": 0,
            "weight": 26,
            "questionPoolId": "a44ae832-61cd-47a0-9262-a91782c522bc"
        },
        {
            "__typename": "Assessments_QuestionDomainGrade",
            "domainName": "Security and Compliance",
            "domainDescription": "This represents exam questions for the  Security & Compliance section.",
            "score": 0,
            "order": 1,
            "weight": 25,
            "questionPoolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135"
        },
        {
            "__typename": "Assessments_QuestionDomainGrade",
            "domainName": "Technology",
            "domainDescription": "This represents exam questions for the Technology section.",
            "score": 0,
            "order": 2,
            "weight": 33,
            "questionPoolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71"
        },
        {
            "__typename": "Assessments_QuestionDomainGrade",
            "domainName": "Billing & Pricing",
            "domainDescription": "This represents exam questions for the Billing & Pricing section.",
            "score": 0,
            "order": 3,
            "weight": 16,
            "questionPoolId": "99a9f81f-17a3-497a-9d8d-dcaa0c5b4951"
        }
    ],
    "questions": [
        {
            "id": "2a336ed6-3d0e-4430-bdb5-71cb2358dd81",
            "questionId": "c411b0ae-3a2c-455f-a7b7-e605689b6c67",
            "questionText": "You're hosting a web application on EC2. After a few days of production usage, you notice the traffic to the web application far exceeds what was expected. You've decided to move to a larger instance type. What AWS principle does this represent?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 0,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "4d7f133b-951b-4aab-9b80-f246ee61929a",
                    "text": "Durability",
                    "correctAnswer": false,
                    "explanation": "Durability refers to the level to which data can be protected. The high durability of S3 refers to its ability to retain data safely.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "5e85ad97-c83b-4810-be45-6ad3226bafcb",
                    "text": "Horizontal scaling",
                    "correctAnswer": false,
                    "explanation": "Horizontal scaling is the act of changing the number of nodes in a computing system without changing the size of any individual node. So, with horizontal scaling, we would add instances, not increase the size of an instance.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "fc6a9ecc-ab32-473b-b7da-d61c3a32085e",
                    "text": "Vertical scaling",
                    "correctAnswer": true,
                    "explanation": "Vertical scaling is increasing the size and computing power of a single instance or node without increasing the number of nodes or instances.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "3ff04baf-5607-4f42-b480-8a2807e707c7",
                    "text": "Elasticity",
                    "correctAnswer": false,
                    "explanation": "Elasticity is the ability to acquire resources as you need them and release resources when you no longer need them. Think of Auto Scaling and adding and removing instances as needed.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "676fd0c1-9b96-4234-a9aa-8e18f342a5b5",
            "questionId": "72984866-8960-4cc8-a9a9-85337762a026",
            "questionText": "How can a customer on the Developer Support plan open a system impaired support case?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 1,
            "poolId": "99a9f81f-17a3-497a-9d8d-dcaa0c5b4951",
            "choices": [
                {
                    "id": "f8e80942-8843-4cbb-b454-a3e13e82b56e",
                    "text": "Contact the Technical Account Manager (TAM) via chat.",
                    "correctAnswer": false,
                    "explanation": "Customers on the Developer Support plan do *not* have access to a Technical Account Manager (TAM) or chat support.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "5b3dd18e-97c9-42a7-a729-8f01d968144d",
                    "text": "Contact the Support Concierge team via phone.",
                    "correctAnswer": false,
                    "explanation": "Customers on the Developer Support plan do *not* have access to the Support Concierge team or phone support.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "cf1a5d48-f588-4036-b25d-3efa3e925ab4",
                    "text": "Open a technical support case via chat.",
                    "correctAnswer": false,
                    "explanation": "Customers on the Developer Support plan do *not* have access to the technical support via chat.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "10396fcd-3ba1-4e55-b8b4-a6e4c25f369c",
                    "text": "Open a technical support case via email.",
                    "correctAnswer": true,
                    "explanation": "Customers on the Developer Support plan can submit support cases for account and billing questions, service limit increases, and technical support cases via email only.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "ca159b04-a2c3-44d4-8189-e467072ba054",
            "questionId": "42f1827b-2ba9-4ee8-9b64-77e77caa833e",
            "questionText": "Configuring user permissions so that users can access only the resources they need to do their job follows what principle?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 2,
            "poolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135",
            "choices": [
                {
                    "id": "40c3dcba-21a6-4434-9f2e-328b12bc0f54",
                    "text": "IAM principle",
                    "correctAnswer": false,
                    "explanation": "There is no such thing as an IAM principle.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "2b3a4b10-086a-4ee7-8455-b3fd3590e726",
                    "text": "Principle of minimum permissions",
                    "correctAnswer": false,
                    "explanation": "This is not an actual permission name.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "e23adfd6-97c6-4772-8711-885851bff476",
                    "text": "Principle of least privilege",
                    "correctAnswer": true,
                    "explanation": "The principle of least privilege involves giving a user the minimum access required to get the job done.\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "002a816b-af3e-4209-9b08-19417e51d444",
                    "text": "Principle of organizations",
                    "correctAnswer": false,
                    "explanation": "There is no such thing as the principle of organizations.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "6a9dccfa-0657-4c57-a5be-f7c228914b0d",
            "questionId": "11328c4b-8861-4971-b44c-22e8b0ab59ea",
            "questionText": "What is a geographical area of the world that is a collection of logically grouped data centers?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 3,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "8f1f1d9b-1530-4b8d-ab6f-afded015eb48",
                    "text": "Availability Zone (AZ)",
                    "correctAnswer": false,
                    "explanation": "Availability Zones (AZs) consist of 1 or more physically separated data centers.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "c699821b-86cc-4cfe-9902-7c467a0e7e59",
                    "text": "Edge location",
                    "correctAnswer": false,
                    "explanation": "Edge locations cache content for fast delivery to your users.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "bf174b3b-60d9-4eaf-b258-1c71b91888e8",
                    "text": "Region",
                    "correctAnswer": true,
                    "explanation": "A Region is a geographical area of the world that is a collection of data centers logically grouped into Availability Zones. \n\n(https://aws.amazon.com/about-aws/global-infrastructure/regions_az/?p=ngi&loc=2#Regions)",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "dacecac1-ff39-4002-aa81-bc25d0c86458",
                    "text": "Data center",
                    "correctAnswer": false,
                    "explanation": "Data centers are grouped in Availability Zones.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "bd147140-a303-4b81-a919-60e1b848a93b",
            "questionId": "caa0a54e-38f0-41a4-a4f0-28e2cc9e468a",
            "questionText": "A solutions architect wants to design an application architecture that reduces the risk of cascading failures between components. Which design principles should be considered when planning the cloud architecture?",
            "type": "multi-answer",
            "possibleCorrect": 2,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 4,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "74dbf885-a618-4634-9485-79a5fbaf26b5",
                    "text": "Utilize loosely coupled components",
                    "correctAnswer": true,
                    "explanation": "Loosely coupled components are connected but not dependent on each other. Loose coupling reduces the risk of cascading failures and can be achieved through asynchronous integration.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "c49cc8ce-ff3a-4492-8743-cdfeffe76a3a",
                    "text": "Design the architecture to reduce inter-dependencies",
                    "correctAnswer": true,
                    "explanation": "Architectures should be designed in a way that reduces inter-dependencies and the risk of cascading failures between components.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "9f4b207d-d8b0-40ba-8926-4cfb2b10d9ee",
                    "text": "Utilize tightly coupled components",
                    "correctAnswer": false,
                    "explanation": "Tightly coupled components are highly dependent on each other. This design increases the risk of cascading failures between components.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "5fc62073-5722-4852-86bd-b99b084e506a",
                    "text": "Build monolithic systems",
                    "correctAnswer": false,
                    "explanation": "Monolithic systems inherently use tightly coupled components that are highly dependent on each other. This design increases the risk of cascading failures between components.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "c2fb2f40-c94c-4019-828d-64892f963d26",
                    "text": "Design the architecture to leverage inter-dependencies",
                    "correctAnswer": false,
                    "explanation": "Architectures should be designed in a way that eliminates the need for inter-dependencies, which decreases the risk of cascading failures between components.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "c2c5ff2c-f2ae-4f21-a4f0-4871d87353df",
            "questionId": "36874d24-1930-4bb5-9d73-4182b93d6849",
            "questionText": "A company would like to build an application that supports multiple languages. Which machine learning service allows the company to add localization to their application?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 5,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "d2521c80-dbd4-4cb7-ad20-36598fce4db2",
                    "text": "Translate",
                    "correctAnswer": true,
                    "explanation": "Translate provides language translation.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "05b69c44-2c55-4157-8827-4db9d1fc8e67",
                    "text": "Rekognition",
                    "correctAnswer": false,
                    "explanation": "Rekognition allows you to automate your image and video analysis.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "5893ba47-9191-4c09-8a9e-8276344cd9d6",
                    "text": "SageMaker",
                    "correctAnswer": false,
                    "explanation": "SageMaker helps you build, train, and deploy machine learning models quickly.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "b6bfd6c4-5258-497a-92e2-db0fb1ec8da8",
                    "text": "Polly",
                    "correctAnswer": false,
                    "explanation": "Polly turns text into speech.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "4e319bb6-166c-450b-ab81-3cec4869a7b7",
            "questionId": "2052f60c-9f41-4e2a-9bdb-3d3adfba99a0",
            "questionText": "Which of the following is an AWS Well-Architected Framework design principle related to operational excellence?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 6,
            "poolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135",
            "choices": [
                {
                    "id": "418ec66a-27bf-4cdc-9b1e-e3f674959f2f",
                    "text": "Assign only the least privileges required.",
                    "correctAnswer": false,
                    "explanation": "This design principle is part of the Security pillar.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "53328335-5a2d-485a-874f-7adc8ffdff9a",
                    "text": "Scale horizontally for resilience.",
                    "correctAnswer": false,
                    "explanation": "This design principle is part of the Reliability pillar.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "aca6639c-7462-4848-baa6-6430857f6d83",
                    "text": "Use serverless architectures first.",
                    "correctAnswer": false,
                    "explanation": "This design principle is part of the Performance Efficiency pillar.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "26ca2017-b9b0-4a3a-b4ff-72ff34f0b46a",
                    "text": "Deploy smaller, reversible changes.",
                    "correctAnswer": true,
                    "explanation": "This is a design principle related to operational excellence. Smaller changes can easily be reverted, if necessary.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "2b88b827-0c73-48e1-8079-79f6813896e7",
            "questionId": "372d6af0-4e76-4874-adf9-b05dde794141",
            "questionText": "A large company is using multiple AWS accounts and would like to benefit from available volume discounts in AWS. Which AWS feature will enable the company to get volume discounts?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 7,
            "poolId": "99a9f81f-17a3-497a-9d8d-dcaa0c5b4951",
            "choices": [
                {
                    "id": "71b0fd5f-ac52-4e6e-9f95-17a95b9bbd1d",
                    "text": "Use AWS Organizations and its consolidated billing feature to consolidate billing and payment for multiple AWS accounts.",
                    "correctAnswer": true,
                    "explanation": "Consolidated billing has the benefit of combining usage across all accounts in the organization to share the volume pricing discounts, Reserved Instance discounts, and Savings Plans. This can result in a lower charge for your project, department, or company than with individual standalone accounts.\nhttps://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "17719e8b-9e51-414b-aff2-79dbb79d9a39",
                    "text": "Contact AWS to request volume discounts.",
                    "correctAnswer": false,
                    "explanation": "You can contact AWS to request an increase in service limits, but this is not associated with volume discounts.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "121ad200-dadc-4797-a6ea-698567ea94c5",
                    "text": "Use free tier as much as possible.",
                    "correctAnswer": false,
                    "explanation": "Benefits can be gained from using the AWS free tier, but it has nothing to do with volume discounts.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "8b4cc3d0-41c2-475e-8155-ada63e84f264",
                    "text": "Upgrade to an Enterprise Support plan.",
                    "correctAnswer": false,
                    "explanation": "This relates to the depth of support you receive from AWS but has nothing to do with volume discounts.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "8e914ef3-7f9e-4fc4-a93b-b02866894d93",
            "questionId": "2ab79eb5-47b7-45e2-a736-9137c0553b87",
            "questionText": "A customer set up an Amazon S3 bucket to accept downloads from their mobile application users. Due to data privacy requirements, the customer needs to automatically and continually scan S3 for the users' addresses. Which service can do this?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 8,
            "poolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135",
            "choices": [
                {
                    "id": "cc8b1466-46ec-4a5f-9277-88bca68e7a5c",
                    "text": "GuardDuty",
                    "correctAnswer": false,
                    "explanation": "While GuardDuty has built-in detection for Amazon S3, it only uncovers unauthorized behavior, not personally identifiable information (PII).",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "d5ce2c1c-ebe9-44f6-821c-7b4e2a4490c8",
                    "text": "Athena",
                    "correctAnswer": false,
                    "explanation": "While Athena is a query service for S3 that allows the use of standard SQL, Athena does not automatically and continually query S3 for sensitive data.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "c3a3e869-b5c8-4a57-92f6-d843980f2338",
                    "text": "Macie",
                    "correctAnswer": true,
                    "explanation": "Macie uses machine learning to discover sensitive data stored on Amazon S3. Macie automatically detects a large and growing list of sensitive data types, including personally identifiable information (PII) such as names, addresses, and credit card numbers.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "e32cb5f2-4a5b-4630-a949-5fa7473dd815",
                    "text": "Inspector",
                    "correctAnswer": false,
                    "explanation": "Inspector works with EC2 instances to uncover and report vulnerabilities.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "f3ff3b5d-21a6-4055-a050-e90952266651",
            "questionId": "c18dffee-33dc-455b-8b93-f8a801ca411b",
            "questionText": "A large manufacturing company would like to provide real-time feedback to machine operators regarding optimum machine speeds enabling less experienced operators to detect breaks earlier and maintain quality.  Which service will allow the company to train and deploy a machine learning model that can detect machine issues early?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 9,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "8cf16aff-1269-4686-93e5-65b46aac00c3",
                    "text": "Polly",
                    "correctAnswer": false,
                    "explanation": "Polly turns text into speech.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "d06f9533-ca47-4a8d-96a1-320663d9b4a6",
                    "text": "Translate",
                    "correctAnswer": false,
                    "explanation": "Translate provides language translation.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "ea6486ea-6f5b-49fc-bfa8-6f3a50eb89f8",
                    "text": "SageMaker",
                    "correctAnswer": true,
                    "explanation": "SageMaker helps you build, train, and deploy machine learning models quickly.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "43f50b1e-1e71-4770-aa31-6cbc1998be6b",
                    "text": "Lex",
                    "correctAnswer": false,
                    "explanation": "Lex helps you build conversational interfaces like chatbots.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "0159c4af-0df9-418d-a84d-e73138d0a317",
            "questionId": "ddc47722-6ec6-45bd-b0c2-d1595e374696",
            "questionText": "A customer has created an Administrators group in IAM containing 5 users. What does the customer attach to the group to ensure all the users have the needed administrative access?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 10,
            "poolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135",
            "choices": [
                {
                    "id": "65902fe9-85a8-4a12-9a31-e27d83d4f59b",
                    "text": "IAM policy",
                    "correctAnswer": true,
                    "explanation": "Policies can be attached to a group to ensure all users in the group have the same access. AWS even has a managed policy, Administrator Access, you can use.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "f2eba2f6-7c63-4dbc-98fd-148bd1ed4e45",
                    "text": "Service control policies (SCPs)",
                    "correctAnswer": false,
                    "explanation": "SCPs use the\\_AWS Identity and Access Management\\_(IAM) policy language; however, they do not grant permissions — only restrict them.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "a4a63798-13f6-496c-ade1-805a4d31a358",
                    "text": "IAM service role",
                    "correctAnswer": false,
                    "explanation": "An IAM service role is a role that an AWS service assumes to perform actions. Roles are not associated with a specific user or group.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "7eda8b63-45d3-4f91-aa35-5964777eefef",
                    "text": "IAM role",
                    "correctAnswer": false,
                    "explanation": "IAM roles are not associated with a specific user or group. Roles are meant to be assumed by anyone who needs it for a temporary period of time.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "3fd2a5a8-246a-4cea-a6d0-c9d89a58e019",
            "questionId": "929530b4-5761-4494-b3d5-7ab047ada9f5",
            "questionText": "Your company would like to begin using Auto Scaling to add servers when CPU utilization reaches a certain threshold (e.g., 70%). Which service can you use to trigger actions when CPU utilization crosses the threshold?\n",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 11,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "42b38a9a-9be6-46a4-b3b8-d1a358451481",
                    "text": "Simple Notification Service",
                    "correctAnswer": false,
                    "explanation": "Simple Notification Service can be used with CloudWatch to notify team members when a CloudWatch event or alarm is triggered, but SNS is not monitoring resource utilization.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "41e2e2ea-54ea-445e-a46f-e5d60aed5a54",
                    "text": "Elastic Load Balancing",
                    "correctAnswer": false,
                    "explanation": "Elastic load balancers are used to balance traffic between EC2 instances, typically in an Auto Scaling group.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "5f6e1130-6fc1-47c4-95f4-f12e356668d3",
                    "text": "EC2 logs",
                    "correctAnswer": false,
                    "explanation": "Log files on EC2 provide information about what has been done on the EC2 instance.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "afe8716b-8fd6-4a68-8a7a-979d8e500d5a",
                    "text": "CloudWatch Alarms",
                    "correctAnswer": true,
                    "explanation": "A CloudWatch alarm can be set up to monitor CPU utilization and trigger further action. Further action could be an Auto Scaling group adding another EC2 instance and/or using SNS to notify team members of the occurrence.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "687b921f-037b-444f-9b55-5a95bba11db6",
            "questionId": "8154fb6f-9af5-4b25-8860-c89f16fdf899",
            "questionText": "A startup is developing a new application. They don't know how to anticipate the usage or workload demands for the application. Which benefit of cloud computing will allow the startup to automatically adjust compute capacity based on demand?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 12,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "abc93e25-7d13-4d1a-85a5-31868d420782",
                    "text": "Elasticity",
                    "correctAnswer": true,
                    "explanation": "With elasticity, the startup doesn't have to plan ahead of time how much capacity they'll need. Elasticity allows them to match the supply of resources with changing workload demands.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "bc6ac7c7-5cf4-47f7-aa73-5401de2f7238",
                    "text": "Agility",
                    "correctAnswer": false,
                    "explanation": "The cloud gives you increased agility. All the services you have access to help you innovate faster, giving you speed to market.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "2282028b-1d51-4c42-9236-8fc8fcc86300",
                    "text": "High availability",
                    "correctAnswer": false,
                    "explanation": "Highly available systems are designed to operate continuously without failure for a long time. These systems avoid loss of service by reducing or managing failures.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "df9147e8-e489-4446-9378-910163eea142",
                    "text": "Durability",
                    "correctAnswer": false,
                    "explanation": "Durability is all about long-term data protection. This means your data will remain intact without corruption.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "778002f9-c4e4-4b05-ad13-7d114035909b",
            "questionId": "2b5ee04e-ebb3-40c5-b287-15335a8f1ea3",
            "questionText": "A customer wants access to the full set of Trusted Advisor checks. What's the minimum support plan they need to have access to?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 13,
            "poolId": "99a9f81f-17a3-497a-9d8d-dcaa0c5b4951",
            "choices": [
                {
                    "id": "2e69e590-7c4c-4b6d-895c-1ce2edf43449",
                    "text": "Business Support",
                    "correctAnswer": true,
                    "explanation": "Business Support is the minimum plan that provides access to the full set of Trusted Advisor checks.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "0d9230d7-ea07-4bf1-b78e-974f273f0733",
                    "text": "Developer Support",
                    "correctAnswer": false,
                    "explanation": "Developer Support doesn't provide access to the full set of Trusted Advisor checks.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "749e26bf-08cd-450c-97c5-b209ab5a058c",
                    "text": "Enterprise Support",
                    "correctAnswer": false,
                    "explanation": "Enterprise Support provides access to the full set of Trusted Advisor checks, but it is not the minimum plan required.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "1a18c8df-6a6b-43c8-977e-cb04e96eb974",
                    "text": "Basic Support",
                    "correctAnswer": false,
                    "explanation": "Basic Support doesn't provide access to the full set of Trusted Advisor checks.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "26f0527a-5990-4f8c-b972-0237bfd610f1",
            "questionId": "7b6a5267-5340-453a-9111-74a45fb384e5",
            "questionText": "How can Auto Scaling help your resources handle changes on demand?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 14,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "1d1c98e1-d315-4755-be79-1edb32219959",
                    "text": "By adding or removing storage based on conditions you specify",
                    "correctAnswer": false,
                    "explanation": "With EC2, Auto Scaling can add or remove instances.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "bcec7a20-f4d7-4f3b-bb31-7d1789ed5254",
                    "text": "By adding or removing EC2 instances from your EC2 fleet based on conditions you specify",
                    "correctAnswer": true,
                    "explanation": "Auto Scaling allows you to automatically add or remove EC2 instances based on conditions you specify - these can include such things as at a specific time, or depending on how busy your application is. Auto Scaling cannot change the size of existing instances, nor can it add or change storage on an instance.\nhttps://aws.amazon.com/autoscaling/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "913044b5-b357-4f9d-b3c2-542fdadfd874",
                    "text": "By increasing or decreasing the size of your storage based on conditions you specify",
                    "correctAnswer": false,
                    "explanation": "With EC2, Auto Scaling can add or remove instances.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "ad8bdf63-884c-4389-98f7-7cdc7fe3fe7e",
                    "text": "By increasing or decreasing the size of your EC2 instances based on conditions you specify",
                    "correctAnswer": false,
                    "explanation": "Auto Scaling adds or removes instances — it does not change the sizing of instances.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "bf0667a0-4c72-4059-9e3f-b3edccff8064",
            "questionId": "bb79a927-fb1c-4c3b-8313-afd70dbba435",
            "questionText": "Under the AWS shared responsibility model, who is responsible for the configuration of infrastructure devices?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 15,
            "poolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135",
            "choices": [
                {
                    "id": "dbd953cb-be69-4589-a117-b64438485d5f",
                    "text": "The customer is responsible for the configuration of infrastructure devices.",
                    "correctAnswer": false,
                    "explanation": "While configuration management is a shared responsibility between the customer and AWS, AWS is responsible for configuration of infrastructure devices.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "1aa17fbe-01e3-4b5c-8a77-b6f2bb22e165",
                    "text": "The responsibility to configure infrastructure devices is shared between the customer and AWS.",
                    "correctAnswer": false,
                    "explanation": "While configuration management is a shared responsibility between the customer and AWS, AWS is responsible for the configuration of infrastructure devices.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "f2a54abe-44cd-423e-ab5b-0f4399dc4a97",
                    "text": "The responsibility to configure infrastructure devices is not part of the AWS shared responsibility model.",
                    "correctAnswer": false,
                    "explanation": "Configuration management is part of the shared responsibility model, and it is shared between the customer and AWS. AWS is responsible for the configuration of infrastructure devices.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "04c88efa-4852-410c-8d45-bbe06c13b125",
                    "text": "AWS is responsible for the configuration of infrastructure devices.",
                    "correctAnswer": true,
                    "explanation": "AWS maintains the configuration of its infrastructure devices. Don't forget AWS is responsible for its global infrastructure elements: Regions, edge locations, and Availability Zones.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "50f2a9b8-7269-4d38-83d0-7b4fd5dad8c3",
            "questionId": "8a3f85df-1d32-4d9b-9e36-9df723ac8ab4",
            "questionText": "A DevOps engineer is planning for the deployment of an application that can't be impacted if an entire geographic location is affected by a disaster. How can the engineer deploy this application?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 16,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "cdd95a53-3d18-4587-9616-3e2801ddc919",
                    "text": "Place a load balancer in front of the application.",
                    "correctAnswer": false,
                    "explanation": "A load balancer automatically distributes incoming traffic across multiple EC2 instances.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "77e78c06-f868-4127-a919-9d76bded396c",
                    "text": "Deploy the application to multiple VPCs.",
                    "correctAnswer": false,
                    "explanation": "VPCs are associated to a single Region. You cannot span a VPC across Regions, nor can you peer with a VPC in another Region.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "9df849d2-e62d-4ff3-acb3-3f7e666e67d2",
                    "text": "Deploy the application to multiple Regions.",
                    "correctAnswer": true,
                    "explanation": "AWS logically groups its Regions into geographic locations. Each Region is spread out and fully independent and isolated from other Regions. If there's a flood, tsunami or earthquake in 1 Region, the other Regions will not be impacted. Because of this, it makes sense to deploy your application to multiple Regions.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "55842def-8019-49cf-a7ed-d20299bf2874",
                    "text": "Deploy the application to multiple subnets.",
                    "correctAnswer": false,
                    "explanation": "Subnets allow you to segment the network inside your VPC. VPCs are associated with a single Region. You cannot span a VPC across Regions, nor can you peer with a VPC in another Region.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "224c3dc6-47cb-49b7-b4b4-f0901abafab0",
            "questionId": "b6a42213-4393-431f-867e-c2f9f89b81da",
            "questionText": "You have upgraded your AWS Support plan to the Business Support level. What is true of the Business Support plan?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 17,
            "poolId": "99a9f81f-17a3-497a-9d8d-dcaa0c5b4951",
            "choices": [
                {
                    "id": "788349df-2b07-42f3-8eb2-65acbc8f421d",
                    "text": "< 15 minutes response time support when your production system goes down.",
                    "correctAnswer": false,
                    "explanation": "The Business level support plan does not provide this level of service.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "27ed21fc-918e-405b-adf0-fcf4b4388b06",
                    "text": "< 15 minutes response time support if your business-critical system goes down.",
                    "correctAnswer": false,
                    "explanation": "This level of support is only available in the Enterprise Support plan.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "f227f755-9341-4fc7-b632-2f11f55f23f8",
                    "text": "< 1 hour response time support when your production system goes down.",
                    "correctAnswer": true,
                    "explanation": "The Business level support plan provides 1 hour or less response time support for production-level failures.\nhttps://aws.amazon.com/premiumsupport/plans/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "f4aa549e-7173-4285-9300-d3f59fe085ac",
                    "text": "< 24 hours response time support when your production system goes down.",
                    "correctAnswer": false,
                    "explanation": "The Business level support plan will entitle you to a much faster turnaround time on production system failures.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "ddad49e8-b4db-45a5-baa9-e0c9ccec8810",
            "questionId": "df5090ed-043a-43b6-8667-99b7dc707020",
            "questionText": "When monitoring the health of their application, a company notices one of their EC2 instances seems to handle a lot more traffic than the other instances. How can the company evenly distribute the traffic across all of its servers so that one server is not overwhelmed with requests?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 18,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "a54b481c-72e8-4c7c-99f2-3fcd210ca3fa",
                    "text": "Server Migration System (SMS)",
                    "correctAnswer": false,
                    "explanation": "SMS allows you to migrate on-premises servers to AWS.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "826c51d4-ddf7-4ae1-b2a1-34962ab8ce03",
                    "text": "Elastic Load Balancing",
                    "correctAnswer": true,
                    "explanation": "The company can utilize Elastic Load Balancing to evenly distribute incoming traffic across all their EC2 instances.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "38772c40-d893-47f3-b6c6-245a2723702d",
                    "text": "Auto Scaling",
                    "correctAnswer": false,
                    "explanation": "Auto Scaling adds or removes EC2 instances based on demand.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "3c5f3274-f038-459f-808f-32911fb37ff3",
                    "text": "Simple Notification Service (SNS)",
                    "correctAnswer": false,
                    "explanation": "SNS allows you to send emails and text messages from your applications.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "1a554f1c-2b30-4a47-a689-f88c8fe62567",
            "questionId": "9ff24c2c-2ecf-4eb1-9f2b-4ba223fb06b8",
            "questionText": "A company has designed a hybrid architecture and needs to connect its on-premises database to an application running on an EC2 instance in the AWS cloud using a fast, private, and secure manner. Which method allows the company to securely connect on-premises to the cloud?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 19,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "e24e66dd-2025-4deb-b3f2-24a7daf17164",
                    "text": "VPN tunnel using AWS VPN",
                    "correctAnswer": false,
                    "explanation": "While a VPN supports a hybrid architecture, it utilizes the public internet, which can have unpredictable performance. Although data is encrypted, there can still be security concerns as well.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "2ea9c2a5-edd4-4d2a-9185-ea327d57a89a",
                    "text": "Direct Connect",
                    "correctAnswer": true,
                    "explanation": "Direct Connect is a private (bypasses the public internet), dedicated physical network connection from your on-premises data center to AWS. Since the connection is private, it is extremely fast.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "40104c41-3c5b-420c-8619-05ea7229e477",
                    "text": "Public internet",
                    "correctAnswer": false,
                    "explanation": "The public internet has unpredictable performance and security concerns.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "93c54bee-168a-41ae-8355-8b790c035d28",
                    "text": "VPC peering",
                    "correctAnswer": false,
                    "explanation": "VPC peering allows you to connect 2 VPCs together. Peering facilitates the transfer of data in a secure manner.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "3da67941-aed5-421e-a416-08c5aad82509",
            "questionId": "41e406f6-1d90-4ad4-b22f-8a44bb13bdbd",
            "questionText": "A company would like someone to help them coordinate access to AWS subject matter experts when they need help. Which support plan do they need to have?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 20,
            "poolId": "99a9f81f-17a3-497a-9d8d-dcaa0c5b4951",
            "choices": [
                {
                    "id": "bc26ea63-1125-4869-800b-05a6d4ae988f",
                    "text": "Developer Support",
                    "correctAnswer": false,
                    "explanation": "Developer Support does *not* provide access to a Technical Account Manager (TAM) who helps coordinate access to subject matter experts among other things.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "88ba220d-225d-4b9a-b49c-b06fb89f19ab",
                    "text": "Basic Support",
                    "correctAnswer": false,
                    "explanation": "Basic Support does *not* provide access to a Technical Account Manager (TAM) who helps coordinate access to subject matter experts among other things.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "068a2f3c-b821-4389-82c6-222f2cdabd43",
                    "text": "Enterprise",
                    "correctAnswer": true,
                    "explanation": "Enterprise Support provides access to a Technical Account Manager (TAM) who helps coordinate access to subject matter experts among other things.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "23886532-1dae-42d6-95dd-027c3cd044d0",
                    "text": "Business",
                    "correctAnswer": false,
                    "explanation": "Business Support does *not* provide access to a Technical Account Manager (TAM) who helps coordinate access to subject matter experts among other things.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "34e7443c-f512-4e37-8dd2-a425e3f8022a",
            "questionId": "6a23af28-d3fa-463a-b9c9-b60af980ca24",
            "questionText": "A company is receiving automated alerts notifying them that their only production EC2 instance is continuously reaching 100% CPU utilization. When this happens, customers cannot make purchases and receive error messages stating they should try again later because all the company's servers are busy. As part of the solution, what could be used to add or replace EC2 instances of the same size automatically across AZs?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 21,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "0e3958d1-e0f4-4c05-a3dd-f1912ca2fbd9",
                    "text": "Horizontal scaling",
                    "correctAnswer": true,
                    "explanation": "Horizontal scaling (or scaling out) adds or replaces EC2 instances automatically across AZs, based on need and changing demand, and is used in the design of systems with high availability.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "6a5cee71-99ff-45de-af40-6ae35dee392b",
                    "text": "Network Load Balancer",
                    "correctAnswer": false,
                    "explanation": "A Network Load Balancer automatically distributes incoming traffic across multiple EC2 instances based on network variables like IP address, destination ports, and more. The company in this case only has one EC2 instance.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "4156a146-fe27-43e6-a6be-326dfdf062b1",
                    "text": "Vertical scaling",
                    "correctAnswer": false,
                    "explanation": "While vertical scaling (or scaling up) is a possible solution, it doesn't ensure a system will be highly available.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "acd467b2-3d73-4860-9614-f2674c2924c9",
                    "text": "Application Load Balancer",
                    "correctAnswer": false,
                    "explanation": "An Application Load Balancer automatically distributes incoming application traffic across multiple EC2 instances based on application variables like content type, user location, and more. The company in this case only has one EC2 instance.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "a3417883-dec9-4c22-88b0-e89e61ea1a88",
            "questionId": "40f3be15-6d0a-417b-8762-25a69f95dec1",
            "questionText": "How can a customer with the Enterprise Support plan get help with billing and account questions?",
            "type": "multi-answer",
            "possibleCorrect": 2,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 22,
            "poolId": "99a9f81f-17a3-497a-9d8d-dcaa0c5b4951",
            "choices": [
                {
                    "id": "11ed3779-a38b-4d83-903e-484e77b54a85",
                    "text": "Use the AWS Support API to programmatically open a case with AWS Support.",
                    "correctAnswer": true,
                    "explanation": "Customers on the Enterprise Support plan have access to the AWS Support API to create, manage, and close support cases.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "5d675057-398e-499e-935d-f2dcf336cb9c",
                    "text": "Contact the Support Concierge team.",
                    "correctAnswer": true,
                    "explanation": "The Concierge agent is the primary point of contact for billing or account inquiries.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "3ac856b0-4a2d-4822-abb9-fa25a24853f4",
                    "text": "Technical Account Manager (TAM)",
                    "correctAnswer": false,
                    "explanation": "While customers on the Enterprise Support plan have access to TAMs, TAMs typically provide proactive best-practice guidance and assistance with architecting, developing, and running AWS solutions.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "f2394709-5509-4ae7-b6a9-f203f95f7688",
                    "text": "AWS Community Forums",
                    "correctAnswer": false,
                    "explanation": "AWS Community Forums allow all community members to freely exchange lessons learned and knowledge; however, this is not the best place to post billing and account questions.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "99b1b9f6-550c-4770-ae77-2e7726e0202b",
                    "text": "AWS Online Tech Talks",
                    "correctAnswer": false,
                    "explanation": "AWS Online Tech Talks are live and on-demand webinars led by AWS solutions architects and engineers. This is not the best place to pose billing and account questions.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "f27b2ff0-c186-4e80-b18b-fc907c4621b0",
            "questionId": "ae845544-8b2c-4869-9a63-2d0a7a7c8dc5",
            "questionText": "A customer has noticed several of their AWS accounts were hacked and used to mine bitcoin. Who should the customer report the issue to?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 23,
            "poolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135",
            "choices": [
                {
                    "id": "d6131941-dbea-4931-855b-04cf57b0c3e6",
                    "text": "AWS Inspector",
                    "correctAnswer": false,
                    "explanation": "Inspector works with EC2 instances to uncover and report vulnerabilities.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "f0458f1b-bef0-4606-940d-3933c653d324",
                    "text": "Developer Forums",
                    "correctAnswer": false,
                    "explanation": "The AWS Developer Forums is not the best place to report this issue.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "e362db95-9beb-47c2-893a-2318a701deca",
                    "text": "AWS Trust & Safety team ",
                    "correctAnswer": true,
                    "explanation": "The customer should contact the AWS Trust & Safety team using the form or email.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "119cceb4-7b4d-4f8f-bbcb-3fa336a7ea22",
                    "text": "AWS Support",
                    "correctAnswer": false,
                    "explanation": "AWS Support is not the best place to report this issue.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "1ebe021a-bfe2-4fc6-b060-d59f3ecbfe3e",
            "questionId": "fa6103ce-a196-489a-83fa-deae62f520fc",
            "questionText": "A company is in the process of migrating its workloads to AWS, and they want to develop and implement security policies. What are some of the recommended best practices for Identity and Access Management (IAM) they can put in place to make sure their accounts are secure?",
            "type": "multi-answer",
            "possibleCorrect": 3,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 24,
            "poolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135",
            "choices": [
                {
                    "id": "070e2820-8d48-4269-a945-a8b7aa654206",
                    "text": "Allow users to pick their own passwords that are easy to remember.",
                    "correctAnswer": false,
                    "explanation": "You should configure a strong password policy for your users.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "9d2811e2-56cc-4b0b-8fae-63da057fc8fe",
                    "text": "Grant users full access to just the services they need.",
                    "correctAnswer": false,
                    "explanation": "You should only grant the least privilege needed to perform a task.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "ed7d5940-2c12-4f33-b059-83b228b1838b",
                    "text": "Create individual users instead of using root.",
                    "correctAnswer": true,
                    "explanation": "You should not use the root user for daily tasks.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "206d6402-a3ab-43e4-9d7f-6684f35c4895",
                    "text": "Do not share access keys.",
                    "correctAnswer": true,
                    "explanation": "This case comes from the additional reading provided as a part of the lesson: \"Security best practices in IAM.\" Access keys provide programmatic access to AWS and should not be embedded in code or shared with other users.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "c1a184d7-1110-4333-adc4-56b935387791",
                    "text": "Enable MFA for privileged users",
                    "correctAnswer": true,
                    "explanation": "You should enable multi-factor authentication (MFA) for the root user and other administrative users.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "f34bf8c4-3872-4c3d-bcaf-3c9129b06957",
            "questionId": "878751ec-3b82-46bf-98ce-9c70f972772c",
            "questionText": "A solutions architect is designing a new application for a customer. In designing the system, the architect recommends that content be cached to reduce latency to the end user. Which piece of the AWS global infrastructure allows for content to be cached and served from the nearest point to the user?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 25,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "16b0ba71-c15f-418d-80ae-61fe14a2dc99",
                    "text": "AWS Outposts",
                    "correctAnswer": false,
                    "explanation": "Outposts allows you to bring AWS compute and storage capacity to your on-premises data center.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "434caa23-1aa3-4743-885c-7ec6c6c9ef28",
                    "text": "Availability Zone",
                    "correctAnswer": false,
                    "explanation": "An Availability Zone (AZ) is 1 or more discrete data centers with redundant power, networking, and connectivity in an AWS Region.  Each Availability Zone is isolated, but the Availability Zones in a Region are connected through low-latency links.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "0b0c918b-e3e4-4846-bff0-0a874439a0df",
                    "text": "Region",
                    "correctAnswer": false,
                    "explanation": "A Region is a physical location around the world that contains clusters of data centers.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "d0bb3beb-6aae-43e5-b39e-c50e6333906c",
                    "text": "Edge location",
                    "correctAnswer": true,
                    "explanation": "An edge location uses cached copies of your content for fast delivery to users. Don't forget CloudFront speeds up delivery using edge locations.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "9a925079-bc34-4df5-bc79-7b065baee257",
            "questionId": "4e4b76b9-66c0-46fd-808a-b5b912ee8133",
            "questionText": "A company has underutilized servers in its on-premises data center. Unfortunately, they are still required to pay for idle resources. Which benefit of the cloud can help the company solve this problem?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 26,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "7e03d38f-c5cf-46ef-b537-447b3f7ee13d",
                    "text": "Loose coupling",
                    "correctAnswer": false,
                    "explanation": "Loose coupling reduces dependency between components to prevent cascading failures.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "e9090f20-a175-4901-b071-b857e51495ad",
                    "text": "Security",
                    "correctAnswer": false,
                    "explanation": "Security is put in place to keep applications and data secure - it is unrelated to the utilization of idle resources.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "07578bfa-3e1c-4f3c-a1e8-e0aeea4be620",
                    "text": "High Availability",
                    "correctAnswer": false,
                    "explanation": "Highly available systems are designed to operate continuously without failure for a long time. These systems avoid loss of service by reducing or managing failures.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "5d51b502-9613-486c-8ef6-1fefb73f5c0e",
                    "text": "Elasticity",
                    "correctAnswer": true,
                    "explanation": "With elasticity, the company doesn't have to plan ahead of time how much capacity they'll need - elasticity allows them to match the supply of resources with changing workload demands.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "daedfe92-d067-45e8-bb0d-ae7d5f8bf2a1",
            "questionId": "b5c431e9-298b-41de-ac62-070b45b6b916",
            "questionText": "A project manager wants to identify, organize, search for, and filter all EC2 instances belonging to the Marketing department for budget management purposes. What is the best strategy for the project manager to identify Marketing resources?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 27,
            "poolId": "99a9f81f-17a3-497a-9d8d-dcaa0c5b4951",
            "choices": [
                {
                    "id": "0e2f1599-a1b3-44af-8abd-7508cf22205d",
                    "text": "Open a case with AWS Support",
                    "correctAnswer": false,
                    "explanation": "AWS Support cannot help with this.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "c1a76eec-f268-45d6-8b59-35c046554a15",
                    "text": "Talk with a Technical Account Manager (TAM)",
                    "correctAnswer": false,
                    "explanation": "TAMs typically provide proactive best-practice guidance, and assistance with architecting, developing, and running AWS solutions.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "fe79575a-1b08-40c0-abbe-1e44f978008c",
                    "text": "Use tags",
                    "correctAnswer": true,
                    "explanation": "The administrator can use tags to identify resources with the Marketing department.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "0a5b8969-5515-4c64-bc77-29f85b718ad2",
                    "text": "Use Systems Manager",
                    "correctAnswer": false,
                    "explanation": "Systems Manager gives you visibility and control over your AWS resources.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "90dd7881-ee29-40e5-80dc-4672b28b87a1",
            "questionId": "821c3367-11a6-4efe-b695-1ec6a2a6b587",
            "questionText": "A company wants to ensure all AWS accounts in their environment conform to company-wide policies. Which services can help?",
            "type": "multi-answer",
            "possibleCorrect": 2,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 28,
            "poolId": "99a9f81f-17a3-497a-9d8d-dcaa0c5b4951",
            "choices": [
                {
                    "id": "2f9a2b87-7884-4970-8a92-cc710e4671b1",
                    "text": "Systems Manager",
                    "correctAnswer": false,
                    "explanation": "Systems Manager gives you visibility and control over your AWS resources.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "1122eac8-ea00-4847-aae9-7e1e41124fe4",
                    "text": "Organizations",
                    "correctAnswer": true,
                    "explanation": "Organizations allows you to centrally manage multiple AWS accounts under 1 umbrella. You can allocate resources and apply policies across accounts.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "d37c2283-e5a7-42d2-aa4e-34506db7d3a3",
                    "text": "Control Tower",
                    "correctAnswer": true,
                    "explanation": "Control Tower helps you ensure your accounts conform to company-wide policies. Control Tower actually sits on top of Organizations.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "228ce498-299c-418f-a887-f62eba24d72b",
                    "text": "Trusted Advisor",
                    "correctAnswer": false,
                    "explanation": "Trusted Advisor provides real-time guidance to help you provision your resources following AWS best practices.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "f02e8284-e2b3-4da3-91e9-c28bd20e71c2",
            "questionId": "8cc6abe0-f272-4caa-a150-356a0d86d8d9",
            "questionText": "Your sales operations group would like to perform monthly analyses on large amounts of sales activity. They want to be able to rank the performance of different territories, product categories, and sales channels. They will use visualization tools to generate graphical representations of the data. Which AWS service will provide the best solution for storing the sales data?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 29,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "2f6ce110-470e-4552-b020-adc2403adf59",
                    "text": "Amazon Aurora",
                    "correctAnswer": false,
                    "explanation": "Aurora is a relational database compatible with MySQL and PostgreSQL that was created by AWS.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "1e982c00-f2eb-4150-b767-70a48b5107b2",
                    "text": "Amazon ElastiCache",
                    "correctAnswer": false,
                    "explanation": "ElastiCache is a fully managed in-memory datastore compatible with Redis or Memcached.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "4d8cc414-70d5-4418-a46a-aa0a2f363fd7",
                    "text": "Amazon Redshift",
                    "correctAnswer": true,
                    "explanation": "Amazon Redshift provides the best solution for performing queries based on a predefined set of dimensions. Redshift organizes data for high performance based on user-specified distribution schemes. Amazon ElastiCache provides in-memory performance, but no data organization assistance. Amazon Aurora and Amazon DynamoDB are good solutions, but Redshift's columnar storage gives it the edge.\n[Amazon Redshift](https://aws.amazon.com/redshift/?nc2=h_m1)",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "18329ab1-99ff-4311-996a-429023c0019c",
                    "text": "Amazon DynamoDB",
                    "correctAnswer": false,
                    "explanation": "DynamoDB is a fully managed NoSQL key-value and document database.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "6b51b0e2-81fa-40bc-b86b-6f9c90a87d4d",
            "questionId": "dcd1227e-0c20-45f0-a493-cc4726ca4557",
            "questionText": "A company is considering a serverless architecture and wants to build and run applications without having to manage infrastructure. Which AWS services should the company consider using when building applications?",
            "type": "multi-answer",
            "possibleCorrect": 4,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 30,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "071263ca-9062-4622-a123-92ce3ff4ccd0",
                    "text": "Lambda",
                    "correctAnswer": true,
                    "explanation": "Serverless is a way to build and run applications without having to manage infrastructure. Lambda is considered serverless.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "fde286ca-ba44-4a41-80a6-41ee58dfbfac",
                    "text": "Fargate",
                    "correctAnswer": true,
                    "explanation": "Serverless  is a way to build and run applications without having to manage infrastructure. Fargate is considered serverless.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "f0107a70-8004-4feb-8d57-9cdbc36a3feb",
                    "text": "DynamoDB",
                    "correctAnswer": true,
                    "explanation": "Serverless  is a way to build and run applications without having to manage infrastructure. DynamoDB is considered serverless.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "c4c80c90-987a-4eb2-bd5d-4b6071a52630",
                    "text": "EC2",
                    "correctAnswer": false,
                    "explanation": "EC2 is not serverless because there is a server that you directly manage.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "da58e606-0819-4f60-b535-5f338fd8ea21",
                    "text": "S3",
                    "correctAnswer": true,
                    "explanation": "Serverless  is a way to build and run applications without having to manage infrastructure. S3 is considered serverless.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "4a449dbd-3c29-4f10-b180-2d426c60449c",
            "questionId": "2de80574-5779-40b2-a529-65e89f71b3a4",
            "questionText": "When configuring an Application Load Balancer (ALB), what step should you take to ensure a highly available architecture?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 31,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "78d5e961-6544-488c-ad87-75f6d8ed3c49",
                    "text": "Set up multiple edge locations for your load balancer",
                    "correctAnswer": false,
                    "explanation": "An edge location is where end users access services that are located at AWS. They are located in most of the major cities around the world and are specifically used by CloudFront (CDN) to distribute content to an end user to reduce latency.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "2abc9c2a-9195-46a3-ab1b-9a1a3d2beeaf",
                    "text": "Configure the load balancer to distribute incoming traffic across your registered targets in multiple Availability Zones",
                    "correctAnswer": true,
                    "explanation": "AWS recommends enabling multiple Availability Zones for all load balancers. With an Application Load Balancer however, it is a requirement that you enable at least two or more Availability Zones. This configuration helps ensure that the load balancer can continue to route traffic. If one Availability Zone becomes unavailable or has no healthy targets, the load balancer can route traffic to the healthy targets in another Availability Zone. AWS Documentation: [Availability Zones and load balancer nodes](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html#availability-zones).",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "07e32bd6-a7e2-4ef9-9441-a85b83dc5194",
                    "text": "Set up more than 1 ALB",
                    "correctAnswer": false,
                    "explanation": "Although it is valid to have more than 1 load balancer, it is not required, and there are ways to ensure high availability with just 1 load balancer.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "4df6c71f-c056-47d5-8a85-a42c5c28a90b",
                    "text": "Set up cross-region Load Balancing",
                    "correctAnswer": false,
                    "explanation": "Load balancing can be set up to serve traffic across multiple Availability Zones (not multi-region).",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "abe00582-8cc6-44b7-8ca0-73a7b6610a49",
            "questionId": "cf0a6455-0a3d-49e3-87cf-b0f1276d546f",
            "questionText": "A customer is migrating their on-premises data center to AWS and has bandwidth constraints. Which service allows them to transport exabyte-scale datasets into AWS in a cost-effective and secure manner?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 32,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "2a743941-2360-43d9-94ec-869fa616859d",
                    "text": "Snowball",
                    "correctAnswer": false,
                    "explanation": "The Snow Family allows you to transfer large amounts of on-premises data to AWS using a physical device. Snowball is a petabyte-scale data transport solution.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "fc06c68d-d0e2-4dd2-bfd2-678f556637e5",
                    "text": "DataSync",
                    "correctAnswer": false,
                    "explanation": "DataSync is better for online data transfers, while the Snow Family is for customers who are bandwidth constrained or are transferring data from disconnected environments.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "089d9b15-7acf-4e04-bb0a-5f22cf578d63",
                    "text": "Snowmobile",
                    "correctAnswer": true,
                    "explanation": "The Snow Family allows you to transfer large amounts of on-premises data to AWS using a physical device. Snowmobile transports multi-petabyte or exabyte-scale data.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "e97abac5-08f4-455d-bf8d-ccea8ac8c2af",
                    "text": "Snowcone",
                    "correctAnswer": false,
                    "explanation": "The Snow Family allows you to transfer large amounts of on-premises data to AWS using a physical device. Snowcone is the smallest member of data transport devices with 8 terabytes of usable storage.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "21b69d86-e7e7-4be7-8184-e269b225c3cc",
            "questionId": "a8b76936-f311-49e1-a771-4b66e093ff8a",
            "questionText": "A developer doesn't want to hardcode the database password in their application code when developing a new application. Which service will help with accessing the password without having to hardcode it?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 33,
            "poolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135",
            "choices": [
                {
                    "id": "5b49aa51-6d39-4c16-9fb3-136d4e2362fd",
                    "text": "Key Management Service (KMS)",
                    "correctAnswer": false,
                    "explanation": "KMS allows you to generate and store encryption keys.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "837a2c73-7b67-4b49-9f21-9cf96dd0618d",
                    "text": "Secrets Manager",
                    "correctAnswer": true,
                    "explanation": "Secrets Manager allows you to manage and retrieve secrets (passwords or keys).",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "7da20a1b-0f7f-4641-a00f-e1d608918261",
                    "text": "AWS Artifact",
                    "correctAnswer": false,
                    "explanation": "Artifact offers on-demand access to AWS security and compliance reports.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "17311b1c-eb7d-474b-a8ee-4961339adb12",
                    "text": "IAM credential report",
                    "correctAnswer": false,
                    "explanation": "The IAM credential report lists all the users and the status of their various credentials, including passwords, access keys, server certificates, and MFA devices.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "18049d1e-b96b-4727-9ed7-9c3d7e055c13",
            "questionId": "2d001d91-276c-45c9-8efd-b69786438812",
            "questionText": "A company wants to provide access to an Amazon S3 bucket to all applications running on a Reserved Instance (RI) that's been assigned to a specific Availability Zone. What's the best way to give S3 access to all applications running on the EC2 instance?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 34,
            "poolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135",
            "choices": [
                {
                    "id": "124838ce-ed95-45f0-bac0-b350421fd013",
                    "text": "Use an IAM policy with administrator access",
                    "correctAnswer": false,
                    "explanation": "Policies are used to manage permissions for IAM users, groups, and roles.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "0fe93909-aa9a-4498-85ce-8fe7f66ced48",
                    "text": "Use an IAM policy with Amazon S3 access",
                    "correctAnswer": false,
                    "explanation": "Policies are used to manage permissions for IAM users, groups, and roles.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "bf91d0f7-44ba-4a3f-8148-6058389c729b",
                    "text": "Use an IAM user",
                    "correctAnswer": false,
                    "explanation": "Users are entities you create in IAM to represent the person or application needing to access your AWS resources.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "97b923a7-aea8-4ce4-a427-72d12a4e98df",
                    "text": "Use an instance profile to pass an IAM role with Amazon S3 permissions to the EC2 instance",
                    "correctAnswer": true,
                    "explanation": "The company will need to create a role that grants access to S3 and associate it with the instance.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "3988d0ec-0946-485a-8c80-773110a31a3b",
            "questionId": "2e5e0583-18ba-42a5-a642-6fb6e671be01",
            "questionText": "A company is considering migrating its applications to AWS. Which costs should the company consider when comparing its on-premises total cost of ownership (TCO) to the TCO when running on AWS?",
            "type": "multi-answer",
            "possibleCorrect": 3,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 35,
            "poolId": "99a9f81f-17a3-497a-9d8d-dcaa0c5b4951",
            "choices": [
                {
                    "id": "9e1523a1-27b4-4a3b-8ed8-c5cb4e3ce5a1",
                    "text": "Help desk support costs",
                    "correctAnswer": false,
                    "explanation": "The company will still be responsible for maintaining an internal help desk.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "7dc823f2-edc9-461b-97c4-0c6aa4196aa0",
                    "text": "Hardware and infrastructure",
                    "correctAnswer": true,
                    "explanation": "The company should consider the cost of the hardware, like physical servers.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "626201ae-7b81-4bb5-bd6d-e94193caa2c2",
                    "text": "Software license costs",
                    "correctAnswer": true,
                    "explanation": "The company should consider the number of licenses and the cost of the licenses.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "3bf9fe0a-a9bc-4b95-a87b-8fa312a6b1d6",
                    "text": "Software development",
                    "correctAnswer": false,
                    "explanation": "The company will still be responsible for custom software development after they migrate to the cloud.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "f47bc947-9af0-4be6-acf1-67a623680816",
                    "text": "Data center cooling, power, and space requirements",
                    "correctAnswer": true,
                    "explanation": "The company should consider how much it costs to power its data center.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "0a0fa735-290f-4b2c-8f4a-ee47fd4e181f",
            "questionId": "9cb558b9-9cf9-449f-8d9a-f4d3438ef278",
            "questionText": "As an IT support center team member, you begin receiving calls from users about problems they're experiencing with your company's AWS-based point-of-sale system. You want to begin your investigation by checking with AWS for any service alerts they may be communicating. Which AWS tool will you give you the information you seek?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 36,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "81d81145-015f-4a9b-bd8b-8d6a978e99a1",
                    "text": "AWS Trusted Advisor",
                    "correctAnswer": false,
                    "explanation": "Trusted Advisor provides real-time guidance to help you provision your resources following AWS best practices. This does not provide the needed information.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "208c2e0a-6d59-4028-9262-08a75e7886e1",
                    "text": "AWS Personal Health Dashboard",
                    "correctAnswer": true,
                    "explanation": "The AWS Personal Health Dashboard publishes alerts and remediation guidance when issues with AWS services arise. Notifications are also provided for scheduled events that may impact AWS customers.\nhttps://aws.amazon.com/premiumsupport/technology/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "3e4ecb72-c46b-48b9-8319-bece36ba5688",
                    "text": "Marketplace",
                    "correctAnswer": false,
                    "explanation": "Marketplace is a digital catalog of prebuilt solutions you can purchase or license. You may also use it to sell solutions to others.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "89981f4f-deeb-412b-9872-64d804126f46",
                    "text": "AWS Partner Network (APN)",
                    "correctAnswer": false,
                    "explanation": "APN is a global community of approved partners that offer software solutions and consulting services for AWS.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "c6e1cc0e-813a-4cb3-bdaa-fbac3323ce5a",
            "questionId": "ebd6b36e-8176-47c0-8bef-cb64517726fe",
            "questionText": "You have a variable and intermittent workload, so you want to use a compute service that allows you to pay only for the compute resources you use, without paying for compute time when your code isn't running. Which of the following services should you use?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 37,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "3cd802f6-7d92-415c-b075-1712b05f9ad7",
                    "text": "Lightsail",
                    "correctAnswer": false,
                    "explanation": "Lightsail allows you to quickly launch all the resources you need for small projects.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "4caa3fba-87ce-4f63-8ce9-0e576c9ab929",
                    "text": "EC2",
                    "correctAnswer": false,
                    "explanation": "EC2 allows you to rent and manage virtual servers in the cloud. ",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "a1bd9670-acfe-48c1-acc7-067d50f69ecb",
                    "text": "Outposts",
                    "correctAnswer": false,
                    "explanation": "Outposts allows you to run cloud services in your internal data center.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "d484edda-efce-4bf8-a92c-e2868f1c9760",
                    "text": "Lambda",
                    "correctAnswer": true,
                    "explanation": "Lambda allows you to run a variable and intermittent code without paying for compute time when your code isn't running.\nhttps://aws.amazon.com/lambda/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "edbcca03-6927-4455-85ae-5ee428bf6579",
            "questionId": "dddc90a2-0d02-4d73-936b-1723e9cc9a2d",
            "questionText": "Which service allows users to record software configuration changes within servers running on-premises over time?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 38,
            "poolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135",
            "choices": [
                {
                    "id": "6aadc1ee-2105-473d-b507-3419e59be87b",
                    "text": "Config",
                    "correctAnswer": true,
                    "explanation": "Config allows you to assess, audit, and evaluate the configurations of your resources over time. Config works with EC2 instances, servers running on-premises, and servers and VMs in environments provided by other cloud providers.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "cc90d191-e6a9-460f-95d3-046a6350e6ef",
                    "text": "GuardDuty",
                    "correctAnswer": false,
                    "explanation": "While GuardDuty has built-in detection for Amazon S3, it only uncovers unauthorized behavior, not personally identifiable information (PII).",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "d0ee2ea5-df79-4bfd-98dd-723c031a20c8",
                    "text": "Inspector",
                    "correctAnswer": false,
                    "explanation": "Inspector works with EC2 instances to uncover and report vulnerabilities.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "df8abff4-c148-4c6d-8cb0-a15820d47e2f",
                    "text": "Trusted Advisor",
                    "correctAnswer": false,
                    "explanation": "Trusted Advisor is a tool that provides real-time guidance to help you provision resources following AWS best practices.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "dd5d7647-71d2-4a25-983a-80c29b7b7fab",
            "questionId": "d792419e-e578-48c4-bb9a-d9d9d6fd22c5",
            "questionText": "Which of the following allows you to make entire buckets (like 1 hosting an S3 website) public?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 39,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "e3b094ae-44c5-41d5-be2d-c6b62f4935b0",
                    "text": "Bucket control lists",
                    "correctAnswer": false,
                    "explanation": "In relation to S3, bucket control lists and access policies do not exist as configuration items.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "95ac5a8a-b515-4023-9994-82d15aa438a6",
                    "text": "Access control lists",
                    "correctAnswer": false,
                    "explanation": "Access control lists let you control access to individual objects within an S3 bucket.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "8e4bf7c2-9781-47ca-ac23-95fb0300be5e",
                    "text": "Bucket policies",
                    "correctAnswer": true,
                    "explanation": "Bucket policies allow you to control access to entire buckets, whereas access control lists let you control access to individual objects within\n  an S3 bucket.\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "090b3b3a-bdd5-4781-9f48-a60e05f5d44c",
                    "text": "Access policies",
                    "correctAnswer": false,
                    "explanation": "In relation to S3, bucket control lists and access policies do not exist as configuration items.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "34a50b1c-57df-42eb-863e-84011b66b9a9",
            "questionId": "da0b372b-c892-4b71-9899-dbb7566616ac",
            "questionText": "A developer is building a new application and is given the option to deploy the application on-premises or to the AWS Cloud. What benefits does the AWS Cloud provide over an on-premises deployment?",
            "type": "multi-answer",
            "possibleCorrect": 3,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 40,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "b355d6e7-616d-4682-80e7-ff95a1e1edfc",
                    "text": "Ability to focus on building the application instead of managing servers",
                    "correctAnswer": true,
                    "explanation": "If the developer uses a serverless architecture (for example, one that includes Lambda), the developer will not have to worry about managing servers or the underlying infrastructure.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "9231ff0b-0c7a-4af7-b79b-805d60448005",
                    "text": "By default, AWS provides automatic distribution of applications across Regions for higher availability",
                    "correctAnswer": false,
                    "explanation": "While multi-Region deployments do ensure high availability, it is not provided by default.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "f10861bc-4a4c-458f-b8c6-38c65717b6d5",
                    "text": "Automatic Multi-AZ deployment of databases to enhance availability",
                    "correctAnswer": false,
                    "explanation": "While Amazon RDS supports Multi-AZ deployments, it is not enabled by default.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "6695ccae-c584-48b8-ac39-057eb3ca2c4a",
                    "text": "Ability to pay-as-you-go without upfront contracts or long-term commitments",
                    "correctAnswer": true,
                    "explanation": "You pay only when you access it and only for what you use, which allows you to spread costs over time since there are no huge upfront investments.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "c97b9115-2370-47ef-8cfb-f0aa629ccc95",
                    "text": "Ability to grow and shrink computing capacity based on demand",
                    "correctAnswer": true,
                    "explanation": "Elasticity allows the developer to match the supply of resources with changing workload demands.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "eb4b9833-dee3-4671-9978-6acf4cccc752",
            "questionId": "f6974cd6-d112-4a01-bad0-0f67835e58fc",
            "questionText": "Which of the following are classified as migration services?",
            "type": "multi-answer",
            "possibleCorrect": 2,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 41,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "5aea8971-2cde-4771-9aa6-4c30f6ec066c",
                    "text": "AWS OpsWorks",
                    "correctAnswer": false,
                    "explanation": "OpsWorks allows you to use Chef or Puppet to automate the configuration of your servers and deploy code.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "2d9026f2-4c8c-4b44-848d-950b84337aec",
                    "text": "AWS Application Discovery Service",
                    "correctAnswer": true,
                    "explanation": "AWS Application Discovery Service helps you gather information about your on-premises environment and is considered a migration tool.\nhttps://aws.amazon.com/cloud-migration/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "afb48942-6d1c-4886-b9bc-466ba33905da",
                    "text": "AWS Config",
                    "correctAnswer": false,
                    "explanation": "Config allows you to assess, audit, and evaluate the configurations of your resources.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "c9b5f7f0-6ebd-4455-b105-8a903aadb724",
                    "text": "AWS Snowball",
                    "correctAnswer": true,
                    "explanation": "Snowball helps you migrate massive amounts of data into cloud, so it is considered a migration tool.\nhttps://aws.amazon.com/cloud-migration/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "47a6d955-db2b-409a-bfa7-8b24b3d3f76b",
            "questionId": "543dfad0-9325-4a71-993f-ce90b13e3f9d",
            "questionText": "You need to stream data in real time for a dashboard application. Which AWS service would you use?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 42,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "b6b70ee2-b361-4cc5-b92a-9551540f995b",
                    "text": "Amazon Redshift",
                    "correctAnswer": false,
                    "explanation": "Redshift is at times the recipient of streaming data, but it can not itself stream data in real time.\nhttps://aws.amazon.com/redshift/faqs/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "22e44df0-9d30-4d44-84ea-c036200e9e42",
                    "text": "AWS CloudTrail",
                    "correctAnswer": false,
                    "explanation": "CloudTrail tracks user activity and API calls within your account.\nhttps://aws.amazon.com/cloudtrail/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "f8069982-dc6e-41fe-a8f6-a6e9d87b57b9",
                    "text": "AWS Kinesis",
                    "correctAnswer": true,
                    "explanation": "Kinesis allows you to analyze data and video streams in real time.\nhttps://aws.amazon.com/kinesis/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "36dc800f-96be-490d-99a5-c92d2e51bdca",
                    "text": "AWS CloudWatch",
                    "correctAnswer": false,
                    "explanation": "CloudWatch collects data, but the intent is not to collect real-time data for streaming.\nhttps://aws.amazon.com/cloudwatch/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "6560dc7a-165d-4ee6-9c85-3ca7d99b2bf0",
            "questionId": "b92a7f1e-5183-4db6-a8ef-5daf76a0e71d",
            "questionText": "Which of the following services helps you deliver content to your customers faster?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 43,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "75e38961-6989-4776-9bd7-5b7eace77ba1",
                    "text": "Elastic Block Store",
                    "correctAnswer": false,
                    "explanation": "EBS is a storage device (called a volume) that can be attached to (or removed from) your instance.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "ff28e2d7-ab98-456a-9a04-048fdf4a21bb",
                    "text": "CloudFront",
                    "correctAnswer": true,
                    "explanation": "Amazon CloudFront is a content delivery network that speeds up the delivery of content to your users.\nhttps://aws.amazon.com/cloudfront/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "68556e5e-58bf-4c45-9c6b-a3489413f2c6",
                    "text": "Amazon Elastic File System",
                    "correctAnswer": false,
                    "explanation": "EFS is a serverless network file system for sharing files.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "6e9724f7-b64b-40f8-a9f0-b93600ebdcb7",
                    "text": "S3",
                    "correctAnswer": false,
                    "explanation": "S3 is an object storage service for the cloud that is highly available.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "490a3f91-6858-495f-8854-a783c31c9191",
            "questionId": "415091b5-2659-40e8-a1f5-7d4205a26655",
            "questionText": "You need to set a number range of EC2 instances to be made available to handle the load for your application. Which AWS service should you use?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 44,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "779684c2-43a4-40dd-9f6b-1cc9caf8de2d",
                    "text": "AWS Systems Manager",
                    "correctAnswer": false,
                    "explanation": "Systems Manager allows you to manage your EC2 instances via a web browser or the AWS CLI.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "921bc8c5-bb12-4a06-9e99-ce713f51abfc",
                    "text": "Elastic Load Balancing",
                    "correctAnswer": false,
                    "explanation": "Elastic Load Balancing automatically distributes your incoming application traffic across multiple EC2 instances.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "47c60cc5-360e-44f3-a134-9638ffa48294",
                    "text": "Route 53",
                    "correctAnswer": false,
                    "explanation": "Route 53 is a DNS service that routes users to applications.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "e577051d-50b6-42d1-8eb2-89f21babe352",
                    "text": "AWS Auto Scaling",
                    "correctAnswer": true,
                    "explanation": "AWS Auto Scaling will ensure you have the optimal number of EC2 instances to handle your application's load, based on rules you specify. The other services mentioned can help distribute load amongst existing resources, but they do not have the ability by themselves to create new resources.\nReference: [AWS Auto Scaling](https://aws.amazon.com/autoscaling/)",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "09c6d09e-6483-4d2f-acc6-52d9729f231e",
            "questionId": "b1cbc1d3-b2b1-404c-9b39-2613b152b39f",
            "questionText": "For which of the below is S3 a suitable storage solution?",
            "type": "multi-answer",
            "possibleCorrect": 2,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 45,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "16982251-84c7-480e-862f-a73188e86d3d",
                    "text": "Pictures",
                    "correctAnswer": true,
                    "explanation": "S3 is object storage suitable for the storage of \"flat\" files like documents, photos, etc. Use cases that require very atomic or consistent reading and writing, such as databases and operating systems, are more suited to EBS (Elastic Block Store) storage.\nhttps://aws.amazon.com/s3/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "51b164f3-94d3-4180-8eb6-6ddb9d153146",
                    "text": "Documents",
                    "correctAnswer": true,
                    "explanation": "S3 is object storage suitable for the storage of \"flat\" files like documents, photos, etc. Use cases that require very atomic or consistent reading and writing, such as databases and operating systems, are more suited to EBS (Elastic Block Store) storage.\nhttps://aws.amazon.com/s3/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "ccb717fb-d4b5-4f40-a822-12dba527c5f6",
                    "text": "Databases",
                    "correctAnswer": false,
                    "explanation": "This is not a use case supported by S3.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "7a60e4a5-60fe-4978-8635-1b1b4a91154e",
                    "text": "Operating systems",
                    "correctAnswer": false,
                    "explanation": "This is not a use case supported by S3.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "13f101bd-6ccb-44bb-add7-e1546c441089",
            "questionId": "8355f168-4dfd-4726-89c4-3294cfa03660",
            "questionText": "A security administrator is setting up a new IAM user and has decided to grant the least privilege. What does the principle of least privilege mean?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 46,
            "poolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135",
            "choices": [
                {
                    "id": "b828e5b9-1bcd-415d-ae19-a2deee1a9b22",
                    "text": "Granting the minimum requirement to perform a task",
                    "correctAnswer": true,
                    "explanation": "The principle of least privilege means granting only the minimum requirements to perform a job or task.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "f6623475-da22-4ebb-9c36-73570f10740b",
                    "text": "Granting permission to only 1 user to perform a task",
                    "correctAnswer": false,
                    "explanation": "The principle of least privilege means granting only the minimum requirements to perform a job or task.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "c5aef08d-6fd1-4dfc-a2db-d88d39649e3d",
                    "text": "Granting permissions at the group level only",
                    "correctAnswer": false,
                    "explanation": "The principle of least privilege means granting only the minimum requirements to perform a job or task.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "1494cc8e-16ec-4dfa-bca0-bdf9a1d289c2",
                    "text": "Granting permissions to only users that have MFA enabled on their account",
                    "correctAnswer": false,
                    "explanation": "The principle of least privilege means granting only the minimum requirements to perform a job or task.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "c9d41ac1-269a-452f-9bec-1ffb92cb21f1",
            "questionId": "1eaf2df5-2c65-44af-bca5-fa1f7e8fa9be",
            "questionText": "In order to improve fault tolerance, you would like to begin using services that provide fault tolerance. Which AWS services provide automatic replication across Availability Zones?",
            "type": "multi-answer",
            "possibleCorrect": 2,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 47,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "7b4db88b-7f59-439e-84e3-0c580d960406",
                    "text": "VPC",
                    "correctAnswer": false,
                    "explanation": "VPC does not provide automatic replication across AZs.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "11fa20a5-7213-4115-9b48-f26311f85600",
                    "text": "DynamoDb",
                    "correctAnswer": true,
                    "explanation": "DynamoDB provides this replication.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "57fb6c00-db64-42bd-bede-dbd59fc00c32",
                    "text": "S3",
                    "correctAnswer": true,
                    "explanation": "S3 provides this replication.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "83886763-7c93-4ff6-98d9-3e8033018f2c",
                    "text": "EC2",
                    "correctAnswer": false,
                    "explanation": "EC2 does not provide automatic replication across AZs.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "fccb3943-468a-47a1-b8b6-80179523b3c7",
            "questionId": "09cb97b4-eab4-4a04-adfb-4c20a78c6dc9",
            "questionText": "You have just created a new bucket and uploaded a file into it. Will this be automatically viewable by anyone on the internet?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 48,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "43f5da37-be03-4c73-af56-cfad7ecdcbbd",
                    "text": "No - by default, buckets and their contents are private",
                    "correctAnswer": true,
                    "explanation": "By default, all data stored in S3 is *not* viewable by the public. If you want a bucket or object to be accessible by the public, you must explicitly make it so. NAT gateways and internet gateways are needed to allow communications between VPCs and the internet, but they are not required when it comes to S3.\nhttps://aws.amazon.com/s3/faqs/#security",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "b7827e21-4c6b-4adc-af48-e0808d3802a4",
                    "text": "Only if you have an internet gateway",
                    "correctAnswer": false,
                    "explanation": "By default, buckets and their contents are private.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "ee408e7b-76b9-4713-b073-e70fd2909d8b",
                    "text": "Only if you have a NAT gateway",
                    "correctAnswer": false,
                    "explanation": "By default, buckets and their contents are private.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "6d6e33d3-9d99-46bd-b956-5d5997c8e1dd",
                    "text": "Yes - by default, buckets and their contents are public",
                    "correctAnswer": false,
                    "explanation": "By default, buckets and their contents are private.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "59ef6d18-57fd-4d87-bf7f-59628943db7b",
            "questionId": "fa955d69-1ea3-4751-8597-f79fb2f990a9",
            "questionText": "A company is developing a new web application that has high availability requirements. How can the company increase availability when deploying the application?",
            "type": "multi-answer",
            "possibleCorrect": 2,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 49,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "1c182995-b699-4968-aef1-d89302811b57",
                    "text": "Deploy the application to the Region that is closest to most of its users.",
                    "correctAnswer": false,
                    "explanation": "Although deploying applications closer to users reduces latency, this alone doesn't ensure high availability.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "1598da13-0f5b-4ee8-a304-ce94b1404024",
                    "text": "CloudFront",
                    "correctAnswer": false,
                    "explanation": "While CloudFront speeds up the global delivery of static content, it alone doesn't ensure high availability.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "f7d966b9-0c5e-422a-a18c-68ef62aa9d17",
                    "text": "S3 Transfer Acceleration",
                    "correctAnswer": false,
                    "explanation": "S3 Transfer Acceleration uses CloudFront edge locations to provide fast files over long distances between your client and an S3 bucket.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "db7a4f88-a442-4499-81cd-b6f5f78e05c9",
                    "text": "Utilize a multi-Region deployment when deploying the application.",
                    "correctAnswer": true,
                    "explanation": "Multi-Region deployments are best for applications that have extremely high availability requirements.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "719b15d8-73d2-4c5b-8bec-e34b87ed35cd",
                    "text": "Deploy the application to span across multiple Availability Zones (AZs).",
                    "correctAnswer": true,
                    "explanation": "Deploying applications to multiple AZs replicates applications  across multiple data centers in the same Region, supporting high availability.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "e590697d-fb00-43c0-bf59-c7c15f1ee128",
            "questionId": "505dabcd-b0a6-403a-91d0-afc210715474",
            "questionText": "Which is the most efficient AWS feature that allows a company to restrict IAM users from making changes to a common administrator IAM role created in all accounts in their organization?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 50,
            "poolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135",
            "choices": [
                {
                    "id": "85fca7c7-b090-4a0a-83c3-2f46d6838668",
                    "text": "GuardDuty IAM findings",
                    "correctAnswer": false,
                    "explanation": "While GuardDuty continuously monitors your account for unauthorized behavior and generates findings for IAM, it only identifies unauthorized activity — it does not prevent it.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "1ec35060-3ec5-4b2d-b717-3379f4c214ec",
                    "text": "Service control policies (SCPs)",
                    "correctAnswer": true,
                    "explanation": "AWS Organizations provides central governance and management for multiple accounts. Organization SCPs allow you to create permissions guardrails that apply to all accounts within a given organization.\n[Service control policies (SCPs)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html)",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "946b06e2-8ff1-4318-8ac9-d436179a0958",
                    "text": "Shield",
                    "correctAnswer": false,
                    "explanation": "Shield is used for protection against DDoS attacks.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "94511ef5-ece4-470a-a33a-c3a5b95aa99c",
                    "text": "IAM user policy",
                    "correctAnswer": false,
                    "explanation": "While a policy can restrict IAM users from accessing certain services and making changes, this is not the most efficient way to establish controls that all IAM users within an organization adhere to.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "7c8311e9-e079-4b22-b288-4839b0e7bfd1",
            "questionId": "f7e6dc60-6902-4d04-8f39-042c492dbe52",
            "questionText": "A financial company needs to migrate large amounts of data, at a petabyte scale, to AWS. Which AWS service can perform this type of migration?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 51,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "c5d39837-d9d5-41e0-a279-fc25eb0ad6cb",
                    "text": "AWS Data Pipeline",
                    "correctAnswer": false,
                    "explanation": "AWS Data Pipeline helps you move data between compute and storage services running either on AWS or on-premises.\nhttps://aws.amazon.com/datapipeline/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "3d03a8d3-24d0-4c66-bf2d-b107fd52fe26",
                    "text": "DataSync",
                    "correctAnswer": false,
                    "explanation": "DataSync allows for online data transfer from on-premises to AWS storage services like S3 or EFS.\nhttps://aws.amazon.com/api-gateway/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "7bd90e5d-64b4-40b6-9038-e13a54353dd5",
                    "text": "AWS Snowball",
                    "correctAnswer": true,
                    "explanation": "Snowball is a petabyte-scale data transport solution.\nhttps://aws.amazon.com/getting-started/projects/migrate-petabyte-scale-data/services-costs/#:~:text=Description%3A%20Snowball%20is%20a%20petabyte,transfer%20times%2C%20and%20security%20concerns.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "e83232b8-8d18-4486-af40-b8afd27bcaab",
                    "text": "Database Migration Service",
                    "correctAnswer": false,
                    "explanation": "It would not be practical to use this service for such a large migration. Additionally, it has not been specified that this data is all contained within a database.\nhttps://aws.amazon.com/dms/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "dfe8c058-ffa3-4392-83a4-2ce99f01a0f4",
            "questionId": "debe542a-076d-473d-823a-a142b8de15f7",
            "questionText": "AWS purchases computing resources in large quantities at lower costs and then passes volume discounts on to their customers.  Which benefit of cloud computing does this demonstrate?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 52,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "28b21420-f335-4f02-8771-e609331af58a",
                    "text": "Lower pay-as-you-go prices due to massive economies of scale.",
                    "correctAnswer": true,
                    "explanation": "Customers benefit from massive economies of scale and achieve lower variable costs than they can get on their own due to volume discounts.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "74b785d4-f307-42b4-aa29-f22e62225be4",
                    "text": "Pay only when you use computing resources.",
                    "correctAnswer": false,
                    "explanation": "While customers can trade capital expenses for variable expenses, this doesn't demonstrate volume discounts being passed on to customers.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "7bde3d63-455c-4e26-b88b-6939d7099ddc",
                    "text": "Deploy applications in multiple Regions around the world.",
                    "correctAnswer": false,
                    "explanation": "While customers can go global in minutes, this doesn't demonstrate volume discounts being passed on to customers.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "5573ec3e-4647-4d9f-b57f-345980541634",
                    "text": "Eliminate guessing about your infrastructure capacity needs.",
                    "correctAnswer": false,
                    "explanation": "While customers can stop guessing capacity when using AWS, it doesn't demonstrate volume discounts being passed on to customers.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "785dcedf-f7bd-47dc-bc86-74b26d3ffa9b",
            "questionId": "accc6c45-ebc7-4c25-b496-05c5cfab5c0e",
            "questionText": "A retail company has EC2 On-Demand Instances running to serve customer transactions. There is a set pattern of traffic where demand is high at 2 points in the day, but the instances sit idle for much of the day. What is a good way to optimize these resources?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 53,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "700cdd63-e590-45ef-8c29-43ef3ea5b00b",
                    "text": "Use an elastic load balancer to scale out and in based on demand.",
                    "correctAnswer": false,
                    "explanation": "Load balancers do not scale instances in and out; they manage the traffic load between existing instances.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "d02bea1a-3a68-4d76-8b6b-ecf35760e9ae",
                    "text": "Write a script to stop instances when demand is low.",
                    "correctAnswer": false,
                    "explanation": "This would be recreating functionality that comes in AWS out of the box.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "4048192d-8747-4af4-9497-0d3015bafac1",
                    "text": "Use Reserved Instances instead of On-Demand Instances.",
                    "correctAnswer": false,
                    "explanation": "Reserved Instances are used for longer-term contracts and provide cost savings in these situations. Nothing in this scenario indicates the need for Reserved Instances.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "320f4966-eb1c-4c0f-a3e7-aaf4601692c3",
                    "text": "Use an Auto Scaling group to scale out and in based on demand.",
                    "correctAnswer": true,
                    "explanation": "The Auto Scaling group can be used to scale out and scale in the instances as the demand dictates. This will save money and avoid having instances sitting idle for long periods of time.\nAWS Auto Scaling monitors your applications and automatically adjusts your capacity to maintain steady, predictable performance at the lowest possible cost. Using AWS Auto Scaling, it’s easy to set up application scaling for multiple resources across multiple services in minutes.\nhttps://aws.amazon.com/autoscaling/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "8c0f58ac-de52-46cc-9cc6-85a5ed6cb3ca",
            "questionId": "e2aee2e7-4168-4a1f-8c12-a13cff000415",
            "questionText": "A developer wants to be alerted when an EC2 running their application is approaching 100% CPU utilization. Which service helps the developer do this in an automated way?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 54,
            "poolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135",
            "choices": [
                {
                    "id": "4b59cf6d-188f-41ad-8f7a-84e30fb49b9f",
                    "text": "Cost budgets in AWS Budgets",
                    "correctAnswer": false,
                    "explanation": "A cost budget will allow you to set how much you want to spend and will alert you if your spend reaches a predefined threshold.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "038c2e6c-2757-4a7a-b7b5-6f10678fd17c",
                    "text": "CloudWatch",
                    "correctAnswer": true,
                    "explanation": "CloudWatch can monitor the state of your AWS resources and can notify you when an EC2 is approaching 100% utilization.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "298e1219-ab7d-463d-8722-6d38861c458e",
                    "text": "CloudTrail",
                    "correctAnswer": false,
                    "explanation": "CloudTrail tracks user activity and API calls within your account.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "1301ccd7-4226-45b8-b9f7-7fc5eb4c15f3",
                    "text": "CloudFormation",
                    "correctAnswer": false,
                    "explanation": "CloudFormation allows you to deploy AWS infrastructure using code.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "4122660f-3c1c-403e-b3f9-122ab7e172a6",
            "questionId": "e05b55a9-aafc-4075-99bf-634c447eaf19",
            "questionText": "A company is hosting a public-facing static website out of an S3 bucket. When reviewing website analytics and traffic, the company is surprised to learn the website is accessed by millions of users around the globe. The company wants to ensure all its users are seeing fast response times. Which AWS service will help to deliver this website globally with low latency?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 55,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "7896f515-dec6-4d26-8bc9-e91513158d2a",
                    "text": "CloudFront",
                    "correctAnswer": true,
                    "explanation": "CloudFront is a CDN that delivers data and applications globally with low latency.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "270d8de8-22d4-4762-a11e-8a73692a1de8",
                    "text": "CloudFormation",
                    "correctAnswer": false,
                    "explanation": "CloudFormation allows you to provision AWS resources using Infrastructure as Code (IaC).",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "e2d1082e-ac1d-449a-876e-544db029e739",
                    "text": "WAF",
                    "correctAnswer": false,
                    "explanation": "WAF helps protect your web applications against common web attacks like SQL injection attacks and cross-site scripting.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "1a8213b0-b562-40d8-97fc-e10af2614600",
                    "text": "S3 Transfer Acceleration",
                    "correctAnswer": false,
                    "explanation": "S3 Transfer Acceleration improves content uploads and downloads to and from S3 buckets and is not responsible for serving up website content.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "86d96621-07b2-4144-9cd6-64952f349f5e",
            "questionId": "961fbea1-7842-42fe-b9e0-6a547efc74fc",
            "questionText": "A solutions architect is designing a system to withstand the failure of one or more components. What type of system is able to withstand failure?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 56,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "317d0d24-01f1-4166-a302-0be78d6c1722",
                    "text": "Durable",
                    "correctAnswer": false,
                    "explanation": "Durability is all about long-term data protection. This means your data will remain intact without corruption.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "9cfc12d5-332a-4dfb-8f85-5f2838426f19",
                    "text": "Secure",
                    "correctAnswer": false,
                    "explanation": "A system that is secure is one that is able to withstand attacks.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "2708d6dc-a571-4c68-bc95-075594da3a10",
                    "text": "Elastic",
                    "correctAnswer": false,
                    "explanation": "Elasticity allows you to match the supply of resources with changing workload demands.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "df189409-90fb-4aff-9a06-37d01ce970a4",
                    "text": "Highly available",
                    "correctAnswer": true,
                    "explanation": "Highly available systems are designed to operate continuously without failure for a long time. These systems avoid loss of service by reducing or managing failures.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "79d98731-2c1c-4c69-ac22-50acd48d5274",
            "questionId": "463d7bcc-8a49-46ce-a9ac-2745afb29145",
            "questionText": "Under the shared responsibility model, which task is AWS' responsibility when managing AWS Lambda functions?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 57,
            "poolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135",
            "choices": [
                {
                    "id": "0b7774eb-b0c0-4efc-b31c-6e467d1d7041",
                    "text": "Upgrading function code when new versions of programming languages are released",
                    "correctAnswer": false,
                    "explanation": "You are responsible for upgrading your application code.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "ed18f085-fcf8-46a7-a0d2-40cf1d01ebc9",
                    "text": "Managing the versions of Lambda function code",
                    "correctAnswer": false,
                    "explanation": "You are responsible for managing the versions of your application code.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "c3d3183b-649d-4ad4-ae19-fab6966f7cf0",
                    "text": "Ensuring the Lambda function has the proper IAM permissions to access other services and resources",
                    "correctAnswer": false,
                    "explanation": "You maintain the security and access permissions for your Lambda functions.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "ca28c67a-6f53-47b8-b036-a3f86eeb6ae1",
                    "text": "Managing the Lambda runtime environment",
                    "correctAnswer": true,
                    "explanation": "AWS is responsible for the Lambda runtime environment.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "7c158e55-8984-4279-8113-a954c6d4b189",
            "questionId": "240ec919-17f2-415b-bfce-90a3b086ad19",
            "questionText": "Under the shared responsibility model for EC2, who is responsible for patching the guest operating system?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 58,
            "poolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135",
            "choices": [
                {
                    "id": "833b44da-8043-478f-a5f1-32b893724c51",
                    "text": "The responsibility to patch the guest operating system is not part of the AWS shared responsibility model.",
                    "correctAnswer": false,
                    "explanation": "You are responsible for patching the guest operating system.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "31a059dc-8207-48bc-9dcf-d64f3b1d17d5",
                    "text": "AWS is responsible for patching the guest operating system.",
                    "correctAnswer": false,
                    "explanation": "You are responsible for patching the guest operating system.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "c6e7ce34-db64-4fe1-9626-4ead42040c3d",
                    "text": "The responsibility for patching the guest operating system is shared between the customer and AWS.",
                    "correctAnswer": false,
                    "explanation": "You are responsible for patching the guest operating system.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "b76d585d-0c54-4919-978e-129e45c3ad74",
                    "text": "The customer is responsible for patching the guest operating system.",
                    "correctAnswer": true,
                    "explanation": "You are responsible for patching the guest operating system.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "6bc5a3fd-3d72-48ba-8757-e1a099c3129a",
            "questionId": "85ddfbca-739d-46d7-9582-d14a925880d3",
            "questionText": "The AWS Cloud spans multiple Regions, Availability Zones (AZs), edge locations, and more. How would you best describe an Availability Zone?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 59,
            "poolId": "a44ae832-61cd-47a0-9262-a91782c522bc",
            "choices": [
                {
                    "id": "830059ad-692e-4e7e-9aef-ae2ca7b2bb6a",
                    "text": "Multiple data centers isolated from each other in an AWS Region",
                    "correctAnswer": false,
                    "explanation": "All Availability Zones in an AWS Region are interconnected with high-bandwidth, low-latency networking, over fully redundant, dedicated metro fiber providing high-throughput, low-latency networking between AZs.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "9f532da6-3b4d-4689-a1e3-3db61e07baa7",
                    "text": "A separate geographic area",
                    "correctAnswer": false,
                    "explanation": "Each AWS Region is a separate geographic area.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "9b9cd585-03c9-4ea8-bff9-1b6683e9d9ed",
                    "text": "One or more discrete data centers with redundant power, networking, and connectivity in an AWS Region",
                    "correctAnswer": true,
                    "explanation": "An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region. AZs give customers the ability to operate production applications and databases that are more highly available, fault tolerant, and scalable than would be possible from a single data center. All AZs in an AWS Region are interconnected with high-bandwidth, low-latency networking, over fully redundant, dedicated metro fiber providing high-throughput, low-latency networking between AZs. All traffic between AZs is encrypted. The network performance is sufficient to accomplish synchronous replication between AZs. AZs make partitioning applications for high availability easy. If an application is partitioned across AZs, companies are better isolated and protected from issues such as power outages, lightning strikes, tornadoes, earthquakes, and more. AZs are physically separated by a meaningful distance, many kilometers, from any other AZ, although all are within 100 km (60 miles) of each other. AWS Documentation: [Regions and Availability Zones](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/).",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "f5da53c4-3ac0-4e93-ae2d-33ef62152d78",
                    "text": "A site that CloudFront uses to cache copies of content for faster delivery to users at any location",
                    "correctAnswer": false,
                    "explanation": "Edge location is a site that CloudFront uses to cache copies of content for faster delivery to users at any location.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "59ff54ef-393c-4c84-8408-0f176b363456",
            "questionId": "5d7ef587-394a-483f-9967-78c77b1dcf44",
            "questionText": "Which of the following is TRUE when considering subnets in a VPC?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 60,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "ce2f6432-35e2-4e6c-97b3-03079b425f2e",
                    "text": "By default, subnets within a VPC cannot communicate with each other.",
                    "correctAnswer": false,
                    "explanation": "By default, all subnets within a VPC can communicate with each other, without needing any other resources or configuration.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "290aa34e-339c-46d9-bfe8-0777a03cb83e",
                    "text": "By default, all subnets within a VPC can communicate with each other.",
                    "correctAnswer": true,
                    "explanation": "By default, all subnets within a VPC can communicate with each other, without needing any other resources or configuration.\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "65451fdb-0183-4fed-b141-76aa88b38d6a",
                    "text": "Subnets within a VPC can only communicate with each other if a NAT gateway is deployed.",
                    "correctAnswer": false,
                    "explanation": "NAT gateways work in different scenarios to allow your subnet to communicate with the internet and are not required to communicate between subnets.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "6d772e43-778a-41a1-a809-a736a0706c4c",
                    "text": "Subnets within a VPC can only communicate with each other if an internet gateway is deployed.",
                    "correctAnswer": false,
                    "explanation": "Internet Gateways work in different scenarios to allow your subnet to communicate with the internet and are not required to communicate between subnets.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "4ccba9d6-fed7-40d9-96ca-61f723fd297e",
            "questionId": "e79bf993-dcf9-4e7a-bc69-85cb20585af5",
            "questionText": "Where would you find the AWS Attestation of Compliance Documentation for PCI DSS?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 61,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "768a8457-d05b-4284-973b-47f2811d0d7f",
                    "text": "AWS Artifact",
                    "correctAnswer": true,
                    "explanation": "AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWS' security and compliance reports and select online agreements. AWS Support's site provides general information about compliance, but it does not hold the secure reports or certificates. AWS IAM is used to control security within your AWS Account. Amazon Macie is a data security classification service.\nhttps://aws.amazon.com/artifact/",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "8b0246c3-40a3-4ad6-8af2-e2b7aa09a06f",
                    "text": "AWS Support",
                    "correctAnswer": false,
                    "explanation": "AWS Support does not offer on-demand access to AWS security and compliance reports.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "2b5e4fbe-21d7-47fe-bf99-cfc7e129dc5a",
                    "text": "Amazon Macie",
                    "correctAnswer": false,
                    "explanation": "Macie does not offer on-demand access to AWS security and compliance reports.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "e2c5c064-3537-4b97-b232-856d4486bfdf",
                    "text": "AWS Identity and Access Management",
                    "correctAnswer": false,
                    "explanation": "AWS IAM does not offer on-demand access to AWS security and compliance reports.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "014c5f37-5411-40a9-b16f-6825deec7c68",
            "questionId": "1c5abaa1-ffde-4715-a311-e64afe36a330",
            "questionText": "A company is migrating its workloads to AWS. Which tool will help the company estimate their potential cloud bill and calculate their overall total cost of ownership (TCO) based on their current workloads?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 62,
            "poolId": "99a9f81f-17a3-497a-9d8d-dcaa0c5b4951",
            "choices": [
                {
                    "id": "a01fc252-4600-4c23-b30c-5df87abfd080",
                    "text": "The company can use the AWS Pricing Calculator.",
                    "correctAnswer": true,
                    "explanation": "The Pricing Calculator provides an estimate of AWS fees and charges. Since the company knows the workload details, the AWS Pricing Calculator can also help with calculating the total cost of ownership.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "1b24fb68-0a64-4c40-8e25-b3c564538c50",
                    "text": "The company can use the Cost Explorer to visualize its estimated TCO.",
                    "correctAnswer": false,
                    "explanation": "Cost Explorer allows you to visualize and forecast your actual costs and usage over time.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "28a17b0f-f322-4234-b9c5-309af6bff28f",
                    "text": "The company can open an account and billing support case with AWS Support to get help with estimating the TCO.",
                    "correctAnswer": false,
                    "explanation": "Account and billing support cases should be reserved for questions about your bills or general account questions. Additionally, AWS Support does not allow cases for code development, debugging custom software, or performing system administration tasks.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "aa3a72c9-5460-4087-afaf-004595af10c9",
                    "text": "The company can research the published prices of the AWS services and manually calculate the estimate.",
                    "correctAnswer": false,
                    "explanation": "AWS provides several ways to automate the calculation of TCO. The company doesn't need to rely on manual calculations.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "7632776d-b6cb-48ac-97d0-5ab06f448d2d",
            "questionId": "7562576f-965f-4a06-af99-0a08962f790d",
            "questionText": "In order to support their auditing and compliance efforts, a company needs to produce a report to audit the effects of password lifecycle requirements. How can they access a report that lists all users in their account along with the status of the various credentials?",
            "type": "single-answer",
            "possibleCorrect": 1,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 63,
            "poolId": "a90cf579-4ec7-4072-a9f9-fb9c70782135",
            "choices": [
                {
                    "id": "fa6faa96-6b32-4a2c-9c28-e31bc4402e0f",
                    "text": "QuickSight",
                    "correctAnswer": false,
                    "explanation": "QuickSight is a business intelligence service (BI) that helps you produce reports. Though we didn't officially explore QuickSight, you may see a few service names on the exam that we didn't fully discuss. Please make sure you read the [\"Overview of Amazon Web Services\" whitepaper](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/aws-overview.pdf) before the exam.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "2637a903-0cfb-4343-844d-ff96fffc152d",
                    "text": "IAM credential report",
                    "correctAnswer": true,
                    "explanation": "The IAM credential report lists all the users and the status of their various credentials, including passwords, access keys, server certificates, and MFA devices.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "4e980160-9180-4539-8863-ccc965538174",
                    "text": "AWS Artifact",
                    "correctAnswer": false,
                    "explanation": "Artifact offers on-demand access to AWS security and compliance reports.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "40587911-6752-4160-bdac-e5e5898ebb17",
                    "text": "Redshift",
                    "correctAnswer": false,
                    "explanation": "Redshift is a scalable data warehouse solution that supports querying, reporting, analytics, and business intelligence.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        },
        {
            "id": "f9d0e4cf-b4b4-4baf-b81a-1f4935b01c40",
            "questionId": "1f9afe33-8803-46d8-8282-ac3e3174d623",
            "questionText": "By default, what can a private subnet communicate with?",
            "type": "multi-answer",
            "possibleCorrect": 2,
            "submitted": false,
            "flagged": false,
            "selectedChoiceIds": null,
            "order": 64,
            "poolId": "1cf0fd87-505d-4dd5-a552-2f7ead9bda71",
            "choices": [
                {
                    "id": "53661560-e02d-4558-b852-3678fe25c75f",
                    "text": "Public subnets in a different VPC",
                    "correctAnswer": false,
                    "explanation": "To enable communication between subnets in different VPCs the VPCs must first be peered.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "aa30a6f5-9532-4db8-aa34-047ba683256a",
                    "text": "Other private subnets in the same VPC",
                    "correctAnswer": true,
                    "explanation": "By default, a private subnet can only communicate with other subnets in the same VPC, be they private or public. In order to communicate to the internet, a NAT gateway and internet gateway are required, and to enable communication between subnets in different VPCs, the VPCs must first be peered.\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html#vpc-subnet-basics",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "30661002-51d1-4424-a695-87ebf35bb865",
                    "text": "The internet",
                    "correctAnswer": false,
                    "explanation": "In order to communicate to the internet, an internet gateway is required.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "ef1874ec-6e46-4ee8-98c7-c5b8c4514e13",
                    "text": "Private subnets in a different VPC",
                    "correctAnswer": false,
                    "explanation": "To enable communication between subnets in different VPCs, the VPCs must first be peered.",
                    "__typename": "AssessmentsAttemptGradedChoice"
                },
                {
                    "id": "da63c52e-e71c-4a7e-879a-c6c7198d15ec",
                    "text": "Public subnets in the same VPC",
                    "correctAnswer": true,
                    "explanation": "By default, a private subnet can only communicate with other subnets in the same VPC, be they private or public.\nhttps://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html#vpc-subnet-basics",
                    "__typename": "AssessmentsAttemptGradedChoice"
                }
            ],
            "grade": null,
            "__typename": "AssessmentsAttemptGradedQuestion"
        }
    ],
    "labs": [],
    "__typename": "Assessments_GradedAttempt"
}
