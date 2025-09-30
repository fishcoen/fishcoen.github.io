---
layout: post
title: PlantUML 图表示例
date: 2025-09-24 10:00:00 +0800
categories: [数学, 示例]
tags: [PlantUML, UML, 图表]
---

# PlantUML 图表示例

这篇文章展示了如何在 Jekyll Chirpy 主题中使用 PlantUML 绘制各种 UML 图表。

## 时序图 (Sequence Diagram)

```plantuml
@startuml
Alice -> Bob: Hello Bob, how are you?
Bob --> Alice: Fine, thank you!
Alice -> Bob: See you later!
@enduml
```

## 用例图 (Use Case Diagram)

```plantuml
@startuml
left to right direction
actor "用户" as User
rectangle "系统" {
  usecase "登录" as Login
  usecase "注册" as Register
  usecase "查看资料" as ViewProfile
  usecase "修改资料" as EditProfile
}
User --> Login
User --> Register
User --> ViewProfile
User --> EditProfile
@enduml
```

## 类图 (Class Diagram)

```plantuml
@startuml
class Animal {
  + name: String
  + age: int
  + eat()
  + sleep()
}

class Dog {
  + breed: String
  + bark()
}

class Cat {
  + color: String
  + meow()
}

Animal <|-- Dog
Animal <|-- Cat
@enduml
```

## 活动图 (Activity Diagram)

```plantuml
@startuml
start
:用户访问网站;
:输入用户名和密码;
:验证用户信息;
if (验证成功?) then (是)
  :登录成功;
  :跳转到主页;
else (否)
  :显示错误信息;
  :返回登录页面;
endif
stop
@enduml
```

## 组件图 (Component Diagram)

```plantuml
@startuml
package "前端" {
  [React 组件]
  [Vue 组件]
}

package "后端" {
  [API 服务]
  [数据库]
}

package "外部服务" {
  [第三方 API]
  [CDN]
}

[React 组件] --> [API 服务]
[Vue 组件] --> [API 服务]
[API 服务] --> [数据库]
[API 服务] --> [第三方 API]
[React 组件] --> [CDN]
[Vue 组件] --> [CDN]
@enduml
```

## 部署图 (Deployment Diagram)

```plantuml
@startuml
node "Web 服务器" {
  artifact "Nginx"
  artifact "Node.js 应用"
}

node "数据库服务器" {
  artifact "MySQL"
  artifact "Redis"
}

node "CDN" {
  artifact "静态资源"
}

"Web 服务器" --> "数据库服务器"
"Web 服务器" --> "CDN"
@enduml
```

## 状态图 (State Diagram)

```plantuml
@startuml
[*] --> 待处理
待处理 --> 进行中 : 开始处理
进行中 --> 已完成 : 处理完成
进行中 --> 已取消 : 取消处理
已完成 --> [*]
已取消 --> [*]
@enduml
```

## 总结

PlantUML 支持多种 UML 图表类型：

- ✅ **时序图** - 展示对象间的交互
- ✅ **用例图** - 展示系统功能
- ✅ **类图** - 展示类的关系
- ✅ **活动图** - 展示业务流程
- ✅ **组件图** - 展示系统架构
- ✅ **部署图** - 展示系统部署
- ✅ **状态图** - 展示状态转换

使用 PlantUML 可以创建专业的 UML 图表，非常适合技术文档和系统设计。
