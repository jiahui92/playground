
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# developmen
$ npm run start
# watch mode
$ npm run start:dev

$ npm run start:prod
```


```bash
# generate files at src/user
nest g resource user

nest g module user
nest g service user
nest g controller user
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Structure
* entities: 根据数据库生成, `npm run generate-entities`
* module
  * controller
  * service
* entityModule
  * dto: 增删改查的数据结构与校验等逻辑


## gql
### gql schema
运行时根据代码里定义的`@ObjectType,@Resolver,@Query`等自动生成gql相关的数据结构
```ts
# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

type User {
  id: Int!
  name: String!
  age: Float!
  email: String!
}
```

### generate entities
* 先配置.env文件sql相关的数据
* 执行命令即可同步数据库model到代码`src/entities/*`
```bash
npm run generate-entities
```
