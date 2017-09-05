/* @flow */

import * as nodeOps from 'web/runtime/node-ops' // 节点操作函数
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index' // 基础模块，包括指令操作（创建、更新和销毁指令）和ref模块
import platformModules from 'web/runtime/modules/index' // 浏览器相关模块：dom元素属性操作、dom元素className操作、dom元素事件操作、浏览器平台props操作、style和过渡效果操作

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

export const patch: Function = createPatchFunction({ nodeOps, modules })
