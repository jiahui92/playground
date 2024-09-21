import { execSync } from 'child_process';
import { getNexusSchema } from 'src/generated';

const entities_path = './src/generated/nexus';

// 删除旧文件 rm -rf
const del = `rimraf ${entities_path}`;

// 生成entities
// --noConfig true 不自动生成ormconfig,tsconfig
// --cp camel 表示将数据库中的字段比如create_at转换为createAt
const generate = `npx pal generate -c ./prisma/pal.js`;

// prettier格式化生成好的代码
const prettier = `npx prettier --write ${entities_path}`;

execSync(`${del} && ${generate}`);
execSync(`${prettier}`, { encoding: 'utf-8' });

// 生成src/generated/nexus-typing.ts等文件
getNexusSchema(true);
