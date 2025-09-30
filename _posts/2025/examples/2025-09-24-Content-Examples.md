---
layout: post
title: 内容嵌入示例
date: 2025-09-24 10:00:00 +0800
categories: [数学, 示例]
tags: [图片, 数学公式, UML图表]
---

# 内容嵌入示例

这篇文章展示了如何在 Jekyll Chirpy 主题中嵌入各种内容。

## 图片支持

### 本地图片
![示例图片](/assets/img/favicon.ico)

### 网络图片
![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

## 数学公式

### 行内公式
这是一个行内公式：$E = mc^2$，其中 $E$ 是能量，$m$ 是质量，$c$ 是光速。

### 块级公式
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
\begin{align}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &= \frac{4\pi}{c}\vec{\mathbf{j}} \\
\nabla \cdot \vec{\mathbf{E}} &= 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} &= \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} &= 0
\end{align}
$$

## UML 图表

### Mermaid 流程图
```mermaid
graph TD
    A[开始] --> B{判断条件}
    B -->|是| C[执行操作A]
    B -->|否| D[执行操作B]
    C --> E[结束]
    D --> E
```

### Mermaid 时序图
```mermaid
sequenceDiagram
    participant A as 用户
    participant B as 系统
    participant C as 数据库
    
    A->>B: 发送请求
    B->>C: 查询数据
    C-->>B: 返回结果
    B-->>A: 响应数据
```

### Mermaid 类图
```mermaid
classDiagram
    class Animal {
        +String name
        +int age
        +eat()
        +sleep()
    }
    class Dog {
        +bark()
    }
    class Cat {
        +meow()
    }
    
    Animal <|-- Dog
    Animal <|-- Cat
```

## 总结

Jekyll Chirpy 主题支持：
- ✅ 图片嵌入（本地和网络）
- ✅ 数学公式（MathJax）
- ✅ UML 图表（Mermaid）
- ✅ 代码高亮
- ✅ 表格和列表
