
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

## entities
## generate
* 先配置.env文件sql相关的数据
* 执行命令即可同步数据库model到代码`src/entities/*`
```bash
npm run generate-entities
```
## migration
数据库的表结构发生变化后，需要使用migration生成的SQL语句同步升级线上数据库【[参考资料](https://typeorm.bootcss.com/migrations)】
```sh
# post.title 该成了 post.name
ALTER TABLE "post" RENAME COLUMN "title" TO "name";
```

生成迁移文件
```sh
typeorm migration:create -n PostRefactoring
```
```js
// 执行typeorm后生成的代码，需要自己手动完成up里面的sql升级逻辑
import { MigrationInterface, QueryRunner } from "typeorm";

export class PostRefactoringTIMESTAMP implements MigrationInterface {
  // 升级逻辑
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "title" RENAME TO "name"`);
  }

  // 还原逻辑
  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "name" RENAME TO "title"`); // 恢复"up"方法所做的事情
  }
}
```


在生成环境中执行该命令
```sh
# 触发迁移逻辑
typeorm migration:run
# 还原迁移逻辑
typeorm migration:revert
```

