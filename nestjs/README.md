
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation
* 在`src/common/const.ts`中配置一些必要的TODO属性
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
  * index: 配置支持的gql api（出于安全考虑，默认都不放开）
  * nexus: 由paljs生成的nexus代码，gql操作背后的执行逻辑，内部使用prisma连接数据库
  * nexus-typings.ts: 由nexus生成的ts.types类型定义文件
  * schema.gql: 由nexus生成的gqlSchema，一般提供给前端使用，类似curd里的api定义
* src/graphql
  * 拓展目录，覆盖重写`src/generated/nexus`里的types,resolver，比如`city.ts`增加字段级权限控制
* middlewares > guards > interceptors
  * middlewares: 最早执行，底层使用的express顺序执行，而非koa的洋葱模型
  * guards: 控制请求是否能去到controller，通常用于权限校验 (gql不包含)
  * interceptors: controller/请求执行前后的逻辑，通常用于日志记录或修改responseData (gql不包含)


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

#### query schema
[Introspection](https://graphql.org/learn/introspection/)
```gql
query {
  __schema {
    queryType {
      fields {
        name
        type {
          kind
          ofType {
            kind
            name
          }
        }
      }
    }
  }
}
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
* 登录校验建议设置在nestjs的中间件/guard
  * 例如`src/middlewares/req.middleware.ts`
* prisma+gql的对象级/字段级的安全校验建议设置在prisma的中间件
  * 例如`src/middlewares/prisma.middleware.ts`
* gql的安全校验【[参考资料](https://dgraph.io/blog/post/graphql-security-best-practices/)】
  * 推荐使用`graphql-shield`: `src/graphql/permission.ts`
* 其它
  * `graphql-encrypt`: 加密请求参数

### 接口的角色权限
因为gql和nestjs的权限校验逻辑不一样，所以需要分别设置（底层使用的express.middleware，但是gql的逻辑是特殊处理的`app.use('graphql', () => {...})`，不包含nestjs的guard,interceptor）
* nestjs.controller: `src/middlewares/guard/auth.guard.ts`
* gql: `src/graphql/permission.ts`


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

## 选型
* 数据库
  * MySQL: 批量操作快？
  * PostgrepSQL: 相比mysql多了数据类型，支持json按key查找、商用免费
* ORM & gql
  * prisma
    * 缺点：默认生成的gql.schema与规范的不太一样、api不支持复杂查询（可以写queryRaw）
    * 优点：完美支持ts、三方支持好
  * typeorm
    * 缺点：此库作者和三方插件已慢慢不维护了、目前bug比较多
    * 优点：gql.schema与规范接近、api支持复杂查询
  * knex/objection/mikro-orm
    * 优点: api支持复杂查询
    * 缺点: 三方生态不是很好，尤其是gql相关的很多已不维护
  * sequelize: ts支持不好
* gql api/schema generate
  * code-first
    * [paljs.nexus](https://nexusjs.org/)
      * 缺点：貌似三方生态都处于不更新的状态、ts支持不友好
      * 优点：函数式编程
    * [TypeGraphQL](https://typegraphql.com/) (社区推荐)
      * 缺点：需手动编写ObjectType, ArgsType, Resolver(query,mutation)(目前有工具自动生成，但不更新了)
      * 优点：nestjs默认支持、ts友好
    * [graphql-js](https://github.com/graphql/graphql-js)
      * 官方支持的基础功能，nexus与TypeGraphQL都是基于此库的封装
  * schema-first: SDL(Schema Definition Language)

### gql generate的选型
所有方案目前貌似都不支持生成自定义的gql入参（特指mutation.create）
* paljs.nexus
  * 字段级权限的库graphql-shield不维护了，暂时也不需要用到，会影响性能
* [typegraphql-prisma](https://github.com/MichalLytek/typegraphql-prisma)
  * 只维护不更新了，大数据的性能优化很差（对比paljs没有PrismaSelect的优化）
  * 生成的代码比较符合nestjs官方的规范，也支持在生成代码之外去拓展权限之类的功能
  * 类似的方案还有`paljs.graphql-modules`
* 使用`Hygen`生成自定义模板或者`AST`类生成工具`ts-morph`
* 手动维护

## 性能优化
### 大数据请求
4000条数据的请求中，gql的执行时间大概是150~300ms，但restful api的执行时间大概是20ms
* @paljs/plugin/select.js
  * 已优化未合并https://github.com/paljs/prisma-tools/pull/341/files
* @paljs/nexus/index.js
  * onCreateFieldResolver 直接返回Promise，让外部处理
  * 大概10%
* field.resolve下还有很多不同类型的耗时函数未排查
  * 可能与gql底层逻辑(graphql-js)有关系，每个字段都必须执行一次resolver
  * 可能是每个resolver都是promise
* 字段级权限: 可以放到ApolloServer.willSendResponse或者validation生命周期去做？这样就不会有filed.resolver影响性能问题

## RestFul Api or Gql.mutation
仅针对新增、更新、删除的场景
* Restful Api
  * 优点: 支持事务等批量复杂关联创建、逻辑很灵活(校验权限等)、三方支持好(自动化：api文档、测试)
  * 缺点: 可能得封装很多不同字段组合的接口，比如更新User.name, User.email等都得封装新接口
* Gql.mutation
  * 优点: 可以任意组合更新字段
  * 缺点: 
    * 安全性: 每放开一个mutation的字段都要考虑清楚前端传入该字段的数据是否可信任，比如User.Roles不能由前端传入
    * 自动生成的参数里不支持非模型字段，除非自定义mutation.resolver
    * 设计逻辑的有点怪（针对字段进行设计，比如当放开User表name字段的update时，要针对这个字段做什么校验，name是否重复、权限控制等，有点像React hook里把restful api功能打散成几个小点，然后再复用里面的校验等逻辑，但万一更新一个字段有不同的校验逻辑，这样就会出问题了）
* 总结能使用mutation场景
  * 简单场景
    * 任何业务场景下，字段的校验和权限逻辑都是一样/复用的
    * 不需考虑用户输入数据安全性的内部项目
  * 限制放开可新增、更新的方法和字段
