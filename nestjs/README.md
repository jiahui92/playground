
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
npm install

# 本项目依赖mysql数据库，初次使用时可以使用prisma在本地自动创建数据库（根据./prisma/schema.prisma的表结构）
# https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate/troubleshooting-development
code ./env # 修改数据库连接相关信息
npx prisma migrate dev # 执行命令后会自动创建/升级数据库、并生成node_modules/prisma/client
```

## Running the app
* http://localhost:3000/graphql
```bash
# developmen
npm run start
# watch mode
npm run start:dev

npm run start:prod
```
```gql
query {
  findFirstCity {
    Name
    CountryCode
  }
  findManyCity(where: { Name: { contains: "a" } }) {
    Name
    CountryCode
  }
}
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
* module
  * controller
  * service
* src/generated
  * nexus: 由paljs生成的nexus代码，gql操作背后的执行逻辑，内部使用prisma连接数据库
  * typings.ts: 由nexus生成的ts.types类型定义文件
  * schema.gql: 由nexus生成的gqlSchema，一般提供给前端使用，类似curd里的api定义
* src/graphql
  * 拓展目录，覆盖重写`src/generated/nexus`里的types,resolver，比如`city.ts`增加字段级权限控制

## gql
### gql schema
运行时根据代码里定义的`@ObjectType,@Resolver,@Query`等自动生成gql相关的数据结构
```ts
# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

type City {
  id: Int!
  name: String!
  population: Int!
}
```

## entities
### generate
* 配置`.env`的连接数据库信息
* 执行`npm run pull-db`
  * `npx prisma db pull` 从数据库拉取最新的sqlSchema到`./prisma/schema.prisma`
  * `npx prisma-case-format` 格式化model和field的命名
  * `npx prisma generate` 生成`@prisma/client`代码
    * 根据sqlSchema生成prisma相关查询方法，比如`prisma.user.findMany/create/update`等
    * 生成数据库model的ts定义
* 执行`npm run generate-nexus` 生成`src/generated/nexus`代码
  * paljs(prisma-tool)根据sqlSchema生成prisma相关gql的方法，比如`findManyUser`
* 执行`npm start` 生成`src/generated/schema.gql,nexus-typings.ts`代码

#### schema format
paljs不会格式化enum变量，所以暂时使用prisma-case-format，并且支持model和field忽略配置
```sh
# pal schema camel-case
prisma-case-format -f prisma/schema.prisma
```
```sh
# prisma-case-format config
default: ...
override:
  mYTaBlE: 'disable' # skip convention management for this table
  ...
  YourTable:
    default: '...'
    field:
      unmanaged_property: 'disable' # skip convention management for this field
```


## migration
数据库的表结构发生变化后，需要使用migration生成的SQL语句同步升级线上数据库
```bash
# 本地执行，根据schema.prisma生成`prisma/migrations/xxx_<migration-name>/migration.sql`数据库升级文件
npx prisma migrate dev --name <migration-name>

# 远端执行升级数据库，升级完毕后，数据库会在table._prisma_migrations插入一条记录
# 升级前备份数据库！！！
npx prisma migrate deploy
# 回滚
npx prisma migrate resolve --rolled-back <migration-name>


# 开发中遇到升级冲突时，此命令会清空数据库，再重新创建
npx prisma migrate reset
```


## 安全校验
可选安全校验的逻辑设置的优先级：`nestjs > prisma > nexus/gql`，比如
* 登录校验建议设置在nestjs的中间件
  * 例如`src/middlewares/req.middleware.ts`
* 对象级/字段级的安全校验建议设置在prisma的中间件
  * 例如`src/middlewares/prisma.middleware.ts`
* gql的特殊层参数校验（不涉及prisma时）则使用nexus的中间件
  * 例如`src/graphql/city.ts`


## Deploy
```sh
git pull

# 安装依赖
npm install

# 生成 Prisma Client
npx prisma generate

# 应用数据库迁移
npx prisma migrate deploy

# 启动应用
npm start:prod
```

## entities (old: typeOrm这个库太多bug，已弃用)
### generate
* 先配置.env文件sql相关的数据
* 执行命令即可同步数据库model到代码`src/entities/*`
```bash
npm run generate-entities
```
### migration
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

