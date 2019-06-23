import mybatisMapper from "mybatis-mapper";
import path from "path";

const NAMESPACE = "DefaultMapper";
console.log(process.cwd());
// const _path = path.resolve(process.cwd(), `mapper/${NAMESPACE}.xml`);
const MAPPER_URL = `mapper/${NAMESPACE}.xml`;
mybatisMapper.createMapper([MAPPER_URL]);

const format = {
  language: "sql",
  indent: " "
};

export const selectLogHistory = param => {
  const QUERY_ID = "selectLogHistory";
  const sql = mybatisMapper.getStatement(NAMESPACE, QUERY_ID, param, format);

  console.log(sql);
  return sql;
};
