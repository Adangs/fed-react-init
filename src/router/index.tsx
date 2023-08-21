import { createBrowserRouter } from 'react-router-dom';
import ConstantRoutes from './constant'
import sortRouter from './sort'

interface Modules {
  [propName: string]: never
}

const files = import.meta.glob('./modules/*.tsx', { eager: true })
const modulesRouter = Object.keys(files).reduce((modules: Modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
  const value: never = files[modulePath]
  modules[moduleName] = value.default
  return modules
}, {})

// 路由左侧菜单排序根据sort.js文件配置来
export const sortedRoutes = []
sortRouter.forEach((item) => {
  if (modulesRouter[item]) {
    sortedRoutes.push(...modulesRouter[item])
  }
})

// console.log(123, sortedRoutes)

const router = createBrowserRouter([
  ...ConstantRoutes,
  ...sortedRoutes
]);

export default router
