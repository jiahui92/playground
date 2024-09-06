
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
* entity
* module
  * controller
  * service
* entityModule
  * entity: 与数据库交互的结构，可以由
  * dto: 增删改查的数据结构与校验等逻辑


## gql
### 生成entity
```sh
npm install -g typeorm-model-generator
typeorm-model-generator -h localhost -d test_db -u root -x password -e mysql
```
```ts
// 生成的文件
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
```

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
```bash
# 先配置.env文件sql相关的数据
# 执行命令即可同步数据库model到代码的entity
npm run generate-entities
```
