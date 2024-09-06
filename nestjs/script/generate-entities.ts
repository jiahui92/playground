import { execSync } from 'child_process';
import * as dotenv from 'dotenv';

// 设置.env配置
dotenv.config();

const entities_path = './src/entities';

// 删除旧文件 rm -rf
const del = `rimraf entities_path`;

// 生成entities
// --noConfig true 不自动生成ormconfig,tsconfig
// --cp camel 表示将数据库中的字段比如create_at转换为createAt
const generate = `npx typeorm-model-generator -h ${process.env.DB_HOST} -d ${process.env.DB_DATABASE} -u ${process.env.DB_USER} -x ${process.env.DB_PASSWORD} -e mysql --output ${entities_path} --noConfig true --cp camel`;

// prettier格式化生成好的代码
const prettier = `npx prettier --write ${entities_path}`;

execSync(`${del} && ${generate} && ${prettier}`, { encoding: 'utf-8' });
