import { Router } from "./lib/alias-router/index";

// 创建路由实例
const router = new Router();

// 注册路由
router.register({
  path: "/user", // 虚拟路由
  route: "/pages/user/index", // 真实路由
});

export { router };
